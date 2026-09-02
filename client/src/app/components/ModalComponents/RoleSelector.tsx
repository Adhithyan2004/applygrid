"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { roles } from "../../data/role";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const RoleSelector = ({ value, onChange }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    setSelectedIndex(-1);
  }, [value]);

  // make the input scroll till the selectedIndex
  useEffect(() => {
    if (selectedIndex >= 0) {
      itemRefs.current[selectedIndex]?.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [selectedIndex]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!filteredRoles.length) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredRoles.length - 1 ? prev + 1 : 0,
        );
        break;

      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredRoles.length - 1,
        );
        break;

      case "Enter":
        if (selectedIndex >= 0) {
          e.preventDefault();
          onChange(filteredRoles[selectedIndex]);
        }
        break;

      case "Escape":
        setSelectedIndex(-1);
        break;
    }
  };

  const filteredRoles = useMemo(() => {
    if (!value.trim()) return [];

    return roles.filter((role) =>
      role.toLowerCase().includes(value.toLowerCase()),
    );
  }, [value]);

  // to not display the role below even after clicking it
  const exactMatch = roles.some(
    (role) => role.toLowerCase() === value.toLowerCase(),
  );

  return (
    <div className="relative">
      <input
        value={value}
        required
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Role"
        className="w-full text-sm md:text-base rounded-lg border p-2"
      />

      {value.length >= 2 && !exactMatch && (
        <div className="absolute left-0 right-0 top-full  z-50 mt-1 max-h-64 overflow-y-auto rounded-lg border  bg-white shadow-lg">
          {filteredRoles.length > 0 ? (
            filteredRoles.map((role, index) => (
              <button
                key={role}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                type="button"
                onClick={() => onChange(role)}
                className={`block w-full  px-4 py-3 text-left ${
                  selectedIndex === index ? "bg-zinc-200" : "hover:bg-zinc-100"
                }`}
              >
                {role}
              </button>
            ))
          ) : (
            <p className="px-4 py-3 text-zinc-500">No roles found</p>
          )}
        </div>
      )}
    </div>
  );
};
