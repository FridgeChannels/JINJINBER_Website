// Using mockData; dev team will replace with real API hook useFetchXxx()

export interface AdvantageRow {
  advantage: string; // from API
  meaning: string; // from API
}

export interface ProductCategory {
  title: string; // from API
  items: Array<{
    name: string; // from API
    description: string; // from API
  }>;
}

export interface Industry {
  title: string; // from API
  description: string; // from API
  keyProducts?: string; // from API
}

export interface GlobalPresenceItem {
  title: string; // from API
  description: string; // from API
}

export interface CertificationItem {
  text: string; // from API
}

export interface ManufacturingSection {
  title: string; // from API
  bullets: string[]; // from API
}

export interface Testimonial {
  quote: string; // from API
  author: string; // from API
}

export const homeMockData = {
  whatSetsUsApart: [
    "35+ Years of Manufacturing Heritage — Deep roots in casting, forging, and precision machining since 1988",
    "Vertically Integrated Production — From raw material sourcing and foundry casting to CNC machining, assembly, testing, and packaging — all under one roof",
    "Global Quality Standards — ISO 9001, ISO 14001, CE, API, UL/FM certified products meeting international codes and standards",
    "Customer-Centric Engineering — Our R&D team works directly with clients to customize solutions for unique project requirements",
    "Resilient Global Supply Chain — Strategically positioned logistics to ensure on-time delivery to the United States, Europe, and the Middle East",
  ],

  productCategories: [
    {
      title: "Valves",
      items: [
        {
          name: "Gate Valves",
          description:
            'Reliable shut-off valves engineered for full-bore, low-pressure-drop flow control. Available in cast iron, ductile iron, carbon steel, and stainless steel — from **2" to 48"** — for water, oil, gas, and steam applications.',
        },
        {
          name: "Butterfly Valves",
          description:
            "Lightweight, cost-effective quarter-turn valves for large-diameter pipelines. Wafer, lug, and double-flanged configurations with resilient or metal seats for **HVAC, water treatment, fire protection**, and industrial process control.",
        },
        {
          name: "Check Valves",
          description:
            "Prevent reverse flow and protect pumps, compressors, and piping systems. Swing check, dual-plate, silent check, and tilting disc designs available in a full range of materials and pressure classes.",
        },
        {
          name: "Ball Valves",
          description:
            "Precision-engineered floating and trunnion-mounted ball valves for tight shut-off in high-pressure, high-temperature, and corrosive environments. Ideal for **oil & gas, chemical processing**, and power generation.",
        },
        {
          name: "Globe Valves",
          description:
            "Superior throttling performance for flow regulation applications. Available in straight, angle, and Y-pattern configurations with various trim materials for extended service life.",
        },
        {
          name: "Plug Valves",
          description:
            "Rugged, dependable plug valves for slurry, abrasive, and high-viscosity media. Lubricated and non-lubricated options for **municipal water, wastewater**, and industrial applications.",
        },
        {
          name: "Fire Protection Valves (UL/FM Listed)",
          description:
            "Purpose-built for life safety — including **OS&Y gate valves, indicator post valves, butterfly valves, alarm check valves, and deluge valves** — all listed and approved to the strictest fire protection codes.",
        },
      ],
    },
    {
      title: "Pumps",
      items: [
        {
          name: "Centrifugal Pumps",
          description:
            "High-efficiency centrifugal pumps for water supply, irrigation, HVAC, and industrial process applications. Single-stage and multi-stage options with capacities up to **5,000 m³/h**.",
        },
        {
          name: "Fire Pumps",
          description:
            "UL/FM listed fire pump packages including **end-suction, horizontal split-case, and vertical turbine fire pumps** — engineered to meet NFPA 20 requirements for commercial, industrial, and high-rise applications.",
        },
        {
          name: "Submersible Pumps",
          description:
            "Durable submersible pumps for **dewatering, sewage, drainage**, and deep well applications. Corrosion-resistant construction with high-efficiency motors for reliable underground performance.",
        },
        {
          name: "Booster Pumps",
          description:
            "Compact, high-pressure booster systems for **municipal water distribution, building water supply**, and irrigation networks. Variable speed drive options for energy savings.",
        },
      ],
    },
    {
      title: "Pipe Fittings & Accessories",
      items: [
        {
          name: "Malleable Iron Fittings",
          description:
            "Galvanized and black, threaded fittings conforming to ASME B16.3",
        },
        {
          name: "Grooved Fittings & Couplings",
          description:
            "Quick-connect solutions for fire protection, HVAC, and industrial piping",
        },
        {
          name: "Flanges",
          description:
            "Slip-on, weld-neck, blind, and socket-weld flanges per ASME B16.5 / B16.47",
        },
        {
          name: "Strainers & Filters",
          description:
            "Y-strainers, basket strainers, and duplex strainers for pipeline protection",
        },
      ],
    },
  ] satisfies ProductCategory[],

  industries: [
    {
      title: "Oil & Gas",
      description:
        "From upstream drilling to downstream refining and distribution, Jinjieber supplies **API-certified gate, ball, check, and plug valves** built to withstand extreme pressures, temperatures, and corrosive environments. Our products are trusted on pipelines, platforms, and processing facilities across the Middle East, North America, and Central Asia.",
      keyProducts:
        "Key Products: API 600/602/603 Gate Valves · API 6D Ball Valves · Pressure Seal Valves · Pipeline Check Valves",
    },
    {
      title: "Municipal Water & Wastewater",
      description:
        "Clean water is a human right. Jinjieber provides **resilient-seated gate valves, butterfly valves, and check valves** specifically designed for drinking water systems, water treatment plants, and wastewater infrastructure. All products meet **AWWA standards** and are **NSF/ANSI 61 certified** for contact with potable water.",
      keyProducts:
        "Key Products: AWWA C509/C515 Gate Valves · AWWA C504 Butterfly Valves · Silent Check Valves · Air Release Valves",
    },
    {
      title: "Irrigation & Agriculture",
      description:
        "Efficient water management starts with reliable flow control. Our **butterfly valves, check valves, and centrifugal pumps** help agricultural operations maximize water delivery while minimizing waste — from drip irrigation networks to large-scale canal systems.",
      keyProducts:
        "Key Products: Butterfly Valves · Foot Valves · Centrifugal Irrigation Pumps · Booster Pump Systems",
    },
    {
      title: "Fire Protection",
      description:
        "When lives are on the line, there's no room for compromise. Jinjieber's **UL/FM listed fire protection valves and pumps** are installed in commercial buildings, industrial facilities, airports, and high-rise towers worldwide. Every product undergoes rigorous third-party testing and certification.",
      keyProducts:
        "Key Products: UL/FM OS&Y Gate Valves · Alarm Check Valves · Deluge Valves · Fire Pump Packages · Indicator Posts",
    },
    {
      title: "Power Generation",
      description:
        "Reliable valves for **thermal, nuclear, and renewable energy** facilities. Our high-temperature, high-pressure globe, gate, and check valves are engineered for steam systems, cooling circuits, and turbine auxiliaries.",
    },
    {
      title: "Building & HVAC",
      description:
        "From comfort cooling to heating systems, Jinjieber supplies **balancing valves, butterfly valves, and control valves** for commercial and residential buildings — engineered for long service life and energy efficiency.",
    },
  ] satisfies Industry[],

  globalPresence: [
    {
      title: "🇨🇳 China — Manufacturing & Innovation Hub",
      description:
        "Our state-of-the-art manufacturing campus houses **advanced foundries, CNC machining centers, automated assembly lines**, and a full-service quality lab. With over **500 skilled engineers and production specialists**, this is where world-class valves and pumps are born.",
    },
    {
      title: "🇺🇸 North America — Sales & Distribution Center",
      description:
        "Strategically located to serve the **United States and Canada**, our North America operation provides **local inventory, technical sales support, and rapid logistics** — so you get what you need, when you need it.",
    },
    {
      title: "🇸🇦 Middle East — Regional Partnership Hub",
      description:
        "With long-standing partnerships across **Saudi Arabia, UAE, Qatar, Kuwait**, and beyond, our Middle East operations provide on-the-ground project support for the region's massive oil & gas, desalination, and infrastructure projects.",
    },
    {
      title: "🇩🇪 Europe — Engineering & Compliance Office",
      description:
        "Our European office ensures all products meet **EN, DIN, BS, and PED standards**, providing localized technical support and certification management for the European market.",
    },
  ] satisfies GlobalPresenceItem[],

  advantages: [
    {
      advantage: "35+ Years of Experience",
      meaning:
        "Deep metallurgical knowledge and proven manufacturing processes refined over decades",
    },
    {
      advantage: "Vertically Integrated",
      meaning:
        "Casting, forging, machining, assembly, testing, and coating — all in-house for complete quality control",
    },
    {
      advantage: "Global Certifications",
      meaning:
        "ISO 9001 · ISO 14001 · CE · API 6D · API 600 · UL/FM · AWWA · PED · NSF 61",
    },
    {
      advantage: "Custom Engineering",
      meaning: "OEM/ODM capabilities with dedicated R&D team for project-specific solutions",
    },
    {
      advantage: "Competitive Pricing",
      meaning: "Direct-from-manufacturer pricing without sacrificing quality or compliance",
    },
    {
      advantage: "Fast Lead Times",
      meaning: "Large standard inventory + rapid custom production to meet urgent project timelines",
    },
    {
      advantage: "After-Sales Support",
      meaning: "Dedicated account managers, technical assistance, and warranty support in your time zone",
    },
  ] satisfies AdvantageRow[],

  certifications: [
    { text: "ISO 9001:2015 — Quality Management System" },
    { text: "ISO 14001:2015 — Environmental Management System" },
    { text: "API 6D / API 600 / API 602 / API 603 — American Petroleum Institute Standards" },
    { text: "CE / PED (97/23/EC) — European Pressure Equipment Directive" },
    { text: "UL / FM Approved — Fire Protection Product Certification" },
    { text: "AWWA C509 / C515 / C504 — American Water Works Association Standards" },
    { text: "NSF/ANSI 61 — Drinking Water System Components" },
    { text: "WRAS — Water Regulations Advisory Scheme (UK)" },
    { text: "AS/NZS — Australian/New Zealand Standards" },
  ] satisfies CertificationItem[],

  manufacturing: [
    {
      title: "Foundry & Casting",
      bullets: [
        "**Sand casting, investment casting, and precision lost-wax casting**",
        "Materials: Cast iron, ductile iron, carbon steel, stainless steel (CF8, CF8M, CF3, CF3M), duplex steel, bronze, and specialty alloys",
        "Capacity: **30,000+ metric tons per year**",
      ],
    },
    {
      title: "Forging",
      bullets: [
        "Closed-die and open-die forging for **high-pressure valve bodies, bonnets, and trim components**",
        "Forging presses up to **4,000 tons**",
      ],
    },
    {
      title: "CNC Machining",
      bullets: [
        "**50+ CNC machining centers** including 3-axis, 4-axis, and 5-axis machines",
        "Tolerances to **±0.01mm** for critical sealing surfaces",
      ],
    },
    {
      title: "Assembly & Testing",
      bullets: [
        "Dedicated **clean-room assembly** areas for fire protection and potable water products",
        "**100% hydrostatic shell and seat testing** per API 598 / EN 12266",
        "Pneumatic low-pressure seat testing, fugitive emission testing, and cryogenic testing available",
      ],
    },
    {
      title: "Surface Treatment",
      bullets: [
        "Epoxy coating (FBE), powder coating, hot-dip galvanizing, electroless nickel plating, and PTFE lining",
        "Salt spray testing up to **1,000+ hours** for corrosion validation",
      ],
    },
  ] satisfies ManufacturingSection[],

  testimonials: [
    {
      quote:
        '"Jinjieber has been our go-to valve supplier for over 15 years. Their quality is consistently excellent, and their team truly understands the requirements of municipal water infrastructure projects."',
      author: "— *Water Utility Director, Texas, USA*",
    },
    {
      quote:
        '"We\'ve sourced fire protection valves from multiple suppliers. Jinjieber stands out for their UL/FM compliance, competitive pricing, and ability to deliver large orders on tight schedules."',
      author: "— *Fire Protection Contractor, Dubai, UAE*",
    },
    {
      quote:
        '"From custom valve engineering to final delivery at our European warehouse, Jinjieber handles the entire process seamlessly. They are a true manufacturing partner, not just a supplier."',
      author: "— *Procurement Manager, Industrial Distributor, Germany*",
    },
    {
      quote:
        '"Their investment in modern CNC equipment and testing facilities gives us confidence that every valve meets spec. In the oil and gas business, you can\'t afford to cut corners — and Jinjieber never does."',
      author: "— *Project Engineer, EPC Contractor, Saudi Arabia*",
    },
  ] satisfies Testimonial[],
} as const;

