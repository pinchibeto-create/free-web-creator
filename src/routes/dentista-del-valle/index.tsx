import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dentista-del-valle/')({
  head: () => ({
    meta: [
      { title: "Dentista en Del Valle CDMX | Nisado Baani Luxury Dental" },
      { name: "description", content: "Odontología estética y general en la Colonia Del Valle, CDMX. Diseño de sonrisa y atención dental personalizada en Av. Insurgentes Sur 1188." },
      { property: "og:title", content: "Dentista en Del Valle CDMX | Nisado Baani" },
      { property: "og:description", content: "Odontología estética y general en la Colonia Del Valle, CDMX. Diseño de sonrisa en Av. Insurgentes Sur 1188." },
    ],
    links: [
      { rel: "canonical", href: "https://odontologianisadobaani.com/dentista-del-valle" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "Nisado Baani Del Valle",
          "image": "https://odontologianisadobaani.com/og-nisado-baani.jpg",
          "url": "https://odontologianisadobaani.com/dentista-del-valle",
          "telephone": "+525585265697",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Insurgentes Sur 1188, Tlacoquemécatl del Valle",
            "addressLocality": "Ciudad de México",
            "addressRegion": "CDMX",
            "postalCode": "03200",
            "addressCountry": "MX"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "19:00"
          }
        })
      }
    ]
  }),
  component: LocationPage,
})

function LocationPage() {
  return (
    <div className="min-h-screen bg-soft-black text-ivory py-32 px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-5xl md:text-7xl font-serif text-champagne">Dentista en Del Valle</h1>
        <div className="space-y-6 text-lg font-light leading-relaxed">
          <p>
            Nuestra sede en la **Colonia Del Valle** (Av. Insurgentes Sur 1188) ofrece una ubicación privilegiada y atención dental de primer nivel. En Nisado Baani Del Valle, nos enfocamos en brindar soluciones estéticas y funcionales en un ambiente relajado y profesional.
          </p>
          <h2 className="text-3xl font-serif text-ivory pt-8">Nuestros Servicios en Del Valle</h2>
          <ul className="list-disc pl-6 space-y-4 text-ivory/80">
            <li>Diseño de sonrisa personalizado.</li>
            <li>Limpiezas y prevención dental.</li>
            <li>Blanqueamiento dental profesional.</li>
            <li>Carillas y estética avanzada.</li>
          </ul>
          <h2 className="text-3xl font-serif text-ivory pt-8">Ubicación y Contacto</h2>
          <p>
            Estamos ubicados en **Av. Insurgentes Sur 1188, Tlacoquemécatl del Valle, Benito Juárez, 03200 Ciudad de México, CDMX**. 
            Nuestra clínica en Del Valle es el punto ideal para quienes buscan calidad y cercanía en el centro-sur de la ciudad.
          </p>
        </div>
        <div className="pt-12">
          <a href="/" className="text-champagne hover:text-ivory transition-colors">← Volver al inicio</a>
        </div>
      </div>
    </div>
  )
}
