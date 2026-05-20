import { motion } from 'framer-motion';
import { MessageSquare, Shield, WifiOff, CalendarCheck } from 'lucide-react';

const feedbacks = [
  {
    person: "Dr. Ifeanyi Okoronkwo",
    role: "Practicing Doctor, Lagos",
    icon: <Shield size={20} />,
    feedback: "Doctors in Nigeria want strong data security and compliance with Nigerian data protection laws.",
    action: "End-to-end encryption and compliance badges displayed on the platform."
  },
  {
    person: "Nurse Christie Onyedinma",
    role: "Rural Clinic Worker, Imo",
    icon: <WifiOff size={20} />,
    feedback: "Internet reliability is poor in rural areas; the app must work offline or with very low bandwidth.",
    action: "Offline queuing of consultations and asynchronous case reviews prioritized."
  },
  {
    person: "Dr. Okoroafor Ikenna",
    role: "Diaspora Doctor, UK",
    icon: <MessageSquare size={20} />,
    feedback: "Diaspora doctors need simple incentives — easy CME credit earning or recognition certificates.",
    action: "Dedicated Impact & Recognition dashboard showing hours and certificates earned."
  },
  {
    person: "Mr. Tunde Adeyemi",
    role: "Patient (lost family member to delayed care)",
    icon: <CalendarCheck size={20} />,
    feedback: "Patients want easy appointment booking and quick specialist matching.",
    action: "Improved matching UI with specialty/language filters and Quick Consult button."
  }
];

export default function Slide7_UserFeedback() {
  return (
    <div className="flex flex-col justify-center h-full w-full px-20 py-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center gap-3 mb-4"
      >
        <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm font-semibold">User Research</span>
      </motion.div>

      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-5xl font-bold mb-10 text-white"
      >
        User <span className="text-purple-400">Feedback</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {feedbacks.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 + 0.2 }}
            className="glass-panel p-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                {f.icon}
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">{f.person}</h3>
                <p className="text-white/40 text-xs">{f.role}</p>
              </div>
            </div>
            <p className="text-white/70 text-sm mb-3 italic">"{f.feedback}"</p>
            <div className="px-3 py-2 rounded-lg bg-cmGreen/10 border border-cmGreen/20">
              <p className="text-cmGreen text-xs font-medium">✓ Action: {f.action}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
