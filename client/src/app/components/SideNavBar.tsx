"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Plus,
  Layers,
  CircleUser,
  Settings,
} from "lucide-react";
import SettingsModal from "./SettingsModal";

const SideNavBar = () => {
  const [openSettings, setOpenSettings] = useState(false);
  return (
    <div className="sticky top-0 h-screen">
      <h1 className="text-[32px] mt-10 font-sora font-semibold">ApplyGrid</h1>
      <div className="flex flex-col py-10 justify-between h-150">
        <div className="flex flex-col font-sora gap-7.5">
          <Link href="/" className="navbar-icon">
            <LayoutDashboard />
            Dashboard
          </Link>
          <Link href="/add-application" className="navbar-icon">
            <Plus />
            Track Job
          </Link>
          <Link href="/applications" className="navbar-icon">
            <Layers />
            Applications
          </Link>
        </div>
        <div className=" flex flex-col gap-7.5">
          <Link href="" className="navbar-icon">
            <CircleUser />
            Account
          </Link>
          <button className="navbar-icon" onClick={() => setOpenSettings(true)}>
            <Settings />
            Settings
          </button>
          <SettingsModal
            isOpen={openSettings}
            onClose={() => setOpenSettings(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
