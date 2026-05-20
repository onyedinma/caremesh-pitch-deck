import { ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react';
import { useState } from 'react';

interface Props {
  current: number;
  total: number;
  slideLabel: string;
  onNext: () => void;
  onPrev: () => void;
}

export default function SlideController({ current, total, slideLabel, onNext, onPrev }: Props) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
      <div className="glass-panel flex items-center gap-4 px-5 py-3">
        {/* Prev */}
        <button
          onClick={onPrev}
          disabled={current === 0}
          className="p-1.5 rounded-lg hover:bg-white/10 disabled:opacity-25 disabled:hover:bg-transparent transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} className="text-white" />
        </button>

        {/* Dots + Label */}
        <div className="flex flex-col items-center gap-1.5">
          <div className="flex gap-1.5">
            {Array.from({ length: total }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === current
                    ? 'w-6 bg-cmTeal shadow-[0_0_8px_rgba(0,196,180,0.8)]'
                    : i < current
                    ? 'w-1.5 bg-cmGreen/60'
                    : 'w-1.5 bg-white/20'
                }`}
              />
            ))}
          </div>
          <span className="text-white/40 text-xs font-medium slide-badge tracking-wide">
            {slideLabel} — {current + 1} / {total}
          </span>
        </div>

        {/* Next */}
        <button
          onClick={onNext}
          disabled={current === total - 1}
          className="p-1.5 rounded-lg hover:bg-white/10 disabled:opacity-25 disabled:hover:bg-transparent transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={20} className="text-white" />
        </button>
      </div>

      {/* Fullscreen button */}
      <button
        onClick={toggleFullscreen}
        className="glass-panel p-3 hover:bg-white/10 transition-colors"
        aria-label="Toggle fullscreen"
      >
        {isFullscreen
          ? <Minimize size={18} className="text-white/60" />
          : <Maximize size={18} className="text-white/60" />
        }
      </button>
    </div>
  );
}
