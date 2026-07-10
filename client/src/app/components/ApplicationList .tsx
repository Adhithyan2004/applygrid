"use client";

import { Application } from "../types/types";
import ApplicationCard from "./ApplicationCard";

type Props = {
  applications: Application[];
  onEdit: (application: Application) => void;
};

export const ApplicationList = ({ applications, onEdit }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-6 mt-6">
      {applications.map((application) => (
        <ApplicationCard
          key={application.id}
          application={application}
          onEdit={onEdit}
        />
      ))}

      {applications.length === 0 && (
        <p className="col-span-2 py-10 text-center text-zinc-500">
          No applications found.
        </p>
      )}
    </div>
  );
};
