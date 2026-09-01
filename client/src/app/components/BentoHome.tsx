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
    <>
      <div className="lg:hidden font-sora mt-6">
        {/* Mobile streak content */}
        <h1 className="text-[22px]">
          Current Streak:{" "}
          <span className="font-semibold text-primary">{data.streak}</span>
        </h1>
        <p>
          Personal Best:{" "}
          <span className="font-semibold text-primary">{data.bestStreak}</span>
        </p>
      </div>
      <div className="mt-6 lg:mt-10 mb-6 grid grid-cols-2 lg:grid-cols-12 w-full h-fit gap-4 lg:gap-6">
        <div className="bg-white shadow-card col-span-1 lg:col-span-4 rounded-xl lg:py-5.5 py-3 xl:px-8.25 lg:px-5 px-4">
          <ApplicationStats
            stats={{
              totalApplications: data.overview.totalApplications,
              interviews: data.overview.interviews,
              successRate: data.metrics.successRate,
              rejectionRate: data.metrics.rejectionRate,
            }}
          />
        </div>
        <div className="bg-white shadow-card col-span-1 lg:col-span-4 rounded-xl lg:pt-8 lg:pb-5.5 xl:px-6 px-4 py-3">
          <ApplicationRecords
            records={{
              totalApplications: data.overview.totalApplications,
              rejected: data.overview.rejected,
              interviews: data.overview.interviews,
              offers: data.overview.offers,
            }}
          />
        </div>
        <div className="hidden lg:block bg-white shadow-card lg:col-span-4 rounded-xl py-5.5 xl:px-8.25 px-6">
          <ApplicationStreak
            streak={data.streak}
            bestStreak={data.bestStreak}
          />
        </div>
        <div className="bg-white shadow-card col-span-2 lg:col-span-6 rounded-xl lg:py-5.5 xl:px-8.25 px-4 py-3">
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
        <div className="bg-white shadow-card col-span-2 lg:col-span-6 rounded-xl lg:py-5.5 py-2 xl:px-8.25 px-4">
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
    </>
  );
};

export default BentoHome;
