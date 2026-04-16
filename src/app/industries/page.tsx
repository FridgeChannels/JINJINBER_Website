"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { jinjieberMock } from "@/mock/jinjieber";
import { cn } from "@/lib/cn";
import { pixendVisual as pxn } from "@/lib/pixend-visual";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { slugify } from "@/lib/slugify";

export default function IndustriesPage() {
  const { industries } = jinjieberMock;
  const [activeId, setActiveId] = useState(0);

  const activeIndustry = industries[activeId];

  useEffect(() => {
    const applyHash = () => {
      const raw = window.location.hash.replace(/^#/, "");
      if (!raw) return;
      const idx = industries.findIndex((ind) => slugify(ind.title) === raw);
      if (idx >= 0) setActiveId(idx);
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [industries]);

  return (
    <PageShell currentPath="/industries">
      {/* Hero Header - Compact (match /products top hero height) */}
      <div className="relative overflow-hidden border-b border-zinc-100 bg-zinc-950 py-14 md:py-16">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/industry-banner.png"
            alt="Industries page hero background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 md:px-8 lg:max-w-none lg:px-10 lg:pl-16">
          <SectionReveal>
            <div className="max-w-5xl space-y-4">
              <div className="flex items-center gap-6">
                <span className="h-px w-16 bg-[#4f25e4] drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)]">
                Powering <br /> Infrastructure.
              </h1>
              <p className="text-base text-white/90 leading-relaxed max-w-3xl font-medium md:text-lg drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]">
                Designing mission-critical flow control systems that sustain global municipal, energy, and industrial networks.
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:max-w-none lg:px-10">
        <div className="flex flex-col lg:flex-row gap-24 py-24 md:py-40">
          
          {/* Left Sidebar Navigation - Architectural Style */}
          <aside className="lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-36 space-y-12">
              <nav className="flex flex-col gap-2">
                {industries.map((ind, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveId(idx)}
                    className={cn(
                      "group flex items-center justify-between px-6 py-5 text-sm font-bold transition-all duration-300 border border-transparent",
                      activeId === idx 
                        ? "bg-zinc-900 text-white shadow-2xl" 
                        : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 hover:border-zinc-100"
                    )}
                  >
                    {ind.title.toUpperCase()}
                    <ChevronRight className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      activeId === idx ? "translate-x-0" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    )} />
                  </button>
                ))}
              </nav>

              <a 
                href="/contact" 
                className={cn(
                  "flex items-center justify-center w-full px-8 py-6 bg-[#4f25e4] text-white text-xs font-bold uppercase tracking-[0.3em] transition-all hover:scale-[1.05] hover:bg-zinc-900 shadow-xl shadow-[#4f25e4]/20"
                )}
              >
                Request Specs
              </a>
            </div>
          </aside>

          {/* Right Content Area */}
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeId}
                initial={{ opacity: 0, scale: 0.98, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-20"
              >
                {/* Industry Image - Dramatic Scale */}
                <div className={cn(
                  "relative aspect-video lg:aspect-[21/9] overflow-hidden bg-zinc-100 group",
                  pxn.radiusGrid,
                  "shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)]"
                )}>
                  {activeIndustry.image ? (
                    <img
                      src={activeIndustry.image}
                      alt={activeIndustry.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  ) : (
                    <PlaceholderMedia
                      alt={`${activeIndustry.title} placeholder`}
                      aspectClassName="aspect-video lg:aspect-[21/9]"
                      className="rounded-none ring-0 opacity-20"
                    />
                  )}
                  <div className="absolute inset-0 bg-zinc-950/20 pointer-events-none transition-opacity group-hover:opacity-0" />
                </div>

                {/* Industry Details */}
                <div className="max-w-4xl space-y-10">
                  <div className="flex items-center gap-4 text-[#4f25e4] font-bold text-[10px] uppercase tracking-[0.4em]">
                     <span className="h-1.5 w-1.5 rounded-full bg-[#4f25e4]" />
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tight leading-none">
                    {activeIndustry.title}
                  </h2>
                  <div className="prose prose-zinc max-w-none">
                     <p className="text-xl text-zinc-500 leading-relaxed font-medium">
                       {activeIndustry.description}
                     </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </PageShell>
  );
}
