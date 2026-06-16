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
        <p className="bg-zinc-50 p-3 rounded-lg font-light">
          <span className="font-semibold text-[33px]">
            {records.totalApplications}{" "}
          </span>{" "}
          <br />
          Applied
        </p>
        <p className="bg-zinc-50 p-3 rounded-lg font-light">
          <span className="font-semibold text-[33px]">{records.rejected} </span>{" "}
          <br />
          Rejected
        </p>
        <p className="bg-zinc-50 p-3 rounded-lg font-light">
          <span className="font-semibold text-[33px]">
            {records.interviews}{" "}
          </span>{" "}
          <br />
          Interviews
        </p>
        <p className="bg-zinc-50 p-3 rounded-lg font-light">
          <span className="font-semibold text-[33px]">{records.offers} </span>{" "}
          <br />
          Offered
        </p>
      </div>
      <p
        onClick={() => router.push("/applications")}
        className="underline cursor-pointer"
      >
        View All Applications
      </p>
    </div>
  );
};

export default ApplicationRecords;
