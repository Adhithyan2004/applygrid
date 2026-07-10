"use client";

import { X } from "lucide-react";
import { useCreateApplication } from "../hooks/useCreateApplication";
import { useState, useEffect } from "react";
import { Application } from "../types/types";
import { useUpdateApplication } from "../hooks/useUpdateApplication";
import { useRouter } from "next/navigation";
import { RoleSelector } from "./ModalComponents/RoleSelector";
import { StatusSelect } from "./ModalComponents/StatusSelect";
import { ExperienceSelect } from "./ModalComponents/ExperienceSelect";
import { AppliedSourceSelect } from "./ModalComponents/AppliedSourceSelect";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  application: Application | null;
  mode: "create" | "edit";
};

export const AddApplicationModal = ({
  isOpen,
  onClose,
  application,
  mode,
}: Props) => {
  const createApplicationMutation = useCreateApplication();
  const updateApplicationMutation = useUpdateApplication();
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("INTERN");
  const [currentStatus, setCurrentStatus] = useState("APPLIED");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState(0);
  const [note, setNote] = useState("");
  const [appliedDate, setAppliedDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [appliedSource, setAppliedSource] = useState("LINKEDIN");
  const router = useRouter();

  const resetForm = () => {
    setCompanyName("");
    setRole("");
    setExperienceLevel("INTERN");
    setCurrentStatus("APPLIED");
    setLocation("");
    setSalary(0);
    setNote("");
    setAppliedDate(new Date().toISOString().split("T")[0]);
    setAppliedSource("LINKEDIN");
  };

  useEffect(() => {
    if (mode === "create") {
      resetForm();
    }
  }, [mode]);

  useEffect(() => {
    if (mode === "edit" && application) {
      setCompanyName(application.companyName);
      setRole(application.role);
      setExperienceLevel(application.experienceLevel ?? "");
      setCurrentStatus(application.currentStatus);
      setLocation(application.location ?? "");
      setSalary(Number(application.salary));
      setNote(application.note ?? "");
      setAppliedDate(
        new Date(application.appliedDate).toISOString().split("T")[0],
      );
      setAppliedSource(application.appliedSource ?? "LINKEDIN");
    }
  }, [application, mode]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      companyName,
      role,
      experienceLevel,
      currentStatus,
      appliedDate,
      location,
      salary,
      note,
      appliedSource,
    };

    if (mode === "create") {
      createApplicationMutation.mutate(payload, {
        onSuccess: () => {
          onClose();
          router.push("/applications");
        },
      });
    } else {
      updateApplicationMutation.mutate(
        {
          id: application!.id,
          data: payload,
        },
        {
          onSuccess: () => {
            onClose();
          },
        },
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center  justify-center bg-black/40">
      <div className="w-full max-w-3xl h-[88vh] rounded-2xl bg-white flex flex-col p-8 shadow-xl">
        <div className="mb-6 shrink-0 flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold font-sora text-[#0020A2]">
              {mode === "create" ? "Add Application" : "Edit Application"}
            </h2>
            <p className="w-md font-light font-sora">
              {mode === "create"
                ? "Add a job application to monitor its progress from application to offer."
                : "Modify application information and track the latest status changes."}
            </p>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-zinc-200 p-1 rounded-lg"
          >
            <X />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 font-sora"
          >
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-[#0020A2]">
                Company Name <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Company Name"
                className="w-full max-w-sm rounded-lg border p-2"
                required
              />
            </div>

            <div className="flex flex-col gap-1 ">
              <label className="font-semibold text-[#0020A2]">
                Role <span className="text-red-500 ml-1">*</span>
              </label>
              <RoleSelector value={role} onChange={setRole} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-[#0020A2]">
                Applied At <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="date"
                max={new Date().toISOString().split("T")[0]}
                value={appliedDate}
                onChange={(e) => setAppliedDate(e.target.value)}
                className="w-full rounded-lg border p-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-[#0020A2]">
                Status <span className="text-red-500 ml-1">*</span>
              </label>
              <StatusSelect value={currentStatus} onChange={setCurrentStatus} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-[#0020A2]">
                Salary <span className="font-light">(In Lakhs per annum)</span>
              </label>
              <input
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                placeholder="Salary"
                className="w-full max-w-sm rounded-lg border p-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-[#0020A2]">
                Experience Level
              </label>
              <ExperienceSelect
                value={experienceLevel}
                onChange={setExperienceLevel}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-[#0020A2]">Location</label>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                className="w-full max-w-sm rounded-lg border p-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-[#0020A2]">
                Applied Source
              </label>
              <AppliedSourceSelect
                value={appliedSource}
                onChange={setAppliedSource}
              />
            </div>
            <div className="flex flex-col md:col-span-2 gap-1">
              <label className="font-semibold text-[#0020A2]">Notes</label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Notes (optional)"
                className="w-full rounded-lg border p-2"
              />
            </div>
            <div className="flex shrink-0 gap-3">
              <button
                type="submit"
                disabled={
                  createApplicationMutation.isPending ||
                  updateApplicationMutation.isPending
                }
                className="rounded-lg bg-[#0020A2] px-4 py-2 text-white shadow-mini"
              >
                {mode === "create" ? "Add Application" : "Update Applciaiton"}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border px-4 py-2"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
