const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const Blog = require('./models/Blog');

dotenv.config();

const demoProducts = [
  {
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
    stock: 4,
    featured: true,
    rating: 4.9,
    numReviews: 18
  },
  {
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
    stock: 7,
    featured: true,
    rating: 4.8,
    numReviews: 24
  },
  {
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
    stock: 2,
    featured: true,
    rating: 4.9,
    numReviews: 9
  },
  {
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
    stock: 5,
    featured: true,
    rating: 4.7,
    numReviews: 12
  },
  {
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
    stock: 1,
    featured: true,
    rating: 5.0,
    numReviews: 6
  },
  {
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
    stock: 3,
    featured: false,
    rating: 4.8,
    numReviews: 14
  },
  {
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
    stock: 15,
    featured: true,
    rating: 4.9,
    numReviews: 31
  },
  {
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
    stock: 28,
    featured: true,
    rating: 4.8,
    numReviews: 22
  },
  {
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
    stock: 6,
    featured: true,
    rating: 4.9,
    numReviews: 17
  },
  {
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
    stock: 12,
    featured: false,
    rating: 4.7,
    numReviews: 11
  },
  {
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
    image_url: "https://i.pinimg.com/1200x/f7/3c/4a/f73c4a94b4fca6f384e92798b1a92e1c.jpg",
    stock: 4,
    featured: false,
    rating: 4.9,
    numReviews: 8
  },
  {
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
    image_url: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&w=800&q=80",
    stock: 3,
    featured: false,
    rating: 4.8,
    numReviews: 15
  }
];

