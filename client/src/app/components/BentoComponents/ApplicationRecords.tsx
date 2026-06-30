"use client";

import { ApplicationRecordsData } from "@/app/types/types";
import { useRouter } from "next/navigation";

type ApplicationRecordsProps = {
  records: ApplicationRecordsData;
};

const ApplicationRecords = ({ records }: ApplicationRecordsProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="text-[25px] font-sora grid grid-cols-2 gap-x-4 gap-y-4">
        <p className="bg-[#D9F4FF] border border-[#056086] p-3 rounded-lg leading-tight">
          <span className="font-semibold text-[36px] text-[#056086]">
            {records.totalApplications}{" "}
          </span>{" "}
          <br />
          Applied
        </p>
        <p className="bg-[#FFD8D8] border border-[#b70000] p-3 rounded-lg leading-tight">
          <span className="font-semibold text-[36px] text-[#B70000]">
            {records.rejected}{" "}
          </span>{" "}
          <br />
          Rejected
        </p>
        <p className="bg-[#FFF3D0] p-3 rounded-lg border border-[#936e00] leading-tight">
          <span className="font-semibold text-[36px] text-[#936E00]">
            {records.interviews}{" "}
          </span>{" "}
          <br />
          Interviews
        </p>
        <p className="bg-[#D7FFDE] p-3 rounded-lg border border-[#008738] leading-tight">
          <span className="font-semibold text-[33px] text-[#008738]">
            {records.offers}{" "}
          </span>{" "}
          <br />
          Offered
        </p>
      </div>
      <p
        onClick={() => router.push("/applications")}
        className="cursor-pointer font-semibold font-sora text-[#0020A2]"
      >
        View All Applications
      </p>
    </div>
  );
};

export default ApplicationRecords;
