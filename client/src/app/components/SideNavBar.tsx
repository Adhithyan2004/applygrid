"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Plus,
  Layers,
  CircleUser,
  Settings,
} from "lucide-react";
import SettingsModal from "./SettingsModal";

const navItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Track Job",
    href: "/add-application",
    icon: Plus,
  },
  {
    name: "Applications",
    href: "/applications",
    icon: Layers,
  },
];

const SideNavBar = () => {
  const [openSettings, setOpenSettings] = useState(false);
  const pathname = usePathname();
  return (
    <div className="sticky top-0 h-screen">
      <h1 className="text-[32px] mt-10 font-sora font-semibold">ApplyGrid</h1>
      <div className="flex flex-col py-10 justify-between h-150">
        <div className="flex flex-col font-sora gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`navbar-icon ${
                  pathname === item.href
                    ? "bg-zinc-500 text-white"
                    : "hover:bg-zinc-200"
                }`}
              >
                <Icon />
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className=" flex flex-col gap-3">
          <Link href="" className="navbar-icon hover:bg-zinc-200">
            <CircleUser />
            Account
          </Link>
          <button
            className="navbar-icon hover:bg-zinc-200"
            onClick={() => setOpenSettings(true)}
          >
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
