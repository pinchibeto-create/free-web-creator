import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { nisadoAssets } from "@/data/nisadoAssets";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const navItems = ["Inicio", "Diseño de sonrisa", "Tratamientos", "Resultados", "Nosotros", "Ubicaciones"];

  return (
    <div className="min-h-screen bg-ivory text-soft-black font-sans selection:bg-champagne/30">
      {/* Navigation */}
      <nav className="fixed w-full z-50 px-8 py-6 flex items-center justify-between bg-ivory/80 backdrop-blur-md border-b border-line">
        <img src={nisadoAssets.branding.logo} alt="Nisado Baani" className="h-10" />
        <div className="hidden lg:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-medium font-serif">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="hover:text-champagne transition-colors duration-500">
              {item}
            </a>
          ))}
        </div>
        <button className="bg-soft-black text-ivory px-8 py-3 rounded-none text-[10px] uppercase tracking-[0.3em] font-serif hover:bg-champagne transition-all duration-500">
          Agenda tu valoración
        </button>
      </nav>

      {/* NEW HERO */}
      <header className="relative min-h-screen flex flex-col lg:flex-row items-center pt-32 px-8 lg:px-16 overflow-hidden bg-ivory">
        <div className="lg:w-5/12 z-10 space-y-12 py-20">
          <div className="space-y-4">
            <motion.img 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src={nisadoAssets.branding.logo} 
              alt="Nisado Baani" 
              className="h-8 mb-8"
            />
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[10px] tracking-[0.4em] text-warm-gray uppercase font-bold"
            >
              LUXURY DENTAL · CIUDAD DE MÉXICO
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-7xl lg:text-8xl font-serif leading-[0.9] tracking-tight text-soft-black"
            >
              Diseñamos<br />
              <span className="relative inline-block">
                sonrisas
                <span className="absolute -bottom-2 -right-4 font-script text-4xl lg:text-5xl text-champagne lowercase italic normal-case tracking-normal">que</span>
              </span><br />
              hablan de ti.
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <p className="text-lg text-warm-gray max-w-sm leading-relaxed font-light">
              Odontología estética y diseño de sonrisa personalizado en Ciudad de México.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              <button className="bg-soft-black text-ivory px-12 py-5 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-champagne transition-all duration-500 shadow-xl">
                AGENDAR VALORACIÓN
              </button>
              <a href="#resultados" className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-soft-black/20 pb-1 hover:border-champagne transition-all">
                Explorar resultados ↓
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-8 text-[9px] uppercase tracking-[0.4em] font-bold text-warm-gray/60"
          >
            <span>POLANCO</span>
            <span>DEL VALLE</span>
            <span>ROMA SUR</span>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="lg:w-7/12 relative h-[60vh] lg:h-[85vh] w-full mt-12 lg:mt-0"
        >
          <div className="absolute inset-0 border-l border-champagne/40 z-20 hidden lg:block" />
          <img 
            src={nisadoAssets.hero.main} 
            alt="Consultorio Premium Nisado Baani" 
            className="w-full h-full object-cover grayscale-[15%] rounded-[24px] lg:rounded-[36px] shadow-2xl" 
          />
        </motion.div>
      </header>

      {/* SECCIÓN MANIFIESTO */}
      <section className="py-32 px-8 lg:px-24 bg-warm-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
          <span className="text-[40vw] font-serif leading-none">NB</span>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-start relative z-10">
          <div className="lg:w-1/2 space-y-8">
            <p className="font-serif text-[12px] tracking-[0.4em] text-champagne uppercase font-bold">NISADO BAANI / 01</p>
            <h2 className="text-5xl lg:text-7xl font-serif leading-[1.1] text-soft-black">
              No buscamos una sonrisa perfecta.
            </h2>
            <h2 className="text-5xl lg:text-7xl font-serif leading-[1.1] text-warm-gray italic">
              Diseñamos una sonrisa que tenga sentido contigo.
            </h2>
          </div>
          <div className="lg:w-1/2 lg:pt-24">
            <div className="max-w-md space-y-6">
              <p className="text-warm-gray leading-relaxed text-lg font-light">
                Entendemos la estética dental como una extensión de tu identidad. Nuestro enfoque no es estandarizar, sino armonizar cada detalle con tus rasgos únicos, personalidad y aspiraciones.
              </p>
              <div className="h-[1px] w-20 bg-champagne" />
            </div>
          </div>
        </div>
      </section>

      {/* MOMENTO VISUAL PRINCIPAL (DE BOCETO A SONRISA) */}
      <section className="py-32 bg-ivory">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="mb-16 space-y-4">
            <p className="text-[10px] uppercase tracking-[0.5em] text-warm-gray font-bold text-center">DEL DISEÑO AL RESULTADO</p>
            <h2 className="text-5xl lg:text-7xl font-serif text-center text-soft-black">
              Antes de transformar,<br />diseñamos.
            </h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative aspect-[21/9] w-full overflow-hidden rounded-lg shadow-2xl"
          >
            <img 
              src={nisadoAssets.concepts.bocetoSonrisa} 
              alt="Transición de diseño a realidad" 
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-soft-black/20 to-transparent" />
          </motion.div>
          
          <div className="mt-12 flex justify-between text-[10px] uppercase tracking-[0.3em] font-bold text-warm-gray/40">
            <span>BOCETO ANALÓGICO</span>
            <span>GEOMETRÍA DSD</span>
            <span>VOLUMEN DIGITAL</span>
            <span>SONRISA REAL</span>
          </div>
        </div>
      </section>

      {/* BLUEPRINT / PRECISIÓN */}
      <section className="py-32 px-8 lg:px-24 bg-soft-black text-ivory relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 order-2 lg:order-1">
            <div className="relative inline-block">
               <img 
                src={nisadoAssets.concepts.blueprint} 
                alt="Blueprint de sonrisa" 
                className="w-full opacity-90 mix-blend-screen" 
              />
              <div className="absolute inset-0 border border-champagne/20 m-4 pointer-events-none" />
            </div>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <p className="font-serif text-[12px] tracking-[0.4em] text-champagne uppercase font-bold">NISADO BAANI / 02</p>
            <h2 className="text-5xl lg:text-6xl font-serif leading-tight">La ingeniería de la belleza natural.</h2>
            <div className="space-y-6 text-ivory/60 font-light leading-relaxed">
              <p>Cada milímetro cuenta. Utilizamos tecnología de escaneo intraoral y software de diseño facial para proyectar resultados con precisión matemática antes de realizar cualquier procedimiento clínico.</p>
              <ul className="space-y-4 pt-4">
                {[
                  "Análisis de proporciones áureas faciales",
                  "Simulación digital 3D del resultado final",
                  "Integración biomimética con tejidos naturales",
                  "Protocolos de mínima intervención"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center group">
                    <span className="text-champagne font-serif italic text-lg">0{i+1}</span>
                    <span className="text-[11px] uppercase tracking-[0.2em] group-hover:text-ivory transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TRATAMIENTOS EDITORIALES */}
      <section id="tratamientos" className="py-32 px-8 lg:px-24 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.5em] text-warm-gray font-bold">PORTFOLIO DE SERVICIOS</p>
              <h2 className="text-5xl lg:text-7xl font-serif text-soft-black">Excelencia Clínica.</h2>
            </div>
            <p className="max-w-xs text-warm-gray text-sm leading-relaxed font-light mb-2">
              Tratamientos diseñados bajo estándares internacionales de odontología estética y biomimética.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-16">
            {[
              { 
                num: "01",
                title: "Diseño de Sonrisa", 
                img: nisadoAssets.extras.veneerMockup, 
                desc: "Transformación integral personalizada mediante carillas de porcelana de alta gama." 
              },
              { 
                num: "02",
                title: "Odontología Estética", 
                img: nisadoAssets.extras.lateralBeforeAfter, 
                desc: "Restauraciones biomiméticas que devuelven la función y estética original del diente." 
              },
              { 
                num: "03",
                title: "Invisalign & Alineación", 
                img: nisadoAssets.references.symmetry, 
                desc: "Ortodoncia invisible planificada digitalmente para una oclusión perfecta y estética." 
              }
            ].map((t) => (
              <motion.div 
                key={t.title} 
                whileHover={{ y: -15 }}
                className="group cursor-pointer space-y-8"
              >
                <div className="overflow-hidden aspect-[3/4] relative">
                  <img 
                    src={t.img} 
                    className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                    alt={t.title} 
                  />
                  <div className="absolute top-6 left-6 text-ivory font-serif text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">{t.num}</div>
                  <div className="absolute inset-0 bg-soft-black/10 group-hover:bg-transparent transition-colors duration-700" />
                </div>
                <div className="space-y-4">
                  <h3 className="font-serif text-4xl text-soft-black group-hover:text-champagne transition-colors">{t.title}</h3>
                  <p className="text-sm text-warm-gray leading-relaxed font-light">{t.desc}</p>
                  <div className="h-[1px] w-12 bg-champagne/40 group-hover:w-full transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET THE SPECIALIST */}
      <section className="py-32 bg-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 relative">
             <div className="absolute -top-12 -left-12 w-64 h-64 bg-champagne/5 rounded-full blur-3xl" />
             <div className="relative inline-block">
                <img 
                  src={nisadoAssets.cutouts.doctoraSillon} 
                  alt="Dra. Nisado Baani" 
                  className="max-h-[700px] w-auto relative z-10 grayscale-[20%] hover:grayscale-0 transition-all duration-1000" 
                />
                <div className="absolute -bottom-8 -right-8 w-full h-full border border-champagne/20 -z-10" />
             </div>
          </div>
          <div className="lg:w-1/2 space-y-10">
            <p className="font-serif text-[12px] tracking-[0.4em] text-champagne uppercase font-bold">DR. NISADO BAANI</p>
            <h2 className="text-5xl lg:text-7xl font-serif leading-tight">Visión artística, rigor científico.</h2>
            <div className="space-y-6 text-warm-gray leading-relaxed text-lg font-light">
              <p>Con una trayectoria enfocada en la excelencia y la personalización, la Dra. Nisado Baani ha redefinido el concepto de odontología de lujo en México.</p>
              <p className="font-serif italic text-2xl text-soft-black">"La odontología estética no es solo ciencia; es el arte de interpretar la belleza individual."</p>
              <div className="pt-8 flex gap-12">
                 <div>
                   <p className="text-champagne font-serif text-3xl">12+</p>
                   <p className="text-[9px] uppercase tracking-[0.2em] font-bold">Años de Exp.</p>
                 </div>
                 <div>
                   <p className="text-champagne font-serif text-3xl">2k+</p>
                   <p className="text-[9px] uppercase tracking-[0.2em] font-bold">Diseños de Sonrisa</p>
                 </div>
                 <div>
                   <p className="text-champagne font-serif text-3xl">3</p>
                   <p className="text-[9px] uppercase tracking-[0.2em] font-bold">Centros en CDMX</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-32 px-8 lg:px-24 bg-soft-black text-ivory">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-20">
          <div className="col-span-1 lg:col-span-2 space-y-12">
            <img src={nisadoAssets.branding.logo} alt="Nisado Baani" className="h-10 brightness-0 invert" />
            <div className="max-w-md">
               <p className="text-ivory/50 leading-relaxed font-light text-lg">
                Redefiniendo la experiencia dental a través del diseño, la tecnología y una atención sin compromisos.
              </p>
            </div>
            <div className="flex gap-6">
               {["Instagram", "Facebook", "LinkedIn"].map(social => (
                 <a key={social} href="#" className="text-[10px] uppercase tracking-widest font-bold hover:text-champagne transition-colors">{social}</a>
               ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <h4 className="font-serif text-2xl">Ubicaciones</h4>
            <ul className="space-y-6 text-sm text-ivory/50 font-light">
              <li className="space-y-2">
                <span className="text-champagne uppercase tracking-widest text-[10px] font-bold">Polanco</span>
                <p>Calle Aristóteles 123, Polanco IV Secc, CDMX</p>
              </li>
              <li className="space-y-2">
                <span className="text-champagne uppercase tracking-widest text-[10px] font-bold">Del Valle</span>
                <p>Av. Coyoacán 456, Col. del Valle Centro, CDMX</p>
              </li>
              <li className="space-y-2">
                <span className="text-champagne uppercase tracking-widest text-[10px] font-bold">Roma Sur</span>
                <p>Calle Tonalá 789, Roma Sur, CDMX</p>
              </li>
            </ul>
          </div>

          <div className="space-y-10">
            <h4 className="font-serif text-2xl">Contacto</h4>
            <div className="space-y-6">
              <button className="w-full bg-ivory text-soft-black py-5 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-champagne hover:text-ivory transition-all duration-500">
                AGENDA ONLINE
              </button>
              <div className="space-y-2 text-ivory/50 text-sm font-light">
                <p>T. +52 55 1234 5678</p>
                <p>E. hola@nisadobaani.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-ivory/5 flex flex-col md:flex-row justify-between gap-8 text-[9px] uppercase tracking-[0.3em] text-ivory/30 font-bold">
           <p>© 2026 NISADO BAANI LUXURY DENTAL. TODOS LOS DERECHOS RESERVADOS.</p>
           <div className="flex gap-8">
             <a href="#" className="hover:text-ivory transition-colors">Privacidad</a>
             <a href="#" className="hover:text-ivory transition-colors">Términos</a>
           </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/525512345678" target="_blank" rel="noopener noreferrer" className="fixed bottom-12 right-12 bg-white/10 backdrop-blur-xl border border-white/20 text-ivory p-5 rounded-full shadow-2xl hover:scale-110 hover:bg-champagne transition-all duration-500 z-50 group">
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
