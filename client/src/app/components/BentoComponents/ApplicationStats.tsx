import { ApplicationStatsData } from "@/app/types/types";

type ApplicationStatsProps = {
  stats: ApplicationStatsData;
};

export const ApplicationStats = ({ stats }: ApplicationStatsProps) => {
  return (
    <div className="  font-sora flex flex-col justify-between h-full gap-3">
      <div>
        <div>
          <h2 className="text-[42px] font-semibold">
            {stats.totalApplications}
          </h2>
          <p className="text-[28px] -mt-1.25">Applications</p>
        </div>
        <div>
          <h2 className="text-[42px] font-semibold">{stats.interviews}</h2>
          <p className="text-[28px] -mt-1.25">Interviews</p>
        </div>
      </div>
      <div className="flex justify-between mt-3">
        <p className="bg-zinc-50 p-3 pr-6 rounded-lg">
          Success Rate <br />
          <span className="font-semibold text-[22px]">
            {stats.successRate}%
          </span>
        </p>
        <p className="bg-zinc-50 p-3 pr-6 rounded-lg">
          Rejection Rate <br />
          <span className="font-semibold text-[22px]">
            {stats.rejectionRate}%
          </span>
        </p>
      </div>
    </div>
  );
};
