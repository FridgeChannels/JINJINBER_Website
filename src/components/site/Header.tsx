"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import {
  navProductsMega,
  navIndustriesLinks,
  navAboutLinks,
} from "@/mock/navigation";
import { motion, AnimatePresence } from "framer-motion";

export interface HeaderProps {
  currentPath: string;
}

type DesktopMenu = "about" | "products" | "industries" | "capabilities" | null;
type MobileAccordion = "products" | "industries" | "about" | null;

export const Header: React.FC<HeaderProps> = ({ currentPath }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<DesktopMenu>(null);
  const [mobileAccordion, setMobileAccordion] = useState<MobileAccordion>(null);
  const desktopWrapRef = useRef<HTMLDivElement>(null);

  const productsActive = currentPath === "/products" || currentPath.startsWith("/products/");
  const industriesActive = currentPath === "/industries" || currentPath.startsWith("/industries/");
  const aboutActive = currentPath === "/about" || currentPath.startsWith("/about/");

  useEffect(() => {
    if (!desktopMenu) return;
    const onDown = (e: MouseEvent) => {
      if (desktopWrapRef.current?.contains(e.target as Node)) return;
      setDesktopMenu(null);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [desktopMenu]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDesktopMenu(null);
        setMobileNavOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const linkClass = (active: boolean) =>
    cn(
      "px-5 py-3 text-[13px] font-bold uppercase tracking-[0.15em] transition-all duration-300",
      active
        ? "text-zinc-900 border-b-2 border-[#4f25e4]"
        : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
    );

  const closeAll = () => {
    setDesktopMenu(null);
    setMobileNavOpen(false);
    setMobileAccordion(null);
  };

  return (
    <>
      <header className="sticky top-0 z-50 h-20 shrink-0 bg-white/95 border-b border-zinc-100 backdrop-blur-xl">
        <div ref={desktopWrapRef} className="h-full w-full px-4 md:px-8 lg:px-10">
          <div className="flex h-full items-center justify-between gap-12">
            <Link
              href="/"
              className="shrink-0 flex items-center gap-2 group"
              aria-label="Jinjieber Home"
            >
              <div className="h-8 w-8 bg-[#4f25e4] flex items-center justify-center text-white font-black text-xl italic group-hover:rotate-12 transition-transform">J</div>
              <span className="font-bold text-xl tracking-tightest text-zinc-900 uppercase italic">Jinjieber</span>
            </Link>

            <nav className="hidden flex-1 items-center justify-center lg:flex" aria-label="Primary">
              <Link href="/" className={linkClass(currentPath === "/")} onClick={() => setDesktopMenu(null)}>
                Home
              </Link>

              {/* Products Mega Menu */}
              <div 
                className="relative h-full flex items-center"
                onMouseEnter={() => setDesktopMenu("products")}
                onMouseLeave={() => setDesktopMenu(null)}
              >
                <Link
                  href="/products"
                  className={cn(linkClass(desktopMenu === "products" || productsActive), "inline-flex items-center gap-1.5")}
                  onClick={() => setDesktopMenu(null)}
                >
                  Products
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", desktopMenu === "products" && "rotate-180")} />
                </Link>
                <AnimatePresence>
                  {desktopMenu === "products" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full z-50 pt-4 w-screen max-w-4xl"
                    >
                      <div className="bg-white p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-zinc-100 flex gap-16">
                        {navProductsMega.map((col) => (
                          <div key={col.title} className="flex-1 space-y-8">
                             <div className="flex flex-col gap-2">
                                <Link
                                  href={col.sectionHref}
                                  className="text-lg font-bold text-zinc-900 border-b border-transparent hover:border-zinc-900 transition-all"
                                  onClick={() => setDesktopMenu(null)}
                                >
                                  {col.title}
                                </Link>
                             </div>
                             <ul className="space-y-3">
                                {col.links.map((l) => (
                                  <li key={l.href}>
                                    <Link
                                      href={l.href}
                                      className="text-sm font-medium text-zinc-500 hover:text-[#4f25e4] transition-colors"
                                      onClick={() => setDesktopMenu(null)}
                                    >
                                      {l.label}
                                    </Link>
                                  </li>
                                ))}
                             </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries Dropdown */}
              <div 
                className="relative h-full flex items-center"
                onMouseEnter={() => setDesktopMenu("industries")}
                onMouseLeave={() => setDesktopMenu(null)}
              >
                <Link
                  href="/industries"
                  className={cn(linkClass(desktopMenu === "industries" || industriesActive), "inline-flex items-center gap-1.5")}
                  onClick={() => setDesktopMenu(null)}
                >
                  Industries
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", desktopMenu === "industries" && "rotate-180")} />
                </Link>
                <AnimatePresence>
                  {desktopMenu === "industries" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 top-full z-50 pt-4 w-72"
                    >
                      <div className="bg-white p-8 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-zinc-100">
                        <ul className="space-y-4">
                          {navIndustriesLinks.map((l) => (
                            <li key={l.href}>
                              <Link
                                href={l.href}
                                className="block text-sm font-bold text-zinc-500 hover:text-[#4f25e4] transition-colors uppercase tracking-widest"
                                onClick={() => setDesktopMenu(null)}
                              >
                                {l.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* About Dropdown */}
              <div 
                className="relative h-full flex items-center"
                onMouseEnter={() => setDesktopMenu("about")}
                onMouseLeave={() => setDesktopMenu(null)}
              >
                <Link
                  href="/about"
                  className={cn(linkClass(desktopMenu === "about" || aboutActive), "inline-flex items-center gap-1.5")}
                  onClick={() => setDesktopMenu(null)}
                >
                  About
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", desktopMenu === "about" && "rotate-180")} />
                </Link>
                <AnimatePresence>
                  {desktopMenu === "about" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 top-full z-50 pt-4 w-72"
                    >
                      <div className="bg-white p-8 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-zinc-100">
                        <ul className="space-y-4">
                          {navAboutLinks.map((l) => (
                            <li key={l.href}>
                              <Link
                                href={l.href}
                                className="block text-sm font-bold text-zinc-500 hover:text-[#4f25e4] transition-colors uppercase tracking-widest"
                                onClick={() => setDesktopMenu(null)}
                              >
                                {l.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            <div className="hidden lg:block shrink-0">
              <ButtonLink href="/contact" variant="primary" className="bg-[#4f25e4] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] shadow-xl shadow-[#4f25e4]/20 hover:scale-105 transition-all rounded-none">
                Contact Us
              </ButtonLink>
            </div>

            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center bg-zinc-900 text-white lg:hidden"
              onClick={() => setMobileNavOpen((v) => !v)}
            >
              {mobileNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileNavOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="max-h-[80vh] overflow-y-auto bg-white border-t border-zinc-100 lg:hidden"
            >
              <nav className="flex flex-col p-6 gap-2" aria-label="Mobile Navigation">
                <Link href="/" onClick={closeAll} className="p-4 text-sm font-bold uppercase tracking-widest border-b border-zinc-50">Home</Link>
                
                <button onClick={() => setMobileAccordion(a => a === "products" ? null : "products")} className="flex justify-between p-4 text-sm font-bold uppercase tracking-widest border-b border-zinc-50">
                  Products <ChevronDown className={cn("h-4 w-4 transition-transform", mobileAccordion === "products" && "rotate-180")} />
                </button>
                {mobileAccordion === "products" && (
                  <div className="bg-zinc-50 p-6 flex flex-col gap-6">
                    {navProductsMega.map(col => (
                      <div key={col.title} className="space-y-4">
                        <ul className="space-y-2 pl-4">
                          {col.links.map(l => (
                            <li key={l.href}><Link href={l.href} onClick={closeAll} className="text-sm font-medium text-zinc-500">{l.label}</Link></li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                <button onClick={() => setMobileAccordion(a => a === "industries" ? null : "industries")} className="flex justify-between p-4 text-sm font-bold uppercase tracking-widest border-b border-zinc-50">
                  Industries <ChevronDown className={cn("h-4 w-4 transition-transform", mobileAccordion === "industries" && "rotate-180")} />
                </button>
                {mobileAccordion === "industries" && (
                  <div className="bg-zinc-50 p-6 flex flex-col gap-4">
                    {navIndustriesLinks.map(l => (
                      <Link key={l.href} href={l.href} onClick={closeAll} className="text-sm font-bold text-zinc-500 uppercase tracking-widest">{l.label}</Link>
                    ))}
                  </div>
                )}

                <button onClick={() => setMobileAccordion(a => a === "about" ? null : "about")} className="flex justify-between p-4 text-sm font-bold uppercase tracking-widest border-b border-zinc-50">
                  About <ChevronDown className={cn("h-4 w-4 transition-transform", mobileAccordion === "about" && "rotate-180")} />
                </button>
                {mobileAccordion === "about" && (
                  <div className="bg-zinc-50 p-6 flex flex-col gap-4">
                    {navAboutLinks.map(l => (
                      <Link key={l.href} href={l.href} onClick={closeAll} className="text-sm font-bold text-zinc-500 uppercase tracking-widest">{l.label}</Link>
                    ))}
                  </div>
                )}
                <Link href="/contact" onClick={closeAll} className="p-4 text-sm font-bold uppercase tracking-widest text-[#4f25e4]">Contact Us</Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

