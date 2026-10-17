import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Package, Users, Award, Clock } from "lucide-react";

const stats = [
  { icon: Package, value: "500+", label: "Machines Delivered" },
  { icon: Users, value: "200+", label: "Happy Clients" },
  { icon: Award, value: "18+", label: "Years Experience" },
  { icon: Clock, value: "24/7", label: "Support Available" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-slate-50 border-y border-slate-200 py-12 md:py-16">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <p className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900">{s.value}</p>
            <p className="text-sm font-medium text-slate-500 mt-1 tracking-wide">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
