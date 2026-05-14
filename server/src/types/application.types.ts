import { ApplicationStatus, ExperienceLevel } from "@prisma/client";

export interface ApplicationBody {
  companyName: string;
  role: string;
  expLvl: ExperienceLevel;
}

export interface UpdateApplicationStatusHistort {
  status: ApplicationStatus;
  note?: string;
}
