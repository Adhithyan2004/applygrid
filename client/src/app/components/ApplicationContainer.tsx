"use client";

import SearchApplication from "./SearchApplication";
import { LayersPlus } from "lucide-react";
import { TableApplications } from "./TableApplications";
import { useState } from "react";
import { AddApplicationModal } from "./AddApplicationModal";
import { Application } from "../types/types";
export const ApplicationContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectApplication, setSelectedApplication] =
    useState<Application | null>(null);
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center">
        <SearchApplication />
        <LayersPlus
          size={26}
          onClick={() => {
            setSelectedApplication(null);
            setIsModalOpen(true);
          }}
          className="text-zinc-500 cursor-pointer transition duration-300 ease-in-out hover:scale-110"
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
      <div>
        <h1 className="font-sora text-[22px] font-semibold my-5">
          All Applications
        </h1>
        <TableApplications
          onEdit={(application) => {
            setSelectedApplication(application);
            setIsModalOpen(true);
          }}
        />
      </div>
    </div>
  );
};
