import ApplicationRecords from "./BentoComponents/ApplicationRecords";
import { ApplicationStats } from "./BentoComponents/ApplicationStats";
import { ApplicationStreak } from "./BentoComponents/ApplicationStreak";
import { RecentActivity } from "./BentoComponents/RecentActivity";
import { RecentApplications } from "./BentoComponents/RecentApplications";

const BentoHome = () => {
  return (
    <div className="mt-10 mb-6 grid grid-cols-12 grid-rows-12 w-full gap-5">
      <div className="bg-zinc-300 col-span-4 row-span-6 rounded-xl py-5.5 px-8.25">
        <ApplicationStats />
      </div>
      <div className="bg-zinc-300 col-span-4 row-span-6 rounded-xl pt-8 pb-5.5 px-6">
        <ApplicationRecords />
      </div>
      <div className="bg-zinc-300 col-span-4 row-span-6 rounded-xl py-5.5 px-8.25">
        <ApplicationStreak />
      </div>
      <div className="bg-zinc-300 col-span-6 row-span-6 rounded-xl py-5.5 px-8.25">
        <RecentActivity />
      </div>
      <div className="bg-zinc-300 col-span-6 row-span-6 rounded-xl py-5.5 px-8.25">
        <RecentApplications />
      </div>
    </div>
  );
};

export default BentoHome;
