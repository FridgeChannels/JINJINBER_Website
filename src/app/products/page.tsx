"use client";

import Link from "next/link";
import Image from "next/image";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { PageShell } from "@/components/site/PageShell";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/mock/products";
import { slugify } from "@/lib/slugify";
import { cn } from "@/lib/cn";
import { pixendVisual as pxn } from "@/lib/pixend-visual";
import { jinjieberMock } from "@/mock/jinjieber";
import { useMemo, useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ProductsContent() {
  const searchParams = useSearchParams();
  const categories = ["Valves", "Pumps", "Fittings"] as const;
  const [activeCategory, setActiveCategory] = useState<string>("Valves");
  const [activeSubCategory, setActiveSubCategory] = useState<string>("");

  useEffect(() => {
    const catParam = searchParams.get("category");
    const subCatParam = searchParams.get("subCategory");

    if (catParam && categories.includes(catParam as any)) {
      setActiveCategory(catParam);
    }
    if (subCatParam) {
      setActiveSubCategory(subCatParam);
    }
  }, [searchParams]);

  const groupedProducts = useMemo(() => {
    return categories.map((parentCat) => {
      const parentItems = products.filter((p) => p.parentCategory === parentCat);
      const subCatTitles = Array.from(new Set(parentItems.map(p => p.category)));
      
      const subGroups = subCatTitles.map(subCat => {
        const mockCat = parentCat === "Valves" 
          ? jinjieberMock.products.valves.find(v => v.title === subCat)
          : parentCat === "Pumps"
          ? jinjieberMock.products.pumps.find(p => p.title === subCat)
          : null;

        return {
          title: subCat,
          id: slugify(`${parentCat}-${subCat}`),
          description: mockCat?.description || "",
          items: parentItems.filter(p => p.category === subCat)
        };
      });

      return {
        title: parentCat,
        id: slugify(parentCat),
        subGroups
      };
    });
  }, []);

  useEffect(() => {
    const applyHash = () => {
      const raw = window.location.hash.replace(/^#/, "");
      if (!raw) return;

      // 1) Parent category match: #valves / #pumps / #fittings
      const parentHit = groupedProducts.find((g) => g.id === raw || slugify(g.title) === raw);
      if (parentHit) {
        setActiveCategory(parentHit.title);
        setActiveSubCategory("");
        return;
      }

      // 2) Sub-category match: #gate-valves / #butterfly-valves ...
      for (const group of groupedProducts) {
        const subHit = group.subGroups.find((s) => slugify(s.title) === raw || s.id === raw);
        if (subHit) {
          setActiveCategory(group.title);
          setActiveSubCategory(subHit.title);
          return;
        }
      }
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [groupedProducts]);

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    setActiveSubCategory("");
  };

  const visibleContent = useMemo(() => {
    const group = groupedProducts.find(g => g.title === activeCategory);
    if (!group) return null;

    if (activeSubCategory) {
      const sub = group.subGroups.find(s => s.title === activeSubCategory);
      return sub ? { ...sub } : null;
    }

    return {
      title: group.title,
      description: `Exploring all high-precision systems within the ${group.title} division.`,
      items: products.filter(p => p.parentCategory === activeCategory)
    };
  }, [activeCategory, activeSubCategory, groupedProducts]);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:max-w-none lg:px-10">
      <div className="flex flex-col lg:flex-row gap-20 py-16 md:py-32">
        
        {/* Left Sidebar Navigation - Architectural Style */}
        <aside className="lg:w-80 shrink-0">
          <div className="lg:sticky lg:top-36 space-y-12">
            <div className="hidden lg:block">
              <nav className="flex flex-col gap-3">
                {groupedProducts.map((group) => (
                  <div key={group.title} className="flex flex-col gap-2">
                    <button
                      onClick={() => handleCategoryClick(group.title)}
                      className={cn(
                        "group flex items-center justify-between px-6 py-4 text-sm font-bold transition-all duration-300 text-left border border-transparent",
                        activeCategory === group.title 
                          ? "bg-zinc-900 text-white shadow-xl" 
                          : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 hover:border-zinc-100"
                      )}
                    >
                      {group.title.toUpperCase()}
                      < ChevronRight className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        activeCategory === group.title ? "rotate-90" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      )} />
                    </button>
                    
                    {/* Nested Sub-navigation for active group */}
                    <AnimatePresence>
                      {activeCategory === group.title && group.subGroups.length > 0 && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="flex flex-col ml-6 border-l border-zinc-100 overflow-hidden"
                        >
                          {group.subGroups.map((sub) => (
                            <button
                              key={sub.title}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveSubCategory(sub.title);
                              }}
                              className={cn(
                                "py-3 px-6 text-xs font-bold text-left transition-all duration-300 relative uppercase tracking-wider",
                                activeSubCategory === sub.title 
                                  ? "text-[#4f25e4] bg-white" 
                                  : "text-zinc-400 hover:text-zinc-700 hover:translate-x-1"
                              )}
                            >
                              {activeSubCategory === sub.title && (
                                <span className="absolute left-[-1px] top-4 bottom-4 w-[2px] bg-[#4f25e4]" />
                              )}
                              {sub.title}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden flex overflow-x-auto pb-4 gap-3 no-scrollbar border-b border-zinc-100">
              {groupedProducts.map((group) => (
                <button
                  key={group.title}
                  onClick={() => handleCategoryClick(group.title)}
                  className={cn(
                    "whitespace-nowrap px-8 py-3 text-xs font-bold transition-all border uppercase tracking-widest",
                    activeCategory === group.title ? "bg-zinc-900 border-zinc-900 text-white" : "bg-white border-zinc-200 text-zinc-500"
                  )}
                >
                  {group.title}
                </button>
              ))}
            </div>

            {/* 删除了 Inquiry Card */}
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1">
          <AnimatePresence mode="wait">
            {visibleContent ? (
              <motion.div
                key={`${activeCategory}-${activeSubCategory}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-16"
              >
                <div className="space-y-8 border-b border-zinc-100 pb-12">
                  <h2 className="text-4xl font-bold text-zinc-900 md:text-6xl tracking-tight">
                    {visibleContent.title}
                  </h2>
                  {visibleContent.description && (
                    <p className="text-xl leading-relaxed text-zinc-500 max-w-3xl font-medium">
                      {visibleContent.description}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {visibleContent.items.map((product, i) => (
                    <SectionReveal key={product.id} delay={0.05 * (i % 3)}>
                      <ProductCard product={product} />
                    </SectionReveal>
                  ))}
                </div>
              </motion.div>
            ) : (
              <div className="py-32 text-center text-zinc-400 font-bold uppercase tracking-widest text-xs">
                Analyzing Catalog Architecture...
              </div>
            )}
          </AnimatePresence>

          {/* 删除了 Bottom Contact Section */}
        </main>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <PageShell currentPath="/products">
      {/* Hero Section - Compact */}
      <div className="relative overflow-hidden border-b border-zinc-100 bg-zinc-950 py-14 md:py-16">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/Products/product.-nabberpng.png"
            alt="Products page hero background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 md:px-8 lg:max-w-none lg:px-10 lg:pl-16">
          <SectionReveal>
            <div className="max-w-4xl space-y-4">
              <div className="h-px w-16 bg-[#4f25e4] drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]" />
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)]">
                Global Product Registry.
              </h1>
              <p className="text-base text-white/90 font-medium max-w-2xl leading-relaxed md:text-lg drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]">
                Precision-engineered fluid control components designed for high-stakes industrial applications across the globe.
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>

      <Suspense fallback={<div className="py-40 text-center font-bold text-zinc-300 uppercase tracking-widest text-xs">Synchronizing Database...</div>}>
        <ProductsContent />
      </Suspense>
    </PageShell>
  );
}



