import { motion } from 'framer-motion';
import { ArrowRight, TrendingDown, Clock, DollarSign } from 'lucide-react';

const citations = [
  {
    stat: "< 1 doctor",
    label: "per 1,000 Nigerians",
    context: "Nigeria's current doctor-to-patient ratio",
    source: "WHO Global Health Observatory, 2023",
    color: "text-cmOrange"
  },
  {
    stat: "40,000+",
    label: "Nigerian doctors abroad",
    context: "Estimated diaspora medical professionals in UK, US & Canada",
    source: "Nigerian Medical Association, 2022",
    color: "text-cmTeal"
  },
  {
    stat: "70%",
    label: "reduction in specialist wait time",
    context: "Reported by comparable telemedicine programmes in sub-Saharan Africa",
    source: "Lancet Digital Health, 2022",
    color: "text-cmGreen"
  }
];

const projections = [
  {
    icon: <Clock size={22} />,
    before: "72 hrs+",
    after: "< 30 min",
    label: "Specialist Access Time",
    note: "Projected target"
  },
  {
    icon: <TrendingDown size={22} />,
    before: "~34%",
    after: "~85%",
    label: "Diagnostic Support Rate",
    note: "Based on comparable systems"
  },
  {
    icon: <DollarSign size={22} />,
    before: "$2,000+",
    after: "< $100",
    label: "Cost vs. Medical Tourism",
    note: "Projected savings per consult"
  }
];

export default function Slide6_Impact() {
  return (
    <div className="flex flex-col justify-center h-full w-full px-20 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center gap-3 mb-4"
      >
        <span className="px-3 py-1 rounded-full bg-cmBlue/20 text-blue-400 text-sm font-semibold">Data & Projections</span>
      </motion.div>

      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-5xl font-bold mb-2 text-white"
      >
        Why This <span className="text-cmTeal">Matters</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="text-white/50 text-sm mb-8"
      >
        Real-world data supporting the need & comparable system benchmarks for projected outcomes.
      </motion.p>

      {/* Real-world citations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {citations.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 + 0.2 }}
            className="glass-panel p-5"
          >
            <div className={`text-4xl font-black mb-1 ${c.color}`}>{c.stat}</div>
            <div className="text-white font-semibold text-sm mb-1">{c.label}</div>
            <div className="text-white/50 text-xs mb-3 leading-snug">{c.context}</div>
            <div className="text-white/30 text-xs italic border-t border-white/10 pt-2">Source: {c.source}</div>
          </motion.div>
        ))}
      </div>

      {/* Projected outcomes */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-white/40 text-xs uppercase tracking-widest mb-4"
      >
        Projected Outcomes (Based on Comparable Telemedicine Implementations)
      </motion.p>

      <div className="grid md:grid-cols-3 gap-4">
        {projections.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 + 0.7 }}
            className="glass-panel p-5 text-center relative overflow-hidden"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-red-400 text-base font-bold line-through opacity-60">{p.before}</span>
              <ArrowRight className="w-4 h-4 text-cmGreen flex-shrink-0" />
              <span className="text-cmGreen text-xl font-black">{p.after}</span>
            </div>
            <h3 className="font-bold text-white/90 text-sm mb-1">{p.label}</h3>
            <span className="text-white/30 text-xs italic">{p.note}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
