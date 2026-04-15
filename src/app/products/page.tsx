"use client";

import { SectionReveal } from "@/components/motion/SectionReveal";
import { PageShell } from "@/components/site/PageShell";
import { Badge } from "@/components/ui/Badge";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/mock/products";
import { slugify } from "@/lib/slugify";
import { cn } from "@/lib/cn";
import { pixendVisual as pxn } from "@/lib/pixend-visual";
import { jinjieberMock } from "@/mock/jinjieber";
import { useMemo, useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

export default function ProductsPage() {
  const categories = ["Valves", "Pumps", "Fittings"] as const;
  const [activeCategory, setActiveCategory] = useState<string>("Valves");

  const groupedProducts = useMemo(() => {
    return categories.map((parentCat) => {
      // Group items in this parent category by their sub-category
      const items = products.filter((p) => p.parentCategory === parentCat);
      const subCategories = Array.from(new Set(items.map(p => p.category)));
      
      const subGroups = subCategories.map(subCat => {
        // Find description from jinjieberMock
        const mockCat = parentCat === "Valves" 
          ? jinjieberMock.products.valves.find(v => v.title === subCat)
          : parentCat === "Pumps"
          ? jinjieberMock.products.pumps.find(p => p.title === subCat)
          : null;

        return {
          title: subCat,
          description: mockCat?.description || "",
          items: items.filter(p => p.category === subCat)
        };
      });

      return {
        title: parentCat,
        subGroups
      };
    });
  }, []);

  // Simple scroll spy to update active category
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const cat of categories) {
        const element = document.getElementById(slugify(cat));
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveCategory(cat);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <PageShell currentPath="/products">
      {/* Hero Section - Minimalist for Sidebar Layout */}
      <div className="bg-neutral-50/50 border-b border-neutral-100">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <SectionReveal>
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
                Product Catalog
              </h1>
              <p className="mt-2 text-zinc-500">
                Explore our complete range of precision-engineered industrial solutions.
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row gap-12 py-12 md:py-20">
          
          {/* Left Sidebar Navigation */}
          <aside className="lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-32 space-y-8">
              <div className="hidden lg:block space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4f25e4] mb-4">
                  Categories
                </div>
                <nav className="flex flex-col gap-1">
                  {categories.map((cat) => (
                    <a
                      key={cat}
                      href={`#${slugify(cat)}`}
                      className={cn(
                        "group flex items-center justify-between px-4 py-3 text-sm font-semibold transition-all duration-200",
                        pxn.radiusMinor,
                        activeCategory === cat 
                          ? "bg-[#4f25e4] text-white shadow-lg shadow-[#4f25e4]/20" 
                          : "text-zinc-500 hover:bg-neutral-100 hover:text-zinc-900"
                      )}
                    >
                      {cat}
                      <ChevronRight className={cn(
                        "h-4 w-4 transition-transform",
                        activeCategory === cat ? "translate-x-0" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      )} />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Mobile Horizontal Navigation */}
              <div className="lg:hidden flex overflow-x-auto pb-4 gap-3 no-scrollbar border-b border-neutral-100">
                {categories.map((cat) => (
                  <a
                    key={cat}
                    href={`#${slugify(cat)}`}
                    className={cn(
                      "whitespace-nowrap px-6 py-2.5 text-sm font-bold transition-all",
                      pxn.radiusButton,
                      activeCategory === cat 
                        ? "bg-[#4f25e4] text-white" 
                        : "bg-neutral-100 text-zinc-500"
                    )}
                  >
                    {cat}
                  </a>
                ))}
              </div>

              {/* Contact Card in Sidebar */}
              <div className={cn(
                "hidden lg:block p-6 bg-neutral-900 text-white relative overflow-hidden",
                pxn.radiusGrid
              )}>
                <div className="relative z-10 space-y-4">
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest">Need help?</p>
                  <p className="text-sm font-medium leading-relaxed">
                    Our technical sales team is available to assist with custom specs.
                  </p>
                  <a href="/contact" className="inline-block text-sm font-bold text-white underline underline-offset-4 hover:text-blue-300 transition-colors">
                    Contact Us
                  </a>
                </div>
                <div className="absolute top-0 right-0 h-24 w-24 bg-[#4f25e4] blur-[60px] opacity-50" />
              </div>
            </div>
          </aside>

          {/* Right Content Area */}
          <main className="flex-1 space-y-32">
            {groupedProducts.map((group) => (
              <section 
                key={group.title} 
                id={slugify(group.title)} 
                className="scroll-mt-32 space-y-16"
              >
                <SectionReveal>
                  <div className="border-b-2 border-zinc-900 pb-6">
                    <h2 className="text-3xl font-bold text-zinc-900 md:text-4xl tracking-tight">
                      {group.title}
                    </h2>
                  </div>
                </SectionReveal>

                <div className="space-y-24">
                  {group.subGroups.map((sub) => (
                    <div key={sub.title} className="space-y-10">
                      <div className="max-w-2xl space-y-4">
                        <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-3">
                          <span className="w-8 h-px bg-zinc-300" />
                          {sub.title}
                        </h3>
                        {sub.description && (
                          <p className="text-sm leading-relaxed text-zinc-500 border-l-2 border-[#4f25e4]/20 pl-4 py-1">
                            {sub.description}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sub.items.map((product, i) => (
                          <SectionReveal key={product.id} delay={0.05 * (i % 3)}>
                            <ProductCard product={product} />
                          </SectionReveal>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {/* Bottom Contact Section */}
            <SectionReveal>
               <div className={cn(
                 "mt-20 p-8 md:p-12 bg-neutral-50 border border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-8",
                 pxn.radiusGrid
               )}>
                  <div className="space-y-2 text-center md:text-left">
                     <h3 className="text-xl font-bold text-zinc-900 text-balance">Download our complete industrial product catalog</h3>
                     <p className="text-sm text-zinc-500">Get detailed technical data for all 27+ product models.</p>
                  </div>
                  <button className={cn(
                    "bg-[#4f25e4] text-white px-8 py-4 font-bold transition-transform hover:scale-105",
                    pxn.radiusButton
                  )}>
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
