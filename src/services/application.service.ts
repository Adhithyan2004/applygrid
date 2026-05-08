import { prisma } from "../lib/prisma";
import { ApplicationStatus, ExperienceLevel } from "@prisma/client";

export const createApplication = async (
  userId: string,
  companyName: string,
  role: string,
  appliedDate: Date,
) => {
  return prisma.$transaction(async (tx) => {
    const application = await tx.application.create({
      data: {
        userId,
        companyName,
        role,
        appliedDate,
        currentStatus: ApplicationStatus.APPLIED, 
        experienceLevel: ExperienceLevel.INTERN
      },
    });

    await tx.applicationStatusHistory.create({
      data: {
        applicationId: application.id,
        status: ApplicationStatus.APPLIED,
      },
    });

    return application;
  });
};

export const updateApplicationStatus = async (
  applicationId: string,
  newStatus: ApplicationStatus,
  note?: string
) => {
  return prisma.$transaction(async (tx) => {
    await tx.application.update({
      where: { id: applicationId },
      data: { currentStatus: newStatus },
    });

    const history = await tx.applicationStatusHistory.create({
      data: {
        applicationId,
        status: newStatus,
        note,
      },
    });

    return history;
  });
};


export const getAllApplicationService = async (userId:string) =>{
   const applications = await prisma.application.findMany({
      where :{
        userId : userId 
      },
   });
   return applications;
}


export const getSingleApplicationService = async(id:string,userId:string) =>{    

      const application = await prisma.application.findFirst({
        where  :{
          id : id,
          userId:userId
        }
      });
       if(!application){
            throw new Error("Application not found")
        }
        return application;
} 

export const deleteApplicationService = async(userId:string,applicationId:string) => {
    const application = await prisma.application.findFirst({
            where: {
                id: applicationId,
                userId: userId,
            },
        });
        if(!application){
            throw new Error("Application not found");
        }
    
      await prisma.applicationStatusHistory.deleteMany({
            where: {
                applicationId: applicationId
            },
        });
        
      await prisma.application.delete({where:{id:applicationId,}});
      
      return true;
}