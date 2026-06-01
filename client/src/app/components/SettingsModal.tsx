"use client";

import { useState } from "react";
import { X, User, Palette, Bell, FileText, Shield } from "lucide-react";
import { ProfileTab } from "./SettingModalComponents/ProfileTab";
import { AppearanceTab } from "./SettingModalComponents/AppearanceTab";
import { NotificationTab } from "./SettingModalComponents/NotificationTab";
import ResumeTab from "./SettingModalComponents/ResumeTab";
import SecurityTab from "./SettingModalComponents/SecurityTab";

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
      <div className="relative flex h-140 w-160 overflow-hidden rounded-xl  bg-zinc-300">
        {/* Sidebar */}
        <div className="w-45  bg-zinc-500 p-5">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Settings</h2>
            <button
              onClick={onClose}
              className="rounded-md p-2 text-zinc-400 transition hover:bg-zinc-400 hover:text-white"
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
                        ? "bg-zinc-600 text-white"
                        : "text-zinc-100 hover:bg-zinc-400 hover:text-white"
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
