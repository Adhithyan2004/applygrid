"use client";

import { useState } from "react";
import { X, User, Palette, Bell, FileText, Shield } from "lucide-react";

type SettingsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const tabs = [
  {
    id: "profile",
    label: "Profile",
    icon: User,
  },
  {
    id: "appearance",
    label: "Appearance",
    icon: Palette,
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: Bell,
  },
  {
    id: "resume",
    label: "Resume",
    icon: FileText,
  },
  {
    id: "security",
    label: "Security",
    icon: Shield,
  },
];

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const [activeTab, setActiveTab] = useState("profile");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-[1px]">
      {/* Modal */}
      <div className="relative flex h-175 w-250 overflow-hidden rounded-3xl border bg-zinc-950 shadow-2xl">
        {/* Sidebar */}
        <div className="w-65 border-r border-zinc-800 bg-zinc-900/70 p-5">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Settings</h2>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all
                    ${
                      activeTab === tab.id
                        ? "bg-purple-500 text-white"
                        : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                    }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 ">
          {activeTab === "profile" && <ProfileTab />}
          {activeTab === "appearance" && <AppearanceTab />}
          {activeTab === "notifications" && <NotificationTab />}
          {activeTab === "resume" && <ResumeTab />}
          {activeTab === "security" && <SecurityTab />}
        </div>
      </div>
    </div>
  );
}

/* ---------------- PROFILE ---------------- */

function ProfileTab() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-3xl font-semibold text-white">Profile</h3>
        <p className="mt-1 text-zinc-400">Update your personal information.</p>
      </div>

      <div className="grid gap-5">
        <input
          placeholder="Full Name"
          className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white outline-none"
        />

        <input
          placeholder="Email Address"
          className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white outline-none"
        />

        <textarea
          placeholder="Bio"
          rows={5}
          className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white outline-none"
        />
      </div>
    </div>
  );
}

/* ---------------- APPEARANCE ---------------- */

function AppearanceTab() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-3xl font-semibold text-white">Appearance</h3>

        <p className="mt-1 text-zinc-400">Customize how the dashboard looks.</p>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <p className="mb-4 text-white">Theme</p>

        <div className="flex gap-4">
          <button className="rounded-xl border border-white bg-white px-5 py-3 text-black">
            Dark
          </button>

          <button className="rounded-xl border border-zinc-700 px-5 py-3 text-zinc-300">
            Light
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- NOTIFICATIONS ---------------- */

function NotificationTab() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-3xl font-semibold text-white">Notifications</h3>

        <p className="mt-1 text-zinc-400">Control how you receive updates.</p>
      </div>

      <div className="space-y-4">
        <SettingToggle title="Email Notifications" />
        <SettingToggle title="Interview Reminders" />
        <SettingToggle title="Weekly Reports" />
      </div>
    </div>
  );
}

/* ---------------- RESUME ---------------- */

function ResumeTab() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-3xl font-semibold text-white">Resume</h3>

        <p className="mt-1 text-zinc-400">Upload and manage resumes.</p>
      </div>

      <div className="rounded-2xl border border-dashed border-zinc-700 p-10 text-center">
        <p className="text-zinc-300">Drag and drop your resume here</p>

        <button className="mt-5 rounded-xl bg-white px-5 py-3 text-black">
          Upload Resume
        </button>
      </div>
    </div>
  );
}

/* ---------------- SECURITY ---------------- */

function SecurityTab() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-3xl font-semibold text-white">Security</h3>

        <p className="mt-1 text-zinc-400">
          Manage passwords and account safety.
        </p>
      </div>

      <div className="space-y-4">
        <input
          type="password"
          placeholder="Current Password"
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white outline-none"
        />

        <input
          type="password"
          placeholder="New Password"
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-white outline-none"
        />

        <button className="rounded-xl bg-white px-5 py-3 text-black">
          Update Password
        </button>
      </div>
    </div>
  );
}

/* ---------------- TOGGLE ---------------- */

function SettingToggle({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <p className="text-white">{title}</p>

      <button className="h-7 w-14 rounded-full bg-zinc-700 p-1">
        <div className="h-5 w-5 rounded-full bg-white"></div>
      </button>
    </div>
  );
}
