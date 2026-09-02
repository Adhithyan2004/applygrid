import {
  BriefcaseBusiness,
  Rocket,
  ChevronDown,
  MapPin,
  IndianRupee,
} from "lucide-react";

import { Application } from "../types/types";
import { formatDate, formatSource } from "../lib/formatters";
import { getStatusStyles } from "../lib/statusByColor";
import { getStatusAvatarStyle } from "../lib/getStatusAvatarStyle";

type Props = {
  application: Application;
  expanded: boolean;
  onToggle: () => void;
  onEdit: (application: Application) => void;
  onDelete: (id: string) => void;
};

const ApplicationCard = ({
  application,
  expanded,
  onToggle,
  onEdit,
  onDelete,
}: Props) => {
  return (
    <div className="rounded-xl shadow-card lg:p-5 p-3">
      <div className="flex justify-between">
        {/* Left */}
        <div className="flex gap-3">
          {/* Avatar */}
          <div
            className={`h-12 w-12 shrink-0 rounded-full ${getStatusAvatarStyle(
              application.currentStatus,
            )} flex items-center justify-center`}
          >
            <span className="text-[20px] font-bold text-white">
              {application.companyName.charAt(0)}
            </span>
          </div>

          {/* Content */}
          <div>
            {/* Company + Status */}
            <div className="flex items-center gap-2">
              <h2 className="xl:text-[20px] font-semibold">
                {application.companyName}
              </h2>

              <span
                className={`rounded-full px-4 py-1 md:text-sm text-[12px] font-medium ${getStatusStyles(
                  application.currentStatus,
                )}`}
              >
                {application.currentStatus}
              </span>
            </div>

            {/* Details */}
            <div className="flex flex-col xl:grid xl:grid-cols-2 gap-2 md:text-[14px] text-[12px] mt-3 text-zinc-700">
              <div className="flex  items-center gap-1">
                <MapPin size={18} className="text-primary" />
                {application.location}
              </div>

              <div className="flex items-center gap-1">
                <BriefcaseBusiness size={18} className="text-primary" />
                {application.role}
              </div>
              <div className="flex items-center  gap-1">
                <Rocket size={18} className="text-primary" />
                {application.experienceLevel}
              </div>

              <div className="flex items-center  gap-1 ">
                <IndianRupee size={18} className="text-primary" />{" "}
                {application.salary} LPA
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {application.techStack?.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-zinc-400 px-4 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-end justify-between">
          <div className="text-right">
            <p className="font-semibold md:text-[14px] text-[12px]">
              {formatDate(application.appliedDate)}
            </p>

            <p className="text-primary md:text-[14px] text-[13px]">
              {formatSource(application.appliedSource)}
            </p>
          </div>

          <button
            onClick={onToggle}
            className="rounded-lg p-2 hover:bg-zinc-200 transition"
          >
            <ChevronDown
              size={28}
              className={`transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          expanded ? "max-h-125 opacity-100 px-16 pt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-[20px] text-zinc-800">Notes</h3>

            <p className=" text-sm text-zinc-600">
              {application.note || "No notes added."}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => onEdit(application)}
              className="rounded-lg bg-primary px-4 py-2 text-white"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(application.id)}
              className="rounded-lg border border-[#B70000] px-4 py-2 text-red-500 bg-[#FFD8D9] hover:bg-red-50"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
