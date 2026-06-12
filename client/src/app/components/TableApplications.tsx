"use client";

import { MoreVertical, Trash, SquarePen } from "lucide-react";
import { Fragment, useState } from "react";
import { useApplicaitons } from "../hooks/useApplications";
import { formatDate } from "../lib/formatters";
import { useDeleteApplication } from "../hooks/useDeleteApplication";

export const TableApplications = () => {
  const deleteMutaion = useDeleteApplication();
  const [expandRow, setExpandRow] = useState<string | null>(null);
  const { data: applications, isLoading } = useApplicaitons();
  if (isLoading) {
    return <p>Loading ....</p>;
  }

  const toggleRow = (id: string) => {
    setExpandRow(expandRow === id ? null : id);
  };

  return (
    <div className="overflow-hidden">
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left">Company</th>
            <th className="px-4 py-3 text-left">Role</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Experience</th>
            <th className="px-4 py-3 text-left">Date</th>
            <th className="w-12"></th>
          </tr>
        </thead>

        <tbody>
          {applications?.map((application) => (
            <Fragment key={application.id}>
              <tr className={expandRow === application.id ? "bg-zinc-100" : ""}>
                <td className="px-4 py-2.5 rounded-tl-lg">
                  {application.companyName}
                </td>
                <td className="px-4 py-3.5">{application.role}</td>
                <td className="px-4 py-3.5">{application.currentStatus}</td>
                <td className="px-4 py-3.5">{application.experienceLevel}</td>
                <td className="px-4 py-3.5 ">
                  {formatDate(application.appliedDate)}
                </td>
                <td className="rounded-tr-lg">
                  <button onClick={() => toggleRow(application.id)}>
                    <MoreVertical />
                  </button>
                </td>
              </tr>

              {expandRow === application.id && (
                <tr>
                  <td colSpan={6} className="bg-zinc-100 rounded-b-lg">
                    <div className="p-4">
                      <div className="flex flex-col gap-10">
                        <div className="space-y-2.5">
                          <p className="font-sora">
                            <strong>Applied :</strong>{" "}
                            {formatDate(application.appliedDate)}
                          </p>
                          <p className="font-sora">
                            <strong>Salary :</strong> {application.salary}
                          </p>
                          <p className="font-sora">
                            <strong>Experience :</strong>{" "}
                            {application.experienceLevel}
                          </p>
                          <p className="font-sora">
                            <strong>Location :</strong> {application.location}
                          </p>
                        </div>
                        <p className="font-sora">
                          <strong>
                            Notes:
                            <br />{" "}
                          </strong>{" "}
                          {application.note}
                        </p>
                        <div className="flex gap-4">
                          <button
                            onClick={() => deleteMutaion.mutate(application.id)}
                            className="px-4 py-2 flex items-center gap-2 bg-zinc-300 rounded-lg cursor-pointer"
                          >
                            <Trash size={20} /> Delete
                          </button>
                          <button className="px-4 py-2 flex items-center gap-2 border rounded-lg cursor-pointer">
                            <SquarePen size={20} /> Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};
