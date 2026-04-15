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

export interface HeaderProps {
  currentPath: string;
}

type DesktopMenu = "about" | "products" | "industries" | "capabilities" | null;
type MobileAccordion = "products" | "industries" | null;

export const Header: React.FC<HeaderProps> = ({ currentPath }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<DesktopMenu>(null);
  const [mobileAccordion, setMobileAccordion] = useState<MobileAccordion>(null);
  const desktopWrapRef = useRef<HTMLDivElement>(null);

  const productsActive =
    currentPath === "/products" || currentPath.startsWith("/products/");
  const industriesActive =
    currentPath === "/industries" || currentPath.startsWith("/industries/");
  const aboutActive =
    currentPath === "/about" || currentPath.startsWith("/about/");

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
      "rounded-none px-3 py-2 text-sm font-medium transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
      active
        ? "bg-zinc-100 text-zinc-950 shadow-sm"
        : "text-zinc-600 hover:bg-zinc-100/90 hover:text-zinc-950",
    );

  const closeAll = () => {
    setDesktopMenu(null);
    setMobileNavOpen(false);
    setMobileAccordion(null);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 shadow-[0_1px_0_rgba(0,0,0,0.06),0_8px_24px_rgba(15,23,42,0.04)] backdrop-blur-md">
        <div
          ref={desktopWrapRef}
          className="relative mx-auto max-w-6xl px-4 py-3"
        >
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="shrink-0 rounded-none px-1 font-display text-lg font-semibold tracking-tight text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-label="Jinjieber Home"
            >
              Jinjieber
            </Link>

            <nav
              className="hidden flex-1 flex-wrap items-center justify-center gap-0.5 lg:flex"
              aria-label="Primary"
            >
              <Link
                href="/"
                className={linkClass(currentPath === "/")}
                onClick={() => setDesktopMenu(null)}
              >
                Home
              </Link>

              <div 
                className="relative"
                onMouseEnter={() => setDesktopMenu("products")}
                onMouseLeave={() => setDesktopMenu(null)}
              >
                <Link
                  href="/products"
                  className={cn(
                    linkClass(desktopMenu === "products" || productsActive),
                    "inline-flex items-center gap-1",
                  )}
                  onClick={() => setDesktopMenu(null)}
                >
                  Products
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 transition-transform",
                      desktopMenu === "products" && "rotate-180",
                    )}
                    aria-hidden
                  />
                </Link>
                {desktopMenu === "products" ? (
                  <div
                    id="nav-products-panel"
                    className="absolute left-0 top-full z-50 pt-2 w-max max-w-[min(48rem,calc(100vw-2rem))]"
                    role="navigation"
                    aria-label="Products overview"
                  >
                    <div className="rounded-none bg-white p-5 shadow-[0_16px_48px_rgba(15,23,42,0.12)] border border-neutral-100 backdrop-blur-md">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
                        {navProductsMega.map((col) => (
                          <div key={col.title} className="min-w-0 max-w-[15rem]">
                            <Link
                              href={col.sectionHref}
                              className="rounded-none text-sm font-semibold text-zinc-900 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                              onClick={() => setDesktopMenu(null)}
                            >
                              {col.title}
                            </Link>
                            <ul className="mt-3 space-y-0.5">
                              {col.links.map((l) => (
                                <li key={l.href}>
                                  <Link
                                    href={l.href}
                                    className="block rounded-lg px-1 py-1.5 text-sm text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700/30"
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
                    </div>
                  </div>
                ) : null}
              </div>

              <div 
                className="relative"
                onMouseEnter={() => setDesktopMenu("industries")}
                onMouseLeave={() => setDesktopMenu(null)}
              >
                <Link
                  href="/industries"
                  className={cn(
                    linkClass(desktopMenu === "industries" || industriesActive),
                    "inline-flex items-center gap-1",
                  )}
                  onClick={() => setDesktopMenu(null)}
                >
                  Industries
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 transition-transform",
                      desktopMenu === "industries" && "rotate-180",
                    )}
                    aria-hidden
                  />
                </Link>
                {desktopMenu === "industries" ? (
                  <div
                    id="nav-industries-panel"
                    className="absolute left-0 top-full z-50 pt-2 w-max min-w-[12rem]"
                    role="menu"
                  >
                    <div className="rounded-none bg-white p-3 shadow-[0_16px_48px_rgba(15,23,42,0.12)] border border-neutral-100 backdrop-blur-md">
                      <ul className="flex flex-col gap-0.5">
                        {navIndustriesLinks.map((l) => (
                          <li key={l.href}>
                            <Link
                              href={l.href}
                              role="menuitem"
                              className="block rounded-none px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700/35"
                              onClick={() => setDesktopMenu(null)}
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null}
              </div>

              <div 
                className="relative"
                onMouseEnter={() => setDesktopMenu("about")}
                onMouseLeave={() => setDesktopMenu(null)}
              >
                <Link
                  href="/about"
                  className={cn(
                    linkClass(desktopMenu === "about" || aboutActive),
                    "inline-flex items-center gap-1",
                  )}
                  onClick={() => setDesktopMenu(null)}
                >
                  About Us
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 transition-transform",
                      desktopMenu === "about" && "rotate-180",
                    )}
                    aria-hidden
                  />
                </Link>
                {desktopMenu === "about" ? (
                  <div
                    id="nav-about-panel"
                    className="absolute left-0 top-full z-50 pt-2 w-max min-w-[12rem]"
                    role="menu"
                  >
                    <div className="rounded-[24px] bg-white p-3 shadow-[0_16px_48px_rgba(15,23,42,0.12)] border border-neutral-100 backdrop-blur-md">
                      <ul className="flex flex-col gap-0.5">
                        {navAboutLinks.map((l) => (
                          <li key={l.href}>
                            <Link
                              href={l.href}
                              role="menuitem"
                              className="block rounded-none px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700/35"
                              onClick={() => setDesktopMenu(null)}
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null}
              </div>

            </nav>

            <div className="hidden shrink-0 lg:block">
              <ButtonLink href="/contact" variant="primary" size="md">
                Request a Quote
              </ButtonLink>
            </div>

            <button
              type="button"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-none bg-neutral-100 text-zinc-900 transition-colors hover:bg-neutral-200/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700/35 lg:hidden"
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-nav"
              aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileNavOpen((v) => !v)}
            >
              {mobileNavOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {mobileNavOpen ? (
          <div
            id="mobile-nav"
            className="max-h-[min(70vh,calc(100dvh-5rem))] overflow-y-auto bg-white px-4 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-md lg:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile primary">
              <Link
                href="/"
                onClick={closeAll}
                className={linkClass(currentPath === "/")}
              >
                Home
              </Link>

              <button
                type="button"
                className={cn(
                  linkClass(mobileAccordion === "products"),
                  "flex w-full items-center justify-between text-left",
                )}
                aria-expanded={mobileAccordion === "products"}
                aria-controls="mobile-products-accordion"
                onClick={() =>
                  setMobileAccordion((a) =>
                    a === "products" ? null : "products",
                  )
                }
              >
                Products
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform",
                    mobileAccordion === "products" && "rotate-180",
                  )}
                  aria-hidden
                />
              </button>
              {mobileAccordion === "products" ? (
                <div
                  id="mobile-products-accordion"
                  className="space-y-3 rounded-none bg-neutral-50 p-3 shadow-[0_4px_20px_rgba(15,23,42,0.06)]"
                >
                  {navProductsMega.map((col) => (
                    <div key={col.title}>
                      <Link
                        href={col.sectionHref}
                        className="text-sm font-semibold text-zinc-900 hover:underline"
                        onClick={closeAll}
                      >
                        {col.title}
                      </Link>
                      <ul className="mt-2 space-y-1 pl-3">
                        {col.links.map((l) => (
                          <li key={l.href}>
                            <Link
                              href={l.href}
                              className="block py-1 text-sm text-zinc-600 hover:text-zinc-950"
                              onClick={closeAll}
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : null}

              <button
                type="button"
                className={cn(
                  linkClass(mobileAccordion === "industries"),
                  "flex w-full items-center justify-between text-left",
                )}
                aria-expanded={mobileAccordion === "industries"}
                aria-controls="mobile-industries-accordion"
                onClick={() =>
                  setMobileAccordion((a) =>
                    a === "industries" ? null : "industries",
                  )
                }
              >
                Industries
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform",
                    mobileAccordion === "industries" && "rotate-180",
                  )}
                  aria-hidden
                />
              </button>
              {mobileAccordion === "industries" ? (
                <div
                  id="mobile-industries-accordion"
                  className="space-y-1 rounded-[20px] bg-neutral-50 px-2 py-2 shadow-[0_4px_20px_rgba(15,23,42,0.06)]"
                >
                  <ul className="flex flex-col gap-0.5">
                    {navIndustriesLinks.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="block rounded-none px-2 py-2 text-sm text-zinc-600 hover:bg-white hover:text-zinc-950"
                          onClick={closeAll}
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}





              <button
                type="button"
                className={cn(
                  linkClass(mobileAccordion === "about"),
                  "flex w-full items-center justify-between text-left mt-2",
                )}
                aria-expanded={mobileAccordion === "about"}
                aria-controls="mobile-about-accordion"
                onClick={() =>
                  setMobileAccordion((a) =>
                    a === "about" ? null : "about",
                  )
                }
              >
                About Us
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform",
                    mobileAccordion === "about" && "rotate-180",
                  )}
                  aria-hidden
                />
              </button>
              {mobileAccordion === "about" ? (
                <div
                  id="mobile-about-accordion"
                  className="space-y-1 rounded-[20px] bg-neutral-50 px-2 py-2 shadow-[0_4px_20px_rgba(15,23,42,0.06)]"
                >
                  <ul className="flex flex-col gap-0.5">
                    {navAboutLinks.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="block rounded-none px-2 py-2 text-sm text-zinc-600 hover:bg-white hover:text-zinc-950"
                          onClick={closeAll}
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </nav>
          </div>
        ) : null}
      </header>

      <div
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 p-3 shadow-[0_-12px_40px_rgba(15,23,42,0.1)] backdrop-blur-md supports-[padding:max(0px)]:pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden"
        aria-label="Request a quote"
      >
        <ButtonLink
          href="/contact"
          variant="primary"
          size="md"
          className="w-full"
        >
          Request a Quote
        </ButtonLink>
      </div>
    </>
  );
};
