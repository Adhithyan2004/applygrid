export type ApplicationStatsData = {
  totalApplications: number;
  interviews: number;
  successRate: number;
  rejectionRate: number;
};

export type ApplicationStreakProps = {
  streak: number;
  bestStreak: number;
};

export type ApplicationRecordsData = {
  totalApplications: number;
  interviews: number;
  offers: number;
  rejected: number;
};

export type RecentActivityItems = {
  id: string;
  status: string;
  changedAt: string;
  application: {
    companyName: string;
  };
};

export type RecentApplicationsItems = Pick<
  Application,
  | "id"
  | "companyName"
  | "role"
  | "currentStatus"
  | "experienceLevel"
  | "appliedDate"
>;

export type TopRole = {
  role: string;
  count: number;
  percentage: number;
};

// Using interface so it can be merged and extended easily
export interface Application {
  id: string;
  companyName: string;
  role: string;
  currentStatus: string;
  experienceLevel: string | null;
  appliedDate: string;
  location: string | null;
  salary: number | null;
  note: string | null;
  appliedSource: string;
  techStack: string[];
}
export type CreateApplication = Pick<
  Application,
  | "companyName"
  | "role"
  | "currentStatus"
  | "experienceLevel"
  | "location"
  | "salary"
  | "note"
>;

export interface UpdateApplicationPayload {
  companyName?: string;
  role?: string;
  currentStatus?: string;
  experienceLevel?: string;
  location?: string;
  salary?: number;
  note?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
}

export type ForgotPasswordResponse = {
  message: string;
};

export type ResetPasswordResponse = {
  message: string;
};

export type VerifyEmailResponse = {
  message: string;
};
