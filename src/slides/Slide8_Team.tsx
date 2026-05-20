import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Evidence Emmanuel",
    primary: "Project Manager",
    backup: "Data Analyst",
    emoji: "👨‍💼"
  },
  {
    name: "Jideonwo Isioma",
    primary: "UX Researcher",
    backup: "Product Manager",
    emoji: "🔍"
  },
  {
    name: "Onyedinma Onyekachi",
    primary: "Product Manager",
    backup: "UI/UX Designer",
    emoji: "📋"
  },
  {
    name: "David Audu",
    primary: "Data Analyst",
    backup: "UI/UX Designer",
    emoji: "📊"
  },
  {
    name: "Emmanuel",
    primary: "UI/UX Designer",
    backup: "",
    emoji: "🎨"
  }
];

export default function Slide8_Team() {
  return (
    <div className="flex flex-col justify-center h-full w-full px-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center gap-3 mb-4"
      >
        <span className="px-3 py-1 rounded-full bg-cmBlue/20 text-blue-400 text-sm font-semibold">Team TechyTeker</span>
      </motion.div>

      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-5xl font-bold mb-12 text-white"
      >
        The <span className="text-cmTeal">Team</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
        {teamMembers.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 + 0.2 }}
            className="glass-panel p-6 text-center group hover:bg-white/10 transition-colors"
          >
            <motion.div 
              className="text-5xl mb-4"
              whileHover={{ scale: 1.2 }}
            >
              {m.emoji}
            </motion.div>
            <h3 className="text-lg font-bold text-white mb-1">{m.name}</h3>
            <div className="px-3 py-1 rounded-full bg-cmTeal/20 text-cmTeal text-xs font-semibold mb-2 inline-block">
              {m.primary}
            </div>
            {m.backup && (
              <p className="text-white/40 text-xs">Backup: {m.backup}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
