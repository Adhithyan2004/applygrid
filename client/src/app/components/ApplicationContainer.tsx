"use client";

import SearchApplication from "./SearchApplication";
import { LayersPlus } from "lucide-react";
import { ApplicationList } from "./ApplicationList ";
import { useState } from "react";
import { AddApplicationModal } from "./AddApplicationModal";
import { Application } from "../types/types";
import { FilterPill } from "./FilterPill";
import { STATUS_FILTERS } from "../lib/activity";
import { useApplicaitons } from "../hooks/useApplications";

export const ApplicationContainer = () => {
  const { data: application, isLoading } = useApplicaitons();
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState("ALL");
  const [selectApplication, setSelectedApplication] =
    useState<Application | null>(null);

  const filteredApplications =
    application?.filter((application) => {
      const matchesSearch = [application.companyName, application.role]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        status === "ALL" || application.currentStatus === status;

      return matchesSearch && matchesStatus;
    }) ?? [];

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center">
        <SearchApplication value={search} onChange={setSearch} />
        <LayersPlus
          size={26}
          onClick={() => {
            setSelectedApplication(null);
            setIsModalOpen(true);
          }}
          className="text-[#0020A2] cursor-pointer transition duration-300 ease-in-out hover:scale-110"
        />
        <AddApplicationModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedApplication(null);
          }}
          application={selectApplication}
          mode={selectApplication ? "edit" : "create"}
        />
      </div>
      <h1 className="font-sora text-[22px] font-semibold my-5 text-[#0020A2]">
        All Applications
      </h1>
      <div className="flex gap-2 mt-5">
        {STATUS_FILTERS.map((filter) => (
          <FilterPill
            key={filter.value}
            label={filter.label}
            value={filter.value}
            activeClass={filter.activeClass}
            selected={status}
            onClick={setStatus}
          />
        ))}
      </div>
      <div>
        <ApplicationList
          applications={filteredApplications}
          onEdit={(application) => {
            setSelectedApplication(application);
            setIsModalOpen(true);
          }}
        />
        {!isLoading && (
          <p className="mt-6 text-sm text-zinc-500">
            Total Applications: {application?.length ?? 0}
          </p>
        )}
      </div>
    </div>
  );
};
