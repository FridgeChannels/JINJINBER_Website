"use client";

import Link from "next/link";
import { pixendShowcaseMock } from "@/mock/pixend-showcase";
import { PixendSectionLabel } from "@/components/pixend/PixendPrimitives";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { pixendVisual as pxn } from "@/lib/pixend-visual";
import { cn } from "@/lib/cn";

export const PixendRecentWork: React.FC = () => {
  const { recentWork } = pixendShowcaseMock;

  const handleLoadMore = () => {
    console.log("clicked");
  };

  return (
    <section id="works-section" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <PixendSectionLabel>{recentWork.label}</PixendSectionLabel>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {recentWork.items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "group relative overflow-hidden bg-neutral-50 p-4 transition-shadow duration-300 hover:bg-white",
                pxn.radiusGrid,
                pxn.shadowGrid,
                pxn.shadowGridHover,
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f25e4]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
              )}
            >
              <div
                className={cn(
                  "relative mb-4 overflow-hidden transition-opacity duration-300 group-hover:opacity-95",
                  pxn.radiusInset,
                )}
              >
                <PlaceholderMedia
                  alt={`${item.title} project image placeholder`}
                  aspectClassName="aspect-[4/3]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={cn(pxn.radiusInset)}
                />
              </div>
              <div className="space-y-1">
                <div className="text-sm font-semibold text-zinc-900">{item.title}</div>
                <div className="text-xs text-zinc-400">
                  {item.category} · {item.year}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={handleLoadMore}
            className={cn(
              "px-8 py-2.5 text-sm font-semibold text-white",
              pxn.radiusCta,
              "bg-[#161616] transition-opacity duration-300 hover:opacity-90 active:opacity-80",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f25e4]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
            )}
          >
            Load more
          </button>
        </div>
      </div>
    </section>
  );
};
