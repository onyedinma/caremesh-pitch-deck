import { motion } from 'framer-motion';
import { Building2, UserCircle, Stethoscope, ArrowRight } from 'lucide-react';

const streams = [
  {
    emoji: "🏥",
    title: "Hospital Subscriptions",
    model: "B2B SaaS",
    desc: "Nigerian hospitals pay a monthly subscription fee for access to the diaspora specialist network and EHR integration.",
    badge: "Primary Revenue",
    badgeColor: "bg-cmTeal/20 text-cmTeal"
  },
  {
    emoji: "🩺",
    title: "Per-Consultation Fee",
    model: "Transaction",
    desc: "A small platform fee charged per completed specialist consultation, scaled by case complexity and specialty.",
    badge: "Secondary Revenue",
    badgeColor: "bg-cmGreen/20 text-cmGreen"
  },
  {
    emoji: "🎓",
    title: "Mentorship Programme",
    model: "Premium Tier",
    desc: "Hospitals and medical schools pay for structured CME and mentorship sessions with diaspora specialists.",
    badge: "Growth Revenue",
    badgeColor: "bg-cmOrange/20 text-cmOrange"
  }
];

export default function Slide_Business() {
  return (
    <div className="flex flex-col justify-center h-full w-full px-20 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center gap-3 mb-4"
      >
        <span className="px-3 py-1 rounded-full bg-cmOrange/20 text-cmOrange text-sm font-semibold">Business Model</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-5xl font-bold mb-10 text-white"
      >
        How CareMesh <span className="text-cmOrange">Sustains Itself</span>
      </motion.h2>

      <div className="grid grid-cols-3 gap-6 mb-10">
        {streams.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 + 0.2 }}
            className="glass-panel p-6 flex flex-col"
          >
            <div className="text-4xl mb-4">{s.emoji}</div>
            <div className={`px-2 py-0.5 rounded-full text-xs font-semibold w-fit mb-3 ${s.badgeColor}`}>{s.badge}</div>
            <h3 className="text-xl font-bold mb-1 text-white">{s.title}</h3>
            <p className="text-white/40 text-xs font-medium mb-3 uppercase tracking-wider">{s.model}</p>
            <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Value exchange diagram */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="glass-panel p-5 flex items-center justify-around"
      >
        <div className="flex items-center gap-2 text-cmGreen text-sm font-semibold">
          <Building2 size={18} /> Nigerian Hospitals
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-2 text-xs text-white/40">
            <span>Subscription Fees</span><ArrowRight size={12} />
          </div>
          <div className="w-32 h-px bg-gradient-to-r from-cmGreen via-cmTeal to-cmBlue" />
          <div className="flex items-center gap-2 text-xs text-white/40">
            <ArrowRight size={12} className="rotate-180" /><span>Specialist Access</span>
          </div>
        </div>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cmBlue to-cmTeal font-black text-white text-xs">CM</div>
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-2 text-xs text-white/40">
            <span>CME + Recognition</span><ArrowRight size={12} />
          </div>
          <div className="w-32 h-px bg-gradient-to-r from-cmTeal via-cmBlue to-cmTeal" />
          <div className="flex items-center gap-2 text-xs text-white/40">
            <ArrowRight size={12} className="rotate-180" /><span>Volunteer Hours</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-cmTeal text-sm font-semibold">
          <Stethoscope size={18} /> Diaspora Doctors
        </div>
      </motion.div>
    </div>
  );
}
