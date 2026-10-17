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
}

const tradingProducts: Product[] = [
  {
    id: "t1",
    name: "CAT 320 Next-Gen Hydraulic Excavator",
    slug: "cat-320-next-gen-excavator",
    category: "Trading",
    description: "The CAT 320 brings premium performance with simple-to-use technologies like CAT GRADE with 2D, Grade Assist, and Payload.",
    specifications: { "Engine Power": "129 kW (174 hp)", "Operating Weight": "22,500 kg", "Max Digging Depth": "6.72 m", "Bucket Capacity": "1.19 m³" },
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
    description: "World's number one backhoe loader with superior digging power and ultra-efficient JCB EcoMAX engine.",
    specifications: { "Engine Power": "55 kW (74 hp)", "Operating Weight": "8,135 kg", "Max Dig Depth": "5.46 m", "Loader Capacity": "1.0 m³" },
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
    description: "Heavy-duty crawler dozer engineered for rough grading, mine overburden handling, and heavy civil infrastructure.",
    specifications: { "Engine Power": "162 kW (217 hp)", "Operating Weight": "20,990 kg", "Blade Capacity": "5.61 m³" },
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
    description: "Equipped with OptiShift technology and Torque Parallel linkage for superior breakout force in quarry operations.",
    specifications: { "Engine Power": "203 kW (272 hp)", "Operating Weight": "19,800 kg", "Bucket Capacity": "3.5 m³" },
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
    name: "Liebherr LTM 1100-5.2 Mobile Crane",
    slug: "liebherr-ltm-1100-5-2-mobile-crane",
    category: "Trading",
    description: "100-ton capacity all-terrain mobile crane offering long telescopic reach and VarioBase variable outriggers.",
    specifications: { "Max Capacity": "100 t", "Max Boom Length": "52 m", "Engine Power": "370 kW (503 hp)", "Axles": "5" },
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
    description: "Built for tough mining, granite extraction and quarrying with reinforced heavy-duty undercarriage.",
    specifications: { "Engine Power": "210 kW (282 hp)", "Operating Weight": "35,200 kg", "Max Dig Depth": "7.45 m" },
    price: 11200000,
    image_url: "https://i.pinimg.com/1200x/d6/2c/70/d62c7003c581797a2c70174a30ae1bf2.jpg",
    images: ["https://i.pinimg.com/1200x/d6/2c/70/d62c7003c581797a2c70174a30ae1bf2.jpg"],
    stock: 3,
    featured: false,
    rating: 4.8,
    numReviews: 14
  }
];

const manufacturingProducts: Product[] = [
  {
    id: "m1",
    name: "HeavyBuild HB-200 Industrial Concrete Mixer",
    slug: "heavybuild-hb-200-industrial-concrete-mixer",
    category: "Manufacturing",
    description: "Industrial-grade reversible drum concrete mixer with hydraulic hopper feeding system.",
    specifications: { "Drum Capacity": "200 L", "Motor Power": "3.7 kW", "Rotation Speed": "26 rpm", "Weight": "420 kg" },
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
    description: "High-compaction vibrating plate compactor powered by Honda GX160 engine for asphalt and trench work.",
    specifications: { "Plate Size": "520x440 mm", "Centrifugal Force": "22 kN", "Engine": "5.5 HP", "Weight": "96 kg" },
    price: 145000,
    image_url: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80"],
    stock: 28,
    featured: true,
    rating: 4.8,
    numReviews: 22
  },
  {
    id: "m3",
    name: "HeavyBuild HB-3T High-Rise Tower Hoist",
    slug: "heavybuild-hb-3t-tower-hoist",
    category: "Manufacturing",
    description: "3-ton capacity modular material hoist for multi-story building construction with emergency safety brakes.",
    specifications: { "Capacity": "3 ton", "Height": "60 m", "Speed": "32 m/min", "Motor": "22 kW" },
    price: 720000,
    image_url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"],
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
    description: "High-yield semi-automatic concrete hollow block and interlocking paver manufacturing plant.",
    specifications: { "Production Rate": "1,200 blocks/hr", "Hydraulic Pressure": "16 MPa", "Motor": "15 kW" },
    price: 1150000,
    image_url: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80",
    images: ["https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80"],
    stock: 4,
    featured: false,
    rating: 4.9,
    numReviews: 8
  }
];

export const allProducts: Product[] = [...tradingProducts, ...manufacturingProducts];
export const featuredProducts = allProducts.filter(p => p.featured);
