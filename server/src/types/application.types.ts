import { ApplicationStatus, ExperienceLevel } from "@prisma/client";

export interface ApplicationBody {
  companyName: string;
  role: string;
  experienceLevel: ExperienceLevel;
  location: string;
  salary: number;
  note: string;
  currentStatus: ApplicationStatus;
}

export interface UpdateApplicationStatusHistort {
  status: ApplicationStatus;
  note?: string;
}
