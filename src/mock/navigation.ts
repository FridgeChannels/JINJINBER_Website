// Using mockData; dev team will replace with CMS / route config if needed

import { slugify } from "@/lib/slugify";
import { homeMockData } from "@/mock/home";

export interface NavSubLink {
  label: string; // from CMS
  href: string; // from CMS
}

export interface MegaColumn {
  title: string; // from CMS
  sectionHref: string; // anchor to category block
  links: NavSubLink[];
}

export const navAboutLinks: NavSubLink[] = [
  { label: "Our Story", href: "/about#our-story" },
  { label: "Mission", href: "/about#mission" },
  { label: "Why Jinjieber", href: "/about#why-choose-us" },
];

/** 与产品页 `slugify(cat.title)` / `slugify(item.name)` 一致 */
export const navProductsMega: MegaColumn[] = homeMockData.productCategories.map(
  (cat) => ({
    title: cat.title,
    sectionHref: `/products#${slugify(cat.title)}`,
    links: cat.items.map((item) => ({
      label: item.name,
      href: `/products#${slugify(item.name)}`,
    })),
  }),
);

const industry = (shortLabel: string): NavSubLink => ({
  label: shortLabel,
  href: `/industries#${slugify(shortLabel)}`,
});

export const navIndustriesLinks: NavSubLink[] = [
  industry("Oil & Gas"),
  industry("Municipal Water"),
  industry("Irrigation"),
  industry("Fire Protection"),
  industry("Power Generation"),
  industry("Building & HVAC"),
];



export const navCapabilitiesLinks: NavSubLink[] = [
  { label: "Services", href: "/#services-section" },
  { label: "Process", href: "/#process-section" },
];
