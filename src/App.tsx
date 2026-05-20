import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Slide1_Title from './slides/Slide1_Title';
import Slide2_Problem from './slides/Slide2_Problem';
import Slide3_Solution from './slides/Slide3_Solution';
import Slide4_Features from './slides/Slide4_Features';
import SlideHowItWorks from './slides/SlideHowItWorks';
import Slide_Market from './slides/Slide_Market';
import Slide_Business from './slides/Slide_Business';
import Slide5_Prototype from './slides/Slide5_Prototype';
import Slide_Competition from './slides/Slide_Competition';
import Slide6_Impact from './slides/Slide6_Impact';
import Slide7_UserFeedback from './slides/Slide7_UserFeedback';
import Slide8_Team from './slides/Slide8_Team';
import Slide9_Conclusion from './slides/Slide9_Conclusion';
import SlideController from './components/SlideController';

const slides = [
  { component: Slide1_Title,        label: "Cover" },
  { component: Slide2_Problem,      label: "Problem" },
  { component: Slide3_Solution,     label: "Solution" },
  { component: Slide4_Features,     label: "Key Features" },
  { component: SlideHowItWorks,     label: "How It Works" },
  { component: Slide_Market,        label: "Market Opportunity" },
  { component: Slide_Business,      label: "Business Model" },
  { component: Slide5_Prototype,    label: "Product Demo" },
  { component: Slide_Competition,   label: "Competition" },
  { component: Slide6_Impact,       label: "Data & Impact" },
  { component: Slide7_UserFeedback, label: "User Validation" },
  { component: Slide8_Team,         label: "The Team" },
  { component: Slide9_Conclusion,   label: "The Ask" },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;
  const progressPct = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="w-screen h-screen overflow-hidden bg-cmDark relative font-sans">

      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="orb absolute -top-[20%] -left-[10%] w-[55%] h-[55%] rounded-full bg-cmBlue/10 blur-[140px]" />
        <div className="orb absolute top-[70%] -right-[10%] w-[45%] h-[60%] rounded-full bg-cmGreen/10 blur-[140px]" style={{ animationDelay: '3s' }} />
        <div className="orb absolute top-[30%] right-[20%] w-[30%] h-[40%] rounded-full bg-cmTeal/5 blur-[120px]" style={{ animationDelay: '6s' }} />
      </div>

      {/* Top progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/5 z-30">
        <motion.div
          className="h-full bg-gradient-to-r from-cmBlue via-cmTeal to-cmGreen rounded-r-full"
          animate={{ width: `${progressPct}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>

      {/* Logo — top left */}
      <div className="absolute top-4 left-6 z-20 flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cmBlue to-cmTeal flex items-center justify-center">
          <span className="text-white text-xs font-black">C</span>
        </div>
        <span className="text-white/30 text-xs font-semibold tracking-wider">CAREMESH</span>
      </div>

      {/* Slide label — top right */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="absolute top-5 right-6 z-20 px-4 py-1.5 glass-panel text-xs text-white/40 tracking-widest uppercase"
        >
          {slides[currentSlide].label}
        </motion.div>
      </AnimatePresence>

      {/* Slide content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction < 0 ? 60 : -60 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="w-full h-full absolute top-0 left-0 z-10"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Controller */}
      <SlideController
        current={currentSlide}
        total={slides.length}
        slideLabel={slides[currentSlide].label}
        onNext={nextSlide}
        onPrev={prevSlide}
      />
    </div>
  );
}

export default App;
