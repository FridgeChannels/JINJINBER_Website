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
  functions?: string[];
  advantages?: string[];
  scenarios?: string[]; // Application scenarios
}

export const products: Product[] = [
  // --- VALVES (20 products, 6 categories) ---
  // Ball Valve (4 items)
  {
    id: "v-ball-1",
    slug: "cast-steel-ball-valve",
    name: "Cast Steel Ball Valve",
    category: "Ball Valve",
    parentCategory: "Valves",
    description: "A cast steel ball valve features a body made of cast carbon steel (WCB, WCC, LCB, etc.). Its core opening and closing component is a ball with a through hole. The valve stem rotates 90 degrees to achieve full opening, full closing, or throttling of the medium.",
    image: "/valvesPics/BallVavle/1CastSteelBallValve.png",
    specifications: [
      { key: "Nominal Pressure", value: "PN 16, 25, 40, 63, 100, 160" },
      { key: "Nominal Diameter", value: "DN15 to DN1200, and even larger" },
      { key: "Body Material", value: "Standard cast steel (WCB), low-temperature cast steel (LCB), etc." },
      { key: "Connection Types", value: "Flange, threaded, and butt-weld" }
    ],
    purpose: "Isolation and regulation for industrial pipelines, petrochemical facilities, and municipal water.",
    functions: [
      "Cutting Off and Connecting the Medium: By rotating the handle, turbine, or actuator, the ball inside the ball valve can be rotated 90 degrees, achieving full opening or full closing of the pipeline.",
      "Flow Distribution and Redirection: For three-way ball valves (T-type or L-type), it can change the flow direction of the medium, realizing the function of distribution, merging, or switching flow paths."
    ],
    advantages: [
      "High strength and good pressure resistance",
      "Wide temperature range for diverse industrial environments",
      "Excellent sealing performance, achieving zero leakage",
      "Minimal flow resistance and strong flow capacity"
    ],
    scenarios: [
      "Water supply: Municipal water supply and sewage treatment",
      "Petrochemical: Pipelines for corrosive chemical media",
      "Food & Pharma: Sterile beverage and pharmaceutical production",
      "Power Industry: Boiler water supply and cooling systems",
      "HVAC: Circulation systems for hot and cold water"
    ]
  },
  {
    id: "v-ball-2",
    slug: "v-type-ball-valve",
    name: "V-Type Ball Valve",
    category: "Ball Valve",
    parentCategory: "Valves",
    description: "The V-type ball valve is a regulating ball valve and a quarter-turn valve. Its biggest difference from a standard O-type ball valve is the unique V-shaped cutout on the ball core, making it ideal for automated process control requiring precise adjustment.",
    image: "/valvesPics/BallVavle/1V-TypeBallValve.png",
    specifications: [
      { key: "Nominal Pressure", value: "PN10, 16, 25, 40, 64, 100" },
      { key: "Nominal Diameter", value: "DN15 ~ DN500, and even larger" },
      { key: "Body Material", value: "Carbon steel (WCB), stainless steel (CF8/304, CF8M/316), duplex stainless steel, etc." },
      { key: "Connection Types", value: "Flange, threaded, butt-weld, and wafer" }
    ],
    purpose: "Precise regulation and control of fiber slurries, pulp, and media containing solid particles.",
    functions: [
      "Regulation and Control: The V-type ball valve achieves precise flow control throughout the entire regulation process, exhibiting high sensitivity and making it ideal for automated process control requiring precise adjustment.",
      "Shearing Force and Self-Cleaning Function: During valve closing and opening, the V-shaped notch cuts through fibers, pulp, and other entangled materials in the pipeline medium. For slurries containing solid particles, the V-shaped notch effectively prevents particles from becoming stuck between the ball and the valve seat, thus preventing valve jamming or seal damage."
    ],
    advantages: [
      "Excellent regulating performance (core advantage)",
      "Excellent anti-clogging and self-cleaning capabilities",
      "High wear resistance and long service life",
      "Large flow capacity and low flow resistance"
    ],
    scenarios: [
      "Papermaking: Pulp, black liquor, and white water regulation",
      "Wastewater: Sludge and media containing solid particles",
      "Chemical: Catalyst slurries, polymers, and crystals",
      "Power: Pulverized coal and desulfurization slurry",
      "Mining: Slurry, tailings, and cement raw materials"
    ]
  },
  {
    id: "v-ball-3",
    slug: "welded-ball-valve",
    name: "Welded Ball Valve",
    category: "Ball Valve",
    parentCategory: "Valves",
    description: "A welded ball valve is permanently connected to a piping system by welding. Because of its welded connection, it is considered a high-performance, permanent valve, particularly suitable for demanding applications requiring zero leakage and high safety.",
    image: "/valvesPics/BallVavle/1WeldedBallVavle.png",
    specifications: [
      { key: "Nominal Pressure", value: "PN16, 25, 40, 63, 100, 150, 250, 420" },
      { key: "Nominal Diameter", value: "DN15 ~ DN1200" },
      { key: "Valve Body Materials", value: "Carbon Steel (WCB, WCC), Stainless Steel, Alloy Steel, Duplex Steel" },
      { key: "Operating Temperature", value: "-196°C ~ +550°C" }
    ],
    purpose: "Used in long-distance pipelines and high-safety environments requiring zero leakage.",
    functions: [
      "Cutting Off and Connecting the Medium: Open State: The ball rotates 90 degrees, aligning its passage with the pipe diameter, allowing fluid to flow through with almost no resistance and minimal pressure loss. Closed State: The ball rotates another 90 degrees, making its passage perpendicular to the pipe. The tight seal between the ball and the valve seat completely blocks fluid flow.",
      "Flow Regulation: Theoretically, flow can be regulated by partially opening the ball valve, but partial opening affects its sealing performance. Therefore, welded ball valves are primarily used as 'on/off' valves, not regulating valves."
    ],
    advantages: [
      "Zero leakage/excellent sealing performance",
      "Compact structure and lightweight",
      "High strength and excellent safety for hazardous media",
      "Long service life and extremely low maintenance costs"
    ],
    scenarios: [
      "Oil & Gas: Long-distance pipelines and offshore platforms",
      "Chemical: Pipelines for corrosive and toxic media",
      "Power: Boiler feedwater and steam pipelines",
      "Urban Heating: Trunk lines for district heating and cooling",
      "Metallurgy: High reliability industrial processes"
    ]
  },
  {
    id: "v-ball-4",
    slug: "stainless-ball-valve-jjb",
    name: "Stainless Ball Valve",
    category: "Ball Valve",
    parentCategory: "Valves",
    description: "A stainless steel ball valve is a rotary shut-off valve made of premium stainless steel. Due to its excellent corrosion resistance and structural strength, it is indispensable in chemical and food production where sterility and hygiene are required.",
    image: "/valvesPics/BallVavle/1stainlessBallVavle-JJB.png",
    specifications: [
      { key: "Nominal Pressure", value: "PN10, 16, 25, 40, 64, 100" },
      { key: "Nominal Diameter", value: "DN15 ~ DN300" },
      { key: "Valve Body Material", value: "304, 316/L, CF8, CF8M" },
      { key: "Connection Methods", value: "Threaded, flanged, wafer, welded" }
    ],
    purpose: "Indispensable in corrosive chemical environments and high-hygiene food processing lines.",
    functions: [
      "Connecting and Cutting Off the Medium: By rotating the handle or actuator 90 degrees, the channel inside the ball valve is aligned with or perpendicular to the pipeline direction, thus achieving a fully open (medium flow unimpeded) or fully closed (medium completely cut off) state.",
      "Changing the Medium Flow Direction: Mainly used in three-way, four-way, and other multi-way ball valves. By changing the direction of the ball valve's channel, the medium can be guided to different outlet pipelines."
    ],
    advantages: [
      "Excellent corrosion resistance (304/316L)",
      "Simple structure and easy maintenance",
      "Low flow resistance and high flow capacity",
      "Reliable sealing performance, achieving zero leakage"
    ],
    scenarios: [
      "Food & Beverage: Dairy and beverage production lines",
      "Pharmaceutical: Sterile processing and pharmaceutical pipelines",
      "Chemical: Transporting various corrosive chemical media",
      "Water Supply: Building water and fire protection systems",
      "Marine: Corrosion-resistant shipboard piping systems"
    ]
  },

  // Gate Valve (3 items)
  {
    id: "v-gate-1",
    slug: "knife-gate-valve",
    name: "Knife Gate Valve",
    category: "Gate Valve",
    parentCategory: "Valves",
    description: "The knife gate valve, also known as a knife-shaped gate valve, knife gate valve, or slurry valve, is a uniquely designed gate valve. Its core component is a blade-like, beveled gate disc. This design enables it to easily cut through and handle viscous or scaling media containing solid particles, fibers, slurries, and other materials.",
    image: "/valvesPics/GateVavle/1KnifeGateValve.png",
    specifications: [
      { key: "Nominal Pressure", value: "PN6, 10, 16" },
      { key: "Nominal Diameter", value: "DN25 ~ DN1500 (1\" ~ 60\"), and even larger" },
      { key: "Body Material", value: "Cast Iron (HT250), Ductile Iron (QT450), Cast Steel (WCB), Stainless Steel (304, 316, 316L), duplex steel, etc." },
      { key: "Connection Methods", value: "Wafer, flange, threaded, bevel gear/electric actuator" }
    ],
    purpose: "Widely used in demanding applications where conventional valves are prone to blocking and leakage.",
    functions: [
      "Connecting and Cutting Off Media",
      "\"Knife\" Shape Design: The gate's bottom features a sharp cutting edge that easily cuts and severs media such as fibers, pulp, particles, and sediments, effectively preventing media blockage in the flow channel.",
      "Grooveless Structure: Unlike ordinary gate valves, the internal passage of a knife gate valve is typically smooth, without grooves. This prevents media from accumulating in these areas, avoiding jamming and damage to the sealing surface."
    ],
    advantages: [
      "Excellent shutoff and flow capabilities",
      "Minimal flow resistance, energy-saving and efficient",
      "Compact structure and light weight",
      "Self-cleaning function"
    ],
    scenarios: [
      "Paper Industry: Pulp, wastewater, chemicals",
      "Wastewater Treatment: Raw water, sludge, and wastewater containing solid particles",
      "Mining and Metallurgy: Slurry, tailings, pulverized coal, and ash",
      "Food and Pharmaceutical: Chocolate, syrup, fruit pulp, and particulate matter (sanitary design required)",
      "Chemical Industry: Granular, powdered, and corrosive slurries",
      "Power Plants: Ash handling systems and fly ash treatment",
      "Construction Industry: Cement and mortar"
    ]
  },
  {
    id: "v-gate-2",
    slug: "stainless-steel-gate-valve",
    name: "Stainless Steel Gate Valve",
    category: "Gate Valve",
    parentCategory: "Valves",
    description: "A stainless steel gate valve is primarily made of stainless steel. It is a shut-off valve whose core component is a gate (like a plate). Driven by the valve stem, it moves up and down perpendicular to the channel axis, thereby connecting or disconnecting the pipeline. Its primary function is to shut off or connect the medium in the pipeline.",
    image: "/valvesPics/GateVavle/1StainlessSteelGateValve.png",
    specifications: [
      { key: "Nominal Pressure", value: "PN6, 10, 16, 25, 40, 64, 100" },
      { key: "Nominal Diameter", value: "DN15 ~ DN400, and even larger" },
      { key: "Valve Body Material", value: "304/304L, 316/316L, etc." },
      { key: "Connection Methods", value: "Threaded, flanged, wafer, welded" }
    ],
    purpose: "Generally not used for flow regulation; primarily an 'on/off' type valve for connecting or disconnecting media.",
    functions: [
      "Connecting and disconnecting media: This valve provides full-open or full-closed control of the media (liquid, gas) in the pipeline. It is not a valve for precise flow regulation, but rather an \"on/off\" type valve."
    ],
    advantages: [
      "Minimal flow resistance, energy-efficient and efficient",
      "Relatively labor-saving opening and closing",
      "Reliable sealing performance",
      "Unrestricted flow direction"
    ],
    scenarios: [
      "Petrochemical Industry: Transporting various corrosive chemicals and petroleum products",
      "Water Supply and Wastewater Treatment: Municipal water supply, purified water systems, and reclaimed water reuse",
      "Food and Pharmaceutical Industry: Applications with high hygiene requirements typically utilize 304 or 316L stainless steel",
      "Shipbuilding and Offshore Engineering: Resistant to seawater corrosion",
      "Power Industry: Thermal and cooling water systems in power plants",
      "Heating, Ventilation, and Air Conditioning (HVAC): Hot and cold water systems"
    ]
  },
  {
    id: "v-gate-3",
    slug: "gate-valve-45x",
    name: "Gate Valve 45X",
    category: "Gate Valve",
    parentCategory: "Valves",
    description: "The 45X hydraulically operated check valve utilizes the inherent pressure of the medium in the pipeline and hydraulic principles to achieve opening, closing, and check function. Its primary design objective is to eliminate or significantly reduce the water hammer effect produced by conventional check valves when closing. Therefore, it is also known as a \"silent check valve\".",
    image: "/valvesPics/GateVavle/GateValve45X.png",
    specifications: [
      { key: "Nominal Pressure", value: "PN10, PN16, PN25" },
      { key: "Nominal Diameter", value: "DN50 ~ DN1200" },
      { key: "Body Material", value: "Gray Cast Iron (HT250), Ductile Iron (QT450), Cast Steel (WCB), Stainless Steel, etc." },
      { key: "Seal Material", value: "Nitrile (NBR), EPDM, etc. (based on temperature and environment)" }
    ],
    purpose: "Silent isolation and check function for critical pumping stations.",
    functions: [
      "Connecting or Cutting Off the Medium",
      "Bidirectional Flow and Sealing: By rotating the handwheel or wrench, the valve plate moves vertically up and down within the valve body, thus fully opening or closing the pipeline. In the fully open state, the flow path is unobstructed with minimal resistance; in the fully closed state, it reliably cuts off the flow of the medium.",
      "Installation Flexibility: The 45X gate valve has a symmetrical flow path, allowing the medium to flow in from either side of the valve and out from the other, without any installation direction requirement. Its unique elastic sealing structure ensures excellent sealing performance in both directions."
    ],
    advantages: [
      "Core Advantage: Effectively eliminates water hammer and operates quietly",
      "Excellent sealing performance and reliable non-return function",
      "Low flow resistance coefficient and energy saving",
      "High degree of automation, no external power required"
    ],
    scenarios: [
      "Water supply and drainage systems: Pump outlets for high-rise buildings and municipal water supplies",
      "Fire protection systems: Fire pump outlets to prevent water hammer damage during pump shutdown",
      "Industrial circulating water systems: Cooling circulation systems and central air conditioning systems",
      "Sewage treatment plants: Pump outlets",
      "Water conservancy projects: Water intake and water transfer pumping stations"
    ]
  },

  // Butterfly Valve (5 items)
  {
    id: "v-bf-1",
    slug: "d371x-butterfly-valve",
    name: "D371X Butterfly Valve",
    category: "Butterfly Valve",
    parentCategory: "Valves",
    description: "D371 butterfly valve is a worm gear drive, wafer-type, centerline butterfly valve. It provides reliable shut-off and efficient flow regulation for a variety of industrial media.",
    image: "/valvesPics/ButterflyVavle/D371XButterflyValve.png",
    specifications: [
      { key: "Nominal Pressure", value: "PN6, 10, 16" },
      { key: "Nominal Diameter", value: "DN50 ~ DN1200 and larger" },
      { key: "Applicable Temperature", value: "Typically -20°C to +120°C (rubber seals)" },
      { key: "Leakage Level", value: "Zero leakage / ANSI Class VI (soft-sealed)" }
    ],
    purpose: "Cutting Off and Connecting the Medium; Flow Regulation.",
    functions: [
      "Cutting Off and Connecting the Medium; Flow Regulation.",
      "Operation: Rotating worm gear turns stem and plate 90° to fully open/close the pipeline; quick operation suits switch valve. Worm gear angle between 0° and 90° changes opening to regulate flow/pressure."
    ],
    advantages: [
      "Compact structure, lightweight, space-saving",
      "Quick opening and closing, easy operation",
      "Low fluid resistance, energy saving",
      "Excellent sealing performance"
    ],
    scenarios: [
      "Water supply/drainage and wastewater treatment: urban networks, pumping stations, sewage treatment",
      "HVAC: hot/cold water, cooling water circulation",
      "Energy and power: power plant cooling and circulating water systems",
      "Petrochemical: low corrosion process piping",
      "Metallurgy, papermaking, pharmaceuticals and other industrial sectors"
    ]
  },
  {
    id: "v-bf-2",
    slug: "d71fx-butterfly-valve",
    name: "D71FX Butterfly Valve",
    category: "Butterfly Valve",
    parentCategory: "Valves",
    description: "D71FX is a manually operated wafer-type butterfly valve with internal contact areas lined with fluoroplastic, offering superior corrosion resistance for aggressive chemicals.",
    image: "/valvesPics/ButterflyVavle/D71FXButterflyValve.png",
    specifications: [
      { key: "Nominal Pressure", value: "PN 6, 10, 16" },
      { key: "Nominal Diameter", value: "DN50 ~ DN300, and even larger" },
      { key: "Applicable Temperature", value: "Generally -20°C to +150°C (PTFE up to higher)" },
      { key: "Applicable Media", value: "Acids, alkalis, salts, organic solvents and other highly corrosive media" }
    ],
    purpose: "Connecting or Cutting Off the Medium; Flow Adjustment in highly corrosive environments.",
    functions: [
      "Connecting or Cutting Off the Medium; Flow Adjustment.",
      "Corrosion Control: Rotating handle 90° opens/closes pipeline; fully open: plate parallel with low flow resistance. Fully closed: PTFE soft sealing ring fits tightly against seat to seal and prevent leakage. Handle position between 0° and 90° changes opening to adjust flow/pressure."
    ],
    advantages: [
      "Excellent corrosion resistance",
      "Excellent sealing performance",
      "Low fluid resistance, energy saving",
      "Easy and flexible operation"
    ],
    scenarios: [
      "Chemical Industry: process piping for acid/alkali/salt production lines",
      "Pharmaceutical: transport of corrosive materials in API production",
      "Pesticide Industry: corrosive chemicals",
      "Non-ferrous metallurgy: electrolyte and acid systems in hydrometallurgy",
      "Environmental Protection: wastewater treatment, acid mist purification systems",
      "Petrochemical: auxiliary pipelines for some corrosive media"
    ]
  },
  {
    id: "v-bf-3",
    slug: "lug-butterfly-valve",
    name: "Lug Butterfly Valve",
    category: "Butterfly Valve",
    parentCategory: "Valves",
    description: "A lug butterfly valve is a wafer-type butterfly valve with bolt-hole lugs on both ends of the valve body. Bolts pass directly through these lugs to secure the valve between two pipe flanges.",
    image: "/valvesPics/ButterflyVavle/LugButterflyValve.png",
    specifications: [
      { key: "Nominal Pressure", value: "PN6, 10, 16, 25" },
      { key: "Nominal Diameter", value: "DN50 ~ DN1200 and larger" },
      { key: "Body Materials", value: "Gray Cast Iron (HT250), Ductile Iron (QT450), Cast Steel (WCB), Stainless Steel, Copper Alloy" },
      { key: "Connection Type", value: "Double-lug wafer-type" }
    ],
    purpose: "Shutdown and Sealing; Flow Regulation; Bidirectional Flow Blocking.",
    functions: [
      "Shutdown and Sealing; Flow Regulation; Bidirectional Flow Blocking.",
      "Operation: Fully open/close by rotating the butterfly plate 90°. Closed state: plate perpendicular, blocking flow; valve seat and plate edge seal tightly to ensure minimal leakage. Opening angle can be controlled anywhere between 0° and 90° to regulate flow. Standard design allows pressure from either direction."
    ],
    advantages: [
      "Easy installation, especially suitable for terminal equipment",
      "Compact structure and light weight",
      "Highly cost-effective",
      "Low flow resistance and fast opening/closing"
    ],
    scenarios: [
      "Water supply and drainage systems: municipal water supply, sewage treatment plants, fire protection systems",
      "HVAC: hot/cold water circulation systems",
      "Industrial processes: on/off control of non-corrosive media (chemical, food, pharmaceutical, paper industries)",
      "Shipbuilding: seawater and ballast water systems",
      "Energy industry: power plant cooling water systems"
    ]
  },
  {
    id: "v-bf-4",
    slug: "pot-groove-clamp-type-butterfly-valve",
    name: "Pot-Groove Clamp-Type Butterfly Valve",
    category: "Butterfly Valve",
    parentCategory: "Valves",
    description: "A pot-groove clamp-type butterfly valve combines grooved (clamp) connection features with a wafer-type butterfly valve body. It lacks flanges and is clamped between two pipes using clamps, offering rapid installation.",
    image: "/valvesPics/ButterflyVavle/Pot-GrooveClamp-TypeButterflyValve.png",
    specifications: [
      { key: "Nominal Pressure", value: "PN10, 16, 25" },
      { key: "Nominal Diameter", value: "DN50 ~ DN600 (2\" ~ 24\")" },
      { key: "Body Material", value: "Ductile Iron (common), Cast Steel, Stainless Steel (304, 316), Copper, etc." },
      { key: "Seal Material", value: "Nitrile (NBR), EPDM, etc." }
    ],
    purpose: "Connecting and Cutting Off Media; Flow Regulation in grooved piping systems.",
    functions: [
      "Connecting and Cutting Off Media; Flow Regulation.",
      "Operation: Rotating handle/turbine/actuator rotates plate within 90° to fully open/close pipeline controlling flow (water, air, oil). Fixing plate at intermediate angle changes opening area for coarse flow adjustment."
    ],
    advantages: [
      "Extremely easy and fast installation",
      "Compact structure, space-saving",
      "Easy maintenance and replacement",
      "Suitable for certain pipes/piping systems"
    ],
    scenarios: [
      "Fire sprinkler systems",
      "Water supply and drainage: municipal, building water, sewage treatment",
      "HVAC: hot/cold water circulation systems",
      "Industrial piping: food, beverage, pharmaceutical (frequent cleaning/maintenance), plus mining and power plant pipelines"
    ]
  },
  {
    id: "v-bf-5",
    slug: "wafer-type-butterfly-valve",
    name: "Wafer-Type Butterfly Valve",
    category: "Butterfly Valve",
    parentCategory: "Valves",
    description: "The wafer-type butterfly valve has no flanges on its body. Instead, it is clamped directly between two pipe flanges using a few bolts threaded through holes in the valve body. Its key features are short length, light weight, and low cost.",
    image: "/valvesPics/ButterflyVavle/Wafer-TypeButterflyValve.png",
    specifications: [
      { key: "Nominal Pressure", value: "PN6, 10, 16, 25" },
      { key: "Nominal Diameter", value: "DN 50 to DN 2000, and even larger" },
      { key: "Body Materials", value: "Gray Cast Iron (HT250), Ductile Iron (QT400), Cast Steel (WCB), Stainless Steel, Duplex Steel, etc." },
      { key: "Connection Type", value: "Wafer-Type" }
    ],
    purpose: "Connecting and Cutting Off; Flow Regulation.",
    functions: [
      "Connecting and Cutting Off; Flow Regulation.",
      "Operation: Fully open/close by rotating the butterfly plate 90°. Fully open: plate parallel to fluid direction, flow path approximately straight. Fully closed: plate perpendicular, sealing ring presses against valve seat to seal and cut off medium. The opening can stop anywhere between 0° and 90° to control flow rate/pressure."
    ],
    advantages: [
      "Compact structure and light weight",
      "Low cost and good economic efficiency",
      "Quick opening and closing, easy operation",
      "Low fluid resistance"
    ],
    scenarios: [
      "Water supply and drainage systems: municipal water supply, sewage treatment, fire protection systems",
      "Heating, ventilation, and air conditioning (HVAC): chilled water, hot water, cooling water systems",
      "Chemical industry: various non-corrosive chemical liquids",
      "Power: circulating water and cooling water systems",
      "Food and pharmaceutical: sanitary designs used for material handling",
      "Shipbuilding: seawater, ballast water, bilge water systems",
      "Compressed Air and Gas: low-pressure air and gas pipelines"
    ]
  },

  // Check Valve (3 items)
  {
    id: "v-check-1",
    slug: "cast-steel-check-valve",
    name: "Cast Steel Check Valve",
    category: "Check Valve",
    parentCategory: "Valves",
    description: "Cast steel check valve uses cast steel (WCB/WCC/LCB) for valve body and primary pressure-bearing parts. It is an automatic valve that opens/closes based on medium flow. Primary function is to prevent backflow to prevent equipment damage or accidents.",
    image: "/valvesPics/Check Vavle/CastSteelCheckValve.png",
    specifications: [
      { key: "Nominal Pressure", value: "PN16, 25, 40, 64, 100" },
      { key: "Nominal Diameter", value: "DN15 ~ DN800 and larger" },
      { key: "Body Material", value: "A216 WCB (commonly carbon steel casting)" },
      { key: "Connection Methods", value: "Flange, Wafer, Threaded, Welded" }
    ],
    purpose: "Preventing reverse flow in boiler feed and industrial process lines.",
    functions: [
      "Prevents Backflow; Ensures System Safety; Automatic Operation.",
      "Safety: Backflow can cause equipment damage and contamination of clean media sources. Preventing backflow improves safety/reliability, avoiding accidents.",
      "Operation: Opening/closing is completely automatic via medium flow force."
    ],
    advantages: [
      "High strength and high pressure resistance",
      "Excellent temperature resistance (-29°C ~ 425°C)",
      "Automatic operation, safe and reliable",
      "Good durability and impact resistance"
    ],
    scenarios: [
      "Petrochemical: oils and chemical media pipelines",
      "Power: boiler feedwater, steam, cooling water systems",
      "Water supply/drainage and municipal services: pump outlets to prevent backflow",
      "Heating systems: prevent hot water/steam backflow in pipe networks",
      "Shipbuilding: ship propulsion systems and piping systems"
    ]
  },
  {
    id: "v-check-2",
    slug: "rubber-flap-check-valve",
    name: "Rubber Flap Check Valve",
    category: "Check Valve",
    parentCategory: "Valves",
    description: "Rubber flap check valve (rubber flap non-return valve / flexible check valve) uses rubber as a sealing element and relies entirely on the medium flow to open/close. It prevents backflow to protect pumps/compressors from water hammer.",
    image: "/valvesPics/Check Vavle/RubberFlapCheckValve.png",
    specifications: [
      { key: "Nominal Pressure", value: "PN6, 10, 16, 25" },
      { key: "Nominal Diameter", value: "DN 50 ~ 1200" },
      { key: "Valve Body Materials", value: "Gray Cast Iron (HT250), Ductile Iron (QT450), Cast Steel (WCB), Stainless Steel, etc." },
      { key: "Connection Methods", value: "Flange, Wafer" }
    ],
    purpose: "Ideal for water pumping stations to eliminate water hammer.",
    functions: [
      "Backflow Prevention; Reduced Water Hammer Effect; Energy Saving.",
      "Protection: When pump stops or upstream pressure is lower than downstream, valve closes automatically to prevent backflow, avoiding damage.",
      "Buffering: Elastic rubber disc provides buffering when closing, gradually cutting off water flow to reduce water hammer.",
      "Energy Efficiency: Forward flow opens disc easily and suspends it above flow channel, with little resistance, reducing pump energy consumption."
    ],
    advantages: [
      "Excellent sealing performance",
      "Quick closing, minimal water hammer effect",
      "Low flow resistance, strong flow capacity",
      "Good wear and particle resistance"
    ],
    scenarios: [
      "Water supply and drainage: municipal water supply, building water supply, fire protection systems",
      "Sewage treatment: lift stations, inlets/outlets of sewage treatment plants",
      "Industrial processes: particulate/corrosive media pipelines (chemical, papermaking, pharmaceutical)",
      "Construction: high-rise water supply/drainage, air conditioning cooling water",
      "Water conservancy and flood control: drainage pump stations, sluice systems"
    ]
  },
  {
    id: "v-check-3",
    slug: "stainless-steel-check-valve",
    name: "Stainless Steel Check Valve",
    category: "Check Valve",
    parentCategory: "Valves",
    description: "Stainless steel check valve (one-way/non-return valve) opens/closes disc automatically based on medium flow to prevent backflow. Made of stainless steel for corrosion resistance, high temperature resistance, and strength.",
    image: "/valvesPics/Check Vavle/StainlessSteelCheckValve.png",
    specifications: [
      { key: "Nominal Pressure", value: "PN10/16/25/40/64" },
      { key: "Nominal Diameter", value: "DN15 (~1/2\") ~ DN600 (~24\") and larger" },
      { key: "Body Material", value: "304, 316/316L, 301, 302, 304L, 321, etc." },
      { key: "Connection Methods", value: "Threaded, Flange, Wafer, Welded" }
    ],
    purpose: "Chemical injection lines, offshore platforms, and wastewater treatment.",
    functions: [
      "Preventing Backflow; Maintaining Pipeline Pressure; Preventing Medium Mixing.",
      "Reliability: Prevents equipment damage/system failure due to backflow from pump stoppage/pressure changes.",
      "Stability: Helps maintain pressure in areas of the system and ensures stable operation.",
      "Purity: Prevents mixing of media from different sources when pressure changes occur, ensuring purity/safety."
    ],
    advantages: [
      "Excellent corrosion resistance",
      "High strength and high pressure resistance",
      "Wide temperature adaptability (-196°C ~ over 800°C)",
      "High sanitation"
    ],
    scenarios: [
      "Water supply and drainage: municipal/building supply, fire protection, sewage treatment",
      "Petrochemical: corrosive chemical media pipelines",
      "Food/pharmaceutical: beverage, dairy, pharmaceutical production lines requiring sterility/hygiene",
      "Power: boiler water supply, steam pipes, cooling systems",
      "HVAC: hot/cold water circulation, prevent backflow when pumps stop",
      "Various industrial processes: metallurgy, shipbuilding, papermaking"
    ]
  },

  // Other Valve (2 items)
  {
    id: "v-other-1",
    slug: "hydraulic-control-valve",
    name: "Hydraulic Control Valve",
    category: "Other Valve",
    parentCategory: "Valves",
    description: "A hydraulic control valve uses the pressure, flow rate, or liquid level of the medium (water) in a pipeline as a power source. Through a pre-set pilot valve and control system, it automatically opens, closes, or regulates the main valve.",
    image: "/valvesPics/OtherVavle/HydraulicControlValve.png",
    specifications: [
      { key: "Nominal Pressure", value: "PN10, 16, 25, 40" },
      { key: "Nominal Diameter", value: "DN15 ~ DN1000, and even larger" },
      { key: "Body Materials", value: "Gray Cast Iron (HT250), Ductile Iron (QT450-10), Cast Steel (WCB), Stainless Steel, Copper Alloy, etc." },
      { key: "Connections", value: "Flange, Threaded" }
    ],
    purpose: "Municipal water pressure management and fire suppression circuits.",
    functions: [
      "Remote control switch function / precise adjustment function",
      "Remote Operation: Pilot valve can be installed in a convenient location (e.g., control room) to remotely open/close the main pipeline valve in inconvenient locations.",
      "Parameter Stability: Stabilizes parameters such as pressure and flow within the required range according to set values; automatically adjusts valve opening to restore stability."
    ],
    advantages: [
      "Highly automated, no external power required",
      "Functional integration, multi-purpose valve",
      "Smooth operation and high reliability",
      "Improved system safety and stability"
    ],
    scenarios: [
      "Building water supply and drainage systems: domestic water supply, fire water supply, water tank level control, zoned pressure reduction",
      "Fire protection systems: pressure stabilization, pressure reduction, water hammer prevention, system overpressure relief",
      "Water conservancy and municipal water supply: flow, water level control, pressure regulation, safety pressure relief",
      "Industrial circulation systems: pressure and flow control for chilled water and cooling water systems in central air conditioning",
      "Irrigation systems: zoned control and pressure management for large agricultural irrigation projects"
    ]
  },
  {
    id: "v-other-2",
    slug: "safety-valve",
    name: "Safety Valve",
    category: "Other Valve",
    parentCategory: "Valves",
    description: "A safety valve is an automatic valve that uses the pressure of the medium itself to discharge a certain amount of fluid without any external force, preventing internal system pressure from exceeding a predetermined safety value.",
    image: "/valvesPics/OtherVavle/SafetyValve.png",
    specifications: [
      { key: "Nominal Diameter", value: "DN50, DN100, etc." },
      { key: "Valve Body Material", value: "Carbon Steel (WCB), Stainless Steel (CF8/304, CF8M/316), Alloy Steel (WC6, WC9), etc." },
      { key: "Applicable Media", value: "Steam, Air/Gas, Liquids (Water, Oil), etc." },
      { key: "Connection Type", value: "Flange, Threaded, Welded" }
    ],
    purpose: "Protecting boiler systems, pressure vessels, and storage tanks from overpressure.",
    functions: [
      "Overpressure relief / system protection / life and property safety",
      "Defense: When system pressure abnormally rises, the safety valve acts as the last defense, releasing medium and forcing pressure within a safe range.",
      "Asset Protection: Prevents overpressure to protect pressure vessels, pipelines, boilers, heat exchangers, avoiding damage/scrapping or costly repairs.",
      "Safety: Prevents catastrophic energy release from ruptures/explosions that could cause casualties or environmental disasters."
    ],
    advantages: [
      "Fully automated and fast response",
      "High reliability",
      "Large discharge capacity",
      "Wide range of applications"
    ],
    scenarios: [
      "Energy and power: boilers, pressure vessels, steam pipes, steam turbines",
      "Petrochemical: reactors, distillation towers, storage tanks, LPG spherical tanks, long-distance pipelines",
      "Pharmaceutical and food: fermentation tanks, autoclaves, food processing equipment",
      "Other industries: air compressors, refrigeration systems, hydraulic systems, etc."
    ]
  },

  // Strainer (2 items)
  {
    id: "v-strain-1",
    slug: "stainless-steel-filters",
    name: "Stainless Steel Filters",
    category: "Strainer",
    parentCategory: "Valves",
    description: "A stainless steel filter uses internally installed filter elements (such as screens, filter bags, filter elements, or filter baskets) to intercept and remove solid particles from fluids, thereby purifying or recovering them.",
    image: "/valvesPics/Strainer/StainlessSteelFilters.png",
    specifications: [
      { key: "Filtration Fineness", value: "1 to 100 μm (optional)" },
      { key: "Operating Temperature", value: "-20°C ~ 120°C (depending on seals)" },
      { key: "Housing Material", value: "304, 316L, etc." },
      { key: "Connections", value: "Flange, Clamp, Threaded" }
    ],
    purpose: "Filing and purification in food, beverage, and chemical industries.",
    functions: [
      "Solid-Liquid / Solid-Gas Separation, Equipment Protection, Improved Product Purity",
      "Separation: Removes suspended solid particles from a liquid or dust/moisture/oil mist from gases.",
      "Equipment Protection: Installed upstream of critical equipment to prevent solid particles from entering, avoiding wear, blockage, or damage.",
      "Product Quality: In chemical, pharmaceutical, and food industries, it ensures the purity of final products and avoids contamination."
    ],
    advantages: [
      "Excellent durability and long life",
      "Excellent corrosion resistance",
      "Excellent high temperature and high pressure resistance",
      "High hygiene and easy cleanability"
    ],
    scenarios: [
      "Industrial Water Treatment: Raw water pretreatment, circulating cooling water, and boiler feed water",
      "Food & Beverage: Filtration of syrups, juices, beer, cooking oil, and process water",
      "Petrochemical: Filtration of crude oil, refined oils, solvents, and chemical raw materials",
      "Pharmaceutical & Bioengineering: Sterile filtration of purified water, water for injection, and compressed air",
      "Electroplating & Coating: Purification of plating solutions, paints, and coatings",
      "Power & Metallurgy: Filtration of fuel, lubricating oil, and hydraulic oil"
    ]
  },
  {
    id: "v-strain-2",
    slug: "y-type-strainer",
    name: "Y-Type Strainer",
    category: "Strainer",
    parentCategory: "Valves",
    description: "A Y-type strainer is a Y-shaped pipeline filtration device. It is a coarse filter that uses a metal mesh to intercept mechanical impurities such as rust, silt, and debris from fluids (liquids or gases).",
    image: "/valvesPics/Strainer/Y-TypeStrainer.png",
    specifications: [
      { key: "Nominal Pressure", value: "PN10, 16, 25, and 40" },
      { key: "Nominal Diameter", value: "DN15 ~ DN600 and larger" },
      { key: "Valve Body Materials", value: "Cast Iron (HT250), Ductile Iron (QT450), Cast Steel (WCB), Stainless Steel, etc." },
      { key: "Connection Methods", value: "Flange, Threaded, Butt Weld" }
    ],
    purpose: "General industrial protection for pumps, meters, and control valves.",
    functions: [
      "Protecting Critical Equipment / Purifying Media / Improving Reliability and Stability",
      "Pump & Meter Protection: Prevents pump impeller wear or jamming. Ensures measurement accuracy of instruments like flow meters and pressure gauges.",
      "Valve Integrity: Prevents damage or jamming of sealing surfaces of control valves, ensures regulating function.",
      "Heat Transfer: Prevents blockage of heat exchanger flow channels, maintaining efficient heat transfer.",
      "Batch Purity: Provides crucial purification for food, beverage, and pharmaceutical processes."
    ],
    advantages: [
      "Simple, durable structure",
      "Low flow resistance, low pressure drop",
      "Small footprint, flexible installation",
      "Low cost, good economical efficiency"
    ],
    scenarios: [
      "Water supply and drainage systems: Protect water pumps, water meters, and supply networks",
      "HVAC systems: Prevent blockage at boilers, heat exchangers, and cooling towers",
      "Petrochemical industry: Filters oils and chemicals",
      "Power industry: Used in fuel, lubrication systems, and cooling water",
      "Industrial production: Protects spray equipment, injection molding machines, and air compressors",
      "Irrigation systems: Prevents nozzle blockage"
    ]
  },

  /*
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
  */
];
