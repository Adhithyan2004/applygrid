"use client";

import ApplicationRecords from "./BentoComponents/ApplicationRecords";
import { ApplicationStats } from "./BentoComponents/ApplicationStats";
import { ApplicationStreak } from "./BentoComponents/ApplicationStreak";
import { RecentActivity } from "./BentoComponents/RecentActivity";
import { RecentApplications } from "./BentoComponents/RecentApplications";
import { useDashboard } from "../hooks/useDashboard";

const BentoHome = () => {
  const { data, isLoading } = useDashboard();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="mt-10 mb-6 grid grid-cols-12 grid-rows-12 w-full gap-6">
      <div className="bg-zinc-300 col-span-4 row-span-6 rounded-xl py-5.5 px-8.25">
        <ApplicationStats
          stats={{
            totalApplications: data.overview.totalApplications,
            interviews: data.overview.interviews,
            successRate: data.metrics.successRate,
            rejectionRate: data.metrics.rejectionRate,
          }}
        />
      </div>
      <div className="bg-zinc-300 col-span-4 row-span-6 rounded-xl pt-8 pb-5.5 px-6">
        <ApplicationRecords
          records={{
            totalApplications: data.overview.totalApplications,
            rejected: data.overview.rejected,
            interviews: data.overview.interviews,
            offers: data.overview.offers,
            ghosted: data.overview.ghosted,
          }}
        />
      </div>
      <div className="bg-zinc-300 col-span-4 row-span-6 rounded-xl py-5.5 px-8.25">
        <ApplicationStreak />
      </div>
      <div className="bg-zinc-300 col-span-6 row-span-6 rounded-xl py-5.5 px-8.25">
        <RecentActivity activities={data.recentActivity} />
      </div>
      <div className="bg-zinc-300 col-span-6 row-span-6 rounded-xl py-5.5 px-8.25">
        <RecentApplications />
      </div>
    </div>
  );
};

export default BentoHome;
