import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dentista-roma-sur/')({
  head: () => ({
    meta: [
      { title: "Dentista en Roma Sur CDMX | Nisado Baani Luxury Dental" },
      { name: "description", content: "Atención dental premium en Roma Sur, CDMX. Diseño de sonrisa, carillas y odontología estética en Tlaxcala 84. Agenda tu valoración en Nisado Baani Roma Sur." },
      { property: "og:title", content: "Dentista en Roma Sur CDMX | Nisado Baani" },
      { property: "og:description", content: "Atención dental premium en Roma Sur, CDMX. Diseño de sonrisa y odontología estética en Tlaxcala 84." },
    ],
    links: [
      { rel: "canonical", href: "https://odontologianisadobaani.com/dentista-roma-sur" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "Nisado Baani Roma Sur",
          "image": "https://odontologianisadobaani.com/og-nisado-baani.jpg",
          "url": "https://odontologianisadobaani.com/dentista-roma-sur",
          "telephone": "+525585265697",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Tlaxcala 84, Roma Sur",
            "addressLocality": "Ciudad de México",
            "addressRegion": "CDMX",
            "postalCode": "06760",
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
        <h1 className="text-5xl md:text-7xl font-serif text-champagne">Dentista en Roma Sur</h1>
        <div className="space-y-6 text-lg font-light leading-relaxed">
          <p>
            Nuestra sede en **Roma Sur** (Tlaxcala 84) es un espacio diseñado para ofrecer la máxima comodidad y tecnología en odontología estética. En el corazón de una de las zonas más vibrantes de la CDMX, Nisado Baani ofrece tratamientos de diseño de sonrisa, carillas y rehabilitación con un enfoque boutique.
          </p>
          <h2 className="text-3xl font-serif text-ivory pt-8">Servicios en Roma Sur</h2>
          <ul className="list-disc pl-6 space-y-4 text-ivory/80">
            <li>Diseño de Sonrisa Digital.</li>
            <li>Carillas de Resina y Porcelana.</li>
            <li>Blanqueamiento Dental Premium.</li>
            <li>Limpiezas y Valoración Integral.</li>
          </ul>
          <h2 className="text-3xl font-serif text-ivory pt-8">Ubicación y Contacto</h2>
          <p>
            Nos encontramos en **Tlaxcala 84, Roma Sur, Cuauhtémoc, 06760 Ciudad de México, CDMX**. 
            Nuestra ubicación es de fácil acceso y contamos con horarios flexibles para adaptarnos a tu ritmo de vida.
          </p>
        </div>
        <div className="pt-12">
          <a href="/" className="text-champagne hover:text-ivory transition-colors">← Volver al inicio</a>
        </div>
      </div>
    </div>
  )
}
