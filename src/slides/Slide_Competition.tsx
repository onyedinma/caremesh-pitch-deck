import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';

const criteria = [
  "Diaspora Doctor Network",
  "Offline / Low-Bandwidth",
  "Integrated EHR",
  "Mentorship Platform",
  "Nigeria-Specific Compliance",
  "CME Incentives",
  "Rural Focus",
];

type Status = 'yes' | 'no' | 'partial';

const competitors: { name: string; label: string; emoji: string; scores: Status[] }[] = [
  {
    name: "CareMesh (DDVCP)",
    label: "Us",
    emoji: "💚",
    scores: ['yes','yes','yes','yes','yes','yes','yes']
  },
  {
    name: "Generic Telemedicine",
    label: "e.g. Babylon, Teladoc",
    emoji: "📱",
    scores: ['no','no','partial','no','no','no','no']
  },
  {
    name: "Medical Tourism",
    label: "Flying abroad for care",
    emoji: "✈️",
    scores: ['no','no','no','no','no','no','no']
  },
  {
    name: "Local Private Hospitals",
    label: "Nigerian specialists",
    emoji: "🏥",
    scores: ['no','no','partial','partial','yes','no','no']
  },
];

const StatusIcon = ({ status }: { status: Status }) => {
  if (status === 'yes') return <Check size={18} className="text-cmGreen mx-auto" />;
  if (status === 'partial') return <Minus size={18} className="text-cmOrange mx-auto" />;
  return <X size={18} className="text-red-400/60 mx-auto" />;
};

export default function Slide_Competition() {
  return (
    <div className="flex flex-col justify-center h-full w-full px-20 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center gap-3 mb-4"
      >
        <span className="px-3 py-1 rounded-full bg-cmGreen/20 text-cmGreen text-sm font-semibold">Competitive Landscape</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-5xl font-bold mb-10 text-white"
      >
        Why <span className="text-cmGreen">CareMesh Wins</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-panel overflow-hidden"
      >
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left px-5 py-4 text-white/50 font-medium w-48">Capability</th>
              {competitors.map((c, i) => (
                <th key={i} className={`px-4 py-4 text-center ${i === 0 ? 'bg-cmTeal/10' : ''}`}>
                  <div className="text-xl mb-1">{c.emoji}</div>
                  <div className={`font-bold text-sm ${i === 0 ? 'text-cmTeal' : 'text-white/70'}`}>{c.name}</div>
                  <div className="text-white/30 text-xs">{c.label}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {criteria.map((criterion, ri) => (
              <motion.tr
                key={ri}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: ri * 0.07 + 0.4 }}
                className="border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <td className="px-5 py-3 text-white/60">{criterion}</td>
                {competitors.map((c, ci) => (
                  <td key={ci} className={`px-4 py-3 text-center ${ci === 0 ? 'bg-cmTeal/5' : ''}`}>
                    <StatusIcon status={c.scores[ri]} />
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="text-white/30 text-xs mt-4 text-center"
      >
        <span className="text-cmGreen">✓ Full capability</span> &nbsp;·&nbsp; <span className="text-cmOrange">— Partial</span> &nbsp;·&nbsp; <span className="text-red-400/60">✗ Not available</span>
      </motion.p>
    </div>
  );
}
