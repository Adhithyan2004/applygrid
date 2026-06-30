"use client";

import { Trash, SquarePen, ChevronDown, ChevronUp } from "lucide-react";
import { Fragment, useState } from "react";
import { useApplicaitons } from "../hooks/useApplications";
import { formatDate, formatSalary } from "../lib/formatters";
import { useDeleteApplication } from "../hooks/useDeleteApplication";
import { getStatusStyles } from "../lib/statusByColor";
import { Application } from "../types/types";

type Props = {
  onEdit: (application: Application) => void;
  search: string;
  status: string;
};

export const TableApplications = ({ onEdit, search, status }: Props) => {
  const deleteMutaion = useDeleteApplication();
  const [expandRow, setExpandRow] = useState<string | null>(null);
  const { data: applications, isLoading } = useApplicaitons();
  if (isLoading) {
    return <p>Loading ....</p>;
  }

  const filteredApplications =
    applications?.filter((application) => {
      const matchesSearch = [application.companyName, application.role]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        status === "ALL" || application.currentStatus === status;

      return matchesSearch && matchesStatus;
    }) ?? [];

  const toggleRow = (id: string) => {
    setExpandRow(expandRow === id ? null : id);
  };

  return (
    <div className="overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="font-sora text-[#0020A2]">
            <th className="px-4 py-3 text-left">S.No</th>
            <th className="px-4 py-3 text-left">Company</th>
            <th className="px-4 py-3 text-left">Role</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Experience</th>
            <th className="px-4 py-3 text-left">Date</th>
            {/* <th className="w-12"></th> */}
          </tr>
        </thead>

        <tbody>
          {filteredApplications?.map((application, index) => (
            <Fragment key={application.id}>
              <tr
                className={expandRow === application.id ? "bg-[#f1f4ff] " : ""}
              >
                <td className="px-4 py-2.5 rounded-tl-lg font-medium text-zinc-500">
                  {String(index + 1)}
                </td>
                <td className="px-4 py-2.5 ">{application.companyName}</td>
                <td className="px-4 py-3.5">{application.role}</td>
                <td className="px-4 py-3.5">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyles(
                      application.currentStatus,
                    )}`}
                  >
                    {application.currentStatus}
                  </span>
                </td>
                <td className="px-4 py-3.5">{application.experienceLevel}</td>
                <td className="px-4 py-3.5 ">
                  {formatDate(application.appliedDate)}
                </td>
                <td className="rounded-tr-lg">
                  <button
                    className="cursor-pointer"
                    onClick={() => toggleRow(application.id)}
                  >
                    {expandRow === application.id ? (
                      <ChevronUp
                        size={20}
                        className="hover:bg-blue-200 rounded-md"
                      />
                    ) : (
                      <ChevronDown
                        size={20}
                        className="hover:bg-blue-200 rounded-md"
                      />
                    )}
                  </button>
                </td>
              </tr>

              {expandRow === application.id && (
                <tr>
                  <td colSpan={7} className="bg-[#f1f4ff] rounded-b-lg">
                    <div className="p-4">
                      <div className="flex flex-col gap-10">
                        <div className="space-y-2.5">
                          <p className="font-sora">
                            <strong className="text-[#0020A2]">
                              Applied :
                            </strong>{" "}
                            {formatDate(application.appliedDate)}
                          </p>
                          <p className="font-sora">
                            <strong className="text-[#0020A2]">
                              Salary <span className="font-medium">(LPA)</span>{" "}
                              :
                            </strong>{" "}
                            {formatSalary(application.salary)}
                          </p>
                          <p className="font-sora">
                            <strong className="text-[#0020A2]">
                              Experience :
                            </strong>{" "}
                            {application.experienceLevel}
                          </p>
                          <p className="font-sora">
                            <strong className="text-[#0020A2]">
                              Location :
                            </strong>{" "}
                            {application.location}
                          </p>
                        </div>
                        <p className="font-sora">
                          <strong className="text-[#0020A2]">
                            Notes:
                            <br />{" "}
                          </strong>{" "}
                          {application.note}
                        </p>
                        <div className="flex gap-4">
                          <button
                            onClick={() => deleteMutaion.mutate(application.id)}
                            className="px-4 py-2 flex items-center gap-2 bg-[#FFD8D9] text-[#b70000] border rounded-lg cursor-pointer"
                          >
                            <Trash size={20} /> Delete
                          </button>
                          <button
                            onClick={() => onEdit(application)}
                            className="px-4 py-2 flex text-[#0020A2] items-center gap-2 border rounded-lg cursor-pointer"
                          >
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
          {filteredApplications?.length === 0 && (
            <tr>
              <td colSpan={6} className="py-8 text-center text-zinc-500">
                No applications found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
