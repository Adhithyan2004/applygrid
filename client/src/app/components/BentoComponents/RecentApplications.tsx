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
    <div className="flex flex-col justify-between h-full">
      <h1 className="font-semibold text-[22px]">Recent Applications</h1>

      <table className="w-full">
        <thead>
          <tr className="text-left text-[18px]">
            <th className="pb-3">Company</th>
            <th className="pb-3">Role</th>
            <th className="pb-3">Status</th>
            <th className="pb-3">Experience</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((application) => (
            <tr key={application.id}>
              <td className="py-2">{application.companyName}</td>

              <td>{application.role}</td>

              <td>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyles(
                    application.currentStatus,
                  )}`}
                >
                  {application.currentStatus}
                </span>
              </td>

              <td>{application.experienceLevel}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p
        onClick={() => router.push("/applications")}
        className="font-semibold cursor-pointer"
      >
        View all
      </p>
    </div>
  );
};
