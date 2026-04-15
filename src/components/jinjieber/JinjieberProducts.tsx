"use client";

import { useState } from "react";
import { jinjieberMock } from "@/mock/jinjieber";
import { PixendSectionLabel } from "@/components/pixend/PixendPrimitives";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { pixendVisual as pxn } from "@/lib/pixend-visual";
import { cn } from "@/lib/cn";
import { motion, AnimatePresence } from "framer-motion";

type ProductCategory = "valves" | "pumps" | "fittings";

export const JinjieberProducts: React.FC = () => {
  const { products } = jinjieberMock;
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("valves");

  const categories: { id: ProductCategory; label: string }[] = [
    { id: "valves", label: "Valves" },
    { id: "pumps", label: "Pumps" },
    { id: "fittings", label: "Pipe Fittings & Accessories" },
  ];

  return (
    <section id="products-section" className="py-16 md:py-24 bg-neutral-50/50">
      <div className="mx-auto max-w-6xl px-4">
        <PixendSectionLabel>Products & Solutions</PixendSectionLabel>

        {/* Tab Navigation */}
        <div className="mt-10 flex flex-wrap gap-2 md:gap-4 border-b border-neutral-200">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "relative py-4 px-6 text-sm font-bold transition-all duration-200 border-b-2",
                activeCategory === cat.id
                  ? "border-[#4f25e4] text-[#4f25e4] bg-white"
                  : "border-transparent text-zinc-400 hover:text-zinc-600 hover:bg-neutral-100/50",
                pxn.radiusNone // Explicitly no rounding
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="mt-12 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {activeCategory === "valves" && (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {products.valves.map((item, idx) => (
                    <article
                      key={idx}
                      className={cn(
                        "overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#4f25e4]/30 border border-transparent flex flex-col group",
                        pxn.radiusGrid,
                        pxn.shadowGrid,
                        pxn.shadowGridHover,
                      )}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-50">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-5 flex flex-col items-center justify-center text-center">
                        <h3 className="text-sm font-bold text-zinc-900 leading-tight">{item.title}</h3>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {activeCategory === "pumps" && (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {products.pumps.map((item, idx) => (
                    <article
                      key={idx}
                      className={cn(
                        "overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#4f25e4]/30 border border-transparent flex flex-col group",
                        pxn.radiusGrid,
                        pxn.shadowGrid,
                        pxn.shadowGridHover,
                      )}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-50">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-5 flex flex-col items-center justify-center text-center">
                        <h3 className="text-sm font-bold text-zinc-900 leading-tight">{item.title}</h3>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {activeCategory === "fittings" && (
                <ul className="grid gap-4 md:grid-cols-2">
                  {products.fittings.map((text, idx) => {
                    const [bold, desc] = text.split(" — ");
                    return (
                      <li 
                        key={idx} 
                        className={cn(
                          "p-6 bg-white transition-all duration-300 hover:bg-neutral-50/80 border border-transparent hover:border-[#4f25e4]/20", 
                          pxn.radiusGrid, 
                          pxn.shadowGrid
                        )}
                      >
                         <div className="font-bold text-zinc-900">{bold}</div>
                         {desc && <div className="mt-2 text-sm text-zinc-600 leading-relaxed">{desc}</div>}
                      </li>
                    );
                  })}
                </ul>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
