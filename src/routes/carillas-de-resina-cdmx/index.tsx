import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/carillas-de-resina-cdmx/')({
  head: () => ({
    meta: [
      { title: "Carillas de resina en CDMX | Nisado Baani" },
      { name: "description", content: "Mejora tu sonrisa con carillas de resina en CDMX. Proceso a mano alzada para resultados naturales y armónicos en Nisado Baani Luxury Dental." },
      { property: "og:title", content: "Carillas de resina en CDMX | Nisado Baani" },
      { property: "og:description", content: "Mejora tu sonrisa con carillas de resina en CDMX. Proceso a mano alzada para resultados naturales." },
    ],
    links: [
      { rel: "canonical", href: "https://odontologianisadobaani.com/carillas-de-resina-cdmx" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Carillas de Resina en CDMX",
          "provider": {
            "@type": "Dentist",
            "name": "Nisado Baani",
            "url": "https://odontologianisadobaani.com/"
          },
          "description": "Las carillas de resina a mano alzada permiten esculpir una nueva sonrisa de forma mínimamente invasiva y con gran detalle artístico.",
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
        <h1 className="text-5xl md:text-7xl font-serif text-champagne">Carillas de resina en CDMX</h1>
        <div className="space-y-6 text-lg font-light leading-relaxed">
          <p>
            Las carillas de resina en **Nisado Baani** son una solución versátil y conservadora para transformar la estética dental. A diferencia de otros métodos, la resina nos permite trabajar "a mano alzada", esculpiendo cada pieza dental directamente para lograr una integración perfecta con tus rasgos naturales.
          </p>
          <h2 className="text-3xl font-serif text-ivory pt-8">¿Por qué elegir carillas de resina?</h2>
          <p>
            Es el tratamiento ideal para quienes buscan una mejora significativa con una intervención mínima. Permite corregir color, forma y ligeros problemas de alineación en pocas sesiones, manteniendo la integridad del esmalte dental original.
          </p>
          <h2 className="text-3xl font-serif text-ivory pt-8">Ventajas del tratamiento</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>Mínimamente invasivo.</li>
            <li>Resultados inmediatos y altamente estéticos.</li>
            <li>Reparables y fáciles de mantener.</li>
            <li>Proceso artesanal personalizado.</li>
          </ul>
        </div>
        <div className="pt-12">
          <a href="/" className="text-champagne hover:text-ivory transition-colors">← Volver al inicio</a>
        </div>
      </div>
    </div>
  )
}
