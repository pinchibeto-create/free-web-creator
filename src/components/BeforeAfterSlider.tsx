import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleInteraction = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-sm cursor-col-resize select-none group"
      onMouseMove={(e) => {
        if (e.buttons === 1) handleInteraction(e.clientX);
      }}
      onTouchMove={(e) => {
        if (e.touches[0]) handleInteraction(e.touches[0].clientX);
      }}
      onClick={(e) => handleInteraction(e.clientX)}
    >
      {/* After Image (Full) */}
      <img src={afterImage} alt="Después" className="absolute inset-0 w-full h-full object-cover" />

      {/* Before Image (Masked) */}
      <div 
        className="absolute inset-0 overflow-hidden" 
        style={{ width: `${sliderPosition}%` }}
      >
        <img src={beforeImage} alt="Antes" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-[1px] bg-champagne z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -left-2 w-4 h-4 bg-champagne rounded-full shadow-lg flex items-center justify-center">
            <div className="w-1 h-1 bg-ivory rounded-full" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-soft-black/60 backdrop-blur-sm px-3 py-1 text-[8px] tracking-[0.2em] text-ivory font-bold uppercase rounded-sm">ANTES</div>
      <div className="absolute top-4 right-4 bg-soft-black/60 backdrop-blur-sm px-3 py-1 text-[8px] tracking-[0.2em] text-ivory font-bold uppercase rounded-sm">DESPUÉS</div>
    </div>
  );
}
