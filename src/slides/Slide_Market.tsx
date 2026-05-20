import { motion } from 'framer-motion';
import { Globe, TrendingUp, Target } from 'lucide-react';

const markets = [
  {
    icon: <Globe size={28} />,
    label: "TAM",
    title: "Total Addressable Market",
    value: "$15.4B",
    desc: "African telemedicine market projected by 2030",
    source: "Grand View Research, 2023",
    color: "text-cmTeal",
    border: "border-t-cmTeal"
  },
  {
    icon: <TrendingUp size={28} />,
    label: "SAM",
    title: "Serviceable Addressable Market",
    value: "$3.2B",
    desc: "Nigeria & West Africa telemedicine opportunity",
    source: "GSMA Intelligence, 2023",
    color: "text-cmGreen",
    border: "border-t-cmGreen"
  },
  {
    icon: <Target size={28} />,
    label: "SOM",
    title: "Serviceable Obtainable Market",
    value: "$120M",
    desc: "Diaspora-to-Nigeria specialist consults, 3-year target",
    source: "Estimated from NMA diaspora data",
    color: "text-cmOrange",
    border: "border-t-cmOrange"
  }
];

const tailwinds = [
  { emoji: "📱", stat: "54%", label: "Nigerians with smartphones (2024)" },
  { emoji: "🌍", stat: "40,000+", label: "Nigerian doctors in UK, US & Canada" },
  { emoji: "💰", stat: "$24B+", label: "Nigerian diaspora remittances annually" },
  { emoji: "📡", stat: "35%", label: "YoY growth — African telehealth adoption" },
];

export default function Slide_Market() {
  return (
    <div className="flex flex-col justify-center h-full w-full px-20 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center gap-3 mb-4"
      >
        <span className="px-3 py-1 rounded-full bg-cmTeal/20 text-cmTeal text-sm font-semibold">Market Opportunity</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-5xl font-bold mb-10 text-white"
      >
        A Massive, <span className="text-cmTeal">Underserved</span> Market
      </motion.h2>

      {/* TAM / SAM / SOM */}
      <div className="grid grid-cols-3 gap-5 mb-8">
        {markets.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 + 0.2 }}
            className={`glass-panel p-6 border-t-4 ${m.border}`}
          >
            <div className={`flex items-center gap-2 mb-3 ${m.color}`}>
              {m.icon}
              <span className="text-xs font-black tracking-widest uppercase opacity-60">{m.label}</span>
            </div>
            <div className={`text-4xl font-black mb-1 ${m.color}`}>{m.value}</div>
            <div className="text-white font-semibold text-sm mb-2">{m.title}</div>
            <p className="text-white/50 text-xs leading-relaxed mb-3">{m.desc}</p>
            <p className="text-white/25 text-xs italic border-t border-white/10 pt-2">Source: {m.source}</p>
          </motion.div>
        ))}
      </div>

      {/* Tailwinds */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-white/40 text-xs uppercase tracking-widest mb-4"
      >
        Key Market Tailwinds
      </motion.p>
      <div className="grid grid-cols-4 gap-3">
        {tailwinds.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 + 0.8 }}
            className="glass-panel px-4 py-3 text-center"
          >
            <div className="text-2xl mb-1">{t.emoji}</div>
            <div className="text-cmTeal font-black text-lg">{t.stat}</div>
            <div className="text-white/50 text-xs leading-snug">{t.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
