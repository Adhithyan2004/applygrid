"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { statusConfig, StatusType } from "@/app/config/statusConfig";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const StatusSelect = ({ value, onChange }: Props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const selected = statusConfig[value as StatusType];

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full rounded-lg border-2 px-3 py-2 flex items-center justify-between transition ${selected.style}`}
      >
        <div className="flex items-center gap-2">
          <div className={`h-2.5 w-2.5 rounded-full ${selected.dot}`} />

          <span>{selected.label}</span>
        </div>

        <ChevronDown
          size={18}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl border bg-white shadow-lg">
          {Object.entries(statusConfig).map(([key, status]) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                onChange(key);
                setOpen(false);
              }}
              className="flex w-full items-center justify-between px-4 py-3 hover:bg-zinc-50"
            >
              <div className="flex items-center gap-2">
                <div className={`h-2.5 w-2.5 rounded-full ${status.dot}`} />
                <span>{status.label}</span>
              </div>

              {value === key && <Check size={16} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
