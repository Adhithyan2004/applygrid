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
      <div className="text-[25px] font-sora flex flex-col gap-2">
        <p>
          <span className="font-semibold">{records.totalApplications} </span>
          Applied
        </p>
        <p>
          <span className="font-semibold">{records.rejected} </span>
          Rejected
        </p>
        <p>
          <span className="font-semibold">{records.interviews} </span>
          Interviews
        </p>
        <p>
          <span className="font-semibold">{records.offers} </span>
          Offered
        </p>
        <p>
          <span className="font-semibold">{records.ghosted} </span>
          Ghosted
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
