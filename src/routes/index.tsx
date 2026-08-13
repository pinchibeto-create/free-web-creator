import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import logoAsset from "@/assets/branding/logo.asset.json";
import heroAsset from "@/assets/hero/hero_main.asset.json";
import sketchToSmileAsset from "@/assets/concepts/sketch_to_smile.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
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
      </section>
      <section className="py-24 px-12 bg-background border-t border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-5xl">Todo empieza con una valoración.</h2>
            <p className="text-muted-foreground uppercase tracking-widest text-xs">Cada sonrisa necesita algo diferente. Diseñamos el tratamiento alrededor de ti.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: "Diseño de Sonrisa", img: veneerMockupAsset.url },
              { title: "Odontología Estética", img: beforeAfterLateralAsset.url }
            ].map((t) => (
              <div key={t.title} className="group cursor-pointer">
                <div className="overflow-hidden mb-6 aspect-[4/3]">
                  <img src={t.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={t.title} />
                </div>
                <h3 className="font-serif text-3xl group-hover:text-primary transition-colors">{t.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
