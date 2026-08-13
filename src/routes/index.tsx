import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import logoAsset from "@/assets/branding/logo.asset.json";
import heroAsset from "@/assets/hero/hero_main.asset.json";

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

      <header className="relative h-screen flex items-center pt-20 px-12">
        <div className="flex-1 max-w-2xl">
          <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase mb-6">NISADO BAANI · LUXURY DENTAL</p>
          <h1 className="text-7xl font-light font-serif mb-6 leading-[0.9]">
            Tu sonrisa,<br />diseñada para ti.
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-lg">
            Diseño de sonrisa y odontología estética con atención personalizada en Ciudad de México.
          </p>
          <div className="flex gap-4">
            <button className="bg-primary text-primary-foreground px-8 py-4 uppercase tracking-widest text-sm">Agenda tu valoración</button>
            <button className="border border-input px-8 py-4 uppercase tracking-widest text-sm">Ver resultados</button>
          </div>
        </div>
        <div className="flex-1 h-full relative">
          <img src={heroAsset.url} alt="Consultorio Premium" className="w-full h-full object-cover" />
        </div>
      </header>

      <section className="py-20 px-12 grid grid-cols-4 border-b border-border/50">
        {["Diseño personalizado", "Resultados naturales", "Tecnología digital", "Atención en 3 ubicaciones"].map((item) => (
          <div key={item} className="px-8 border-l border-border first:border-l-0 text-center">
            <p className="font-serif text-2xl">{item}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
