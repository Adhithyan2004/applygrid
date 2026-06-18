"use client";

import { X } from "lucide-react";
import { useCreateApplication } from "../hooks/useCreateApplication";
import { useState, useEffect } from "react";
import { Application } from "../types/types";
import { useUpdateApplication } from "../hooks/useUpdateApplication";
import { useRouter } from "next/navigation";
import { getStatusStyles } from "../lib/statusByColor";
import { RoleSelector } from "./RoleSelector";

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
      <div className="w-full max-w-3xl rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <div className="space-y-2 ">
            <h2 className="text-2xl font-semibold font-sora">
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

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 font-sora"
        >
          <div className="flex flex-col gap-1">
            <label className="font-semibold">Company</label>
            <input
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Company Name"
              className="w-full max-w-sm rounded-lg border p-2"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold">Role</label>
            <RoleSelector value={role} onChange={setRole} />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold">
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
            <label className="font-semibold">Experience Level</label>
            <select
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value)}
              className="w-full max-w-sm rounded-lg border p-2"
            >
              <option>INTERN</option>
              <option>ENTRY</option>
              <option>JUNIOR</option>
              <option>MID</option>
              <option>SENIOR</option>
              <option>LEAD</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold">Company</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className="w-full max-w-sm rounded-lg border p-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold">Status</label>
            <select
              value={currentStatus}
              onChange={(e) => setCurrentStatus(e.target.value)}
              className={`w-full max-w-sm rounded-lg border p-2 ${getStatusStyles(currentStatus)}`}
            >
              <option>APPLIED</option>
              <option>INTERVIEW</option>
              <option>OFFER</option>
              <option>REJECTED</option>
              <option>WITHDRAWN</option>
              <option>GHOSTED</option>
            </select>
          </div>
          <input
            type="date"
            max={new Date().toISOString().split("T")[0]}
            value={appliedDate}
            onChange={(e) => setAppliedDate(e.target.value)}
            className="w-full rounded-lg border p-2"
          />
          <textarea
            rows={2}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Notes (optional)"
            className="md:col-span-2 w-full rounded-lg border p-2"
          />

          <div className="flex gap-2">
            <button
              type="submit"
              disabled={
                createApplicationMutation.isPending ||
                updateApplicationMutation.isPending
              }
              className="rounded-lg bg-zinc-900 px-4 py-2 text-white"
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
  );
};
