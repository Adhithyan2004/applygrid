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
    role: string;
  };
};

export type RecentApplicationsItems = {
  id: string;
  companyName: string;
  role: string;
  currentStatus: string;
  experienceLevel: string;
  appliedDate: string;
};

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
}
export interface CreateApplication {
  companyName: string;
  role: string;
  currentStatus: string;
  experienceLevel: string | null;
  location: string | null;
  salary: number | null;
  note: string | null;
}

export interface UpdateApplicationPayload {
  companyName?: string;
  role?: string;
  currentStatus?: string;
  experienceLevel?: string;
  location?: string;
  salary?: number;
  note?: string;
}
