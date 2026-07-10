"use client";

import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const experienceLevels = [
  {
    value: "INTERN",
    label: "Intern (0 years)",
  },
  {
    value: "ENTRY",
    label: "Entry Level (0-1 years)",
  },
  {
    value: "JUNIOR",
    label: "Junior (1-3 years)",
  },
  {
    value: "MID",
    label: "Mid Level (3-5 years)",
  },
  {
    value: "SENIOR",
    label: "Senior (5-8 years)",
  },
  {
    value: "LEAD",
    label: "Lead (8+ years)",
  },
];

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const ExperienceSelect = ({ value, onChange }: Props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    const index = experienceLevels.findIndex((level) => level.value === value);

    setSelectedIndex(index);
  }, [value]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (!experienceLevels.length) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();

        if (!open) {
          setOpen(true);
          setSelectedIndex(0);
          return;
        }

        setSelectedIndex((prev) =>
          prev < experienceLevels.length - 1 ? prev + 1 : 0,
        );
        break;

      case "ArrowUp":
        e.preventDefault();

        if (!open) {
          setOpen(true);
          setSelectedIndex(experienceLevels.length - 1);
          return;
        }

        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : experienceLevels.length - 1,
        );
        break;

      case "Enter":
        if (selectedIndex >= 0) {
          e.preventDefault();
          onChange(experienceLevels[selectedIndex].value);
          setOpen(false);
        }
        break;

      case "Escape":
        e.preventDefault();
        setOpen(false);
        setSelectedIndex(-1);
        break;
    }
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const selected = experienceLevels.find((level) => level.value === value);

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        onKeyDown={handleKeyDown}
        className="w-full rounded-lg border bg-white px-3 py-2 flex items-center justify-between"
      >
        <span>{selected?.label}</span>

        <ChevronDown
          size={18}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl border bg-white shadow-lg">
          {experienceLevels.map((level, index) => (
            <button
              key={level.value}
              type="button"
              onClick={() => {
                onChange(level.value);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between px-4 py-2 ${
                selectedIndex === index ? "bg-zinc-200" : "hover:bg-zinc-50"
              }`}
            >
              <span>{level.label}</span>

              {value === level.value && <Check size={16} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
