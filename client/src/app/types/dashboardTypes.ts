import { Application } from "./types";

export interface DashboardData {
  overview: DasboardOverview;
  metrics: DasboardMetrics;
  recentApplications: RecentApplication[];
  recentActivity: RecentActivityItem[];
  streak: number;
  bestStreak: number;
  topRoles: TopAppliedRole[];
}

interface DasboardOverview {
  totalApplications: number;
  applied: number;
  interviews: number;
  offers: number;
  rejected: number;
  ghosted: number;
}

interface DasboardMetrics {
  successRate: number;
  rejectionRate: number;
}

type RecentApplication = Pick<
  Application,
  | "id"
  | "companyName"
  | "role"
  | "currentStatus"
  | "experienceLevel"
  | "appliedDate"
>;

interface RecentActivityItem {
  id: string;
  status: string;
  changedAt: string;

  application: {
    companyName: string;
  };
}

interface TopAppliedRole {
  role: string;
  count: number;
  percentage: number;
}
