export interface Product {
  id: string;
  name: string;
  slug: string;
  category: "Trading" | "Manufacturing";
  description: string;
  specifications: Record<string, string>;
  price?: number;
  image_url?: string;
  images: string[];
  stock: number;
  featured: boolean;
  rating?: number;
  numReviews?: number;
  created_at?: string;
  updated_at?: string;
}

export const tradingProducts: Product[] = [
  {
    id: "t1",
    name: "CAT 320 Next-Gen Hydraulic Excavator",
    slug: "cat-320-next-gen-excavator",
    category: "Trading",
    description: "The CAT 320 brings premium performance with simple-to-use technologies like CAT GRADE with 2D, Grade Assist, and Payload — all standard equipment from the factory to boost your operator efficiency up to 45%.",
    specifications: {
      "Engine Power": "129 kW (174 hp)",
      "Operating Weight": "22,500 kg",
      "Max Digging Depth": "6.72 m",
      "Bucket Capacity": "1.19 m³",
      "Fuel Tank": "345 L",
      "Hydraulic Flow": "429 L/min"
    },
    price: 6850000,
    image_url: "https://i.pinimg.com/1200x/49/0a/75/490a758f2041a3e7c919fd8f9621968b.jpg",
    images: ["https://i.pinimg.com/1200x/49/0a/75/490a758f2041a3e7c919fd8f9621968b.jpg"],
    stock: 4,
    featured: true,
    rating: 4.9,
    numReviews: 18
  },
  {
    id: "t2",
    name: "JCB 3CX Eco Backhoe Loader",
    slug: "jcb-3cx-eco-backhoe-loader",
    category: "Trading",
    description: "World's number one backhoe loader. Combining superior digging power, trenching efficiency, and site mobility with the ultra-efficient JCB EcoMAX Tier 4 engine.",
    specifications: {
      "Engine Power": "55 kW (74 hp)",
      "Operating Weight": "8,135 kg",
      "Max Dig Depth": "5.46 m",
      "Loader Capacity": "1.0 m³",
      "Transmission": "Syncroshuttle 4-speed",
      "Max Reach": "6.58 m"
    },
    price: 3450000,
    image_url: "https://i.pinimg.com/736x/55/47/99/55479987dfa71f0173b0011a47e95d2b.jpg",
    images: ["https://i.pinimg.com/736x/55/47/99/55479987dfa71f0173b0011a47e95d2b.jpg"],
    stock: 7,
    featured: true,
    rating: 4.8,
    numReviews: 24
  },
  {
    id: "t3",
    name: "Komatsu D65EX-18 Crawler Bulldozer",
    slug: "komatsu-d65ex-18-crawler-bulldozer",
    category: "Trading",
    description: "Heavy-duty crawler dozer engineered for rough grading, mine overburden handling, and heavy civil infrastructure with SIGMADOZER blade technology for increased blade payload.",
    specifications: {
      "Engine Power": "162 kW (217 hp)",
      "Operating Weight": "20,990 kg",
      "Blade Capacity": "5.61 m³",
      "Ground Pressure": "63.7 kPa",
      "Track Gauge": "1,880 mm",
      "Fuel Capacity": "415 L"
    },
    price: 9200000,
    image_url: "https://i.pinimg.com/1200x/19/23/57/1923570d92dbba475ae74911a6960b6c.jpg",
    images: ["https://i.pinimg.com/1200x/19/23/57/1923570d92dbba475ae74911a6960b6c.jpg"],
    stock: 2,
    featured: true,
    rating: 4.9,
    numReviews: 9
  },
  {
    id: "t4",
    name: "Volvo L120H High-Lift Wheel Loader",
    slug: "volvo-l120h-high-lift-wheel-loader",
    category: "Trading",
    description: "Equipped with state-of-the-art OptiShift technology and Torque Parallel linkage, the Volvo L120H delivers exceptional breakout torque and fuel economy for quarries and aggregate yards.",
    specifications: {
      "Engine Power": "203 kW (272 hp)",
      "Operating Weight": "19,800 kg",
      "Bucket Capacity": "3.5 m³",
      "Tipping Load": "14,350 kg",
      "Breakout Force": "174.5 kN",
      "Max Dump Clearance": "2.98 m"
    },
    price: 7600000,
    image_url: "https://i.pinimg.com/736x/a6/b2/61/a6b261ae6924a6e8ad712bed89ef84ac.jpg",
    images: ["https://i.pinimg.com/736x/a6/b2/61/a6b261ae6924a6e8ad712bed89ef84ac.jpg"],
    stock: 5,
    featured: true,
    rating: 4.7,
    numReviews: 12
  },
  {
    id: "t5",
    name: "Liebherr LTM 1100-5.2 Mobile All-Terrain Crane",
    slug: "liebherr-ltm-1100-5-2-mobile-crane",
    category: "Trading",
    description: "100-ton capacity all-terrain mobile crane offering long telescopic reach, high roadability, and variable outrigger base VarioBase for cramped city job sites.",
    specifications: {
      "Max Lifting Capacity": "100 t",
      "Telescopic Boom": "52 m",
      "Max Hoist Height": "84 m",
      "Number of Axles": "5",
      "Engine Power": "370 kW (503 hp)",
      "Drive/Steering": "10 x 8 x 10"
    },
    price: 18500000,
    image_url: "https://i.pinimg.com/736x/ec/f8/a5/ecf8a5b78fc592c305c033a7fdc2febc.jpg",
    images: ["https://i.pinimg.com/736x/ec/f8/a5/ecf8a5b78fc592c305c033a7fdc2febc.jpg"],
    stock: 1,
    featured: true,
    rating: 5.0,
    numReviews: 6
  },
  {
    id: "t6",
    name: "Hitachi ZX350LCH-6 Mining Excavator",
    slug: "hitachi-zx350lch-6-mining-excavator",
    category: "Trading",
    description: "Designed specifically for demanding quarry and earthmoving contracts. Reinforced heavy-duty undercarriage and boom structure ensure continuous high productivity.",
    specifications: {
      "Engine Power": "210 kW (282 hp)",
      "Operating Weight": "35,200 kg",
      "Max Digging Reach": "11.1 m",
      "Bucket Capacity": "1.62 m³",
      "Arm Digging Force": "180 kN"
    },
    price: 11200000,
    image_url: "https://i.pinimg.com/1200x/d6/2c/70/d62c7003c581797a2c70174a30ae1bf2.jpg",
    images: ["https://i.pinimg.com/1200x/d6/2c/70/d62c7003c581797a2c70174a30ae1bf2.jpg"],
    stock: 3,
    featured: false,
    rating: 4.8,
    numReviews: 14
  },
  {
    id: "t7",
    name: "Heavy Duty 6x4 Commercial Tipper Truck",
    slug: "heavy-duty-tipper-truck",
    category: "Trading",
    description: "Built for heavy mining and civil transport. Features reinforced rock body, turbocharged 320 HP diesel engine, and heavy-duty 9-speed synchromesh transmission with dual rear driving axles.",
    specifications: {
      "Engine Power": "235 kW (320 hp)",
      "Payload Capacity": "25 Tons",
      "Body Volume": "16 m³ Rock Body",
      "Axles": "6x4 Twin Rear Axle",
      "Fuel Capacity": "300 L",
      "Braking": "Dual Circuit Pneumatic ABS"
    },
    price: 4850000,
    image_url: "https://i.pinimg.com/736x/76/f2/f6/76f2f6b4cf6b9649535b8bde8c6e1760.jpg",
    images: ["https://i.pinimg.com/736x/76/f2/f6/76f2f6b4cf6b9649535b8bde8c6e1760.jpg"],
    stock: 5,
    featured: true,
    rating: 4.9,
    numReviews: 16
  },
  {
    id: "t8",
    name: "Dynapac CA250D Vibratory Soil Compactor",
    slug: "dynapac-ca250d-vibratory-soil-compactor",
    category: "Trading",
    description: "Single drum vibratory roller for heavy road compaction, dam construction, and highway sub-base grading with dual amplitude vibration.",
    specifications: {
      "Operating Weight": "11,200 kg",
      "Drum Width": "2,130 mm",
      "Static Linear Load": "28.5 kg/cm",
      "Vibration Amplitude": "1.7 mm / 0.8 mm",
      "Engine": "Cummins 4BTA3.9 93 kW"
    },
    price: 4300000,
    image_url: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1000&q=80",
    images: ["https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1000&q=80"],
    stock: 3,
    featured: false,
    rating: 4.8,
    numReviews: 15
  },
  {
    id: "t9",
    name: "Takeuchi TL26 Compact Crawler Loader",
    slug: "takeuchi-tl26-crawler-loader",
    category: "Trading",
    description: "High-traction rubber-tracked compact loader designed for tight urban construction, soft ground landscaping, and grading without damaging paved surfaces.",
    specifications: {
      "Engine Power": "55 kW (74 hp)",
      "Operating Weight": "4,750 kg",
      "Bucket Capacity": "0.55 m³",
      "Tipping Load": "3,200 kg",
      "Ground Pressure": "31 kPa"
    },
    price: 2850000,
    image_url: "https://i.pinimg.com/736x/13/14/f6/1314f6f46e68a500ce60a9d19d5baa1b.jpg",
    images: ["https://i.pinimg.com/736x/13/14/f6/1314f6f46e68a500ce60a9d19d5baa1b.jpg"],
    stock: 4,
    featured: false,
    rating: 4.7,
    numReviews: 10
  },
  {
    id: "t10",
    name: "Heavy-Duty 20-Ton Hydraulic Crawler Excavator",
    slug: "crawler-hydraulic-excavator-20-ton",
    category: "Trading",
    description: "High-productivity medium crawler excavator with high-torque swing mechanism, reinforced boom, and pilot-controlled variable displacement hydraulic pumps.",
    specifications: {
      "Operating Weight": "21,000 kg",
      "Engine Power": "125 kW (168 hp)",
      "Bucket Capacity": "1.0 m³",
      "Max Digging Depth": "6.5 m",
      "Hydraulic Flow": "2 x 210 L/min"
    },
    price: 6400000,
    image_url: "https://i.pinimg.com/736x/2b/22/1c/2b221c79c5976890c66dc5c1fa29b83d.jpg",
    images: ["https://i.pinimg.com/736x/2b/22/1c/2b221c79c5976890c66dc5c1fa29b83d.jpg"],
    stock: 6,
    featured: false,
    rating: 4.8,
    numReviews: 13
  }
];

