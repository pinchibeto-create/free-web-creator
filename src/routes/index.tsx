import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import logoAsset from "@/assets/branding/logo.asset.json";
import heroAsset from "@/assets/hero/hero_main.asset.json";
import sketchToSmileAsset from "@/assets/concepts/sketch_to_smile.asset.json";
import veneerMockupAsset from "@/assets/extras/veneer_mockup.asset.json";
import beforeAfterLateralAsset from "@/assets/extras/before_after_lateral.asset.json";
import dsdInfographicAsset from "@/assets/references/dsd_infographic.asset.json";
import doctoraSillonAsset from "@/assets/cutouts/doctora_sillon.asset.json";


export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#F7F2EA] text-foreground font-sans">
      <nav className="fixed w-full z-50 px-6 py-4 flex items-center justify-between bg-background/80 backdrop-blur-md">
        <img src={logoAsset.url} alt="Nisado Baani" className="h-10" />
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
          {["Inicio", "Diseño de sonrisa", "Tratamientos", "Resultados", "Nosotros", "Ubicaciones"].map((item) => (
            <a key={item} href="#" className="hover:text-primary transition-colors">
              {item}
            </a>
          ))}
        </div>
        <button className="bg-primary text-primary-foreground px-6 py-2 rounded-sm text-sm uppercase tracking-widest">
          Agenda tu valoración
        </button>
      </nav>

      <header className="relative h-screen flex items-center pt-20 px-12 overflow-hidden">
        <div className="flex-1 max-w-2xl z-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm tracking-[0.2em] text-muted-foreground uppercase mb-6"
          >
            NISADO BAANI · LUXURY DENTAL
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-8xl font-light font-serif mb-6 leading-[0.85] tracking-tight"
          >
            Tu sonrisa,<br />diseñada para ti.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed"
          >
            Diseño de sonrisa y odontología estética con atención personalizada en Ciudad de México.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4 items-center"
          >
            <button className="bg-primary text-primary-foreground px-10 py-5 uppercase tracking-widest text-xs font-semibold hover:bg-primary/90 transition-all">
              Agenda tu valoración
            </button>
            <button className="border border-input px-10 py-5 uppercase tracking-widest text-xs font-semibold hover:bg-accent transition-all">
              Ver resultados
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex gap-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60"
          >
            <span>Estética</span>
            <span>·</span>
            <span>Precisión</span>
            <span>·</span>
            <span>Tecnología</span>
            <span>·</span>
            <span>Naturalidad</span>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute right-0 top-0 w-1/2 h-full"
        >
          <img 
            src={heroAsset.url} 
            alt="Consultorio Premium Nisado Baani" 
            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent w-32" />
        </motion.div>

        <div className="absolute bottom-12 left-12 flex gap-8 text-[10px] uppercase tracking-widest font-bold text-muted-foreground/80">
          <span>Polanco</span>
          <span>Del Valle</span>
          <span>Roma Sur</span>
        </div>
      </header>

      <section className="py-24 px-12 border-b border-border/40 bg-secondary/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
          {[
            { title: "Diseño personalizado", desc: "Adaptado a tu fisionomía" },
            { title: "Resultados naturales", desc: "Armonía estética perfecta" },
            { title: "Tecnología digital", desc: "Planeación de alta precisión" },
            { title: "3 Ubicaciones", desc: "CDMX: Polanco, Del Valle, Roma" }
          ].map((item, i) => (
            <motion.div 
              key={item.title} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="px-12 md:border-l border-border first:border-l-0 text-center flex flex-col items-center"
            >
              <h3 className="font-serif text-2xl mb-2 text-foreground/90">{item.title}</h3>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <h2 className="font-serif text-5xl leading-tight">Una sonrisa no se improvisa.<br />Se diseña.</h2>
            <p className="text-muted-foreground leading-relaxed">Cada transformación comienza con una idea y continúa con análisis, proporción, planeación digital y ejecución clínica. El objetivo no es crear una sonrisa idéntica para todos, sino encontrar la que armoniza contigo.</p>
            <div className="grid grid-cols-2 gap-8">
              {["Analizamos", "Diseñamos", "Planeamos", "Transformamos"].map((step, i) => (
                <div key={step}>
                  <p className="text-primary font-serif text-2xl mb-1">0{i + 1}</p>
                  <p className="text-xs uppercase tracking-widest">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 relative">
            <img 
              src={sketchToSmileAsset.url} 
              alt="De boceto a sonrisa"
              className="w-full shadow-2xl"
            />
          </div>
        </div>
        <section className="py-24 px-12 bg-secondary/20 overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative">
            <div className="space-y-6 z-10">
              <h2 className="font-serif text-5xl">Precisión antes de transformación.</h2>
              <p className="text-muted-foreground leading-relaxed italic font-light">"La estética comienza con observar."</p>
              <p className="text-muted-foreground leading-relaxed">Analizamos proporciones, simetría, líneas dentales y relación con el rostro para planear un resultado armónico y personalizado. Nuestro flujo Digital Smile Design permite visualizar el final antes de empezar.</p>
              <div className="pt-8">
                <img 
                  src={dsdInfographicAsset.url} 
                  alt="Digital Smile Design Infographic" 
                  className="w-full shadow-lg rounded-sm brightness-105"
                />
              </div>
            </div>
            <div className="relative group">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <img src="/src/assets/concepts/blueprint.asset.json" alt="Blueprint de sonrisa" className="w-full mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity duration-700" />


              </motion.div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
            </div>
          </div>
        </section>

        <section className="py-24 px-12 bg-background overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 order-2 md:order-1"
            >
              <div className="relative inline-block">
                <img 
                  src={doctoraSillonAsset.url} 
                  alt="Doctora Nisado Baani" 
                  className="max-h-[600px] w-auto relative z-10 grayscale-[30%] hover:grayscale-0 transition-all duration-700" 
                />
                <div className="absolute -bottom-6 -left-6 w-full h-full border border-primary/20 -z-10" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-8 order-1 md:order-2"
            >
              <p className="text-primary tracking-widest text-xs uppercase font-bold">Experiencia Nisado Baani</p>
              <h2 className="font-serif text-6xl leading-[1.1]">Manos expertas, visión artística.</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">En Nisado Baani, cada paciente es un lienzo. Nuestra filosofía combina la tecnología más avanzada con un ojo clínico entrenado en la armonía facial.</p>
                <p className="leading-relaxed font-serif text-xl text-foreground italic">"Buscamos que tu sonrisa sea el reflejo más auténtico de tu personalidad."</p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <h4 className="font-serif text-2xl mb-1 text-primary">Tecnología</h4>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Escaneo intraoral & DSD</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl mb-1 text-primary">Biomimética</h4>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Resultados que parecen tuyos</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-12 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="font-serif text-5xl">Todo empieza con una valoración.</h2>
              <p className="text-muted-foreground uppercase tracking-widest text-xs">Cada sonrisa necesita algo diferente. Diseñamos el tratamiento alrededor de ti.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { title: "Diseño de Sonrisa", img: veneerMockupAsset.url, desc: "Planeación estética integral" },
                { title: "Odontología Estética", img: beforeAfterLateralAsset.url, desc: "Restauración natural de alta gama" },
                { title: "Resultados Reales", img: "/src/assets/comparisons/whitening_before_after.asset.json", desc: "Evidencia de transformación" }
              ].map((t) => (
                <motion.div 
                  key={t.title} 
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <div className="overflow-hidden mb-6 aspect-[4/5] relative">
                    <img 
                      src={t.img} 
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
                      alt={t.title} 
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                  </div>
                  <h3 className="font-serif text-3xl group-hover:text-primary transition-colors">{t.title}</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      <footer className="py-24 px-12 bg-[#202020] text-[#FCFAF7]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          <div className="space-y-8">
            <img src={logoAsset.url} alt="Nisado Baani" className="h-10 brightness-0 invert" />
            <p className="text-sm text-[#FCFAF7]/60 leading-relaxed">
              Lujo contemporáneo, precisión, tecnología y belleza natural en el corazón de la Ciudad de México.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="font-serif text-2xl">Ubicaciones</h4>
            <ul className="space-y-2 text-sm text-[#FCFAF7]/60">
              <li>Polanco</li>
              <li>Del Valle</li>
              <li>Roma Sur</li>
            </ul>
          </div>
          <div className="space-y-8">
            <h4 className="font-serif text-2xl">Contáctanos</h4>
            <button className="w-full border border-[#FCFAF7]/20 py-4 uppercase tracking-widest text-xs hover:bg-[#FCFAF7] hover:text-[#202020] transition-all">
              Agenda tu valoración
            </button>
            <div className="flex gap-4">
              <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-[100]">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
