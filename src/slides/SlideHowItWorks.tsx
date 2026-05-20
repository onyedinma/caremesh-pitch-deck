import { motion } from 'framer-motion';
import { UserCircle, Building2, Stethoscope, ArrowRight, Clock, FileCheck, Video, MessageSquare } from 'lucide-react';

const steps = [
  {
    icon: <UserCircle size={44} />,
    color: "text-cmGreen",
    border: "border-cmGreen",
    glow: "shadow-[0_0_40px_rgba(0,135,81,0.35)]",
    label: "Patient",
    name: "In Nigeria",
    desc: "Visits local hospital with a complex or specialist condition"
  },
  {
    icon: <Building2 size={44} />,
    color: "text-blue-400",
    border: "border-blue-400",
    glow: "shadow-[0_0_40px_rgba(96,165,250,0.3)]",
    label: "Local Hospital",
    name: "Nigerian Facility",
    desc: "Uploads EHR and securely shares lab results & scans via CareMesh"
  },
  {
    icon: <Stethoscope size={44} />,
    color: "text-cmTeal",
    border: "border-cmTeal",
    glow: "shadow-[0_0_40px_rgba(0,196,180,0.45)]",
    label: "Diaspora Doctor",
    name: "UK / USA / Canada",
    desc: "Reviews case, joins video consult, advises diagnosis & treatment"
  }
];

const sessionTypes = [
  { icon: <Clock size={15} />, label: "Scheduled Appointments" },
  { icon: <Video size={15} />, label: "On-Demand Consultations" },
  { icon: <FileCheck size={15} />, label: "Async Case Reviews" },
  { icon: <MessageSquare size={15} />, label: "Mentorship Sessions" },
];

export default function SlideHowItWorks() {
  return (
    <div className="flex flex-col justify-center h-full w-full px-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center gap-3 mb-4"
      >
        <span className="px-3 py-1 rounded-full bg-cmGreen/20 text-cmGreen text-sm font-semibold">User Journey</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-5xl font-bold mb-16 text-white"
      >
        How It <span className="text-cmGreen">Works</span>
      </motion.h2>

      {/* 3-step flow */}
      <div className="flex items-start justify-center gap-4 w-full max-w-5xl mx-auto mb-12">
        {steps.map((step, i) => (
          <>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 + 0.2 }}
              className="flex flex-col items-center text-center flex-1"
            >
              {/* Step number */}
              <div className="text-xs font-bold text-white/30 tracking-widest uppercase mb-4">Step {i + 1}</div>
              {/* Circle */}
              <div className={`w-28 h-28 rounded-full bg-white/5 border-2 ${step.border} flex items-center justify-center mb-5 ${step.color} ${step.glow}`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-1">{step.label}</h3>
              <p className={`text-sm font-semibold mb-3 ${step.color}`}>{step.name}</p>
              <p className="text-white/55 text-sm leading-relaxed max-w-[180px]">{step.desc}</p>
            </motion.div>

            {/* Arrow between steps */}
            {i < steps.length - 1 && (
              <motion.div
                key={`arrow-${i}`}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: i * 0.3 + 0.5, duration: 0.4 }}
                className="flex items-center mt-16 origin-left"
              >
                <div className="w-14 h-px bg-gradient-to-r from-white/20 to-white/20 relative flex items-center justify-center">
                  <ArrowRight size={20} className="absolute text-white/40" />
                </div>
              </motion.div>
            )}
          </>
        ))}
      </div>

      {/* Session type badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="flex flex-wrap items-center justify-center gap-3"
      >
        {sessionTypes.map((s, i) => (
          <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70">
            <span className="text-cmTeal">{s.icon}</span>
            {s.label}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
