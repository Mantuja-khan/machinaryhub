import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Wrench, TrendingUp, CheckCircle } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "TRUSTED QUALITY",
    desc: "ISO-certified equipment with rigorous 120-point quality inspections and comprehensive industry warranties."
  },
  {
    icon: Wrench,
    title: "FULL FIELD SERVICE",
    desc: "End-to-end technical support from pre-sale commissioning to rapid on-site maintenance and genuine spare parts."
  },
  {
    icon: TrendingUp,
    title: "COMPETITIVE PRICING",
    desc: "Direct-from-manufacturer rates on custom machinery and transparent market pricing on imported trading equipment."
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="font-heading text-xs sm:text-sm tracking-[0.3em] text-primary font-bold mb-2 uppercase">
            WHY CONTRACTORS CHOOSE US
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            BUILT FOR <span className="text-primary">PERFORMANCE</span>
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Powering major highway, metro, commercial, and mining projects across India with uncompromised engineering standards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-3 tracking-wide">{f.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{f.desc}</p>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-primary">
                <CheckCircle className="h-4 w-4" />
                <span>Guaranteed Standard</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
