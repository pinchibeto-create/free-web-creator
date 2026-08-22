import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/odontologia-estetica-cdmx')({
  head: () => ({
    meta: [
      { title: "Odontología estética en CDMX | Nisado Baani" },
      { name: "description", content: "Expertos en odontología estética en CDMX. En Nisado Baani Luxury Dental fusionamos ciencia y arte para crear sonrisas saludables y hermosas." },
      { property: "og:title", content: "Odontología estética en CDMX | Nisado Baani" },
      { property: "og:description", content: "Expertos en odontología estética en CDMX. Fusionamos ciencia y arte para tu sonrisa." },
    ],
    links: [
      { rel: "canonical", href: "https://odontologianisadobaani.com/odontologia-estetica-cdmx" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Odontología Estética en CDMX",
          "provider": {
            "@type": "Dentist",
            "name": "Nisado Baani",
            "url": "https://odontologianisadobaani.com/"
          },
          "description": "La odontología estética en Nisado Baani abarca todos los tratamientos enfocados en mejorar la apariencia y armonía de tu sonrisa.",
          "areaServed": {
             "@type": "City",
             "name": "Ciudad de México"
          }
        })
      }
    ]
  }),
  component: ServicePage,
})

function ServicePage() {
  return (
    <div className="min-h-screen bg-soft-black text-ivory py-32 px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-5xl md:text-7xl font-serif text-champagne">Odontología estética en CDMX</h1>
        <div className="space-y-6 text-lg font-light leading-relaxed">
          <p>
            La odontología estética es el corazón de **Nisado Baani**. Creemos que una sonrisa saludable debe ser también una sonrisa hermosa. Nuestra filosofía se basa en la mínima intervención y la máxima personalización, buscando siempre que el paciente se sienta seguro y orgulloso de mostrar su sonrisa al mundo.
          </p>
          <h2 className="text-3xl font-serif text-ivory pt-8">Nuestra visión de la estética dental</h2>
          <p>
            No buscamos crear "sonrisas de catálogo", sino sonrisas que pertenezcan a cada persona. Analizamos la fisonomía, el color de piel y hasta la personalidad de nuestros pacientes para que el resultado final sea completamente natural y armónico.
          </p>
          <h2 className="text-3xl font-serif text-ivory pt-8">Tratamientos integrales</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>Rehabilitación oral estética.</li>
            <li>Corrección de asimetrías y diastemas.</li>
            <li>Armonización dental y gingival.</li>
            <li>Mantenimiento preventivo enfocado en la estética.</li>
          </ul>
        </div>
        <div className="pt-12">
          <a href="/" className="text-champagne hover:text-ivory transition-colors">← Volver al inicio</a>
        </div>
      </div>
    </div>
  )
}
