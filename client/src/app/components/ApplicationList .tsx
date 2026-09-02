"use client";

import { useState } from "react";
import { Application } from "../types/types";
import ApplicationCard from "./ApplicationCard";

type Props = {
  applications: Application[];
  onEdit: (application: Application) => void;
  onDelete: (id: string) => void;
};

export const ApplicationList = ({ applications, onEdit, onDelete }: Props) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="lg:columns-2 lg:gap-6 mt-4">
      {applications.map((application) => (
        <div key={application.id} className="mb-6 break-inside-avoid">
          <ApplicationCard
            key={application.id}
            application={application}
            expanded={expandedId === application.id}
            onToggle={() =>
              setExpandedId(
                expandedId === application.id ? null : application.id,
              )
            }
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      ))}

      {applications.length === 0 && (
        <p className="col-span-2  text-center text-zinc-500">
          No applications found.
        </p>
      )}
    </div>
  );
};
