"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  CircleUser,
  ChevronUp,
  LogOut,
  Info,
  Bug,
  Astroid,
} from "lucide-react";
import { useLogout } from "../hooks/useLogout";
import { useMe } from "../hooks/useMe";

export const AccountMenu = () => {
  const { data: user, isLoading } = useMe();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const logoutMutation = useLogout();

  const handleLogout = () => {
    logoutMutation.mutate(undefined, {
      onSuccess: () => {
        router.push("/user-login");
      },
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="navbar-icon w-full hover:bg-zinc-100"
      >
        <CircleUser className="text-primary" />

        <span>Account</span>

        <ChevronUp
          size={16}
          className={`ml-auto transition-transform ${
            isOpen ? "" : "rotate-180"
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute bottom-14 left-0 w-45 rounded-xl bg-white shadow-mini p-2">
          <div className="px-3 py-3 flex items-center gap-4">
            <CircleUser size={30} color="#0020A2" />
            <div>
              <p className="font-semibold">
                {isLoading ? "Loading..." : user?.name}
              </p>
              <p className="text-[13px]">Basic Plan</p>
            </div>
          </div>
          {/* <hr /> */}
          <Link
            href="/profile"
            className="px-3 py-2  rounded-lg flex gap-3 hover:bg-blue-100"
          >
            <Astroid size={20} color="#0020A2" />
            Upgrade Plan
          </Link>

          <Link
            href="/settings"
            className="px-3 py-2 rounded-lg flex gap-3  hover:bg-blue-100"
          >
            <Bug size={20} color="#0020A2" />
            Report a Bug
          </Link>
          <Link
            href="/settings"
            className="px-3 py-2 rounded-lg flex gap-3  hover:bg-blue-100"
          >
            <Info size={20} color="#0020A2" />
            Help
          </Link>

          <button
            onClick={handleLogout}
            className="w-full text-left px-3 py-2 rounded-lg flex items-center gap-3 hover:bg-blue-100"
          >
            <LogOut size={20} color="#0020A2" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
