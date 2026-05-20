import { motion } from 'framer-motion';
import { Globe, ArrowRight } from 'lucide-react';

export default function Slide3_Solution() {
  return (
    <div className="flex flex-col justify-center h-full w-full px-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center gap-3 mb-4"
      >
        <span className="px-3 py-1 rounded-full bg-cmTeal/20 text-cmTeal text-sm font-semibold">Our Solution</span>
      </motion.div>

      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-5xl font-bold mb-4 text-white"
      >
        Diaspora Doctor <span className="text-cmTeal">Virtual Care Program</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-white/70 mb-10 max-w-5xl leading-relaxed"
      >
        A secure, cloud-based telemedicine platform that connects Nigerian hospitals and healthcare facilities with highly skilled Nigerian doctors living in the diaspora (UK, USA, Canada, etc.). It transforms <span className="text-cmTeal font-semibold">brain drain into brain gain</span> by enabling these doctors to serve as a virtual extension of Nigeria's healthcare workforce — without needing to return physically.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-panel p-6 text-center border-t-4 border-t-cmGreen"
        >
          <div className="text-4xl mb-3">🇳🇬</div>
          <h3 className="text-xl font-bold mb-2">Nigerian Hospitals</h3>
          <p className="text-white/60 text-sm">Local facilities request specialist support for complex cases</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-center"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cmBlue to-cmTeal flex items-center justify-center shadow-lg shadow-cmTeal/30 mb-3">
            <Globe size={36} className="text-white" />
          </div>
          <div className="flex items-center gap-2 text-cmTeal font-semibold">
            <ArrowRight size={16} /> Connected via CareMesh <ArrowRight size={16} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-panel p-6 text-center border-t-4 border-t-cmBlue"
        >
          <div className="text-4xl mb-3">🌍</div>
          <h3 className="text-xl font-bold mb-2">Diaspora Doctors</h3>
          <p className="text-white/60 text-sm">Skilled Nigerian doctors in UK, USA, Canada provide virtual care</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex items-center gap-4 text-white/50 text-sm"
      >
        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">☁️ Cloud-Based</span>
        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">🔒 NDPR Compliant</span>
        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">📱 Mobile-First</span>
        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">🌐 Cross-Border</span>
      </motion.div>
    </div>
  );
}
