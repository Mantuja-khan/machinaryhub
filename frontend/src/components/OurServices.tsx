import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, X, CheckCircle2, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  features: string[];
}

const services: ServiceItem[] = [
  {
    id: "construction",
    title: "CONSTRUCTION",
    subtitle: "Heavy Civil & Commercial Building",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    description: "End-to-end heavy construction solutions powered by our premier fleet of hydraulic excavators, tower cranes, and foundation drill rigs. Specialized in multi-story infrastructure, industrial complexes, and highways.",
    features: [
      "Heavy Earthmoving & Site Preparation",
      "Structural Steel & Reinforced Concrete Framing",
      "High-Tonnage Mobile & Tower Crane Rigging",
      "Pan-India Project Mobilization"
    ]
  },
  {
    id: "renovation",
    title: "RENOVATION",
    subtitle: "Industrial Retrofit & Structural Repair",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80",
    description: "Modernization and structural reinforcement of aged industrial plants, warehouses, bridges, and commercial facilities. We deploy precision concrete cutting, hydro-demolition, and retrofitting machinery.",
    features: [
      "Seismic Retrofitting & Column Jacketing",
      "Industrial Floor Resurfacing & Heavy Screeding",
      "Controlled Mechanical Demolition",
      "Facade & Core Structural Restoration"
    ]
  },
  {
    id: "planning",
    title: "PLANNING",
    subtitle: "Architectural & Equipment Engineering",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80",
    description: "Meticulous pre-construction planning, site logistics calculation, heavy lift path simulations, and equipment sizing. Our veteran civil engineers ensure zero surprises during live execution.",
    features: [
      "Crane Lift Radius & Soil Bearing Calculations",
      "BIM Modeling & Machinery Cycle Optimization",
      "Cost Estimation & Procurement Scheduling",
      "Comprehensive Safety & Environmental Compliance"
    ]
  },
  {
    id: "concrete-works",
    title: "CONCRETE WORKS",
    subtitle: "Batching, Pumping & High-Spec Pours",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80",
    description: "Complete concrete batching, transportation, and compaction services. Utilizing manufactured HeavyBuild reversible drum mixers, transit pumps, and high-frequency needle vibrators for defect-free pours.",
    features: [
      "High-Strength M25 to M50 Concrete Batching",
      "Boom Pumping for High-Elevation Decks",
      "Vibratory Compaction & Laser Screeding",
      "Interlocking Pavers & Concrete Block Fabrication"
    ]
  }
];

const OurServices = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background Subtle Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-wider uppercase inline-block relative">
              OUR <span className="text-primary">SERVICES</span>
              {/* Accent bar under title matching reference image */}
              <span className="block mx-auto mt-2 h-1 w-20 bg-primary rounded-full" />
            </h2>
            <p className="text-slate-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
              Comprehensive turnkey equipment execution and engineering services tailored to demanding infrastructure projects.
            </p>
          </motion.div>
        </div>

        {/* Main Services Layout - Left Engineer Photo + Right Parallelogram Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Engineer in Safety Vest & Hardhat Holding Blueprints */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 relative group"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[3/4] max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=800&q=80"
                alt="Chief Construction Engineer with blueprints"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-[11px] font-heading font-bold tracking-widest rounded uppercase">
                  Field Certified
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold mt-2">
                  Engineered Precision
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-1">
                  18+ years of contracting & machinery excellence across India.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Angled Parallelogram Cards */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  onClick={() => setSelectedService(service)}
                  className="cursor-pointer group flex flex-col items-center"
                >
                  {/* Angled Parallelogram Card matching reference image */}
                  <div
                    className="w-full aspect-[3/4] sm:aspect-[2/3] relative overflow-hidden rounded-md shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:border-primary"
                    style={{
                      clipPath: "polygon(14% 0%, 100% 0%, 86% 100%, 0% 100%)",
                    }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-115"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent group-hover:from-primary/70 transition-colors" />
                    
                    {/* Hover indicator icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="px-2.5 py-1 bg-white/90 text-primary text-[10px] font-bold tracking-wider rounded uppercase">
                        View
                      </span>
                    </div>
                  </div>

                  {/* Service Title */}
                  <h4 className="font-heading text-xs sm:text-sm md:text-base font-bold text-slate-800 uppercase tracking-wider mt-3 text-center group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-slate-400 text-center line-clamp-1 mt-0.5">
                    {service.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* "VIEW SERVICE >" Button matching reference image */}
            <div className="flex justify-center md:justify-start lg:pl-4">
              <button
                onClick={() => setSelectedService(services[0])}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-heading font-bold text-sm tracking-wider rounded-md shadow-lg shadow-primary/25 hover:bg-primary/90 hover:gap-3 transition-all"
              >
                VIEW SERVICES <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="aspect-video w-full rounded-xl overflow-hidden mb-6 bg-slate-100">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
            </div>

            <span className="px-3 py-1 bg-primary/10 text-primary font-heading font-semibold text-xs tracking-wider uppercase rounded">
              HEAVYBUILD SERVICE
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              {selectedService.title}
            </h3>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              {selectedService.description}
            </p>

            <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
              <h4 className="font-heading text-xs tracking-widest text-slate-500 uppercase font-bold">
                Key Capabilities:
              </h4>
              {selectedService.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-3">
              <Link
                to="/contact"
                onClick={() => setSelectedService(null)}
                className="flex-1 py-3 px-4 bg-primary text-primary-foreground font-heading font-bold text-xs tracking-wider rounded-lg text-center hover:bg-primary/90 transition-colors"
              >
                REQUEST SERVICE QUOTE
              </Link>
              <a
                href="tel:+919876543210"
                className="py-3 px-4 border border-slate-200 text-slate-700 font-heading font-semibold text-xs tracking-wider rounded-lg hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-1.5"
              >
                <PhoneCall className="h-4 w-4" /> CALL US
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurServices;