export const manufacturingProducts: Product[] = [
  {
    id: "m1",
    name: "HeavyBuild HB-200 Industrial Concrete Mixer",
    slug: "heavybuild-hb-200-industrial-concrete-mixer",
    category: "Manufacturing",
    description: "HeavyBuild manufactured heavy-duty reversible drum concrete mixer with hydraulic hopper feeding system. Fabricated with abrasion-resistant alloy drum.",
    specifications: {
      "Drum Capacity": "200 L batch",
      "Motor Power": "3 Phase 3.7 kW",
      "Rotation Speed": "26 RPM",
      "Chassis": "Reinforced channel chassis with pneumatic tires",
      "Net Weight": "420 kg"
    },
    price: 285000,
    image_url: "https://i.pinimg.com/1200x/6a/e9/c6/6ae9c65d8bcd376f748c7fc09cc6bc2c.jpg",
    images: ["https://i.pinimg.com/1200x/6a/e9/c6/6ae9c65d8bcd376f748c7fc09cc6bc2c.jpg"],
    stock: 15,
    featured: true,
    rating: 4.9,
    numReviews: 31
  },
  {
    id: "m2",
    name: "HeavyBuild HB-500 Vibratory Plate Compactor",
    slug: "heavybuild-hb-500-vibratory-plate-compactor",
    category: "Manufacturing",
    description: "High-compaction forward plate compactor powered by Honda GX160 engine. Ideal for asphalt smoothing, paver installations, sub-base gravel, and trench work.",
    specifications: {
      "Plate Size": "520 x 440 mm",
      "Centrifugal Force": "22 kN",
      "Vibration Frequency": "5,600 vpm",
      "Engine": "Honda GX160 5.5 HP",
      "Weight": "96 kg"
    },
    price: 145000,
    image_url: "https://i.pinimg.com/736x/3d/2c/c3/3d2cc36a46a86e12e282bf56a4bc2fe9.jpg",
    images: ["https://i.pinimg.com/736x/3d/2c/c3/3d2cc36a46a86e12e282bf56a4bc2fe9.jpg"],
    stock: 28,
    featured: true,
    rating: 4.8,
    numReviews: 22
  },
  {
    id: "m3",
    name: "HeavyBuild HB-3T High-Rise Material Tower Hoist",
    slug: "heavybuild-hb-3t-tower-hoist",
    category: "Manufacturing",
    description: "Manufactured modular construction hoist rated for 3-ton continuous payloads. Features automated fail-safe emergency electromagnetic brakes and multi-level landing doors.",
    specifications: {
      "Safe Working Load": "3,000 kg",
      "Max Height": "60 m (expandable)",
      "Lifting Speed": "32 m/min",
      "Drive Motor": "Dual 11 kW geared motors",
      "Safety": "Centrifugal overspeed governor brake"
    },
    price: 720000,
    image_url: "https://i.pinimg.com/1200x/64/cd/b5/64cdb503090937b41f5591f512d4f4d8.jpg",
    images: ["https://i.pinimg.com/1200x/64/cd/b5/64cdb503090937b41f5591f512d4f4d8.jpg"],
    stock: 6,
    featured: true,
    rating: 4.9,
    numReviews: 17
  },
  {
    id: "m4",
    name: "HeavyBuild HB-BB80 Hydraulic Concrete Block Machine",
    slug: "heavybuild-hb-bb80-hydraulic-block-machine",
    category: "Manufacturing",
    description: "High-yield semi-automatic concrete hollow block and interlocking paver manufacturing plant. Cycle time of 20 seconds with high vibration table compaction.",
    specifications: {
      "Production Rate": "1,200 blocks/hour (400x200x200 mm)",
      "Hydraulic Pressure": "16 MPa",
      "Total Power": "15 kW",
      "Feeder Type": "Automatic pallet & hopper feeder",
      "Total Weight": "4,100 kg"
    },
    price: 1150000,
    image_url: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80"],
    stock: 4,
    featured: true,
    rating: 4.9,
    numReviews: 8
  },
  {
    id: "m5",
    name: "HeavyBuild HB-C32 Heavy Rebar Bending & Cutting Machine",
    slug: "heavybuild-hb-c32-rebar-bending-cutting-machine",
    category: "Manufacturing",
    description: "Precision CNC automated rebar processing station capable of bend angles from 0 to 180 degrees on TMT bars up to 32mm diameter for infrastructure projects.",
    specifications: {
      "Max Rebar Dia": "32 mm (Fe500D)",
      "Bending Speed": "5 - 10 rpm",
      "Motor Capacity": "4.5 kW",
      "Control": "Digital Angle Preset Dial",
      "Machine Weight": "480 kg"
    },
    price: 245000,
    image_url: "https://i.pinimg.com/1200x/30/17/e2/3017e212d0b87fbd346a023ae863f44d.jpg",
    images: ["https://i.pinimg.com/1200x/30/17/e2/3017e212d0b87fbd346a023ae863f44d.jpg"],
    stock: 12,
    featured: false,
    rating: 4.7,
    numReviews: 11
  },
  {
    id: "m6",
    name: "HeavyBuild HB-V8 High-Frequency Concrete Vibrator",
    slug: "hb-v8-vibrator",
    category: "Manufacturing",
    description: "Heavy-duty electric concrete vibrator needle for high-density structural compaction in bridge piers, columns, slabs, and precast foundations.",
    specifications: {
      "Needle Diameter": "60 mm",
      "Frequency": "12,000 vpm",
      "Motor Power": "2.2 kW High Torque",
      "Hose Length": "6 m Flexible Steel Armored"
    },
    price: 32000,
    image_url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"],
    stock: 50,
    featured: false,
    rating: 4.8,
    numReviews: 25
  },
  {
    id: "m7",
    name: "HeavyBuild HB-W150 Digital Weigh Batcher Plant",
    slug: "hb-w150-batcher",
    category: "Manufacturing",
    description: "Precision automated weigh batcher system for accurate cement and aggregate proportionality, conforming to IS 4925 standards with load cell sensors.",
    specifications: {
      "Batch Capacity": "500 kg per hopper",
      "Accuracy": "±1% Industrial Grade",
      "Bins": "Dual Compartment Storage",
      "Power": "5.5 kW Geared Discharge"
    },
    price: 380000,
    image_url: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"],
    stock: 8,
    featured: false,
    rating: 4.9,
    numReviews: 14
  },
  {
    id: "m8",
    name: "HeavyBuild HB-P10 Heavy Dewatering Sludge Pump",
    slug: "hb-p10-pump",
    category: "Manufacturing",
    description: "High-discharge self-priming sludge and mud dewatering pump for foundation trenches, basement excavation, and flood defense operations.",
    specifications: {
      "Flow Rate": "1,200 L/min (72 m³/h)",
      "Max Head": "28 m Vertical Lift",
      "Engine": "Diesel 10 HP Air-Cooled Direct Injection",
      "Outlet": "100 mm (4 inch) Flange"
    },
    price: 95000,
    image_url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
    images: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"],
    stock: 25,
    featured: false,
    rating: 4.7,
    numReviews: 20
  }
];

export const allProducts: Product[] = [...tradingProducts, ...manufacturingProducts];
export const featuredProducts: Product[] = allProducts.filter((p) => p.featured);
