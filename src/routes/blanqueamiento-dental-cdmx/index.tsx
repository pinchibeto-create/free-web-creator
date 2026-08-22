import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blanqueamiento-dental-cdmx/')({
  head: () => ({
    meta: [
      { title: "Blanqueamiento dental en CDMX | Nisado Baani" },
      { name: "description", content: "Recupera la luminosidad de tu sonrisa con nuestro blanqueamiento dental premium en CDMX. Tratamientos seguros y efectivos en Nisado Baani Luxury Dental." },
      { property: "og:title", content: "Blanqueamiento dental en CDMX | Nisado Baani" },
      { property: "og:description", content: "Recupera la luminosidad de tu sonrisa con nuestro blanqueamiento dental premium en CDMX. Seguro y efectivo." },
    ],
    links: [
      { rel: "canonical", href: "https://odontologianisadobaani.com/blanqueamiento-dental-cdmx" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Blanqueamiento Dental en CDMX",
          "provider": {
            "@type": "Dentist",
            "name": "Nisado Baani",
            "url": "https://odontologianisadobaani.com/"
          },
          "description": "Blanqueamiento dental profesional para eliminar manchas y devolver el tono natural y brillante a tus dientes.",
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
        <h1 className="text-5xl md:text-7xl font-serif text-champagne">Blanqueamiento dental en CDMX</h1>
        <div className="space-y-6 text-lg font-light leading-relaxed">
          <p>
            El blanqueamiento dental en **Nisado Baani** es un procedimiento clínico controlado que busca devolver la luminosidad a tu sonrisa de forma segura. Utilizamos geles blanqueadores de alta concentración y tecnología de activación para lograr resultados visibles desde la primera sesión.
          </p>
          <h2 className="text-3xl font-serif text-ivory pt-8">Un proceso seguro y supervisado</h2>
          <p>
            A diferencia de los productos de venta libre, nuestro blanqueamiento profesional está supervisado en todo momento, lo que nos permite minimizar la sensibilidad y garantizar que el esmalte dental no sufra ningún daño durante el proceso.
          </p>
          <h2 className="text-3xl font-serif text-ivory pt-8">¿Qué esperar del blanqueamiento?</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>Aclaramiento de varios tonos en una sola cita.</li>
            <li>Eliminación de manchas causadas por café, té o tabaco.</li>
            <li>Resultados duraderos con los cuidados adecuados.</li>
            <li>Personalización según la sensibilidad de cada paciente.</li>
          </ul>
        </div>
        <div className="pt-12">
          <a href="/" className="text-champagne hover:text-ivory transition-colors">← Volver al inicio</a>
        </div>
      </div>
    </div>
  )
}
