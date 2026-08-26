"use client";

import ApplicationRecords from "./BentoComponents/ApplicationRecords";
import { ApplicationStats } from "./BentoComponents/ApplicationStats";
import { ApplicationStreak } from "./BentoComponents/ApplicationStreak";
import { RecentActivity } from "./BentoComponents/RecentActivity";
import { RecentApplications } from "./BentoComponents/RecentApplications";
import { useDashboard } from "../hooks/useDashboard";
import { useState } from "react";
import { AddApplicationModal } from "./AddApplicationModal";

const BentoHome = () => {
  const { data, isLoading } = useDashboard();
  const [isModalOpen, setIsModalOpen] = useState(false);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!data) {
    return <p>Something went wrong.</p>;
  }
  return (
    <div className="mt-10 mb-6 grid grid-cols-12 grid-rows-12 w-full h-fit gap-6">
      <div className="bg-white shadow-card col-span-4 row-span-6 rounded-xl py-5.5 px-8.25">
        <ApplicationStats
          stats={{
            totalApplications: data.overview.totalApplications,
            interviews: data.overview.interviews,
            successRate: data.metrics.successRate,
            rejectionRate: data.metrics.rejectionRate,
          }}
        />
      </div>
      <div className="bg-white shadow-card col-span-4 row-span-6 rounded-xl pt-8 pb-5.5 px-6">
        <ApplicationRecords
          records={{
            totalApplications: data.overview.totalApplications,
            rejected: data.overview.rejected,
            interviews: data.overview.interviews,
            offers: data.overview.offers,
          }}
        />
      </div>
      <div className="bg-white shadow-card col-span-4 row-span-6 rounded-xl py-5.5 px-8.25">
        <ApplicationStreak streak={data.streak} bestStreak={data.bestStreak} />
      </div>
      <div className="bg-white shadow-card col-span-6 row-span-6 rounded-xl py-5.5 px-8.25">
        {data.recentActivity.length > 0 ? (
          <RecentActivity
            activities={data.recentActivity}
            topRoles={data.topRoles}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-sora text-primary font-semibold">
              No activity yet
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Your recent application activity will appear here.
            </p>
          </div>
        )}
      </div>
      <div className="bg-white shadow-card col-span-6 row-span-6 rounded-xl py-5.5 px-8.25">
        {data.recentApplications.length > 0 ? (
          <RecentApplications applications={data.recentApplications} />
        ) : (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <h2 className="text-xl font-semibold text-primary">
              No applications to display, yet
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Start tracking your job applications to see them here.
            </p>

            <button
              className="px-5 py-2.5 font-sora text-primary font-semibold cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              Add Application
            </button>
          </div>
        )}
      </div>
      <AddApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        application={null}
        mode="create"
      />
    </div>
  );
};

export default BentoHome;
