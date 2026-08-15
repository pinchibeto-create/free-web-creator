import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ResultsSliderProps {
  images: string[];
}

export function ResultsSlider({ images }: ResultsSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div 
      className="relative w-full overflow-hidden py-12"
      ref={containerRef}
    >
      <motion.div 
        className="flex gap-8 px-8 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: -1500, right: 0 }} // Ajustar según el número de imágenes
        whileTap={{ cursor: "grabbing" }}
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[35vw] aspect-[4/5] relative rounded-sm overflow-hidden bg-charcoal"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <motion.img 
              src={img} 
              alt={`Resultado clínico ${index + 1}`}
              className="w-full h-full object-cover transition-all duration-700"
              style={{ filter: "grayscale(100%)" }}
              whileHover={{ 
                filter: "grayscale(0%)",
                scale: 1.05
              }}
              whileTap={{ 
                filter: "grayscale(0%)"
              }}
            />
            {/* Minimal label */}
            <div className="absolute bottom-6 left-6 z-10">
              <span className="text-[9px] uppercase tracking-[0.08em] text-ivory/60 font-brand">
                Caso 0{index + 1}
              </span>
            </div>
            {/* Subtle overlay to help text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-soft-black/40 to-transparent pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Scroll indicator for touch */}
      <div className="flex justify-center mt-12 gap-2 lg:hidden">
        {images.map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-soft-black/20" />
        ))}
      </div>
    </div>
  );
}
