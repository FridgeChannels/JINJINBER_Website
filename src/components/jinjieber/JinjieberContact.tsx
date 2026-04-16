"use client";

import * as React from "react";
import { jinjieberMock } from "@/mock/jinjieber";
import { PixendSectionLabel } from "@/components/pixend/PixendPrimitives";
import { pixendVisual as pxn } from "@/lib/pixend-visual";
import { cn } from "@/lib/cn";
import { Mail, Phone, MapPin, Globe, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export const JinjieberContact: React.FC = () => {
  const { contact } = jinjieberMock;
  // Using mockData; dev team will replace with real API hook useFetchXxx()
  const marketSectorOptions = React.useMemo(
    () => [
      { value: "consultancy-infrastructure", label: "Consultancy / Infrastructure" },
      { value: "oil-gas-extraction", label: "Oil & Gas Extraction" },
      { value: "municipal-water-networks", label: "Municipal Water networks" },
      { value: "agriculture-irrigation", label: "Agriculture & Irrigation" },
      { value: "fire-safety-hvac", label: "Fire Safety / HVAC" },
      { value: "alternative-energy", label: "Alternative Energy" },
    ],
    []
  );
  const [marketSector, setMarketSector] = React.useState<string>(marketSectorOptions[0]?.value ?? "");

  const marketSectorLabel =
    marketSectorOptions.find((o) => o.value === marketSector)?.label ?? marketSectorOptions[0]?.label ?? "";

  return (
    <section id="contact-section" className="py-24 md:py-48 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        <div className="mt-16 grid gap-24 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5 space-y-20">
            <div className="space-y-10">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tightest text-zinc-900 leading-[0.95] whitespace-nowrap">
                {contact.title}
              </h2>
              <p className="text-xl leading-relaxed text-zinc-500 font-medium">
                {contact.description}
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex items-start gap-8 group">
                 <div className="h-14 w-14 shrink-0 bg-zinc-900 flex items-center justify-center text-white transition-transform group-hover:scale-110">
                   <Mail className="h-6 w-6" />
                 </div>
                 <div className="space-y-2">
                   <div className="text-xl font-bold text-zinc-900"><a href="mailto:enochmei2024@gmail.com" className="hover:text-[#4f25e4] transition-colors border-b-2 border-transparent hover:border-[#4f25e4]">enochmei2024@gmail.com</a></div>
                 </div>
              </div>

              <div className="flex items-start gap-8 group">
                 <div className="h-14 w-14 shrink-0 bg-zinc-900 flex items-center justify-center text-white transition-transform group-hover:scale-110">
                   <Phone className="h-6 w-6" />
                 </div>
                 <div className="space-y-4">
                   <div className="flex flex-col gap-2 text-lg font-bold text-zinc-900">
                     <div className="flex items-center gap-3">
                        <span className="text-zinc-400 font-medium text-xs lg:min-w-[60px]">Office</span>
                        <span>+1 213 824 2886</span>
                     </div>
                     <div className="flex items-center gap-3 text-[#4f25e4]">
                        <span className="text-zinc-400 font-medium text-xs lg:min-w-[60px]">Direct</span>
                        <span>+1 626 831 0588</span>
                     </div>
                   </div>
                 </div>
              </div>

              <div className="flex items-start gap-8 group">
                 <div className="h-14 w-14 shrink-0 bg-zinc-900 flex items-center justify-center text-white transition-transform group-hover:scale-110">
                   <MapPin className="h-6 w-6" />
                 </div>
                 <div className="space-y-6">
                   <div className="flex flex-col gap-10 text-base font-medium text-zinc-500 leading-relaxed max-w-sm">
                      <div className="space-y-2 border-l-2 border-zinc-100 pl-6 hover:border-[#4f25e4] transition-colors">
                        <div>17800 CASTLETON ST STE 665 <br /> CITY OF INDUSTRY, CA 91748</div>
                      </div>
                      <div className="space-y-2 border-l-2 border-zinc-100 pl-6 hover:border-[#4f25e4] transition-colors">
                        <div>Building 3, Evergrande Financial Plaza <br /> Xiangfu Middle Rd, Changsha, Hunan</div>
                      </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 mt-16 lg:mt-24">
            <div 
              className={cn(
                "bg-zinc-50 p-12 md:p-16 relative overflow-hidden", 
                pxn.radiusGrid,
                "shadow-[0_40px_100px_-30px_rgba(0,0,0,0.08)] border border-zinc-100"
              )}
            >
              <div className="relative z-10 space-y-12">
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-zinc-900 tracking-tight">System Specification Inquiry</h3>
                  <p className="text-zinc-500 font-medium">Please provide technical requirements for priority processing.</p>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Contact Name</label>
                      <input type="text" placeholder="John Smith" className="w-full bg-white px-6 py-4 border border-zinc-200 focus:border-[#4f25e4] focus:ring-4 focus:ring-[#4f25e4]/5 outline-none transition-all font-medium" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Enterprise</label>
                      <input type="text" placeholder="Global Eng. Group" className="w-full bg-white px-6 py-4 border border-zinc-200 focus:border-[#4f25e4] focus:ring-4 focus:ring-[#4f25e4]/5 outline-none transition-all font-medium" />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Primary Email</label>
                      <input type="email" placeholder="solutions@enterprise.com" className="w-full bg-white px-6 py-4 border border-zinc-200 focus:border-[#4f25e4] focus:ring-4 focus:ring-[#4f25e4]/5 outline-none transition-all font-medium" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Market Sector</label>
                      <MarketSectorSelect
                        value={marketSector}
                        onChange={setMarketSector}
                        options={marketSectorOptions}
                        ariaLabel="Market Sector"
                      />
                      <input type="hidden" name="marketSector" value={marketSectorLabel} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Detailed Technical Request</label>
                    <textarea placeholder="Please detail sizing, pressure ratings, and environmental specifications..." rows={5} className="w-full bg-white px-6 py-4 border border-zinc-200 focus:border-[#4f25e4] focus:ring-4 focus:ring-[#4f25e4]/5 outline-none transition-all font-medium resize-none"></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className={cn(
                      "group w-full flex items-center justify-center gap-3 bg-[#4f25e4] py-6 text-xs font-bold text-white uppercase tracking-[0.3em] shadow-2xl shadow-[#4f25e4]/30",
                      "transition-all duration-500 hover:bg-zinc-900 hover:gap-6 active:scale-[0.98]"
                    )}
                  >
                    Initiate Technical Review <ChevronRight className="h-4 w-4" />
                  </button>
                </form>
              </div>
              <div className="absolute top-0 right-0 h-64 w-64 bg-[#4f25e4] blur-[150px] opacity-10 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface MarketSectorOption {
  value: string; // from API
  label: string; // from API
}

interface MarketSectorSelectProps {
  value: string; // from API
  options: MarketSectorOption[]; // from API
  onChange: (nextValue: string) => void; // wired by dev team
  ariaLabel: string;
}

const MarketSectorSelect: React.FC<MarketSectorSelectProps> = ({ value, options, onChange, ariaLabel }) => {
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState<number>(() => Math.max(0, options.findIndex((o) => o.value === value)));
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  const selectedIndex = Math.max(0, options.findIndex((o) => o.value === value));
  const selected = options[selectedIndex] ?? options[0];

  React.useEffect(() => {
    setActiveIndex(selectedIndex);
  }, [selectedIndex]);

  React.useEffect(() => {
    const onPointerDown = (e: MouseEvent) => {
      const el = rootRef.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  const commit = (idx: number) => {
    const next = options[idx];
    if (!next) return;
    onChange(next.value);
    setOpen(false);
    buttonRef.current?.focus();
  };

  const onButtonKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      setOpen(true);
      return;
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen((v) => !v);
      return;
    }
  };

  const onListKeyDown: React.KeyboardEventHandler<HTMLUListElement> = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      buttonRef.current?.focus();
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(options.length - 1, i + 1));
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(0, i - 1));
      return;
    }
    if (e.key === "Home") {
      e.preventDefault();
      setActiveIndex(0);
      return;
    }
    if (e.key === "End") {
      e.preventDefault();
      setActiveIndex(options.length - 1);
      return;
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      commit(activeIndex);
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onButtonKeyDown}
        className={cn(
          "w-full bg-white px-6 py-4 border border-zinc-200 outline-none transition-all font-medium text-zinc-900",
          "focus:border-[#4f25e4] focus:ring-4 focus:ring-[#4f25e4]/5",
          "cursor-pointer flex items-center justify-between gap-3"
        )}
      >
        <span className="truncate">{selected?.label}</span>
        <span className={cn("text-zinc-400 transition-transform", open && "rotate-180")} aria-hidden>
          ▾
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          tabIndex={-1}
          aria-label={ariaLabel}
          onKeyDown={onListKeyDown}
          className={cn(
            "absolute z-50 mt-2 w-full bg-white border border-zinc-200 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]",
            "max-h-64 overflow-auto py-2"
          )}
        >
          {options.map((opt, idx) => {
            const isSelected = opt.value === value;
            const isActive = idx === activeIndex;
            return (
              <li
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseDown={(e) => {
                  // Prevent blur before click commits selection
                  e.preventDefault();
                }}
                onClick={() => commit(idx)}
                className={cn(
                  "px-5 py-3 text-sm font-semibold cursor-pointer select-none",
                  "transition-colors",
                  isSelected ? "text-[#4f25e4]" : "text-zinc-700",
                  isActive ? "bg-zinc-50" : "bg-white",
                  "hover:bg-zinc-50"
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="truncate">{opt.label}</span>
                  {isSelected && <span className="text-[#4f25e4]" aria-hidden>✓</span>}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

