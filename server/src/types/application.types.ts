import { ApplicationStatus, ExperienceLevel } from "@prisma/client";

export interface ApplicationBody {
  companyName: string;
  role: string;
  expLvl: ExperienceLevel;
  location: string;
  salary: number;
  note: string;
}

export interface UpdateApplicationStatusHistort {
  status: ApplicationStatus;
  note?: string;
}
