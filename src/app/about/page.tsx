"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { JinjieberAbout } from "@/components/jinjieber/JinjieberAbout";
import { JinjieberWhyChooseUs } from "@/components/jinjieber/JinjieberWhyChooseUs";
import { JinjieberCapabilities } from "@/components/jinjieber/JinjieberCapabilities";
import { cn } from "@/lib/cn";
import { History, Target, Award, Factory } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type AboutTab = "mission" | "story" | "why-us" | "manufacturing";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<AboutTab>("mission");

  const tabs = [
    { id: "mission", label: "Our Mission", icon: Target },
    { id: "story", label: "Our Story", icon: History },
    { id: "why-us", label: "Why Choose Us", icon: Award },
    { id: "manufacturing", label: "Manufacturing", icon: Factory },
  ] as const;

  useEffect(() => {
    const applyHash = () => {
      const raw = window.location.hash.replace(/^#/, "");
      if (!raw) return;

      const nextTab: AboutTab | null =
        raw === "mission"
          ? "mission"
          : raw === "our-story"
            ? "story"
            : raw === "why-choose-us"
              ? "why-us"
              : raw === "manufacturing"
                ? "manufacturing"
                : null;

      if (nextTab) setActiveTab(nextTab);
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  return (
    <PageShell currentPath="/about">
      {/* Hero: min-height so the strip isn’t only vertical padding (absolute fill Image doesn’t contribute to parent height). */}
      <div className="relative min-h-[320px] overflow-hidden border-b border-zinc-100 bg-zinc-950 py-14 md:min-h-[380px] md:py-16 lg:min-h-[420px]">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/about-banner.png"
            alt="About page hero background"
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
            unoptimized
          />
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:max-w-none lg:px-10">
        {/* Tab Navigation - Architectural Sticky Bar */}
        <div className="sticky top-24 z-30 bg-white/90 backdrop-blur-xl border-b border-zinc-100 -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-10 lg:px-10 shadow-sm">
           <div className="flex overflow-x-auto no-scrollbar py-4 gap-8 md:gap-16 justify-start lg:justify-center">
             {tabs.map((tab) => (
               <button
                 key={tab.id}
                 onClick={() => setActiveTab(tab.id as AboutTab)}
                 className={cn(
                   "relative flex items-center gap-3 py-6 px-4 text-xs font-bold transition-all whitespace-nowrap uppercase tracking-[0.2em]",
                   activeTab === tab.id 
                    ? "text-[#4f25e4]" 
                    : "text-zinc-400 hover:text-zinc-600"
                 )}
               >
                 <tab.icon className={cn("h-4 w-4", activeTab === tab.id ? "text-[#4f25e4]" : "text-zinc-400")} />
                 {tab.label}
                 {activeTab === tab.id && (
                   <motion.span 
                    layoutId="about-tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#4f25e4]" 
                   />
                 )}
               </button>
             ))}
           </div>
        </div>

        {/* Content Area - Expanded Spacing */}
        <div className="pt-0 pb-24 md:pb-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {activeTab === "mission" && <JinjieberAbout mode="mission" />}
              {activeTab === "story" && <JinjieberAbout mode="story" />}
              {activeTab === "why-us" && <JinjieberWhyChooseUs embedded />}
              {activeTab === "manufacturing" && <JinjieberCapabilities embedded />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </PageShell>
  );
}

