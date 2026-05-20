import { motion } from 'framer-motion';
import { HeartPulse, ExternalLink, ArrowRight, Target, Users, Rocket } from 'lucide-react';

const asks = [
  {
    icon: <Users size={22} />,
    title: "Pilot Partners",
    desc: "2–3 Nigerian hospitals willing to pilot the platform in Q3 2026",
    color: "text-cmTeal"
  },
  {
    icon: <Target size={22} />,
    title: "50 Diaspora Doctors",
    desc: "Nigerian doctors in UK, US, and Canada to join as founding specialists",
    color: "text-cmGreen"
  },
  {
    icon: <Rocket size={22} />,
    title: "Seed Funding / Grants",
    desc: "To fund platform development, compliance, and market entry in Nigeria",
    color: "text-cmOrange"
  }
];

export default function Slide9_Conclusion() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-16 relative">
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cmBlue/25 rounded-full blur-[160px] -z-10"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cmBlue to-cmTeal flex items-center justify-center shadow-2xl shadow-cmTeal/40 mb-6"
      >
        <HeartPulse size={32} className="text-white" />
      </motion.div>

      <motion.h2 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-5xl font-bold tracking-tight mb-2 text-center"
      >
        Brain Drain → <span className="text-cmGreen">Brain Gain</span>
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="text-lg text-white/60 max-w-2xl mb-10 text-center leading-relaxed"
      >
        Help us bridge Nigeria's healthcare gap by leveraging the power of the diaspora — no flight ticket required.
      </motion.p>

      {/* The Ask */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-white/40 text-xs uppercase tracking-widest mb-5"
      >
        What We're Looking For
      </motion.p>

      <div className="grid grid-cols-3 gap-4 w-full max-w-4xl mb-10">
        {asks.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 + 0.55 }}
            className="glass-panel p-5 text-center"
          >
            <div className={`flex justify-center mb-3 ${a.color}`}>{a.icon}</div>
            <h3 className="font-bold text-white mb-2">{a.title}</h3>
            <p className="text-white/50 text-xs leading-relaxed">{a.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.95 }}
        className="flex items-center gap-4"
      >
        <a 
          href="https://caremesh.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-white text-cmDark font-bold rounded-full shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-shadow text-sm"
        >
          <ExternalLink size={16} /> Try the Prototype
        </a>
        <a
          href="https://youtu.be/JMXBDh9KiD0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all text-sm"
        >
          ▶ Watch Demo <ArrowRight size={14} />
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-white/25 text-xs mt-6"
      >
        Team TechyTeker — Professional Foundations 2026
      </motion.p>
    </div>
  );
}
