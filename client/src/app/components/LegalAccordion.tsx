"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

type LegalAccordionProps = {
  items: AccordionItem[];
};

export const LegalAccordion = ({ items }: LegalAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-zinc-200 border-y space-y-4 border-zinc-200">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div className="text-primary" key={item.title}>
            <button
              type="button"
              onClick={() => toggleAccordion(index)}
              className="flex w-full items-center justify-between py-5 text-left cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="font-sora text-lg font-semibold">
                {item.title}
              </span>

              <ChevronDown
                size={20}
                className={`shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-6 pr-8 leading-7 text-zinc-600">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
