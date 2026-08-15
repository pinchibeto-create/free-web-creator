import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { nisadoAssets } from "@/data/nisadoAssets";
import { ResultsSlider } from "@/components/ResultsSlider";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const heroRef = useRef(null);
  const manifestoRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { scrollY } = useScroll();
  
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

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

  const menuItems = [
    { name: "Inicio", href: "#" },
    { name: "Tecnología que planifica", href: "#tecnologia" },
    { name: "El arte detrás de tu sonrisa", href: "#atelier" },
    { name: "Resultados", href: "#resultados" },
    { name: "Ubicaciones", href: "#footer" },
    { name: "Agendar valoración", href: "#agendar" },
  ];

  return (
    <div className="min-h-screen bg-soft-black font-sans selection:bg-champagne/30 overflow-x-hidden scroll-smooth">
      {/* Editorial Navigation */}
      <nav 
        className={`fixed w-full z-50 px-8 flex items-center justify-between transition-all duration-500 h-[70px] md:h-[85px] ${
          isScrolled 
            ? "bg-ivory/70 backdrop-blur-[14px] border-b border-soft-black/5 shadow-sm" 
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center">
          <img 
            src={nisadoAssets.branding.logoPng} 
            alt="Nisado Baani" 
            className={`h-6 md:h-7 transition-all duration-500 ${isScrolled ? "opacity-100" : "opacity-80 invert"}`} 
          />
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`relative z-[60] flex flex-col items-center justify-center w-8 h-8 focus:outline-none group`}
          aria-label="Menú"
        >
          <span className={`block w-6 h-[1.5px] transition-all duration-300 ease-out ${
            isMenuOpen ? "rotate-45 translate-y-[1.5px]" : "-translate-y-1"
          } ${isScrolled || isMenuOpen ? "bg-soft-black" : "bg-ivory"}`} />
          <span className={`block w-6 h-[1.5px] transition-all duration-300 ease-out ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          } ${isScrolled || isMenuOpen ? "bg-soft-black" : "bg-ivory"}`} />
          <span className={`block w-6 h-[1.5px] transition-all duration-300 ease-out ${
            isMenuOpen ? "-rotate-45 -translate-y-[1.5px]" : "translate-y-1"
          } ${isScrolled || isMenuOpen ? "bg-soft-black" : "bg-ivory"}`} />
        </button>

        {/* Side Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-soft-black/40 backdrop-blur-sm z-[55]"
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-full md:w-[45%] bg-ivory z-[58] shadow-2xl flex flex-col p-12 md:p-24"
              >
                <div className="flex-1 flex flex-col justify-center space-y-8 md:space-y-12">
                  <p className="text-[10px] uppercase tracking-[0.6em] text-champagne font-bold">Navegación</p>
                  <nav className="flex flex-col space-y-6 md:space-y-8">
                    {menuItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        className="text-3xl md:text-5xl font-serif text-soft-black hover:text-champagne transition-colors duration-300 w-fit"
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </nav>
                </div>
                
                <div className="pt-12 border-t border-soft-black/5">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-soft-black/40 font-bold mb-6">Redes sociales</p>
                  <div className="flex gap-8">
                    {["IG", "FB", "LN"].map(social => (
                      <a key={social} href="#" className="text-[10px] uppercase tracking-[0.4em] font-bold text-soft-black hover:text-champagne transition-colors">{social}</a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>


      {/* Editorial Hero */}
      <header ref={heroRef} className="relative h-[110vh] w-full scroll-mt-24 md:scroll-mt-32">
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
                className="flex flex-col gap-6 items-center pt-12 w-full max-w-md"
              >
                <button className="text-[10px] uppercase tracking-[0.4em] font-bold bg-soft-black text-ivory px-12 py-5 rounded-full hover:bg-champagne transition-all duration-500 shadow-xl">
                  Reservar ahora
                </button>
                
                <div className="flex flex-col items-center gap-4 w-full">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-soft-black/40 font-bold">Elige tu ubicación</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
                    {[
                      { name: "Polanco", url: "https://maps.app.goo.gl/c3mQaaiNhKvDhLEF7?g_st=iw" },
                      { name: "Del Valle", url: "https://maps.app.goo.gl/U7SbErGsMU7E9QsPA?g_st=iw" },
                      { name: "Roma Sur", url: "https://www.google.com/maps/search/?api=1&query=19.4076004%2C-99.1645355" }
                    ].map(loc => (
                      <a 
                        key={loc.name} 
                        href={loc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 border border-soft-black/10 px-4 py-3 text-[9px] uppercase tracking-[0.2em] font-bold hover:bg-soft-black hover:text-ivory transition-all duration-500 rounded-full bg-ivory/30 backdrop-blur-sm text-soft-black"
                      >
                        <span className="text-[10px]">📍</span> {loc.name}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </header>
      
      {/* Seccción de Marca Post-Hero */}
      <section className="bg-soft-black pt-2 pb-2 px-8 flex items-center justify-center overflow-hidden">
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
      <section id="tecnologia" className="pt-12 pb-48 px-8 lg:px-24 bg-ivory overflow-hidden scroll-mt-24 md:scroll-mt-32">
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
      <section id="atelier" className="py-48 px-8 lg:px-24 bg-soft-black text-ivory overflow-hidden scroll-mt-24 md:scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32 space-y-6">
            <p className="text-[10px] uppercase tracking-[0.6em] text-champagne font-bold">02 / ARTESANÍA</p>
            <h2 className="text-6xl lg:text-8xl font-serif">El arte detrás de tu sonrisa</h2>
            <p className="text-champagne font-serif text-2xl italic opacity-80">Tecnología para diseñarla. Manos para perfeccionarla.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
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
              className="space-y-8 group md:mt-24"
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
              className="space-y-8 group md:mt-48"
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
      <section id="resultados" className="pt-48 pb-12 bg-ivory overflow-hidden scroll-mt-24 md:scroll-mt-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-24">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="space-y-6">
              <p className="text-[10px] uppercase tracking-[0.6em] text-warm-gray font-bold">03 / RESULTADO</p>
              <h2 className="text-6xl lg:text-7xl font-serif text-soft-black">Resultados que hablan<br/>por sí mismos</h2>
            </div>
            <p className="text-warm-gray leading-relaxed text-lg font-light max-w-sm">
              Cada caso es diferente. Cada transformación comienza con diagnóstico, planeación y un trabajo personalizado de alta precisión.
            </p>
          </div>
        </div>

        {/* New Results Slider */}
        <ResultsSlider images={nisadoAssets.results} />

      </section>

      {/* Manifiesto Editorial (Movido después de la narrativa principal) */}
      <section ref={manifestoRef} className="pt-12 pb-48 px-8 lg:px-24 relative overflow-hidden bg-ivory">
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
      <footer id="footer" className="bg-soft-black text-ivory pt-48 pb-24 px-8 lg:px-24 scroll-mt-24 md:scroll-mt-32">
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
              <ul className="space-y-10 text-sm text-ivory/40 font-light">
                {[
                  { 
                    name: "Polanco Studio", 
                    address: "Emerson 111, Polanco V Sección, Miguel Hidalgo, C.P. 11550, Ciudad de México", 
                    url: "https://maps.app.goo.gl/c3mQaaiNhKvDhLEF7?g_st=iw" 
                  },
                  { 
                    name: "Del Valle Studio", 
                    address: "Av. Insurgentes Sur 1188, Tlacoquemécatl del Valle, Benito Juárez, C.P. 03200, Ciudad de México", 
                    url: "https://maps.app.goo.gl/U7SbErGsMU7E9QsPA?g_st=iw" 
                  },
                  { 
                    name: "Roma Sur Gallery", 
                    address: "Tlaxcala 84, Roma Sur, Cuauhtémoc, C.P. 06760, Ciudad de México", 
                    url: "https://www.google.com/maps/search/?api=1&query=19.4076004%2C-99.1645355" 
                  }
                ].map((loc) => (
                  <li key={loc.name} className="space-y-3">
                    <p className="text-ivory uppercase tracking-widest text-[9px] font-bold">{loc.name}</p>
                    <p className="max-w-[200px] leading-relaxed">{loc.address}</p>
                    <a 
                      href={loc.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block text-[9px] uppercase tracking-[0.2em] text-champagne hover:text-ivory transition-colors font-bold"
                    >
                      Ver ubicación →
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-10">
               {/* Newsletter section removed */}
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-48 pt-12 border-t border-ivory/5 flex flex-col md:flex-row justify-between text-[8px] tracking-[0.4em] text-ivory/20 font-bold uppercase gap-6">
          <div className="flex flex-col gap-2">
            <p>© 2026 Nisado Baani Luxury Dental Studio</p>
            <p className="text-champagne/40">creado por Mi Vitrina Digital</p>
          </div>
          <div className="flex gap-8">
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
          </div>
        </div>
      </footer>

      {/* Acciones Flotantes */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
        {/* WhatsApp Button */}
        <motion.a 
          href="https://wa.me/5215500000000" // Replace with actual number
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-ivory px-6 py-4 rounded-full shadow-2xl hover:bg-white/20 transition-all duration-500 group"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">WhatsApp</span>
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-champagne" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </motion.a>

        {/* Agendar Button */}
        <motion.button 
          id="agendar" className="scroll-mt-32"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-champagne text-ivory px-10 py-5 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold shadow-2xl hover:bg-muted-gold transition-colors"
        >
          Agendar valoración
        </motion.button>
      </div>
    </div>
  );
}
