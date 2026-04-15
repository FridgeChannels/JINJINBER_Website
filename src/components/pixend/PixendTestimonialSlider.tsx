"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { pixendShowcaseMock } from "@/mock/pixend-showcase";
import { PixendSectionLabel } from "@/components/pixend/PixendPrimitives";
import { PlaceholderAvatar } from "@/components/ui/PlaceholderMedia";
import { pixendVisual as pxn } from "@/lib/pixend-visual";
import { cn } from "@/lib/cn";

export const PixendTestimonialSlider: React.FC = () => {
  const { testimonials } = pixendShowcaseMock;
  const items = useMemo(() => testimonials.items, [testimonials.items]);
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === items.length - 1 ? 0 : i + 1));
  };

  const active = items[index];

  return (
    <section
      id="testimonials-section"
      className="py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <PixendSectionLabel>{testimonials.label}</PixendSectionLabel>

          <div className="flex items-center gap-2 md:justify-end">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100 text-zinc-800",
                "transition-colors duration-300 hover:bg-neutral-200/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f25e4]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
              )}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100 text-zinc-800",
                "transition-colors duration-300 hover:bg-neutral-200/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f25e4]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
              )}
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>

        <div
          className={cn(
            "mt-10 bg-white p-8 md:p-10",
            pxn.radiusMajor,
            pxn.shadowMajor,
          )}
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
            <PlaceholderAvatar alt={`${active.name} portrait placeholder`} />
            <div className="min-w-0 flex-1">
              <blockquote className="text-lg leading-relaxed text-zinc-900 md:text-xl">
                {active.quote}
              </blockquote>
              <div className="mt-6 text-sm text-zinc-600">
                <div className="font-semibold text-zinc-800">{active.name}</div>
                <div>{active.role}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
