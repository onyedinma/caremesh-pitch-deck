import { motion } from 'framer-motion';
import { ExternalLink, Monitor, Smartphone, Layout } from 'lucide-react';

const screens = [
  { name: "Landing Page", path: "/", icon: <Layout size={18} /> },
  { name: "Doctor Dashboard", path: "/doctor-dashboard", icon: <Monitor size={18} /> },
  { name: "Consultation Room", path: "/consultation", icon: <Monitor size={18} /> },
  { name: "Patient Home", path: "/patient", icon: <Smartphone size={18} /> },
  { name: "Hospital Dashboard", path: "/hospital", icon: <Monitor size={18} /> },
  { name: "EHR System", path: "/ehr", icon: <Monitor size={18} /> },
  { name: "Mentorship", path: "/mentorship", icon: <Monitor size={18} /> },
  { name: "Appointments", path: "/appointments", icon: <Monitor size={18} /> },
  { name: "Incentives & Impact", path: "/incentives", icon: <Monitor size={18} /> },
  { name: "Onboarding Flow", path: "/onboarding", icon: <Smartphone size={18} /> },
  { name: "Specialties", path: "/specialties", icon: <Layout size={18} /> },
  { name: "Impact Dashboard", path: "/impact", icon: <Monitor size={18} /> },
];

export default function Slide5_Prototype() {
  return (
    <div className="flex flex-col justify-center h-full w-full px-20 py-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center gap-3 mb-4"
      >
        <span className="px-3 py-1 rounded-full bg-cmGreen/20 text-cmGreen text-sm font-semibold">Wireframe / Prototype</span>
      </motion.div>

      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-5xl font-bold mb-4 text-white"
      >
        Live <span className="text-cmGreen">Prototype</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-white/70 mb-8 max-w-3xl"
      >
        We built a fully interactive, high-fidelity web prototype with 12 screens showcasing every major user flow — from patient booking to diaspora doctor consultations.
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
        {screens.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 + 0.3 }}
            className="glass-panel px-4 py-3 flex items-center gap-2.5 text-sm hover:bg-white/10 transition-colors group"
          >
            <span className="text-cmGreen group-hover:scale-110 transition-transform">{s.icon}</span>
            <span className="text-white/80 font-medium">{s.name}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex items-center gap-6"
      >
        <a 
          href="https://caremesh.netlify.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-cmGreen text-white font-bold rounded-xl hover:brightness-110 transition-all shadow-lg shadow-cmGreen/30"
        >
          <ExternalLink size={18} /> View Live Prototype
        </a>
        <a 
          href="https://youtu.be/JMXBDh9KiD0" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/10"
        >
          ▶ Watch Demo Video
        </a>
      </motion.div>
    </div>
  );
}
