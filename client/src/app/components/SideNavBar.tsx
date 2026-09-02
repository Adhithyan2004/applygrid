"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plus } from "lucide-react";
import { AccountMenu } from "./AccountMenu";
import { useState } from "react";
import { AddApplicationModal } from "./AddApplicationModal";
import { useRouter } from "next/navigation";
import { navItems } from "../lib/navigation";

const SideNavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="hidden lg:block sticky top-0 h-screen xl:ml-10 lg:ml-5 xl:mr-2 z-50">
      <h1
        onClick={() => router.push("/")}
        className="text-[30px] mt-10 font-sora font-semibold cursor-pointer text-primary"
      >
        ApplyGrid
      </h1>
      <div className="flex flex-col pt-10 lg:pb-34 xl:pb-14  justify-between h-150">
        <div className="flex flex-col font-sora gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`navbar-icon ${
                  pathname === item.href ? "bg-blue-100" : "hover:bg-blue-50"
                }`}
              >
                <Icon className="text-primary" />
                {item.name}
              </Link>
            );
          })}
          <button
            onClick={() => setIsModalOpen(true)}
            className="navbar-icon hover:bg-blue-50 cursor-pointer "
          >
            <Plus className="text-primary" />
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
