import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/carillas-de-porcelana-cdmx')({
  head: () => ({
    meta: [
      { title: "Carillas de porcelana en CDMX | Nisado Baani" },
      { name: "description", content: "Carillas de porcelana y cerámica de alta gama en CDMX. Máxima durabilidad y estética natural para tu diseño de sonrisa en Nisado Baani." },
      { property: "og:title", content: "Carillas de porcelana en CDMX | Nisado Baani" },
      { property: "og:description", content: "Carillas de porcelana y cerámica de alta gama en CDMX. Máxima durabilidad y estética natural." },
    ],
    links: [
      { rel: "canonical", href: "https://odontologianisadobaani.com/carillas-de-porcelana-cdmx" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Carillas de Porcelana en CDMX",
          "provider": {
            "@type": "Dentist",
            "name": "Nisado Baani",
            "url": "https://odontologianisadobaani.com/"
          },
          "description": "Las carillas de porcelana ofrecen la máxima durabilidad y una estética que imita a la perfección el esmalte dental natural.",
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
        <h1 className="text-5xl md:text-7xl font-serif text-champagne">Carillas de porcelana en CDMX</h1>
        <div className="space-y-6 text-lg font-light leading-relaxed">
          <p>
            En **Nisado Baani**, utilizamos materiales cerámicos de última generación para nuestras carillas de porcelana. Este tratamiento representa la cúspide de la odontología estética, ofreciendo una resistencia excepcional y una capacidad de mimetismo con el diente natural que es simplemente inigualable.
          </p>
          <h2 className="text-3xl font-serif text-ivory pt-8">La excelencia de la porcelana</h2>
          <p>
            Las carillas de porcelana son láminas extremadamente delgadas que se cementan sobre la cara frontal de los dientes. Su principal ventaja es que no pierden el brillo ni se manchan con el tiempo, manteniendo una sonrisa radiante durante muchos años.
          </p>
          <h2 className="text-3xl font-serif text-ivory pt-8">Diferenciales Nisado Baani</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>Materiales biocompatibles de alta resistencia.</li>
            <li>Diseño digital previo para precisión absoluta.</li>
            <li>Colaboración con los mejores laboratorios dentales.</li>
            <li>Acabado artesanal para una textura natural.</li>
          </ul>
        </div>
        <div className="pt-12">
          <a href="/" className="text-champagne hover:text-ivory transition-colors">← Volver al inicio</a>
        </div>
      </div>
    </div>
  )
}
