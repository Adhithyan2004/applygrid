import { ApplicationStatsData } from "@/app/types/types";

type ApplicationStatsProps = {
  stats: ApplicationStatsData;
};

export const ApplicationStats = ({ stats }: ApplicationStatsProps) => {
  return (
    <div className="h-full font-sora flex flex-col gap-3">
      <div>
        <h2 className="text-[40px] font-semibold">{stats.totalApplications}</h2>
        <p className="text-[28px] -mt-1.25">Applications</p>
      </div>
      <div>
        <h2 className="text-[40px] font-semibold">{stats.interviews}</h2>
        <p className="text-[28px] -mt-1.25">Interviews</p>
      </div>
      <div className="flex gap-4">
        <p>
          Success Rate :{" "}
          <span className="font-semibold text-[22px]">{stats.successRate}</span>
        </p>
        <p>
          Rejection Rate :{" "}
          <span className="font-semibold text-[22px]">
            {stats.rejectionRate}
          </span>
        </p>
      </div>
    </div>
  );
};
