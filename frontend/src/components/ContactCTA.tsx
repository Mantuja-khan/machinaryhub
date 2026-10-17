import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, PhoneCall } from "lucide-react";

const ContactCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-slate-50 via-white to-amber-50/20 border-t border-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative container mx-auto px-4 text-center max-w-3xl"
      >
        <p className="font-heading text-xs sm:text-sm tracking-[0.3em] text-primary font-bold mb-3 uppercase">
          READY TO ELEVATE YOUR JOB SITE?
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          LET'S DISCUSS YOUR <span className="text-primary">PROJECT</span>
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto mb-8 text-base sm:text-lg leading-relaxed">
          Get in touch with our machinery consultants for tailored quotation, fleet leasing plans, or technical specifications.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-heading font-semibold tracking-wider text-sm rounded-lg shadow-md shadow-primary/25 hover:bg-primary/90 transition-all hover:gap-3"
          >
            CONTACT OUR SPECIALISTS <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white border border-slate-300 text-slate-800 font-heading font-semibold tracking-wider text-sm rounded-lg hover:border-primary hover:text-primary transition-all shadow-sm"
          >
            <PhoneCall className="h-4 w-4 text-primary" /> +91 98765 43210
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
