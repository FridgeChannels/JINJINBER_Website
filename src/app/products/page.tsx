"use client";

import { SectionReveal } from "@/components/motion/SectionReveal";
import { PageShell } from "@/components/site/PageShell";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/mock/products";
import { slugify } from "@/lib/slugify";
import { cn } from "@/lib/cn";
import { pixendVisual as pxn } from "@/lib/pixend-visual";
import { jinjieberMock } from "@/mock/jinjieber";
import { useMemo, useState } from "react";
import { ChevronRight, LayoutGrid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductsPage() {
  const categories = ["Valves", "Pumps", "Fittings"] as const;
  const [activeCategory, setActiveCategory] = useState<string>("Valves");
  const [activeSubCategory, setActiveSubCategory] = useState<string>("");

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
      description: `Exploring all products within the ${group.title} category.`,
      items: products.filter(p => p.parentCategory === activeCategory)
    };
  }, [activeCategory, activeSubCategory, groupedProducts]);

  return (
    <PageShell currentPath="/products">
      {/* Hero Section */}
      <div className="bg-neutral-50/50 border-b border-neutral-100">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <SectionReveal>
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
                Product Catalog
              </h1>
              <p className="mt-2 text-zinc-500">
                Precision-engineered industrial solutions for global infrastructure.
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row gap-12 py-12 md:py-20">
          
          {/* Left Sidebar Navigation */}
          <aside className="lg:w-72 shrink-0">
            <div className="lg:sticky lg:top-32 space-y-8">
              <div className="hidden lg:block">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4f25e4] mb-6">
                  Catalog Navigator
                </div>
                <nav className="flex flex-col gap-2">
                  {groupedProducts.map((group) => (
                    <div key={group.title} className="flex flex-col gap-1">
                      <button
                        onClick={() => handleCategoryClick(group.title)}
                        className={cn(
                          "group flex items-center justify-between px-4 py-3 text-sm font-bold transition-all duration-200 text-left",
                          pxn.radiusNone,
                          activeCategory === group.title 
                            ? "bg-neutral-900 text-white" 
                            : "text-zinc-500 hover:bg-neutral-100 hover:text-zinc-900"
                        )}
                      >
                        {group.title}
                        <ChevronRight className={cn(
                          "h-4 w-4 transition-transform",
                          activeCategory === group.title ? "rotate-90" : ""
                        )} />
                      </button>
                      
                      {/* Nested Sub-navigation for active group */}
                      {activeCategory === group.title && group.subGroups.length > 0 && (
                        <div className="flex flex-col ml-4 border-l border-neutral-200">
                          {group.subGroups.map((sub) => (
                            <button
                              key={sub.title}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveSubCategory(sub.title);
                              }}
                              className={cn(
                                "py-2 px-4 text-xs font-semibold text-left transition-colors duration-200 relative",
                                activeSubCategory === sub.title 
                                  ? "text-[#4f25e4]" 
                                  : "text-zinc-400 hover:text-zinc-700"
                              )}
                            >
                              {activeSubCategory === sub.title && (
                                <span className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-[#4f25e4]" />
                              )}
                              {sub.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Mobile Navigation */}
              <div className="lg:hidden flex overflow-x-auto pb-4 gap-3 no-scrollbar border-b border-neutral-100">
                {groupedProducts.map((group) => (
                  <button
                    key={group.title}
                    onClick={() => handleCategoryClick(group.title)}
                    className={cn(
                      "whitespace-nowrap px-6 py-2.5 text-sm font-bold transition-all",
                      pxn.radiusNone,
                      activeCategory === group.title ? "bg-[#4f25e4] text-white" : "bg-neutral-100 text-zinc-500"
                    )}
                  >
                    {group.title}
                  </button>
                ))}
              </div>

              {/* Inquiry Card */}
              <div className="hidden lg:block p-6 bg-neutral-900 text-white relative overflow-hidden rounded-none">
                <div className="relative z-10 space-y-4">
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest">Inquiry Support</p>
                  <p className="text-sm font-medium leading-relaxed">
                    Need technical CAD files or certification documents?
                  </p>
                  <a href="/contact" className="inline-block text-sm font-bold text-white underline underline-offset-4 hover:text-blue-300 transition-colors">
                    Talk to an Engineer
                  </a>
                </div>
                <div className="absolute top-0 right-0 h-24 w-24 bg-[#4f25e4] blur-[60px] opacity-30" />
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1">
            <AnimatePresence mode="wait">
              {visibleContent ? (
                <motion.div
                  key={`${activeCategory}-${activeSubCategory}`}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="space-y-12"
                >
                  <div className="space-y-4 border-b border-neutral-100 pb-8">
                    <h2 className="text-3xl font-bold text-zinc-900 md:text-4xl tracking-tight">
                      {visibleContent.title}
                    </h2>
                    {visibleContent.description && (
                      <p className="text-base leading-relaxed text-zinc-500 max-w-2xl">
                        {visibleContent.description}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleContent.items.map((product, i) => (
                      <SectionReveal key={product.id} delay={0.05 * (i % 3)}>
                        <ProductCard product={product} />
                      </SectionReveal>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <div className="py-20 text-center text-zinc-400">
                  Select a category to view products.
                </div>
              )}
            </AnimatePresence>

            {/* Bottom Contact Section */}
            <SectionReveal>
               <div className="mt-24 p-8 md:p-12 bg-neutral-50 border border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-8 rounded-none">
                  <div className="space-y-2 text-center md:text-left">
                     <h3 className="text-xl font-bold text-zinc-900 text-balance">Download our complete industrial product catalog</h3>
                     <p className="text-sm text-zinc-500">Get detailed technical data for all 27+ product models.</p>
                  </div>
                  <button className="bg-[#4f25e4] text-white px-8 py-4 font-bold transition-transform hover:scale-105 rounded-none">
                    Download PDF Catalog
                  </button>
               </div>
            </SectionReveal>
          </main>
        </div>
      </div>
    </PageShell>
  );
}

