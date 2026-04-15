"use client";

import { useState, useMemo } from "react";
import { PageShell } from "@/components/site/PageShell";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { jinjieberMock } from "@/mock/jinjieber";
import { cn } from "@/lib/cn";
import { pixendVisual as pxn } from "@/lib/pixend-visual";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { ChevronRight, Target, ShieldCheck, Factory } from "lucide-react";

export default function IndustriesPage() {
  const { industries } = jinjieberMock;
  const [activeId, setActiveId] = useState(0);

  const activeIndustry = industries[activeId];

  return (
    <PageShell currentPath="/industries">
      {/* Hero Header */}
      <div className="bg-neutral-50/50 border-b border-neutral-100">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 lg:py-24">
          <SectionReveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 mb-6">
                Industries We Serve
              </h1>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Jinjieber provides mission-critical flow control solutions across multiple global verticals. 
                From municipal water networks to extreme oilfield processing, we deliver reliability where it matters most.
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row gap-12 py-16 md:py-24">
          
          {/* Left Sidebar Navigation */}
          <aside className="lg:w-72 shrink-0">
            <div className="lg:sticky lg:top-32 space-y-6">
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4f25e4] mb-4">
                Global Verticals
              </div>
              <nav className="flex flex-col gap-1.5">
                {industries.map((ind, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveId(idx)}
                    className={cn(
                      "group flex items-center justify-between px-5 py-4 text-sm font-semibold transition-all duration-300",
                      pxn.radiusMinor,
                      activeId === idx 
                        ? "bg-[#4f25e4] text-white shadow-xl shadow-[#4f25e4]/20" 
                        : "text-zinc-500 hover:bg-neutral-100 hover:text-zinc-900 border border-transparent hover:border-neutral-200"
                    )}
                  >
                    {ind.title}
                    <ChevronRight className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      activeId === idx ? "translate-x-0" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    )} />
                  </button>
                ))}
              </nav>

              <div className={cn(
                "hidden lg:block mt-12 p-8 bg-zinc-900 text-white relative overflow-hidden",
                pxn.radiusGrid
              )}>
                <div className="relative z-10 space-y-4">
                  <div className="h-10 w-10 rounded-full bg-[#4f25e4] flex items-center justify-center mb-4">
                    <ShieldCheck className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-bold">Compliance Certified</h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    All products are manufactured to meet or exceed regional industry standards including API, AWWA, and UL/FM.
                  </p>
                </div>
                <div className="absolute -bottom-12 -right-12 h-48 w-48 bg-[#4f25e4] blur-[80px] opacity-30 rounded-full" />
              </div>
            </div>
          </aside>

          {/* Right Content Area */}
          <main className="flex-1">
            <div className="space-y-12">
              <SectionReveal key={activeId}>
                <div className="space-y-8">
                  {/* Industry Image */}
                  <div className={cn(
                    "relative aspect-video lg:aspect-[21/9] overflow-hidden bg-neutral-100",
                    pxn.radiusMajor,
                    pxn.shadowMajor
                  )}>
                    {activeIndustry.image ? (
                      <img
                        src={activeIndustry.image}
                        alt={activeIndustry.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    ) : (
                      <PlaceholderMedia
                        alt={`${activeIndustry.title} placeholder`}
                        aspectClassName="aspect-video lg:aspect-[21/9]"
                        className="rounded-none ring-0"
                      />
                    )}
                  </div>

                  {/* Industry Details */}
                  <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 text-[#4f25e4] font-bold text-xs uppercase tracking-widest">
                         <Target className="h-4 w-4" />
                         Industry Focus
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
                        {activeIndustry.title}
                      </h2>
                      <div className="prose prose-zinc max-w-none">
                         <p className="text-lg text-zinc-600 leading-relaxed">
                           {activeIndustry.description}
                         </p>
                      </div>
                    </div>

                    {/* Key Products Sidebar in Content */}
                    <div className="space-y-6">
                       <div className={cn(
                         "bg-neutral-50 p-6 border border-neutral-100",
                         pxn.radiusMinor
                       )}>
                          <div className="flex items-center gap-2 text-zinc-400 font-bold text-[10px] uppercase tracking-[0.15em] mb-4">
                             <Factory className="h-3.5 w-3.5" />
                             Key Products
                          </div>
                          <div className="text-sm font-medium text-zinc-900 leading-relaxed">
                            {activeIndustry.keyProducts || "Consult catalog for full specifications."}
                          </div>
                       </div>

                       <a 
                         href="/contact" 
                         className={cn(
                           "flex items-center justify-center w-full px-6 py-4 bg-[#4f25e4] text-white font-bold transition-transform hover:scale-[1.02]",
                           pxn.radiusButton
                         )}
                       >
                         Request Solution
                       </a>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </main>
        </div>
      </div>
    </PageShell>
  );
}
