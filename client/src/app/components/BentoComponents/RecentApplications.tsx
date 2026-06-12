"use client";

import { useRouter } from "next/navigation";
export const RecentApplications = () => {
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
          <tr>
            <td className="py-2">Oracle</td>
            <td>Frontend</td>
            <td>Offer</td>
            <td>Intern</td>
          </tr>

          <tr>
            <td className="py-2">Amazon</td>
            <td>Backend</td>
            <td>Ghosted</td>
            <td>Junior</td>
          </tr>
          <tr>
            <td className="py-2">Amazon</td>
            <td>Backend</td>
            <td>Ghosted</td>
            <td>Junior</td>
          </tr>
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
