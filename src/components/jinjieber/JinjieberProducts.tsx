"use client";

import { useState } from "react";
import Link from "next/link";
import { jinjieberMock } from "@/mock/jinjieber";
import { pixendVisual as pxn } from "@/lib/pixend-visual";
import { cn } from "@/lib/cn";
import { motion, AnimatePresence } from "framer-motion";

type ProductCategory = "valves" | "pumps" | "fittings";

export const JinjieberProducts: React.FC = () => {
  const { products } = jinjieberMock;
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("valves");

  const categories: { id: ProductCategory; label: string }[] = [
    { id: "valves", label: "Valves" },
    /*
    { id: "pumps", label: "Pumps" },
    { id: "fittings", label: "Pipe Fittings & Accessories" },
    */
  ];

  return (
    <section id="products-section" className="py-24 md:py-40 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-zinc-200">
          <div className="max-w-2xl py-8">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl lg:text-6xl">
              Products {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
            </h2>
          </div>
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "relative py-6 px-8 text-sm font-bold transition-all duration-300 border-b-2 uppercase tracking-widest",
                  activeCategory === cat.id
                    ? "border-[#4f25e4] text-[#4f25e4] bg-white"
                    : "border-transparent text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100",
                  pxn.radiusNone
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="mt-20 min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {activeCategory === "valves" && (
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                  {products.valves.map((item, idx) => (
                    <Link
                      key={idx}
                      href={`/products?category=Valves&subCategory=${encodeURIComponent(item.title)}`}
                      className={cn(
                        "overflow-hidden bg-white transition-all duration-500 hover:-translate-y-2 flex flex-col group",
                        pxn.radiusGrid,
                        "shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-15px_rgba(79,37,228,0.15)]",
                      )}
                    >
                      <div className="relative aspect-square overflow-hidden bg-white">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl"
                        />
                      </div>
                      <div className="p-8 flex flex-col gap-2">
                        <h3 className="text-xl font-bold text-zinc-900 leading-tight group-hover:text-[#4f25e4] transition-colors">{item.title}</h3>
                        <div className="mt-4 flex items-center text-xs font-bold text-zinc-400 gap-2">
                          <span>View Specifications</span>
                          <span className="w-8 h-[1px] bg-zinc-200 transition-all group-hover:w-12 group-hover:bg-[#4f25e4]" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/*
              {activeCategory === "pumps" && (
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                  {products.pumps.map((item, idx) => (
                    <Link
                      key={idx}
                      href={`/products?category=Pumps&subCategory=${encodeURIComponent(item.title)}`}
                      className={cn(
                        "overflow-hidden bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#4f25e4]/20 border border-zinc-100 flex flex-col group",
                        pxn.radiusGrid,
                        "shadow-[0_10px_40_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-15px_rgba(79,37,228,0.15)]",
                      )}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-50 p-8">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl"
                        />
                      </div>
                      <div className="p-8 flex flex-col gap-2">
                        <h3 className="text-xl font-bold text-zinc-900 leading-tight group-hover:text-[#4f25e4] transition-colors">{item.title}</h3>
                        <div className="mt-4 flex items-center text-xs font-bold text-zinc-400 gap-2">
                          <span>Explore Models</span>
                          <span className="w-8 h-[1px] bg-zinc-200 transition-all group-hover:w-12 group-hover:bg-[#4f25e4]" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {activeCategory === "fittings" && (
                <ul className="grid gap-8 md:grid-cols-2">
                  {products.fittings.map((text, idx) => {
                    const [bold, desc] = text.split(" — ");
                    return (
                      <li key={idx}>
                        <Link
                          href={`/products?category=Fittings&subCategory=${encodeURIComponent(bold)}`}
                          className={cn(
                            "block p-10 bg-white transition-all duration-300 hover:bg-zinc-50 border border-zinc-100 hover:border-[#4f25e4]/20 h-full",
                            pxn.radiusGrid,
                            "shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]"
                          )
                          }
                        >
                          <div className="text-2xl font-bold text-zinc-900 hover:text-[#4f25e4] transition-colors">{bold}</div>
                          {desc && <div className="mt-4 text-base text-zinc-500 leading-relaxed font-medium">{desc}</div>}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
              */}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};


