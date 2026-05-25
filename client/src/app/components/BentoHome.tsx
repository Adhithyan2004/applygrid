import { ApplicationStats } from "./BentoComponents/ApplicationStats";
import { GraphStats } from "./BentoComponents/GraphStats";
import { RecentActivity } from "./BentoComponents/RecentActivity";
import { RecentApplications } from "./BentoComponents/RecentApplications";

const BentoHome = () => {
  return (
    <div className="my-6 grid grid-cols-12 grid-rows-12 w-full gap-5">
      <div className="bg-zinc-300 col-span-4 row-span-6 rounded-xl py-5.5 px-8.25">
        <ApplicationStats />
      </div>
      <div className="bg-zinc-300 col-span-8 row-span-6 rounded-xl py-5.5 px-8.25">
        <GraphStats />
      </div>
      <div className="bg-zinc-300 col-span-6 row-span-6 rounded-xl py-5.5 px-8.25">
        <RecentApplications />
      </div>
      <div className="bg-zinc-300 col-span-6 row-span-6 rounded-xl py-5.5 px-8.25">
        <RecentActivity />
      </div>
    </div>
  );
};

export default BentoHome;
