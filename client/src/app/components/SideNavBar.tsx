"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Plus, Layers } from "lucide-react";
import { AccountMenu } from "./AccountMenu";
import { useState } from "react";
import { AddApplicationModal } from "./AddApplicationModal";
import { useRouter } from "next/navigation";

const navItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },

  {
    name: "Applications",
    href: "/applications",
    icon: Layers,
  },
];

const SideNavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="sticky top-0 h-screen z-50">
      <h1
        onClick={() => router.push("/")}
        className="text-[30px] mt-10 font-sora font-semibold cursor-pointer"
      >
        ApplyGrid
      </h1>
      <div className="flex flex-col pt-10 pb-14 justify-between h-150">
        <div className="flex flex-col font-sora gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`navbar-icon ${
                  pathname === item.href ? "bg-zinc-200" : "hover:bg-zinc-100"
                }`}
              >
                <Icon />
                {item.name}
              </Link>
            );
          })}
          <button
            onClick={() => setIsModalOpen(true)}
            className="navbar-icon hover:bg-zinc-100 cursor-pointer"
          >
            <Plus />
            Track Job
          </button>
          <AddApplicationModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            application={null}
            mode="create"
          />
        </div>
        <div className=" flex flex-col gap-3">
          <AccountMenu />
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
