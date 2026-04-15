"use client";

import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { JinjieberAbout } from "@/components/jinjieber/JinjieberAbout";
import { JinjieberWhyChooseUs } from "@/components/jinjieber/JinjieberWhyChooseUs";
import { JinjieberCapabilities } from "@/components/jinjieber/JinjieberCapabilities";
import { cn } from "@/lib/cn";
import { History, Target, Award, Factory } from "lucide-react";

type AboutTab = "mission" | "story" | "why-us" | "manufacturing";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<AboutTab>("mission");

  const tabs = [
    { id: "mission", label: "Our Mission", icon: Target },
    { id: "story", label: "Our Story", icon: History },
    { id: "why-us", label: "Why Choose Us", icon: Award },
    { id: "manufacturing", label: "Manufacturing", icon: Factory },
  ] as const;

  return (
    <PageShell currentPath="/about">
      {/* Hero Header */}
      <div className="bg-neutral-50/50 border-b border-neutral-100">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 lg:py-24">
          <SectionReveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 mb-6">
                About Jinjieber
              </h1>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Engineering flow control solutions with precision, integrity, and a commitment to global safety standards.
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4">
        {/* Tab Navigation */}
        <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-neutral-100 -mx-4 px-4">
           <div className="flex overflow-x-auto no-scrollbar py-2 gap-4 md:gap-8 md:justify-center">
             {tabs.map((tab) => (
               <button
                 key={tab.id}
                 onClick={() => setActiveTab(tab.id as AboutTab)}
                 className={cn(
                   "relative flex items-center gap-2 py-4 px-2 text-sm font-bold transition-all whitespace-nowrap",
                   activeTab === tab.id 
                    ? "text-[#4f25e4]" 
                    : "text-zinc-400 hover:text-zinc-600"
                 )}
               >
                 <tab.icon className={cn("h-4 w-4", activeTab === tab.id ? "text-[#4f25e4]" : "text-zinc-400")} />
                 {tab.label}
                 {activeTab === tab.id && (
                   <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4f25e4] rounded-none" />
                 )}
               </button>
             ))}
           </div>
        </div>

        {/* Content Area */}
        <div className="py-12 md:py-20">
          <SectionReveal key={activeTab}>
            {activeTab === "mission" && (
              <div className="space-y-4">
                <JinjieberAbout mode="mission" />
              </div>
            )}
            {activeTab === "story" && (
              <div className="space-y-4">
                <JinjieberAbout mode="story" />
              </div>
            )}
            {activeTab === "why-us" && (
              <div className="space-y-4">
                <JinjieberWhyChooseUs />
              </div>
            )}
            {activeTab === "manufacturing" && (
              <div className="space-y-4">
                <JinjieberCapabilities />
              </div>
            )}
          </SectionReveal>
        </div>
      </div>
    </PageShell>
  );
}