const demoBlogs = [
  {
    title: "The Next Era of Construction Machinery: Automation, Telematics & Electric Fleets in 2026",
    slug: "next-era-construction-machinery-automation-telematics-electric-fleets-2026",
    excerpt: "Explore how autonomous earthmoving equipment, real-time IoT telematics, and zero-emission electric powertrains are redefining job site economics.",
    content: `The heavy equipment landscape is experiencing its most rapid transformation in half a century. From metropolitan construction zones to deep-pit aggregate quarries, contractors are demanding lower operating expenditures, zero idle fuel burn, and heightened operator safety.

Leading manufacturers like Caterpillar, Komatsu, and Volvo have moved beyond prototype showcases into full commercial deliveries of electric compact excavators, hybrid loaders, and telematics-integrated fleet tracking suites.

Key Trends Driving the Heavy Machinery Industry:
1. Intelligent 2D & 3D Grade Assist:
Modern excavators now carry factory-fitted GNSS and sensor arrays. Operators can program target trench slopes or foundation depth directly from an in-cab touchscreen. The hydraulic system automatically guides the boom and bucket to prevent over-digging, saving hours of costly surveying.

2. IoT Telematics & Predictive Maintenance:
Sensors continuously stream hydraulic oil temperatures, particulate contamination, cylinder cycle counts, and fuel consumption to cloud dashboards. Field service technicians can replace filters or hydraulic seals days before an actual failure stops an entire project.

3. Electric & Zero-Emission Job Sites:
Stricter municipal noise and emissions rules in dense urban centers are accelerating the adoption of battery-electric compact machinery. These machines deliver 100% instantaneous torque while running quietly enough for nighttime utility maintenance inside city limits.

At HeavyBuild Pro, our technical consultation team helps fleet managers optimize machinery selection across trading and custom manufacturing lines to maximize uptime and return on investment.`,
    author: "Mantu Jha, Chief Technical Director",
    image_url: "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1000&q=80",
    published: true
  },
  {
    title: "How to Select the Right Excavator for Mining vs Civil Construction Projects",
    slug: "how-to-select-the-right-excavator-mining-civil-construction",
    excerpt: "A comprehensive buyer guide comparing operating tonnage, hydraulic flow, arm breakout force, and track shoe configurations for optimal productivity.",
    content: `Choosing an excavator is one of the most critical capital expenditure decisions for any construction firm. Picking an undersized machine leads to hydraulic overheating, structural fatigue, and missed deadlines. Conversely, an oversized excavator drives up transportation costs and burns unnecessary fuel during light utility duties.

Here are the four primary factors our engineering team recommends evaluating before purchasing or leasing:

1. Operating Weight and Digging Geometry:
For general utility, road trenching, and residential building foundations, 8 to 22-ton crawler excavators (such as the CAT 320 or JCB 3CX) offer the sweet spot of maneuverability and digging depth (5.5m - 6.7m). For heavy overburden stripping, blasted granite loading, and mining contracts, 35-ton+ platforms with high-strength booms are essential.

2. Hydraulic System Circuitry & Auxiliary Flow:
If you plan on operating hydraulic rock breakers, demolition shears, or augers, verify that the excavator includes dual-pump auxiliary piping and programmable flow controls in the cabin.

3. Undercarriage Selection:
Standard versus Long Carriage (LC): Long undercarriages distribute ground pressure more evenly, making them indispensable in muddy riverbed terrains or soft topsoil. For hard rock quarries, heavy-duty track links with single or double grouser shoes ensure maximum traction and wear resistance.

4. Resale Value and Spare Parts Availability:
Heavy machinery is only as good as its dealer support network. Partnering with a supplier who guarantees 24-hour turnaround on hydraulic hoses, valves, and bucket teeth ensures your machines never sit idle.`,
    author: "Rahul Verma, Senior Equipment Specialist",
    image_url: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80",
    published: true
  },
  {
    title: "Essential Preventive Maintenance Protocols for Hydraulic Equipment",
    slug: "essential-preventive-maintenance-protocols-hydraulic-equipment",
    excerpt: "Minimize costly unexpected job site downtime with this 5-point daily and weekly inspection routine for heavy machinery hydraulics.",
    content: `Over 70% of heavy machinery breakdowns trace back to hydraulic fluid degradation or contamination. A failed hydraulic pump on a 100-ton crane or mining excavator can trigger thousands of dollars per day in delayed subcontractor costs.

Follow this battle-tested maintenance schedule to ensure maximum lifespan for your equipment:

1. Daily Cold-Start Fluid Level Checks:
Always park the machine on level ground with cylinders retracted (excavator boom lowered, bucket curled). Check sight gauges before turning the key. Low oil introduces air into pumps, causing catastrophic cavitation pitting.

2. Inspect Hoses for Abrasions and Weeping:
High-pressure hydraulic lines flex thousands of times per day. Look for outer rubber chafing against steel frames, swollen crimp fittings, or micro-pinhole oil weeping. A weeping hose under 300 bar will burst when shock-loaded.

3. Keep Cylinder Rods Clean & Seal Shields Intact:
Grit and dried concrete slurry on hydraulic chrome rods slice wiper seals when the cylinder retracts. Wipe down exposed rods at shift end and examine rod surfaces for scoring or rock gouges.

4. Adhere Strictly to Scheduled Filter & Fluid Changes:
Do not wait for oil to darken. Modern high-pressure electro-hydraulic valves operate with microscopic micron tolerances. Changing return line filters every 500 hours and conducting spectrophotometric fluid analysis guarantees peace of mind.`,
    author: "Dinesh K., Maintenance Head",
    image_url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    published: true
  },
  {
    title: "Concrete Mixing Technologies: Reversible Drum Mixers vs Stationary Batching Plants",
    slug: "concrete-mixing-technologies-reversible-drum-vs-stationary-batching-plants",
    excerpt: "Understand the structural differences, output consistency, and capital cost tradeoffs between on-site manufactured mixers and commercial RMC batch plants.",
    content: `Delivering uniform, slump-controlled concrete on time is the backbone of any structural project. Deciding whether to install an on-site mobile reversible drum mixer or contract an external Ready-Mix Concrete (RMC) plant depends on job geography, pour volume, and access logistics.

When On-Site Reversible Drum Mixers Win:
For medium-scale residential complexes, bridge piers, culverts, and remote highway segments, an on-site HeavyBuild HB-200 or HB-500 series batch mixer provides total control over pour pacing. You eliminate the dreaded risk of RMC trucks getting stuck in city traffic jams while concrete sets in transit drums.

Advantages of Factory-Manufactured Concrete Machines:
- Immediate on-demand batching tailored to unpredictable pouring schedules.
- HeavyBuild mixers feature dual-speed electric motors and hardened alloy paddle geometry for homogeneous cement-aggregate dispersion.
- Integrated water meters and weigh batchers provide precise water-cement ratio control meeting M25 and M30 grade specifications.

Whether you require portable compaction needles or heavy tower hoists for concrete vertical transport, HeavyBuild Pro manufactures field-proven equipment engineered for Indian conditions.`,
    author: "HeavyBuild Technical Desk",
    image_url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
    published: true
  },
  {
    title: "Rigging and Crane Safety: Critical Job Site Best Practices",
    slug: "rigging-and-crane-safety-critical-job-site-best-practices",
    excerpt: "Key guidelines for outrigger ground stability, load radius calculation, wind speed thresholds, and sling rigging safety.",
    content: `Heavy lifting operations demand meticulous engineering calculation before a hook leaves the ground. With mobile cranes frequently lifting upwards of 50 to 100 metric tons on urban building envelopes, safety compliance is paramount.

Critical Crane Safety Principles:
1. Ground Bearing Capacity & Outrigger Matting:
The majority of mobile crane tipping incidents occur not from structural boom failure, but from outrigger sinkage into uncompacted backfill or subterranean utility voids. Always calculate ground pressure and use laminated hardwood or engineered composite outrigger pads.

2. Working Load Limits (WLL) and Center of Gravity:
Never guess the weight of prefabricated concrete panels or structural steel trusses. Factoring in dynamic shock loads, crane hook weight, and sling angle multiplication is essential for staying well within the crane's safe working load chart.

3. Wind Threshold Monitoring:
High-elevation boom tips experience wind gusts significantly stronger than ground-level breezes. Automatic cab anemometers must trigger mandatory lift stand-downs once wind speeds exceed manufacturer thresholds (typically 9 to 12 m/s).`,
    author: "Sanjay Patel, Safety & Operations Auditor",
    image_url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    published: true
  },
  {
    title: "Heavy Equipment Financing, Lease-to-Own & Asset Trading Insights",
    slug: "heavy-equipment-financing-lease-to-own-asset-trading-insights",
    excerpt: "A tactical guide for infrastructure contractors navigating equipment capital procurement, depreciation tax advantages, and trade-in valuations.",
    content: `Investing in modern construction machinery is a major economic driver for contractor balance sheets. Balancing capital reserves while expanding equipment fleets requires smart structuring between direct trading purchases, lease financing, and certified refurbished machinery.

Strategies for Fleet Growth:
- Certified Pre-Owned Trading Equipment: Purchasing vetted, inspected tier-1 brand machines (CAT, Komatsu, Volvo) allows contractors to mobilize quickly with up to 40% lower capital expenditure compared to brand-new units.
- Buyback & Trade-In Guarantees: Upgrading your excavators every 3 to 5 years keeps maintenance costs at minimum while preserving strong residual market value.
- Factory Direct Pricing on Manufacturing Units: Sourcing concrete mixers, plate compactors, and tower hoists directly from HeavyBuild eliminates distributor markups and ensures immediate spare parts supply.`,
    author: "HeavyBuild Financial Advisory",
    image_url: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1000&q=80",
    published: true
  }
];

const seedDemoData = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB successfully!");

    // Upsert products
    console.log("Seeding Demo Products...");
    for (const prod of demoProducts) {
      await Product.findOneAndUpdate(
        { slug: prod.slug },
        prod,
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
    }
    const totalProducts = await Product.countDocuments();
    console.log(`Total Products now in DB: ${totalProducts}`);

    // Upsert blogs
    console.log("Seeding Demo Blogs...");
    for (const blog of demoBlogs) {
      await Blog.findOneAndUpdate(
        { slug: blog.slug },
        blog,
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
    }
    const totalBlogs = await Blog.countDocuments();
    console.log(`Total Blogs now in DB: ${totalBlogs}`);

    console.log("Demo data seeding completed successfully!");
    process.exit(0);
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
};

seedDemoData();
