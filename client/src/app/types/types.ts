export type ApplicationStatsData = {
  totalApplications: number;
  interviews: number;
  successRate: number;
  rejectionRate: number;
};

export type ApplicationRecordsData = {
  totalApplications: number;
  interviews: number;
  offers: number;
  rejected: number;
  ghosted: number;
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
