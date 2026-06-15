import { prisma } from "../lib/prisma";
import { ApplicationStatus, ExperienceLevel } from "@prisma/client";
import { ApplicationBody } from "../types/application.types";
import { calculateStreak } from "../utils/streak";

export const createApplication = async (
  userId: string,
  companyName: string,
  role: string,
  experienceLevel: ExperienceLevel,
  currentStatus: ApplicationStatus,
  appliedDate: Date,
  location: string,
  salary: number,
  note: string,
) => {
  return prisma.$transaction(async (tx) => {
    const application = await tx.application.create({
      data: {
        userId,
        companyName,
        role,
        appliedDate,
        currentStatus,
        experienceLevel,
        location,
        salary,
        note,
      },
    });

    const applicationDates = await tx.application.findMany({
      where: {
        userId,
      },
      select: {
        appliedDate: true,
      },
    });

    const currentStreak = calculateStreak(
      applicationDates.map((application) => application.appliedDate),
    );

    const user = await tx.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        bestStreak: true,
      },
    });

    if (user && currentStreak > user.bestStreak) {
      await tx.user.update({
        where: {
          id: userId,
        },
        data: {
          bestStreak: currentStreak,
        },
      });
    }
    await tx.applicationStatusHistory.create({
      data: {
        applicationId: application.id,
        status: currentStatus,
      },
    });

    return application;
  });
};

export const updateApplicationStatus = async (
  applicationId: string,
  userId: string,
  newStatus: ApplicationStatus,
  note?: string,
) => {
  const application = await prisma.application.findFirst({
    where: {
      id: applicationId,
      userId,
    },
  });

  if (!application) {
    throw new Error("Application not found");
  }

  return prisma.$transaction(async (tx) => {
    await tx.application.update({
      where: {
        id: applicationId,
      },
      data: {
        currentStatus: newStatus,
      },
    });

    return tx.applicationStatusHistory.create({
      data: {
        applicationId,
        status: newStatus,
        note,
      },
    });
  });
};

export const getAllApplicationService = async (userId: string) => {
  const applications = await prisma.application.findMany({
    where: {
      userId: userId,
    },
  });
  return applications;
};

export const getSingleApplicationService = async (
  id: string,
  userId: string,
) => {
  const application = await prisma.application.findFirst({
    where: {
      id: id,
      userId: userId,
    },
  });
  if (!application) {
    throw new Error("Application not found");
  }
  return application;
};

export const deleteApplicationService = async (
  userId: string,
  applicationId: string,
) => {
  const application = await prisma.application.findFirst({
    where: {
      id: applicationId,
      userId: userId,
    },
  });
  if (!application) {
    throw new Error("Application not found");
  }

  await prisma.application.delete({ where: { id: applicationId } });

  return true;
};

export const updateApplicationService = async (
  id: string,
  userId: string,
  updateData: Partial<ApplicationBody>,
) => {
  const application = await prisma.application.findFirst({
    where: {
      id: id,
      userId: userId,
    },
  });

  if (!application) {
    throw new Error("Application not found");
  }

  const updatedApplication = await prisma.application.update({
    where: { id },
    data: updateData,
  });

  if (
    updateData.currentStatus &&
    updateData.currentStatus !== application.currentStatus
  ) {
    await prisma.applicationStatusHistory.create({
      data: {
        applicationId: id,
        status: updateData.currentStatus,
      },
    });
  }

  return updatedApplication;
};
