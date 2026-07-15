"use client";

import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";
import { Check, ChevronDown, User, School, Mail } from "lucide-react";
import { FaLinkedin, FaGlobe } from "react-icons/fa6";
import { SiIndeed, SiWellfound, SiGlassdoor } from "react-icons/si";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const appliedSources: AppliedSource[] = [
  {
    value: "LINKEDIN",
    label: "LinkedIn",
    icon: FaLinkedin,
    color: "#0A66C2",
  },
  {
    value: "INDEED",
    label: "Indeed",
    icon: SiIndeed,
    color: "#003A9B",
  },
  {
    value: "WELLFOUND",
    label: "Wellfound",
    icon: SiWellfound,
    color: "#000000",
  },
  {
    value: "GLASSDOOR",
    label: "GlassDoor",
    icon: SiGlassdoor,
    color: "#0CAA41",
  },
  {
    value: "COMPANY_CAREER_PAGE",
    label: "Company Website",
    icon: FaGlobe,
    color: "#F4BB44",
  },
  {
    value: "REFERRAL",
    label: "Referral",
    icon: User,
  },
  {
    value: "CAMPUS_PLACEMENT",
    label: "campus placement",
    icon: School,
    color: "#000000",
  },
  {
    value: "COLD_MAILING",
    label: "Cold mailing",
    icon: Mail,
    color: "#0020A2",
  },
  {
    value: "NAUKRI",
    label: "Naukri",
  },

  {
    value: "CUTSHORT",
    label: "Cutshort",
  },
];

type AppliedSource = {
  value: string;
  label: string;
  icon?: IconType | LucideIcon;
  color?: string;
  image?: string;
};

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const AppliedSourceSelect = ({ value, onChange }: Props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    setSelectedIndex(
      appliedSources.findIndex((source) => source.value === value),
    );
  }, [value]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (!appliedSources.length) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();

        if (!open) {
          setOpen(true);
          setSelectedIndex(0);
          return;
        }

        setSelectedIndex((prev) =>
          prev < appliedSources.length - 1 ? prev + 1 : 0,
        );
        break;

      case "ArrowUp":
        e.preventDefault();

        if (!open) {
          setOpen(true);
          setSelectedIndex(appliedSources.length - 1);
          return;
        }

        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : appliedSources.length - 1,
        );
        break;

      case "Enter":
        e.preventDefault();

        if (selectedIndex >= 0) {
          onChange(appliedSources[selectedIndex].value);
          setOpen(false);
        }
        break;

      case "Escape":
        setOpen(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const selected = appliedSources.find((s) => s.value === value);
  console.log("value: ", value);
  console.log("selected object:", selected);
  const SelectedIcon = selected?.icon;

  return (
    <div ref={ref} className="relative  w-full">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        onKeyDown={handleKeyDown}
        className="flex w-full items-center justify-between rounded-lg border bg-white px-3 py-2"
      >
        <div className="flex items-center gap-3">
          {selected?.image ? (
            <Image
              src={selected.image}
              alt={selected.label}
              width={18}
              height={18}
            />
          ) : (
            SelectedIcon && (
              <SelectedIcon size={18} style={{ color: selected?.color }} />
            )
          )}

          <span>{selected?.label}</span>
        </div>

        <ChevronDown
          size={18}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl border bg-white shadow-lg">
          {appliedSources.map((source, index) => {
            const Icon = source.icon;

            return (
              <button
                key={source.value}
                type="button"
                onClick={() => {
                  onChange(source.value);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-4 py-2 ${
                  selectedIndex === index ? "bg-blue-50" : "hover:bg-zinc-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  {source.image ? (
                    <Image
                      src={source.image}
                      alt={source.label}
                      width={18}
                      height={18}
                    />
                  ) : (
                    Icon && <Icon size={18} style={{ color: source.color }} />
                  )}
                  <span>{source.label}</span>
                </div>

                {value === source.value && <Check size={16} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
