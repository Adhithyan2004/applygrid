"use client";

import { useMemo } from "react";
import { roles } from "../data/role";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const RoleSelector = ({ value, onChange }: Props) => {
  const filteredRoles = useMemo(() => {
    if (!value.trim()) return [];

    return roles
      .filter((role) => role.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 8);
  }, [value]);

  const exactMatch = roles.some(
    (role) => role.toLowerCase() === value.toLowerCase(),
  );

  return (
    <div className="relative">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Role"
        className="w-full rounded-lg border p-2"
      />

      {value.length >= 2 && !exactMatch && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 max-h-64 overflow-y-auto rounded-lg border bg-white shadow-lg">
          {filteredRoles.length > 0 ? (
            filteredRoles.map((role) => (
              <button
                key={role}
                type="button"
                onClick={() => onChange(role)}
                className="block w-full px-4 py-3 text-left hover:bg-zinc-100"
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
