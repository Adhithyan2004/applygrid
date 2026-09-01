"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Plus } from "lucide-react";
import { useState } from "react";
import { navItems } from "../lib/navigation";
import { AddApplicationModal } from "./AddApplicationModal";

export const MobileNavBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleTrackJob = () => {
    setIsMenuOpen(false);
    setIsModalOpen(true);
  };

  return (
    <>
      <nav className="sticky lg:hidden top-0 w-full z-50 flex h-16 items-center justify-between bg-white">
        <h1
          onClick={() => router.push("/")}
          className="font-sora text-2xl font-semibold text-primary cursor-pointer"
        >
          ApplyGrid
        </h1>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="rounded-lg p-2 hover:bg-blue-50 cursor-pointer"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="text-primary" size={24} />
          ) : (
            <Menu className="text-primary" size={24} />
          )}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-x-0 top-16 bg-white px-4 py-4 shadow-lg sm:px-6">
          <div className="flex flex-col gap-2 font-sora">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`navbar-icon ${
                    isActive ? "bg-blue-100" : "hover:bg-blue-50"
                  }`}
                >
                  <Icon className="text-primary" />
                  {item.name}
                </Link>
              );
            })}

            <button
              type="button"
              onClick={handleTrackJob}
              className="navbar-icon cursor-pointer hover:bg-blue-50"
            >
              <Plus className="text-primary" />
              Track Job
            </button>
          </div>
        </div>
      )}

      <AddApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        application={null}
        mode="create"
      />
    </>
  );
};
