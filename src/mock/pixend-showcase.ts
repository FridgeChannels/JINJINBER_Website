// Using mockData; dev team will replace with real API hook useFetchXxx()
// Visual pattern inspired by https://pixendagency.framer.website/ — content is Jinjieber-specific.

export interface PixendWorkItem {
  id: string; // from API
  title: string; // from API
  category: string; // from API
  year: string; // from API
  href: string; // from API
}

export interface PixendServiceItem {
  id: string; // from API
  title: string; // from API
  body: string; // from API
}

export interface PixendTestimonial {
  id: string; // from API
  quote: string; // from API
  name: string; // from API
  role: string; // from API
}

export interface PixendProcessStep {
  id: string; // from API
  step: string; // from API
  title: string; // from API
  body: string; // from API
}

export interface PixendFaqItem {
  id: string; // from API
  question: string; // from API
  answer: string; // from API
}

export const pixendShowcaseMock = {
  hero: {
    /** 对齐 Pixend 单行 eyebrow（原站为 “Single Subscription Unlimited Design”） */
    eyebrow: "Valve programs · Global certification · 35+ years",
    /** 主标题；换行用 \n，样式按 Framer preset 1n8rbsf（80/60/40px, weight 500） */
    title: "Engineering flow,\nDelivering trust.",
    ctaLabel: "Get started now",
    ctaHref: "/contact",
    /** 对齐 Pixend 底部社交条（占位链接，开发可替换） */
    social: [
      { id: "so1", label: "LinkedIn", href: "https://www.linkedin.com/" },
      { id: "so2", label: "Dribbble", href: "https://dribbble.com/" },
      { id: "so3", label: "Behance", href: "https://www.behance.net/" },
    ] as const,
  },

  about: {
    label: "About us",
    heading:
      "We combine casting, precision machining, global certifications, and field-proven reliability—so your systems stay safe under pressure.",
    readMoreHref: "/#about-deep",
  },

  recentWork: {
    label: "Recent work",
    items: [
      {
        id: "w1",
        title: "API pipeline package",
        category: "Oil & gas",
        year: "2024",
        href: "/products#api-600-602-603-gate-valves",
      },
      {
        id: "w2",
        title: "Municipal water upgrade",
        category: "Waterworks",
        year: "2023",
        href: "/products#awwa-c509-c515-gate-valves",
      },
      {
        id: "w3",
        title: "High-rise fire pump system",
        category: "Fire protection",
        year: "2025",
        href: "/products#ul-fm-os-y-gate-valves",
      },
      {
        id: "w4",
        title: "Desalination valve suite",
        category: "Infrastructure",
        year: "2024",
        href: "/products",
      },
    ] satisfies PixendWorkItem[],
  },

  services: {
    label: "Our services",
    items: [
      {
        id: "s1",
        title: "Valve engineering",
        body: "Gate, butterfly, ball, check, globe, plug, and UL/FM fire protection valves—specified, tested, and documented for international codes.",
      },
      {
        id: "s2",
        title: "Pump systems",
        body: "Centrifugal, fire, submersible, and booster packages engineered for reliability, efficiency, and compliant performance in the field.",
      },
      {
        id: "s3",
        title: "Manufacturing & QA",
        body: "Vertically integrated production from foundry to assembly, with hydrostatic testing and traceability aligned to API, AWWA, and ISO programs.",
      },
      {
        id: "s4",
        title: "Global logistics",
        body: "Regional stocking and export documentation to keep large projects moving—North America, Europe, and the Middle East supported locally.",
      },
    ] satisfies PixendServiceItem[],
  },

  testimonials: {
    label: "Clients feedback",
    items: [
      {
        id: "t1",
        quote:
          "Outstanding manufacturing discipline. Documentation, testing records, and on-time shipments made our municipal bid straightforward.",
        name: "Jordan Lee",
        role: "Project manager · USA",
      },
      {
        id: "t2",
        quote:
          "Their UL/FM portfolio is consistent batch-to-batch. We trust them for high-rise packages where there is zero room for surprises.",
        name: "Amira Hassan",
        role: "Fire protection contractor · UAE",
      },
      {
        id: "t3",
        quote:
          "From custom trim requirements to third-party witness tests, the team stayed responsive. It felt like an engineering partner, not a catalog vendor.",
        name: "Thomas Weber",
        role: "Procurement lead · Germany",
      },
    ] satisfies PixendTestimonial[],
  },

  process: {
    label: "Our process",
    steps: [
      {
        id: "p1",
        step: "01.",
        title: "Discover",
        body: "Share specs, standards, delivery window, and inspection requirements—we align on scope fast.",
      },
      {
        id: "p2",
        step: "02.",
        title: "Engineer",
        body: "We finalize materials, trims, coatings, and test plans—then lock BOM and documentation for production.",
      },
      {
        id: "p3",
        step: "03.",
        title: "Deliver",
        body: "Manufacture, test, pack, and ship with traceability—supported by after-sales technical assistance.",
      },
    ] satisfies PixendProcessStep[],
  },

  partnership: {
    label: "Partnership",
    title: "OEM & project programs",
    body: "Unlock a manufacturing partner with deep metallurgy, global certifications, and responsive program management—built for long-running infrastructure and energy projects.",
    priceLine: "Quote within 24 hours",
    priceSub: "Typical RFQ turnaround for standard configurations",
    ctaLabel: "Get started now",
    ctaHref: "/contact",
    features: [
      "Dedicated technical sales",
      "Lot traceability & test reports",
      "Repeatable quality systems (ISO)",
      "Regional stocking options",
      "Flexible incoterms & export packing",
    ],
  },

  faq: {
    label: "Common questions",
    items: [
      {
        id: "f1",
        question: "What standards can you certify to?",
        answer:
          "Common programs include ISO 9001/14001, API, CE/PED, UL/FM, AWWA, NSF/ANSI 61, and more—tell us your spec and region, and we map compliance.",
      },
      {
        id: "f2",
        question: "How long does production take?",
        answer:
          "Lead time depends on material, bore, pressure class, and coating. Standard catalog items can ship faster; engineered lots follow MRP after approval.",
      },
      {
        id: "f3",
        question: "Do you support witness testing?",
        answer:
          "Yes—third-party inspection and witness hydrostatic/pneumatic testing can be scheduled with advance notice.",
      },
      {
        id: "f4",
        question: "Can you support custom engineering?",
        answer:
          "Our R&D team supports OEM/ODM programs, including custom trims, materials, and special testing protocols.",
      },
      {
        id: "f5",
        question: "How do we request a quote?",
        answer:
          "Use the contact page with line list, standards, quantities, and delivery destination—our team responds with pricing and clarifying questions.",
      },
    ] satisfies PixendFaqItem[],
  },

  aboutDeep: {
    label: "Who we are",
    paragraphs: [
      "Jinjieber is a world-class manufacturer and supplier of industrial valves, pumps, and fluid control solutions. Founded in 1988, we bring over 35 years of engineering expertise, manufacturing excellence, and unwavering commitment to quality to customers across the globe.",
      "Headquartered in China with strategic operations serving North America, Europe, and the Middle East, Jinjieber has grown from a specialized casting workshop into a fully integrated valve and pump enterprise — trusted by engineers, contractors, and distributors on every continent.",
    ] as const,
  },
} as const;
