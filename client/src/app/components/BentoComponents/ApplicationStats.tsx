import { ApplicationStatsData } from "@/app/types/types";

type ApplicationStatsProps = {
  stats: ApplicationStatsData;
};

export const ApplicationStats = ({ stats }: ApplicationStatsProps) => {
  return (
    <div className="font-sora flex flex-col lg:justify-between justify-evenly h-full lg:gap-3">
      <div>
        <div>
          <h2 className="xl:text-[42px] text-[32px] text-primary font-semibold">
            {stats.totalApplications}
          </h2>
          <p className="xl:text-[28px] lg:text-xl text-[18px] -mt-1.25">
            Applications
          </p>
        </div>
        <div>
          <h2 className="xl:text-[42px] text-[32px] text-primary font-semibold">
            {stats.interviews}
          </h2>
          <p className="xl:text-[28px] lg:text-xl text-[18px]  -mt-1.25">
            Interviews
          </p>
        </div>
      </div>
      <div className="lg:flex sm:flex-row flex lg:flex-col xl:flex-row gap-2 md:gap-5 lg:gap-4 lg:justify-between sm:mt-3 mt-2">
        <p className="sm:bg-[#D8FFE4] text-sm sm:border sm:border-[#00AF49] text-[#00AF49] sm:py-1 sm:px-2 lg:text-left lg:p-3 lg:pr-6 rounded-lg">
          Success Rate <br />
          <span className="font-semibold md:text-[22px]">
            {stats.successRate}%
          </span>
        </p>
        <p className="sm:bg-[#FFD8D9] text-sm sm:border sm:border-[#B70000] lg:p-3 lg:pr-6 lg:text-left sm:py-1 sm:px-2 rounded-lg text-[#B70000]">
          Rejection Rate <br />
          <span className="font-semibold md:text-[22px]">
            {stats.rejectionRate}%
          </span>
        </p>
      </div>
    </div>
  );
};
