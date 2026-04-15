export interface ProductSpecification {
  key: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  parentCategory: "Valves" | "Pumps" | "Fittings";
  description: string;
  image: string;
  specifications: ProductSpecification[];
  purpose: string;
}

export const products: Product[] = [
  // --- VALVES (11 products, 6 categories) ---
  {
    id: "v1",
    slug: "resilient-seated-gate-valve",
    name: "Resilient Seated Gate Valve",
    category: "Gate Valves",
    parentCategory: "Valves",
    description: "High-performance gate valve designed for bubble-tight shut-off in water supply and wastewater systems. Features a vulcanized wedge for superior sealing.",
    image: "/gate_valve_commercial_1776252899266.png",
    specifications: [
      { key: "Standard", value: "AWWA C509 / C515" },
      { key: "Material", value: "Ductile Iron (GJS500-7)" },
      { key: "Size Range", value: "2\" - 24\"" },
      { key: "Pressure", value: "PN10 / PN16 / 250 PSI" }
    ],
    purpose: "Commonly used in municipal water distribution, industrial cooling systems, and sewage treatment plants."
  },
  {
    id: "v2",
    slug: "os-y-rising-stem-gate-valve",
    name: "OS&Y Rising Stem Gate Valve",
    category: "Gate Valves",
    parentCategory: "Valves",
    description: "Outside Screw and Yoke gate valve with a rising stem for easy visual indication of valve position. Ideal for critical industrial and fire protection paths.",
    image: "/placeholders/Product/v2.jpg",
    specifications: [
      { key: "Standard", value: "ASME B16.34 / API 600" },
      { key: "Material", value: "Cast Carbon Steel / WCB" },
      { key: "Size Range", value: "2\" - 36\"" },
      { key: "Ends", value: "Flanged / Butt-weld" }
    ],
    purpose: "Primary choice for high-pressure steam, oil and gas pipelines, and power plant circuit isolation."
  },
  {
    id: "v3",
    slug: "wafer-type-butterfly-valve",
    name: "Wafer Type Butterfly Valve",
    category: "Butterfly Valves",
    parentCategory: "Valves",
    description: "Compact and lightweight butterfly valve designed for easy installation between pipe flanges. Features a concentric disc design for effective flow control.",
    image: "/butterfly_valve_wafer_1776253014793.png",
    specifications: [
      { key: "Seat", value: "EPDM / NBR / Viton" },
      { key: "Body", value: "Ductile Iron / CI" },
      { key: "Operation", value: "Lever / Gear / Actuator" },
      { key: "Connection", value: "Wafer" }
    ],
    purpose: "Widely used in HVAC systems, irrigation, and food processing for low-pressure fluid regulation."
  },
  {
    id: "v4",
    slug: "double-flanged-butterfly-valve",
    name: "Double Flanged Butterfly Valve",
    category: "Butterfly Valves",
    parentCategory: "Valves",
    description: "Rugged double-flanged butterfly valve designed for heavy-duty service in large diameter pipelines. Provides bidirectional bubble-tight shut-off.",
    image: "/placeholders/Product/v4.jpg",
    specifications: [
      { key: "Standard", value: "EN 593 / AWWA C504" },
      { key: "Material", value: "Ductile Iron / Cast Steel" },
      { key: "Size Range", value: "12\" - 80\"" },
      { key: "Seat Type", value: "Resilient / Metal" }
    ],
    purpose: "Primary use in large water mains, desalination plants, and industrial cooling water loops."
  },
  {
    id: "v5",
    slug: "swing-check-valve",
    name: "Swing Check Valve",
    category: "Check Valves",
    parentCategory: "Valves",
    description: "Automatic non-return valve that allows flow in only one direction. Designed with a clear-way, full-port flow for minimum pressure drop.",
    image: "/placeholders/Product/v5.jpg",
    specifications: [
      { key: "Standard", value: "BS 5153 /MSS SP-71" },
      { key: "Material", value: "Ductile Iron / CI" },
      { key: "Pressure", value: "Class 125 / 150" },
      { key: "Sizes", value: "2\" - 24\"" }
    ],
    purpose: "Installed after pumps to prevent water hammer and reverse flow in pumping stations."
  },
  {
    id: "v6",
    slug: "dual-plate-wafer-check-valve",
    name: "Dual Plate Wafer Check Valve",
    category: "Check Valves",
    parentCategory: "Valves",
    description: "Space-saving check valve with two spring-loaded plates. Provides fast response and silent closure compared to traditional swing checks.",
    image: "/placeholders/Product/v6.jpg",
    specifications: [
      { key: "Design", value: "API 594" },
      { key: "Weight", value: "80% lighter than swing" },
      { key: "Materials", value: "SS304 / SS316 / WCB" },
      { key: "Sealing", value: "Buna-N / Viton / Metal" }
    ],
    purpose: "Ideal for tight spaces in chemical processing, oil refineries, and marine applications."
  },
  {
    id: "v7",
    slug: "floating-ball-valve",
    name: "Floating Ball Valve",
    category: "Ball Valves",
    parentCategory: "Valves",
    description: "Reliable 2-piece or 3-piece ball valve for high-cycle industrial service. Provides quick 1/4 turn operation and bubble-tight shut-off.",
    image: "/placeholders/Product/v7.jpg",
    specifications: [
      { key: "Standard", value: "ASME B16.34 / API 608" },
      { key: "Body", value: "WCB / CF8 / CF8M" },
      { key: "Pressure", value: "Class 150 - 600" },
      { key: "Operation", value: "Manual / Pneumatic" }
    ],
    purpose: "Common in oil & gas distribution, petrochemical plants, and fine chemical processing."
  },
  {
    id: "v8",
    slug: "trunnion-mounted-ball-valve",
    name: "Trunnion Mounted Ball Valve",
    category: "Ball Valves",
    parentCategory: "Valves",
    description: "Heavy-duty ball valve with fixed trunnion support for the ball. Designed for high pressure and large sizes where floating balls are not suitable.",
    image: "/placeholders/Product/v8.jpg",
    specifications: [
      { key: "Standard", value: "API 6D" },
      { key: "Sizes", value: "2\" - 48\"" },
      { key: "Feature", value: "Double Block and Bleed" },
      { key: "Sealing", value: "Soft / Metal Seated" }
    ],
    purpose: "Critical isolation for pipeline transmission, gas storage, and heavy industrial process manifolds."
  },
  {
    id: "v9",
    slug: "cast-steel-globe-valve",
    name: "Cast Steel Globe Valve",
    category: "Globe Valves",
    parentCategory: "Valves",
    description: "Precision throttling valve designed for regulating fluid flow. Features a spherical body and a movable plug for accurate control.",
    image: "/placeholders/Product/v9.jpg",
    specifications: [
      { key: "Standard", value: "BS 1873 / ASME B16.34" },
      { key: "Material", value: "ASTM A216 WCB" },
      { key: "Class", value: "150 / 300 / 600" },
      { key: "Ends", value: "Flanged RF / RTJ" }
    ],
    purpose: "Essential for steam control, boiler feed water, and general throttling in liquid systems."
  },
  {
    id: "v10",
    slug: "stainless-steel-bellow-globe-valve",
    name: "SS Bellow Seal Globe Valve",
    category: "Globe Valves",
    parentCategory: "Valves",
    description: "Zero-leakage globe valve with a bellows seal to prevent stem emissions. Specifically designed for hazardous and toxic media.",
    image: "/placeholders/Product/v10.jpg",
    specifications: [
      { key: "Bellow", value: "Inconel / Multi-ply SS" },
      { key: "Leakage", value: "Zero (Bellows)" },
      { key: "Pressure", value: "PN16 - PN40 / CL150" },
      { key: "Safety", value: "Stem-secondary seal" }
    ],
    purpose: "Used in pharmaceutical, chemical, and nuclear industries where fugitive emissions must be eliminated."
  },
  {
    id: "v11",
    slug: "eccentric-plug-valve",
    name: "Eccentric Plug Valve",
    category: "Plug Valves",
    parentCategory: "Valves",
    description: "Quarter-turn valve with an eccentric action plug that lifts from the seat during opening. Designed for slurry and solids-laden media.",
    image: "/placeholders/Product/v11.jpg",
    specifications: [
      { key: "Body", value: "Ductile Iron (Lined)" },
      { key: "Plug", value: "EPDM / NBR Encapsulated" },
      { key: "Port", value: "Rectangular (80% / 100%)" },
      { key: "Pressure", value: "175 PSI / 250 PSI" }
    ],
    purpose: "Specifically designed for sewage, slurry, and mining tailings handling."
  },

  // --- PUMPS (8 products, 4 categories) ---
  {
    id: "p1",
    slug: "end-suction-centrifugal-pump",
    name: "End Suction Centrifugal Pump",
    category: "Centrifugal Pumps",
    parentCategory: "Pumps",
    description: "Standard industrial centrifugal pump for high-efficiency water transfer. Easy maintenance design with back pull-out feature.",
    image: "/centrifugal_pump_industrial_1776252919647.png",
    specifications: [
      { key: "Standard", value: "ISO 2858 / DIN 24255" },
      { key: "Flow Rate", value: "Up to 1200 m3/h" },
      { key: "Head", value: "Up to 150 m" },
      { key: "Speed", value: "1450 / 2900 RPM" }
    ],
    purpose: "General industrial water supply, HVAC cooling, and large scale irrigation."
  },
  {
    id: "p2",
    slug: "multistage-vertical-centrifugal-pump",
    name: "Vertical Multistage Pump",
    category: "Centrifugal Pumps",
    parentCategory: "Pumps",
    description: "High-pressure pump with multiple impellers in a vertical stack. Saves space and provides superior pressure for high-rise applications.",
    image: "/placeholders/Product/p2.jpg",
    specifications: [
      { key: "Material", value: "All Stainless Steel (SS304/316)" },
      { key: "Pressure", value: "Up to 40 bar" },
      { key: "Temp", value: "-20 to 120 C" },
      { key: "Efficiency", value: "Premium IE3 Motors" }
    ],
    purpose: "High-pressure boosting for commercial buildings, industrial RO systems, and boiler feed."
  },
  {
    id: "p3",
    slug: "ul-fm-horizontal-split-case-fire-pump",
    name: "UL/FM Split Case Fire Pump",
    category: "Fire Pumps",
    parentCategory: "Pumps",
    description: "Dual-volute horizontal split case pump specifically listed for fire protection service. High capacity and high reliability.",
    image: "/placeholders/Product/p3.jpg",
    specifications: [
      { key: "Approval", value: "UL Listed / FM Approved" },
      { key: "Flow", value: "500 - 5000 GPM" },
      { key: "Pressure", value: "Up to 300 PSI" },
      { key: "Drive", value: "Diesel or Electric" }
    ],
    purpose: "Dedicated fire suppression for airports, warehouses, and industrial complexes."
  },
  {
    id: "p4",
    slug: "compact-vertical-turbine-fire-pump",
    name: "Vertical Turbine Fire Pump",
    category: "Fire Pumps",
    parentCategory: "Pumps",
    description: "Fire pump for applications where the water source is below ground level. Provides suction lift with submerged impellers.",
    image: "/placeholders/Product/p4.jpg",
    specifications: [
      { key: "Standard", value: "NFPA 20" },
      { key: "Depth", value: "Up to 50 meters" },
      { key: "Materials", value: "CI / Bronze / SS Trim" },
      { key: "Approval", value: "UL / FM" }
    ],
    purpose: "Fire protection using lake, river, or underground tank water sources."
  },
  {
    id: "p5",
    slug: "heavy-duty-sewage-submersible-pump",
    name: "Sewage Submersible Pump",
    category: "Submersible Pumps",
    parentCategory: "Pumps",
    description: "Clog-free submersible pump with non-clog impeller and mechanical seals. Designed for continuous underwater operation.",
    image: "/submersible_pump_sewage_1776253032452.png",
    specifications: [
      { key: "Casing", value: "Cast Iron" },
      { key: "Impeller", value: "Vortex / Single-channel" },
      { key: "Power", value: "1.5 kW - 110 kW" },
      { key: "IP Rating", value: "IP68" }
    ],
    purpose: "Industrial wastewater lifting, municipal sewage pits, and flood drainage."
  },
  {
    id: "p6",
    slug: "deep-well-stainless-steel-submersible-pump",
    name: "Deep Well Submersible Pump",
    category: "Submersible Pumps",
    parentCategory: "Pumps",
    description: "Slim-line stainless steel pump for borehole water extraction. Multi-stage design for high head lift.",
    image: "/placeholders/Product/p6.jpg",
    specifications: [
      { key: "Diameter", value: "4\" / 6\" / 8\" / 10\"" },
      { key: "Material", value: "AISI 304 / 316 / 904L" },
      { key: "Head", value: "Up to 600m" },
      { key: "Motor", value: "Water-filled / Oil-filled" }
    ],
    purpose: "Agricultural borehole irrigation and municipal groundwater supply."
  },
  {
    id: "p7",
    slug: "smart-variable-frequency-booster-system",
    name: "Smart VFD Booster System",
    category: "Booster Pumps",
    parentCategory: "Pumps",
    description: "Fully automated constant pressure water supply system using VFD controllers. Optimized for energy savings and comfort.",
    image: "/placeholders/Product/p7.jpg",
    specifications: [
      { key: "Pump Count", value: "2 - 6 Parallel Pumps" },
      { key: "Control", value: "Smart PLC with Touchscreen" },
      { key: "Efficiency", value: "IE4/IE5 PM Motors" },
      { key: "Protection", value: "Dry-run / Over-volt" }
    ],
    purpose: "Primary water pressure boosting for high-rise residential and hotel buildings."
  },
  {
    id: "p8",
    slug: "inline-booster-circulator-pump",
    name: "Inline Circulator Pump",
    category: "Booster Pumps",
    parentCategory: "Pumps",
    description: "Compact inline pump for cold and hot water circulation. Zero leakage design with quiet operation.",
    image: "/placeholders/Product/p8.jpg",
    specifications: [
      { key: "Type", value: "Single-stage Inline" },
      { key: "Flange", value: "PN10 / PN16" },
      { key: "Material", value: "CI / Bronze / SS" },
      { key: "Motor", value: "Canned (Wet rotor)" }
    ],
    purpose: "Hot water circulation in HVAC, boiler circuits, and industrial secondary loops."
  },

  // --- FITTINGS (8 products, 4 categories) ---
  {
    id: "f1",
    slug: "galvanized-iron-elbow-fitting",
    name: "Galvanized GI Elbow",
    category: "Malleable Iron Fittings",
    parentCategory: "Fittings",
    description: "Hot-dip galvanized malleable iron fitting for plumbing and industrial piping. Features high durability and corrosion resistance.",
    image: "/placeholders/Product/f1.jpg",
    specifications: [
      { key: "Standard", value: "BS EN 10242 / ISO 49" },
      { key: "Threads", value: "ISO 7/1 (BSPT) / NPT" },
      { key: "Finish", value: "Hot-dip Galvanized" },
      { key: "Pressure", value: "PN25 / 300 PSI" }
    ],
    purpose: "Used in fire protection sprinkler pipes, gas lines, and domestic water plumbing."
  },
  {
    id: "f2",
    slug: "malleable-iron-tee-fitting",
    name: "Malleable Iron Tee",
    category: "Malleable Iron Fittings",
    parentCategory: "Fittings",
    description: "Three-way connector for fluid distribution. High tensile strength malleable iron construction for leak-free performance.",
    image: "/placeholders/Product/f2.jpg",
    specifications: [
      { key: "Material", value: "Heat-treated Malleable Iron" },
      { key: "Sizes", value: "1/4\" - 4\"" },
      { key: "Color", value: "Black / Galvanized" },
      { key: "Testing", value: "100% Leak Tested" }
    ],
    purpose: "Air lines, oil piping, and industrial liquid transport systems."
  },
  {
    id: "f3",
    slug: "flexible-grooved-coupling",
    name: "Flexible Grooved Coupling",
    category: "Grooved Fittings",
    parentCategory: "Fittings",
    description: "Quick-connect coupling for grooved end pipe. Accommodates expansion, contraction, and deflection in piping systems.",
    image: "/grooved_coupling_industrial_1776252939815.png",
    specifications: [
      { key: "Material", value: "Ductile Iron ASTM A536" },
      { key: "Gasket", value: "EPDM / Nitrile / Silicone" },
      { key: "Coating", value: "Epoxy (Red/Orange/Blue)" },
      { key: "Sizes", value: "1\" - 12\"" }
    ],
    purpose: "Fire protection systems, HVAC mains, and quick-assembly industrial lines."
  },
  {
    id: "f4",
    slug: "grooved-mechanical-tee",
    name: "Grooved Mechanical Tee",
    category: "Grooved Fittings",
    parentCategory: "Fittings",
    description: "Provides a threaded or grooved outlet along a pipe run without cutting or welding. Features a saddle-style design.",
    image: "/placeholders/Product/f4.jpg",
    specifications: [
      { key: "Approval", value: "UL Listed / FM Approved" },
      { key: "Efficiency", value: "No welding required" },
      { key: "Pressure", value: "300 PSI - 500 PSI" },
      { key: "Outlet", value: "Female Threaded / Grooved" }
    ],
    purpose: "Ideal for adding branch lines to existing fire protection or industrial pipes."
  },
  {
    id: "f5",
    slug: "slip-on-carbon-steel-flange",
    name: "Slip-On Carbon Steel Flange",
    category: "Flanges",
    parentCategory: "Fittings",
    description: "Standard slip-on flange for high-pressure piping assemblies. Manufactured from high-grade carbon steel.",
    image: "/placeholders/Product/f5.jpg",
    specifications: [
      { key: "Standard", value: "ASME B16.5" },
      { key: "Material", value: "ASTM A105" },
      { key: "Face", value: "Raised Face (RF)" },
      { key: "Rating", value: "Cl 150 / 300 / 600" }
    ],
    purpose: "Low speed, low pressure industrial pipelines for oil, gas, and chemicals."
  },
  {
    id: "f6",
    slug: "stainless-steel-blind-flange",
    name: "SS Blind Flange",
    category: "Flanges",
    parentCategory: "Fittings",
    description: "Solid flange used to cap the end of a pipe or vessel. Corrosion resistant for harsh environments.",
    image: "/placeholders/Product/f6.jpg",
    specifications: [
      { key: "Material", value: "ASTM A182 F304L / F316L" },
      { key: "Standard", value: "ANSI / DIN / BS / JIS" },
      { key: "Finish", value: "Satin / Mirror" },
      { key: "Thickness", value: "Per pressure class" }
    ],
    purpose: "Sealing pipe ends in chemical labs, food processing, and offshore platforms."
  },
  {
    id: "f7",
    slug: "industrial-y-strainer",
    name: "Industrial Y-Strainer",
    category: "Strainers & Filters",
    parentCategory: "Fittings",
    description: "Protective fitting that filters out solids to protect downstream valves and pumps. Low pressure drop design.",
    image: "/placeholders/Product/f7.jpg",
    specifications: [
      { key: "Body", value: "CI / DI / WCB / SS" },
      { key: "Screen", value: "SS304 / SS316 Mesh" },
      { key: "Sizes", value: "1/2\" - 24\"" },
      { key: "Plug", value: "Blow-off plug for cleaning" }
    ],
    purpose: "Essential protection for boiler systems, flow meters, and pump inlets."
  },
  {
    id: "f8",
    slug: "duplex-basket-strainer",
    name: "Duplex Basket Strainer",
    category: "Strainers & Filters",
    parentCategory: "Fittings",
    description: "Continuous filtration system with two chambers. Allows cleaning one basket while the other remains in service.",
    image: "/placeholders/Product/f8.jpg",
    specifications: [
      { key: "Feature", value: "Changeover Valve included" },
      { key: "Filtration", value: "Down to 20 microns" },
      { key: "End", value: "Flanged" },
      { key: "Material", value: "Cast Steel / Bronze" }
    ],
    purpose: "Applications that cannot shut down for cleaning, such as fuel lines and lubrication systems."
  }
];
