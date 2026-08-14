import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { nisadoAssets } from "@/data/nisadoAssets";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-ivory text-soft-black font-sans selection:bg-champagne/30">
      {/* Editorial Navigation */}
      <nav className="fixed w-full z-50 px-8 py-8 flex items-center justify-between mix-blend-difference text-ivory">
        <img src={nisadoAssets.branding.logoPng} alt="Nisado Baani" className="h-6 opacity-80" />
        <div className="hidden lg:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-medium">
          {["Inicio", "Atelier", "Tecnología", "Resultados"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-champagne transition-colors">{item}</a>
          ))}
        </div>
        <button className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-ivory/20 pb-1 hover:border-champagne transition-all">
          Reservar
        </button>
      </nav>

      {/* Editorial Hero */}
      <header className="relative min-h-screen flex items-center px-8 lg:px-24 pt-32">
        <div className="grid lg:grid-cols-12 gap-12 w-full">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl lg:text-9xl font-serif leading-[0.9] text-soft-black"
            >
              Diseñamos<br />
              <span className="font-script text-champagne">sonrisas</span><br />
              <span className="italic">atemporales.</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex gap-6"
            >
              {["Polanco", "Del Valle", "Roma Sur"].map(loc => (
                <button key={loc} className="border border-soft-black/10 px-6 py-2 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-champagne hover:text-ivory transition-all duration-500">
                  {loc}
                </button>
              ))}
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 h-[70vh] relative"
          >
            <img src={nisadoAssets.hero.main} className="w-full h-full object-cover opacity-90 rounded-[32px]" alt="Nisado Baani" />
          </motion.div>
        </div>
      </header>

      {/* Manifiesto Editorial */}
      <section className="py-32 px-8 lg:px-24 relative bg-warm-white">
        <div className="absolute top-24 left-24 opacity-[0.03] text-[20vw] font-serif leading-none select-none">NB</div>
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <p className="font-serif text-3xl italic text-soft-black/80 leading-relaxed">
            "La belleza no es un estándar, es una interpretación única de la identidad."
          </p>
          <div className="h-[1px] w-20 bg-champagne mx-auto" />
        </div>
      </section>

      {/* Método / Ingeniería */}
      <section className="bg-soft-black text-ivory py-32 px-8 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-6xl font-serif">Artesanía & Precisión</h2>
            <p className="text-ivory/60 leading-relaxed font-light">Combinamos la meticulosa escultura manual con la tecnología de vanguardia para garantizar una armonía absoluta en cada detalle de tu nueva sonrisa.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={nisadoAssets.craftsmanship.pulido} className="aspect-square object-cover rounded-md" alt="Pulido" />
            <img src={nisadoAssets.technology.computadora} className="aspect-square object-cover rounded-md" alt="Tecnología" />
          </div>
        </div>
      </section>
    </div>
  );
}
