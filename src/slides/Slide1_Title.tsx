import { motion } from 'framer-motion';
import { HeartPulse, Users } from 'lucide-react';

export default function Slide1_Title() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full text-center px-8 relative">
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cmTeal/20 rounded-full blur-[120px] -z-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[20%] right-[15%] w-64 h-64 bg-cmGreen/15 rounded-full blur-[100px] -z-10"
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 mb-10"
      >
        <Users size={16} className="text-cmTeal" />
        <span>Team TechyTeker — Professional Foundations</span>
      </motion.div>
      
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-4 mb-6"
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cmBlue to-cmTeal flex items-center justify-center shadow-lg shadow-cmTeal/30">
          <HeartPulse size={36} className="text-white" />
        </div>
        <h1 className="text-7xl font-bold tracking-tight">CareMesh</h1>
      </motion.div>

      <motion.h2 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl font-medium text-white/90 mb-2"
      >
        Diaspora Doctor Virtual Care Program
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-2xl text-cmTeal max-w-3xl mt-4 font-semibold italic"
      >
        "Expertise Without Borders"
      </motion.p>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-lg text-white/60 max-w-3xl mt-4 leading-relaxed"
      >
        Transforming Brain Drain into Brain Gain — a secure, cloud-based telemedicine platform enabling Nigerian diaspora doctors to serve as a virtual extension of Nigeria's healthcare workforce.
      </motion.p>
    </div>
  );
}
