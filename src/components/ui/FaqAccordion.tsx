"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/components/seo/FaqSchema";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col divide-y divide-tardis/10 rounded-2xl border border-tardis/10 bg-white">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex min-h-[48px] w-full items-center justify-between gap-4 px-5 py-4 text-left active:bg-bg-soft"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : index)}
            >
              <span className="text-base font-medium text-tardis">{item.q}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-tardis transition-transform ${open ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            {open && <p className="px-5 pb-4 text-base leading-relaxed text-foreground/70">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
