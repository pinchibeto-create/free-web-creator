import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dentista-polanco')({
  head: () => ({
    meta: [
      { title: "Dentista en Polanco CDMX | Nisado Baani Luxury Dental" },
      { name: "description", content: "Atención dental de lujo en Polanco, CDMX. Diseño de sonrisa, carillas y odontología avanzada en Emerson 111. Reserva tu cita en Nisado Baani Polanco." },
      { property: "og:title", content: "Dentista en Polanco CDMX | Nisado Baani" },
      { property: "og:description", content: "Atención dental de lujo en Polanco, CDMX. Diseño de sonrisa y odontología avanzada en Emerson 111." },
    ],
    links: [
      { rel: "canonical", href: "https://odontologianisadobaani.com/dentista-polanco" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "Nisado Baani Polanco",
          "image": "https://odontologianisadobaani.com/og-nisado-baani.jpg",
          "url": "https://odontologianisadobaani.com/dentista-polanco",
          "telephone": "+525585265697",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Emerson 111, Polanco V Sección",
            "addressLocality": "Ciudad de México",
            "addressRegion": "CDMX",
            "postalCode": "11550",
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
        <h1 className="text-5xl md:text-7xl font-serif text-champagne">Dentista en Polanco</h1>
        <div className="space-y-6 text-lg font-light leading-relaxed">
          <p>
            Ubicada en una de las zonas más exclusivas de la Ciudad de México, nuestra sede en **Polanco** (Emerson 111) representa la unión perfecta entre el lujo y la salud dental. En Nisado Baani Polanco, cada detalle ha sido cuidado para brindarte una experiencia dental sin precedentes.
          </p>
          <h2 className="text-3xl font-serif text-ivory pt-8">Especialidades en Polanco</h2>
          <ul className="list-disc pl-6 space-y-4 text-ivory/80">
            <li>Diseño de sonrisa de alta precisión.</li>
            <li>Carillas de porcelana y cerámica.</li>
            <li>Tratamientos de rehabilitación integral.</li>
            <li>Odontología preventiva de vanguardia.</li>
          </ul>
          <h2 className="text-3xl font-serif text-ivory pt-8">Ubicación y Contacto</h2>
          <p>
            Nos encontramos en **Emerson 111, Polanco V Sección, Miguel Hidalgo, 11550 Ciudad de México, CDMX**. 
            Nuestra clínica en Polanco cuenta con tecnología de punta y un equipo altamente calificado para atenderte.
          </p>
        </div>
        <div className="pt-12">
          <a href="/" className="text-champagne hover:text-ivory transition-colors">← Volver al inicio</a>
        </div>
      </div>
    </div>
  )
}
