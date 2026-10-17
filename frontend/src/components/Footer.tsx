import { Link } from "react-router-dom";
import { HardHat, Phone, Mail, MapPin, ArrowRight, ShieldCheck, Clock } from "lucide-react";

const Footer = () => (
  <footer className="relative bg-[#0b172a] text-slate-200 overflow-hidden">
    {/* Geometric Angled Mountain Curve Transition matching user's reference image */}
    <div className="w-full overflow-hidden leading-none bg-white">
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 sm:h-16 md:h-20 lg:h-24 block"
        preserveAspectRatio="none"
      >
        {/* Background Mountain Facet (semi-transparent for dimensional depth) */}
        <polygon
          points="0,100 0,45 220,50 480,20 710,65 940,10 1180,48 1440,15 1440,100"
          fill="#132847"
          opacity="0.5"
        />
        {/* Main Angled Mountain Silhouette Ridge */}
        <polygon
          points="0,100 0,65 190,65 340,82 560,18 790,90 1040,28 1260,70 1440,24 1440,100"
          fill="#0b172a"
        />
      </svg>
    </div>

    {/* Hero Banner inside footer matching reference image */}
    <div className="container mx-auto px-4 md:px-8 pt-6 pb-10 border-b border-slate-800/80">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
            BUILDING <span className="text-primary">BETTER</span>
          </h2>
          <p className="font-heading text-xs sm:text-sm tracking-[0.35em] text-slate-400 font-semibold uppercase mt-1">
            FROM THE GROUND UP
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs sm:text-sm font-heading tracking-[0.2em] text-slate-400 uppercase font-semibold">
          <span>QUALITY</span>
          <span className="text-primary font-black">/</span>
          <span>PEOPLE</span>
          <span className="text-primary font-black">/</span>
          <span>PROGRESS</span>
        </div>
      </div>
    </div>

    {/* Main Footer Links & Info */}
    <div className="container mx-auto px-4 md:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      
      {/* Brand Bio */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="h-9 w-9 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
            <HardHat className="h-5 w-5 text-primary" />
          </div>
          <span className="font-heading text-xl font-bold tracking-wider text-white">
            HEAVYBUILD <span className="text-primary">PRO</span>
          </span>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed mb-6">
          India's premier engineering partner for heavy construction machinery. Premium trading excavators, wheel loaders, cranes, and certified manufacturing equipment.
        </p>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
          <span>ISO 9001:2015 Certified Fleet</span>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-heading text-sm font-bold tracking-widest text-white uppercase mb-5 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-primary">
          QUICK NAVIGATION
        </h4>
        <div className="flex flex-col gap-2.5 text-sm text-slate-400">
          <Link to="/" className="hover:text-primary hover:translate-x-1 transition-all flex items-center gap-1.5">
            <ArrowRight className="h-3 w-3 text-primary" /> Home
          </Link>
          <Link to="/products" className="hover:text-primary hover:translate-x-1 transition-all flex items-center gap-1.5">
            <ArrowRight className="h-3 w-3 text-primary" /> Machinery Catalog
          </Link>
          <a href="/#services" className="hover:text-primary hover:translate-x-1 transition-all flex items-center gap-1.5">
            <ArrowRight className="h-3 w-3 text-primary" /> Our Services
          </a>
          <Link to="/blog" className="hover:text-primary hover:translate-x-1 transition-all flex items-center gap-1.5">
            <ArrowRight className="h-3 w-3 text-primary" /> Industry Insights & Blog
          </Link>
          <Link to="/career" className="hover:text-primary hover:translate-x-1 transition-all flex items-center gap-1.5">
            <ArrowRight className="h-3 w-3 text-primary" /> Careers
          </Link>
          <Link to="/about" className="hover:text-primary hover:translate-x-1 transition-all flex items-center gap-1.5">
            <ArrowRight className="h-3 w-3 text-primary" /> About Us
          </Link>
          <Link to="/contact" className="hover:text-primary hover:translate-x-1 transition-all flex items-center gap-1.5">
            <ArrowRight className="h-3 w-3 text-primary" /> Contact Us
          </Link>
        </div>
      </div>

      {/* Equipment Categories */}
      <div>
        <h4 className="font-heading text-sm font-bold tracking-widest text-white uppercase mb-5 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-primary">
          EQUIPMENT LINES
        </h4>
        <div className="flex flex-col gap-2.5 text-sm text-slate-400">
          <Link to="/products?category=Trading" className="hover:text-primary transition-colors">
            Hydraulic Excavators (CAT, JCB, Hitachi)
          </Link>
          <Link to="/products?category=Trading" className="hover:text-primary transition-colors">
            Crawler Bulldozers & Wheel Loaders
          </Link>
          <Link to="/products?category=Trading" className="hover:text-primary transition-colors">
            Mobile All-Terrain Cranes (Liebherr)
          </Link>
          <Link to="/products?category=Manufacturing" className="hover:text-primary transition-colors">
            Reversible Drum Concrete Mixers
          </Link>
          <Link to="/products?category=Manufacturing" className="hover:text-primary transition-colors">
            High-Rise Material Tower Hoists
          </Link>
          <Link to="/products?category=Manufacturing" className="hover:text-primary transition-colors">
            Hydraulic Concrete Block Machines
          </Link>
        </div>
      </div>

      {/* Contact & Support */}
      <div>
        <h4 className="font-heading text-sm font-bold tracking-widest text-white uppercase mb-5 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-primary">
          HEADQUARTERS
        </h4>
        <div className="flex flex-col gap-3.5 text-sm text-slate-400">
          <div className="flex items-start gap-3">
            <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span>Industrial Machinery Hub, Phase II, MIDC, Pune - 411019, Maharashtra, India</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-primary shrink-0" />
            <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210 / +91 20 4455 6677</a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-primary shrink-0" />
            <a href="mailto:info@heavybuildpro.com" className="hover:text-white transition-colors">contact@heavybuildpro.com</a>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-400 pt-2 border-t border-slate-800">
            <Clock className="h-3.5 w-3.5 text-primary shrink-0" />
            <span>Mon - Sat: 8:00 AM - 7:00 PM IST</span>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom Copyright */}
    <div className="border-t border-slate-800 text-center py-5 px-4 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between container mx-auto">
      <p>© {new Date().getFullYear()} HeavyBuild Pro Ltd. All rights reserved.</p>
      <div className="flex gap-6 mt-2 sm:mt-0">
        <Link to="/about" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
        <Link to="/about" className="hover:text-slate-400 transition-colors">Terms of Equipment Supply</Link>
        <Link to="/contact" className="hover:text-slate-400 transition-colors">Support Desk</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
