import { motion } from 'framer-motion';
import { PlaneTakeoff, Activity, Users, TrendingDown } from 'lucide-react';

const problems = [
  {
    icon: <PlaneTakeoff size={28} />,
    title: "Continuous Brain Drain",
    desc: "Trained medical professionals continuously migrate abroad, draining Nigeria of its healthcare talent."
  },
  {
    icon: <Users size={28} />,
    title: "Uneven Doctor-to-Patient Ratios",
    desc: "The outflow creates severe imbalances, with overburdened urban hospitals and critical shortages in rural areas."
  },
  {
    icon: <TrendingDown size={28} />,
    title: "Weakened Clinical Capacity",
    desc: "Local clinical capacity has weakened, wait times have increased, and access to specialized care remains severely limited."
  },
  {
    icon: <Activity size={28} />,
    title: "Underserved Communities Suffer Most",
    desc: "Rural and underserved regions bear the brunt — patients travel long distances or go without specialist care entirely."
  }
];

export default function Slide2_Problem() {
  return (
    <div className="flex flex-col justify-center h-full w-full px-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center gap-3 mb-4"
      >
        <span className="px-3 py-1 rounded-full bg-cmOrange/20 text-cmOrange text-sm font-semibold">GCGO Problem Statement</span>
      </motion.div>

      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-5xl font-bold mb-4 text-white"
      >
        Impact of Brain Drain on Nigeria's <span className="text-cmOrange">Healthcare System</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-white/70 mb-12 max-w-4xl leading-relaxed"
      >
        Nigeria's healthcare system is facing a critical crisis due to the continuous migration of trained medical professionals to other countries.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 + 0.3 }}
            className="glass-panel p-6 flex items-start gap-4 border-l-4 border-l-cmOrange"
          >
            <div className="p-3 rounded-xl bg-cmOrange/10 text-cmOrange flex-shrink-0">
              {p.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-white/60 leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
