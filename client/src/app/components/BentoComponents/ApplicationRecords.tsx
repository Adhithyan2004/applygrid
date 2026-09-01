"use client";

import { ApplicationRecordsData } from "@/app/types/types";
import { useRouter } from "next/navigation";

type ApplicationRecordsProps = {
  records: ApplicationRecordsData;
};

const ApplicationRecords = ({ records }: ApplicationRecordsProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-between sm:gap-5 gap-4 h-full">
      <div className="lg:text-[25px] text-[18px] font-sora md:grid md:grid-cols-2 lg:flex xl:grid xl:grid-cols-2 flex flex-col md:gap-x-4 md:gap-y-4 gap-y-2">
        <p className="bg-[#D9F4FF] border text-[#056086] flex items-center gap-2 xl:flex-col xl:items-start xl:gap-0 border-[#056086] p-3 rounded-lg leading-tight">
          <span className="font-semibold xl:text-[36px] md:text-xl lg:text-2xl sm:text-lg">
            {records.totalApplications}{" "}
          </span>{" "}
          Applied
        </p>
        <p className="bg-[#FFD8D8] text-[#B70000] border flex items-center gap-2 xl:flex-col xl:items-start xl:gap-0 border-[#b70000] p-3 rounded-lg leading-tight">
          <span className="font-semibold xl:text-[36px] md:text-xl lg:text-2xl sm:text-lg">
            {records.rejected}{" "}
          </span>{" "}
          Rejected
        </p>
        <p className="bg-[#FFF3D0] p-3 text-[#936E00] flex items-center gap-2 xl:flex-col xl:items-start xl:gap-0 rounded-lg border border-[#936e00] leading-tight">
          <span className="font-semibold xl:text-[36px] md:text-xl lg:text-2xl sm:text-lg">
            {records.interviews}{" "}
          </span>{" "}
          Interviews
        </p>
        <p className="bg-[#D7FFDE] p-3 text-[#008738] flex items-center gap-2 xl:flex-col xl:items-start xl:gap-0 rounded-lg border border-[#008738] leading-tight">
          <span className="font-semibold xl:text-[33px] md:text-xl lg:text-2xl sm:text-lg">
            {records.offers}{" "}
          </span>{" "}
          Offered
        </p>
      </div>
      <p
        onClick={() => router.push("/applications")}
        className="cursor-pointer font-semibold font-sora text-[12px] sm:text-base text-primary"
      >
        View All Applications
      </p>
    </div>
  );
};

export default ApplicationRecords;
