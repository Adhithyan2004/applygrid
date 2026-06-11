"use client";

import { MoreVertical } from "lucide-react";
import { Fragment, useState } from "react";

const applications = [
  {
    company: "Amazon",
    role: "Frontend Developer",
    status: "Rejected",
    experience: "INTERN",
    appliedDate: "12 Aug 2026",
  },
  {
    company: "ZOHO",
    role: "Backend Developer",
    status: "Interview",
    experience: "JUNIOR",
    appliedDate: "22 Aug 2026",
  },
  {
    company: "Google",
    role: "React Developer",
    status: "Applied",
    experience: "MID",
    appliedDate: "01 Sep 2026",
  },
  {
    company: "Oracle",
    role: "Backend Developer",
    status: "Offer",
    experience: "LEAD",
    appliedDate: "06 Sep 2026",
  },
  {
    company: "VVDN",
    role: "Data Analyst",
    status: "Rejected",
    experience: "INTERN",
    appliedDate: "12 Sep 2026",
  },
  {
    company: "VVDN",
    role: "Data Analyst",
    status: "Rejected",
    experience: "INTERN",
    appliedDate: "12 Sep 2026",
  },
];

export const TableApplications = () => {
  const [expandRow, setExpandRow] = useState<string | null>(null);

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
          {applications.map((application, index) => (
            <Fragment key={index}>
              <tr>
                <td className="px-4 py-2.5">{application.company}</td>
                <td className="px-4 py-2.5">{application.role}</td>
                <td className="px-4 py-2.5">{application.status}</td>
                <td className="px-4 py-2.5">{application.experience}</td>
                <td className="px-4 py-2.5">{application.appliedDate}</td>
                <td>
                  <button onClick={() => toggleRow(application.company)}>
                    <MoreVertical />
                  </button>
                </td>
              </tr>

              {expandRow === application.company && (
                <tr>
                  <td colSpan={6}>
                    <div className="p-4 rounded-lg bg-zinc-100">
                      <h3 className="font-semibold mb-3">
                        Application Details
                      </h3>

                      <div className="space-y-2">
                        <p>
                          <strong className="font-sora">Company :</strong>{" "}
                          {application.company}
                        </p>
                        <p>
                          <strong className="font-sora">Role:</strong>{" "}
                          {application.role}
                        </p>
                        <p>
                          <strong>Status:</strong> {application.status}
                        </p>
                        <p>
                          <strong>Experience:</strong> {application.experience}
                        </p>
                        <p>
                          <strong>Applied Date:</strong>{" "}
                          {application.appliedDate}
                        </p>
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
