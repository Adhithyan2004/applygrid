"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CircleUser,
  ChevronUp,
  LogOut,
  Info,
  Bug,
  Astroid,
} from "lucide-react";

export const AccountMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="navbar-icon w-full hover:bg-zinc-100"
      >
        <CircleUser />

        <span>Account</span>

        <ChevronUp
          size={16}
          className={`ml-auto transition-transform ${
            isOpen ? "" : "rotate-180"
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute bottom-14 left-0 w-45 rounded-xl bg-zinc-200 p-2">
          <div className="px-3 py-3 flex items-center gap-4">
            <CircleUser size={30} />
            <div>
              <p className="font-semibold">Joel Da</p>
              <p className="text-[13px]">Basic Plan</p>
            </div>
          </div>
          {/* <hr /> */}
          <Link
            href="/profile"
            className="px-3 py-2 rounded-lg flex gap-3 hover:bg-zinc-100"
          >
            <Astroid size={20} />
            Upgrade Plan
          </Link>

          <Link
            href="/settings"
            className="px-3 py-2 rounded-lg flex gap-3  hover:bg-zinc-100"
          >
            <Bug size={20} />
            Report a Bug
          </Link>
          <Link
            href="/settings"
            className="px-3 py-2 rounded-lg flex gap-3  hover:bg-zinc-100"
          >
            <Info size={20} />
            Help
          </Link>

          <button className="w-full text-left px-3 py-2 rounded-lg flex items-center gap-3 hover:bg-zinc-100">
            <LogOut size={20} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
