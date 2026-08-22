import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/diseno-de-sonrisa-cdmx/')({
  head: () => ({
    meta: [
      { title: "Diseño de sonrisa en CDMX | Nisado Baani" },
      { name: "description", content: "Transforma tu sonrisa con nuestro diseño de sonrisa personalizado en CDMX. Resultados naturales con tecnología avanzada y enfoque artístico en Nisado Baani." },
      { property: "og:title", content: "Diseño de sonrisa en CDMX | Nisado Baani" },
      { property: "og:description", content: "Transforma tu sonrisa con nuestro diseño de sonrisa personalizado en CDMX. Resultados naturales con tecnología avanzada." },
    ],
    links: [
      { rel: "canonical", href: "https://odontologianisadobaani.com/diseno-de-sonrisa-cdmx" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Diseño de Sonrisa personalizado en CDMX",
          "provider": {
            "@type": "Dentist",
            "name": "Nisado Baani",
            "url": "https://odontologianisadobaani.com/"
          },
          "description": "El diseño de sonrisa en Nisado Baani es un proceso artesanal y tecnológico donde planificamos cada detalle para lograr armonía y naturalidad.",
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
        <h1 className="text-5xl md:text-7xl font-serif text-champagne">Diseño de sonrisa en CDMX</h1>
        <div className="space-y-6 text-lg font-light leading-relaxed">
          <p>
            El diseño de sonrisa en **Nisado Baani** es más que un tratamiento dental; es una obra de arte personalizada. Combinamos la precisión tecnológica del Digital Smile Design con la sensibilidad artística de nuestros especialistas para crear sonrisas que no solo son hermosas, sino que también respetan la esencia y proporciones de cada rostro.
          </p>
          <h2 className="text-3xl font-serif text-ivory pt-8">¿Qué es el diseño de sonrisa?</h2>
          <p>
            Es un proceso integral de planificación donde analizamos rasgos faciales, posición de los labios y estructura dental. A través de mock-ups y simulaciones, nuestros pacientes pueden visualizar el resultado antes de comenzar el tratamiento, garantizando una satisfacción total.
          </p>
          <h2 className="text-3xl font-serif text-ivory pt-8">Beneficios de nuestro enfoque</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>Planificación 100% personalizada y predecible.</li>
            <li>Resultados de aspecto natural y armónico.</li>
            <li>Mejora no solo la estética, sino también la función dental.</li>
            <li>Integración de diversas técnicas: desde carillas hasta blanqueamiento.</li>
          </ul>
        </div>
        <div className="pt-12">
          <a href="/" className="text-champagne hover:text-ivory transition-colors">← Volver al inicio</a>
        </div>
      </div>
    </div>
  )
}
