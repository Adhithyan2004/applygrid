"use client";

import { useRouter } from "next/navigation";
import { RecentApplicationsItems } from "@/app/types/types";
import { getStatusStyles } from "@/app/lib/statusByColor";

type Props = {
  applications: RecentApplicationsItems[];
};
export const RecentApplications = ({ applications }: Props) => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-between gap-4 h-full">
      <h1 className="font-semibold lg:text-[22px] text-[18px] text-[#28069D]">
        Recent Applications
      </h1>

      <table className="w-full rounded-lg">
        <thead>
          <tr className="text-left sm:text-[18px] lg:text-base text-[12px] text-[#28069D]">
            <th className="pb-3 py-4 px-2">Company</th>
            <th className="pb-3 py-4 px-2">Role</th>
            <th className="pb-3 py-4 px-2">Status</th>
            <th className="pb-3 py-4 px-2">Experience</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((application) => (
            <tr key={application.id} className="sm:text-[16px] text-[12px]">
              <td className="py-2 px-2">{application.companyName}</td>

              <td className="py-2 px-2">{application.role}</td>

              <td>
                <span
                  className={`px-3 py-1 rounded-full lg:text-sm font-medium ${getStatusStyles(
                    application.currentStatus,
                  )}`}
                >
                  {application.currentStatus}
                </span>
              </td>

              <td className="py-2 px-2">{application.experienceLevel}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p
        onClick={() => router.push("/applications")}
        className="font-semibold lg:text-base text-sm cursor-pointer text-[#28069D]"
      >
        View all
      </p>
    </div>
  );
};
