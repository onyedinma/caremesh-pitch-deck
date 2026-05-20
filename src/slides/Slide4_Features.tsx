import { motion } from 'framer-motion';
import { Video, BookOpen, FileDigit, WifiOff, Award, Stethoscope } from 'lucide-react';

const features = [
  {
    icon: <Video size={24} />,
    title: "Real-Time Video Consultations",
    desc: "HD video and audio with integrated Electronic Health Records (EHR) for seamless specialist consultations.",
    color: "cmBlue"
  },
  {
    icon: <Stethoscope size={24} />,
    title: "Remote Diagnosis & Second Opinions",
    desc: "Specialist second opinions, referrals, and case reviews to support local doctors with complex cases.",
    color: "cmGreen"
  },
  {
    icon: <FileDigit size={24} />,
    title: "Secure File Sharing",
    desc: "End-to-end encrypted sharing of lab results, medical scans, and imaging between local and diaspora doctors.",
    color: "cmTeal"
  },
  {
    icon: <BookOpen size={24} />,
    title: "Mentorship Dashboard",
    desc: "Senior diaspora doctors train and support junior medical staff in Nigerian hospitals, building local capacity.",
    color: "cmOrange"
  },
  {
    icon: <WifiOff size={24} />,
    title: "Offline-First & Low Bandwidth",
    desc: "Designed for rural areas with poor connectivity — supports offline queuing and asynchronous case reviews.",
    color: "cmBlue"
  },
  {
    icon: <Award size={24} />,
    title: "Incentive System",
    desc: "Tax credits, professional recognition, and Continuing Medical Education (CME) credits for active participation.",
    color: "cmGreen"
  }
];

const colorMap: Record<string, string> = {
  cmBlue: "bg-[#003087]/20 text-[#003087]",
  cmGreen: "bg-[#008751]/20 text-[#008751]",
  cmTeal: "bg-[#00C4B4]/20 text-[#00C4B4]",
  cmOrange: "bg-[#FF6B00]/20 text-[#FF6B00]"
};

const borderMap: Record<string, string> = {
  cmBlue: "border-l-[#003087]",
  cmGreen: "border-l-[#008751]",
  cmTeal: "border-l-[#00C4B4]",
  cmOrange: "border-l-[#FF6B00]"
};

export default function Slide4_Features() {
  return (
    <div className="flex flex-col justify-center h-full w-full px-20 py-10">
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-5xl font-bold mb-10 text-white"
      >
        Key <span className="text-cmTeal">Features</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 + 0.2 }}
            className={`glass-panel p-5 flex flex-col items-start border-l-4 ${borderMap[f.color]} group hover:bg-white/10 transition-colors`}
          >
            <div className={`p-2.5 rounded-xl ${colorMap[f.color]} mb-3 group-hover:scale-110 transition-transform`}>
              {f.icon}
            </div>
            <h3 className="text-lg font-bold mb-2">{f.title}</h3>
            <p className="text-sm text-white/60 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
