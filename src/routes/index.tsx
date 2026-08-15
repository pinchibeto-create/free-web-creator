import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { nisadoAssets } from "@/data/nisadoAssets";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const heroRef = useRef(null);
  const manifestoRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "center center"]
  });

  const { scrollYProgress: manifestoScroll } = useScroll({
    target: manifestoRef,
    offset: ["start end", "end start"]
  });

  // Responsive values
  const textYValue = typeof window !== 'undefined' && window.innerWidth < 768 ? "-50px" : "-80px";
  const blurValue = typeof window !== 'undefined' && window.innerWidth < 768 ? "blur(6px)" : "blur(8px)";

  const textY = useTransform(scrollYProgress, [0, 0.8], ["0px", shouldReduceMotion ? "0px" : "-150px"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const imgBlur = useTransform(scrollYProgress, [0, 0.8], [shouldReduceMotion ? "blur(0px)" : blurValue, "blur(0px)"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.8], [shouldReduceMotion ? 1 : 1.03, 1]);
  const xPos = useTransform(manifestoScroll, [0, 1], [-100, 100]);

  return (
    <div className="min-h-screen bg-soft-black font-sans selection:bg-champagne/30 overflow-x-hidden">
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
      <header ref={heroRef} className="relative h-[110vh] w-full">
        {/* Sticky Container for Image */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-soft-black">
          <motion.div 
            style={{ 
              filter: imgBlur,
              scale: imgScale
            }}
            className="absolute inset-0 w-full h-full z-0 origin-center"
          >
            <img 
              src={nisadoAssets.hero.premiumDoctora} 
              className="w-full h-full object-cover" 
              alt="Nisado Baani Studio" 
              loading="eager"
            />
            {/* Subtle Overlay to guarantee readability */}
            <div className="absolute inset-0 bg-soft-black/20 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-soft-black/20 via-transparent to-soft-black/40 pointer-events-none" />
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
      
      {/* Seccción de Marca Post-Hero */}
      <section className="bg-soft-black pt-2 pb-16 px-8 flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl w-full"
        >
          <img 
            src={nisadoAssets.branding.logoPrincipal} 
            alt="Nisado Baani Luxury Dental" 
            className="w-full h-auto opacity-90"
          />
        </motion.div>
      </section>

      {/* 01 / DISEÑO - Tecnología que Planifica */}
      <section id="tecnologia" className="py-48 px-8 lg:px-24 bg-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2 space-y-12">
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-[0.6em] text-champagne font-bold">01 / DISEÑO</p>
                <h2 className="text-5xl lg:text-7xl font-serif text-soft-black leading-tight">Tecnología que planifica</h2>
              </div>
              <p className="text-warm-gray leading-relaxed text-lg font-light max-w-lg">
                <strong>Cada sonrisa comienza con observación, análisis y planeación. Utilizamos herramientas digitales para estudiar proporciones, visualizar posibilidades y diseñar un tratamiento personalizado.</strong>
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-soft-black/5">
                <div className="space-y-2">
                  <p className="text-champagne font-serif text-3xl">3D</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-soft-black/60">Análisis Facial</p>
                </div>
                <div className="space-y-2">
                  <p className="text-champagne font-serif text-3xl">0%</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-soft-black/60">Improvisación</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="aspect-[3/4] rounded-sm overflow-hidden shadow-2xl translate-y-12"
                >
                  <img src={nisadoAssets.technology.computadora} alt="Planificación en computadora" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="aspect-[3/4] rounded-sm overflow-hidden shadow-2xl"
                >
                  <img src={nisadoAssets.references.tableta} alt="Diseño en tableta" className="w-full h-full object-cover" />
                </motion.div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.03] pointer-events-none">
                <img src={nisadoAssets.concepts.blueprint} className="w-full h-full object-contain" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 / ARTESANÍA - El Arte detrás de tu Sonrisa */}
      <section id="atelier" className="py-48 px-8 lg:px-24 bg-soft-black text-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32 space-y-6">
            <p className="text-[10px] uppercase tracking-[0.6em] text-champagne font-bold">02 / ARTESANÍA</p>
            <h2 className="text-6xl lg:text-8xl font-serif">El arte detrás de tu sonrisa</h2>
            <p className="text-champagne font-serif text-2xl italic opacity-80">Tecnología para diseñarla. Manos para perfeccionarla.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-16 lg:gap-8">
            {/* 01 Esculpir */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 group"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-charcoal">
                <img src={nisadoAssets.craftsmanship.escultura} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt="Esculpir" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold text-champagne">01 /</span>
                  <h3 className="text-2xl font-serif">Esculpir</h3>
                </div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-ivory/40">La forma se construye detalle a detalle.</p>
              </div>
            </motion.div>

            {/* 02 Detallar */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8 group lg:mt-24"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-charcoal">
                <img src={nisadoAssets.craftsmanship.detallado} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt="Detallar" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold text-champagne">02 /</span>
                  <h3 className="text-2xl font-serif">Detallar</h3>
                </div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-ivory/40">Textura, proporción y acabado se trabajan de manera individual.</p>
              </div>
            </motion.div>

            {/* 03 Pulir */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-8 group lg:mt-48"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-charcoal">
                <img src={nisadoAssets.craftsmanship.pulido} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt="Pulir" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold text-champagne">03 /</span>
                  <h3 className="text-2xl font-serif">Pulir</h3>
                </div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-ivory/40">El resultado se perfecciona hasta el último detalle.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 03 / RESULTADO - Resultados que hablan por sí mismos */}
      <section id="resultados" className="py-48 px-8 lg:px-24 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="space-y-6">
              <p className="text-[10px] uppercase tracking-[0.6em] text-warm-gray font-bold">03 / RESULTADO</p>
              <h2 className="text-6xl lg:text-7xl font-serif text-soft-black">Resultados que hablan<br/>por sí mismos</h2>
            </div>
            <p className="text-warm-gray leading-relaxed text-lg font-light max-w-sm">
              Cada caso es diferente. Cada transformación comienza con diagnóstico, planeación y un trabajo personalizado.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-soft-black/40">Diseño de Sonrisa & Carillas</h3>
                <BeforeAfterSlider 
                  beforeImage={nisadoAssets.comparisons.technicalOverlay} 
                  afterImage={nisadoAssets.comparisons.labialGeometry} 
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-soft-black/40">Blanqueamiento Clínico</h3>
                <BeforeAfterSlider 
                  beforeImage={nisadoAssets.comparisons.whitening} 
                  afterImage={nisadoAssets.comparisons.whitening} 
                />
                <p className="text-[10px] text-warm-gray/60 italic">* Resultados reales de pacientes Nisado Baani.</p>
              </div>
            </div>
            <div className="space-y-12 lg:pt-24">
               <div className="aspect-square relative overflow-hidden rounded-sm group shadow-xl">
                 <img src={nisadoAssets.comparisons.geometricAnalysis} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Análisis Geométrico" />
                 <div className="absolute inset-0 bg-soft-black/20" />
                 <div className="absolute bottom-12 left-12 right-12 text-ivory">
                    <p className="text-[10px] uppercase tracking-[0.4em] font-bold mb-4">Arquitectura Facial</p>
                    <p className="text-3xl font-serif italic">"La armonía es el resultado de la precisión."</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifiesto Editorial (Movido después de la narrativa principal) */}
      <section ref={manifestoRef} className="py-48 px-8 lg:px-24 relative overflow-hidden bg-ivory">
        <motion.div 
          style={{ x: xPos }}
          className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] text-[40vw] font-serif leading-none select-none whitespace-nowrap pointer-events-none text-soft-black"
        >
          NB
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

      {/* Footer Boutique */}
      <footer className="bg-soft-black text-ivory pt-48 pb-24 px-8 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5 space-y-16">
            <img src={nisadoAssets.branding.logoPng} className="h-8 opacity-80" alt="Nisado Baani" />
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
