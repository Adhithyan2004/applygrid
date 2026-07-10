import { BriefcaseBusiness, Calendar, ChevronDown, MapPin } from "lucide-react";

import { Application } from "../types/types";
import { formatDate, formatSource } from "../lib/formatters";

type Props = {
  application: Application;
  onEdit: (application: Application) => void;
};

const ApplicationCard = ({ application, onEdit }: Props) => {
  return (
    <div className="rounded-xl bg-zinc-100 p-5">
      <div className="flex justify-between">
        {/* Left */}
        <div className="flex gap-3">
          {/* Avatar */}
          <div className="h-12 w-12 shrink-0 rounded-full bg-zinc-300 flex items-center justify-center">
            <span className="text-[20px] font-bold text-zinc-600">
              {application.companyName.charAt(0)}
            </span>
          </div>

          {/* Content */}
          <div>
            {/* Company + Status */}
            <div className="flex items-center gap-2">
              <h2 className="text-[20px] font-semibold">
                {application.companyName}
              </h2>

              <span className="rounded-full border border-zinc-400 px-4 py-1 text-sm">
                {application.currentStatus}
              </span>
            </div>

            {/* Role */}
            <div className="flex flex-col gap-2 text-[14px] mt-3 text-zinc-700">
              <div className="flex  items-center gap-1">
                <MapPin size={18} />
                {application.location}
              </div>

              <div className="flex items-center  gap-1">
                <BriefcaseBusiness size={18} />
                {application.role}
              </div>
              <div className="flex items-center  gap-1">
                <BriefcaseBusiness size={18} />
                {application.experienceLevel}
              </div>

              <div className="font-medium ">₹ {application.salary} LPA</div>
            </div>

            {/* Tech Stack */}
            {/* <div className="flex flex-wrap gap-3">
              {application.techStack?.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-zinc-400 px-4 py-1"
                >
                  {tech}
                </span>
              ))}
            </div> */}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-end justify-between">
          <div className="text-right">
            <p className="font-semibold text-[14px]">
              {formatDate(application.appliedDate)}
            </p>

            <p className="text-zinc-500 text-[14px]">
              Source : {formatSource(application.appliedSource)}
            </p>
          </div>

          <button className="rounded-lg p-2 hover:bg-zinc-200 transition">
            <ChevronDown size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
