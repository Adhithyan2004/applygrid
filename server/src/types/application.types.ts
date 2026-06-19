import { ApplicationStatus, ExperienceLevel } from "@prisma/client";

export interface ApplicationBody {
  companyName: string;
  role: string;
  experienceLevel: ExperienceLevel;
  location: string;
  appliedDate: Date;
  salary: number;
  note: string;
  currentStatus: ApplicationStatus;
}

export type CreateApplicationInput = ApplicationBody & {
  userId: string;
};

export interface UpdateApplicationStatusHistort {
  status: ApplicationStatus;
  note?: string;
}
