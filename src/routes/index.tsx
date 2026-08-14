import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { nisadoAssets } from "@/data/nisadoAssets";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const heroRef = useRef(null);
  const manifestoRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"]
  });

  const { scrollYProgress: manifestoScroll } = useScroll({
    target: manifestoRef,
    offset: ["start end", "end start"]
  });

  // Responsive values
  const textYValue = typeof window !== 'undefined' && window.innerWidth < 768 ? "-50px" : "-80px";
  const blurValue = typeof window !== 'undefined' && window.innerWidth < 768 ? "blur(6px)" : "blur(8px)";

  const textY = useTransform(scrollYProgress, [0, 1], ["0px", shouldReduceMotion ? "0px" : textYValue]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const imgBlur = useTransform(scrollYProgress, [0, 0.3], [shouldReduceMotion ? "blur(0px)" : blurValue, "blur(0px)"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [shouldReduceMotion ? 1 : 1.03, 1]);
  const xPos = useTransform(manifestoScroll, [0, 1], [-100, 100]);

  return (
    <div className="min-h-screen bg-ivory text-soft-black font-sans selection:bg-champagne/30 overflow-x-hidden">
      {/* Editorial Navigation */}
      <nav className="fixed w-full z-50 px-8 py-8 flex items-center justify-between mix-blend-difference text-ivory">
        <img src={nisadoAssets.branding.logoPng} alt="Nisado Baani" className="h-6 opacity-80" />
        <div className="hidden lg:flex gap-12 text-[10px] uppercase tracking-[0.4em] font-medium">
          {["Inicio", "Atelier", "Tecnología", "Resultados", "Ubicaciones"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-champagne transition-colors">{item}</a>
          ))}
        </div>
        <button className="text-[10px] uppercase tracking-[0.4em] font-bold border-b border-ivory/20 pb-1 hover:border-champagne transition-all">
          Reservar valoración
        </button>
      </nav>

      {/* Editorial Hero */}
      <header ref={heroRef} className="relative h-[200vh] w-full">
        {/* Sticky Container for Image */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.div 
            style={{ 
              filter: imgBlur,
              scale: imgScale
            }}
            className="absolute inset-0 w-full h-full z-0"
          >
            <img 
              src={nisadoAssets.hero.premiumDoctora} 
              className="w-full h-full object-cover" 
              alt="Nisado Baani Studio" 
            />
            {/* Subtle Overlay to guarantee readability */}
            <div className="absolute inset-0 bg-soft-black/10 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-ivory/20 via-transparent to-ivory/40 pointer-events-none" />
          </motion.div>
        </div>

        {/* Hero Content - Scrolls with the container height */}
        <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col items-center">
          {/* Vertical Spacer to push content to the center of the first viewport */}
          <div className="h-screen flex items-center justify-center w-full px-8 text-center">
            <motion.div
              style={{ 
                y: textY,
                opacity: textOpacity
              }}
              className="flex flex-col items-center justify-center space-y-8"
            >
              <div className="space-y-6">
                 <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[10px] tracking-[0.6em] text-champagne uppercase font-bold"
                 >
                   Luxury Dental · Studio
                 </motion.p>
                 
                 <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-6xl md:text-7xl lg:text-9xl font-serif leading-[0.85] text-soft-black flex flex-col items-center"
                 >
                  <span className="block">Diseñamos sonrisas</span>
                  <span className="italic relative block">
                    para ti.
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-champagne/40" />
                  </span>
                 </motion.h1>
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-8 items-center pt-12"
              >
                <div className="flex gap-4">
                  {["Polanco", "Del Valle", "Roma Sur"].map(loc => (
                    <button key={loc} className="border border-soft-black/10 px-6 py-2.5 text-[9px] uppercase tracking-[0.3em] font-bold hover:bg-soft-black hover:text-ivory transition-all duration-500 rounded-full bg-ivory/30 backdrop-blur-sm">
                      {loc}
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Manifiesto Editorial */}
      <section ref={manifestoRef} className="py-48 px-8 lg:px-24 relative overflow-hidden bg-warm-white">
        <motion.div 
          style={{ x: xPos }}
          className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] text-[40vw] font-serif leading-none select-none whitespace-nowrap pointer-events-none"
        >
          NISADO BAANI
        </motion.div>
        
        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-16">
          <p className="text-[10px] uppercase tracking-[0.6em] text-champagne font-bold">Nuestro Manifiesto</p>
          <h2 className="text-4xl lg:text-6xl font-serif leading-tight text-soft-black/90 max-w-3xl mx-auto italic">
            "La odontología de alta gama no se trata de uniformidad, sino de la perfecta imperfección de lo natural."
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 text-left mt-24">
            <p className="text-warm-gray leading-relaxed text-lg font-light">
              En Nisado Baani, cada sonrisa es un proyecto arquitectónico único. Fusionamos la sensibilidad de un taller de arte con el rigor de un laboratorio de ingeniería biomédica.
            </p>
            <p className="text-warm-gray leading-relaxed text-lg font-light">
              Entendemos que el verdadero lujo reside en los detalles que nadie nota, pero que todos sienten: la textura, la luz y la armonía con tu expresión más genuina.
            </p>
          </div>
        </div>
      </section>

      {/* El Atelier (Artesanía) */}
      <section id="atelier" className="py-32 px-8 lg:px-24 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.6em] text-warm-gray font-bold">01 / EL ATELIER</p>
              <h2 className="text-6xl lg:text-8xl font-serif">Artesanía Pura.</h2>
            </div>
            <div className="max-w-xs space-y-6">
              <p className="text-warm-gray text-sm leading-relaxed font-light">
                Cada carilla es esculpida a mano, una por una, buscando la mimesis absoluta con la anatomía natural del diente.
              </p>
              <div className="h-[1px] w-full bg-champagne/20" />
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:h-[90vh]">
            <div className="lg:col-span-8 h-full relative group overflow-hidden">
               <img src={nisadoAssets.craftsmanship.escultura} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt="Escultura Dental" />
               <div className="absolute inset-0 bg-gradient-to-t from-soft-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-12 flex items-end">
                 <p className="text-ivory font-serif text-2xl italic">Modelado anatómico en cera.</p>
               </div>
            </div>
            <div className="lg:col-span-4 grid grid-rows-2 gap-8 h-full">
              <div className="bg-charcoal overflow-hidden group">
                 <img src={nisadoAssets.craftsmanship.pulido} className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" alt="Pulido" />
              </div>
              <div className="bg-soft-black p-12 flex flex-col justify-end space-y-6">
                 <p className="text-champagne font-serif text-4xl italic">Precisión.</p>
                 <p className="text-[10px] uppercase tracking-[0.3em] text-ivory/40 leading-loose">El pulido artesanal garantiza que la luz se refleje de forma idéntica al esmalte natural.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingeniería (Tecnología) */}
      <section className="bg-soft-black text-ivory py-48 px-8 lg:px-24 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img src={nisadoAssets.concepts.blueprint} className="w-full opacity-30 mix-blend-screen scale-110" alt="Blueprint" />
              <img src={nisadoAssets.references.dsdModern} className="absolute inset-0 w-full h-full object-contain p-12" alt="DSD Modern" />
            </div>
          </div>
          <div className="space-y-12 order-1 lg:order-2">
            <p className="text-[10px] uppercase tracking-[0.6em] text-champagne font-bold">02 / LA INGENIERÍA</p>
            <h2 className="text-6xl font-serif">Diseño Facial Digital.</h2>
            <div className="space-y-8 text-ivory/60 text-lg font-light leading-relaxed">
              <p>Nada queda al azar. Utilizamos escaneo 3D y análisis cinemático para proyectar tu sonrisa en relación con el movimiento de tus labios y expresión facial.</p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-ivory/10">
                <div>
                  <p className="text-champagne font-serif text-3xl">0%</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] font-bold mt-2">Margen de Error</p>
                </div>
                <div>
                  <p className="text-champagne font-serif text-3xl">3D</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] font-bold mt-2">Planificación Total</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Galería */}
      <section id="resultados" className="py-32 px-8 lg:px-24 bg-warm-white">
        <div className="max-w-7xl mx-auto text-center mb-24 space-y-6">
           <p className="text-[10px] uppercase tracking-[0.6em] text-warm-gray font-bold">03 / RESULTADOS</p>
           <h2 className="text-6xl font-serif">Casos de Éxito.</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-ivory shadow-lg relative group">
              <img src={nisadoAssets.comparisons.whitening} className="w-full h-full object-cover" alt="Blanqueamiento" />
              <div className="absolute top-6 left-6 bg-soft-black/80 backdrop-blur-md px-4 py-2 text-[8px] text-ivory tracking-[0.3em] font-bold uppercase rounded-full opacity-0 group-hover:opacity-100 transition-opacity">Blanqueamiento Clínico</div>
            </div>
          </div>
          <div className="space-y-6 lg:mt-24">
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-ivory shadow-lg relative group">
              <img src={nisadoAssets.comparisons.labialGeometry} className="w-full h-full object-cover" alt="Geometría Labial" />
              <div className="absolute top-6 left-6 bg-soft-black/80 backdrop-blur-md px-4 py-2 text-[8px] text-ivory tracking-[0.3em] font-bold uppercase rounded-full opacity-0 group-hover:opacity-100 transition-opacity">Armonía Facial</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Boutique */}
      <footer className="bg-soft-black text-ivory pt-48 pb-24 px-8 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5 space-y-16">
            <img src={nisadoAssets.branding.logoPng} className="h-8 opacity-60 brightness-0 invert" alt="Nisado Baani" />
            <div className="space-y-8">
              <p className="text-2xl font-serif text-ivory/80 leading-relaxed italic">"Tu sonrisa merece el rigor de la ciencia y el alma del arte."</p>
              <div className="flex gap-12">
                {["IG", "FB", "LN"].map(social => (
                  <a key={social} href="#" className="text-[10px] uppercase tracking-[0.4em] font-bold hover:text-champagne transition-colors">{social}</a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-16">
            <div className="space-y-10">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-champagne font-bold">Ubicaciones</h4>
              <ul className="space-y-8 text-sm text-ivory/40 font-light">
                <li className="space-y-2">
                  <p className="text-ivory uppercase tracking-widest text-[9px] font-bold">Polanco Studio</p>
                  <p>Aristóteles 123, CDMX</p>
                </li>
                <li className="space-y-2">
                  <p className="text-ivory uppercase tracking-widest text-[9px] font-bold">Roma Sur Gallery</p>
                  <p>Tonalá 789, CDMX</p>
                </li>
              </ul>
            </div>
            
            <div className="space-y-10">
               <h4 className="text-[10px] uppercase tracking-[0.4em] text-champagne font-bold">Newsletter</h4>
               <div className="space-y-8">
                 <p className="text-sm text-ivory/40 font-light">Suscríbete para recibir tendencias en estética dental y diseño facial.</p>
                 <div className="flex border-b border-ivory/20 pb-2">
                   <input type="email" placeholder="Email" className="bg-transparent border-none text-[10px] uppercase tracking-[0.2em] w-full focus:outline-none placeholder:text-ivory/20" />
                   <button className="text-[10px] font-bold text-champagne">JOIN</button>
                 </div>
               </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-48 pt-12 border-t border-ivory/5 flex flex-col md:flex-row justify-between text-[8px] tracking-[0.4em] text-ivory/20 font-bold uppercase">
          <p>© 2026 Nisado Baani Luxury Dental Studio</p>
          <div className="flex gap-8">
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
          </div>
        </div>
      </footer>

      {/* Botón Flotante Reserva */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-12 right-12 z-50 bg-champagne text-ivory px-10 py-5 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold shadow-2xl hover:bg-muted-gold transition-colors"
      >
        Reserva Inmediata
      </motion.button>
    </div>
  );
}
