# Plan de Optimización SEO Integral REAL - Nisado Baani

Se realizará una optimización completa enfocada en la indexabilidad, SEO técnico, SEO local y arquitectura de contenido, sin alterar la identidad visual premium del sitio.

## 1. Auditoría Inicial y Preparación Técnico
- **Identificación de metadatos:** Revisión de `src/routes/__root.tsx` e `index.tsx` (ya realizada).
- **Consistencia NAP:** Asegurar que "Nisado Baani" y las direcciones sean consistentes.
- **Configuración Global:** Actualizar `lang="es-MX"` en `src/routes/__root.tsx`.

## 2. SEO de la Home (index.tsx)
- **Title & Meta:** Actualizar a "Diseño de sonrisa en CDMX | Nisado Baani" y descripción optimizada.
- **Jerarquía Hx:** 
    - Implementar un `<h1>` semántico oculto o integrado visualmente: "Diseño de sonrisa personalizado en CDMX".
    - Ajustar secciones actuales a `<h2>` y `<h3>` según relevancia.
- **Semántica:** Añadir párrafo descriptivo rico en keywords naturales cerca del Hero.
- **Imágenes:** Añadir `alt` descriptivos y optimizar carga (LCP priority en Hero).

## 3. Nueva Arquitectura de Contenido (Rutas)
Creación de páginas independientes para servicios y ubicaciones (TanStack Router):
- **Servicios:**
    - `/diseno-de-sonrisa-cdmx`
    - `/carillas-de-resina-cdmx`
    - `/carillas-de-porcelana-cdmx`
    - `/blanqueamiento-dental-cdmx`
    - `/odontologia-estetica-cdmx`
- **Ubicaciones:**
    - `/dentista-roma-sur`
    - `/dentista-polanco`
    - `/dentista-del-valle`

*Cada página tendrá su propio Title, Meta, H1, Canonical y Schema JSON-LD.*

## 4. SEO Técnico y Datos Estructurados
- **Schema.org:** 
    - Refinar `Dentist` en la Home.
    - Implementar Schemas específicos por ubicación y servicio.
    - Añadir `WebSite` Schema.
- **Archivos de Rastreo:** 
    - Crear `public/sitemap.xml` dinámico/manual con URLs canónicas.
    - Actualizar `public/robots.txt`.
- **Canonicals:** Asegurar que cada página apunte a `https://odontologianisadobaani.com/path`.

## 5. Rendimiento y UX (Core Web Vitals)
- **Imágenes:** Asegurar `width`/`height` y `lazy loading` (excepto LCP).
- **Navegación:** Asegurar que el menú use enlaces HTML rastreables (`Link` de TanStack).

## Entregables
- Tabla comparativa Antes/Después.
- Lista de archivos modificados y rutas creadas.
- Verificación de build exitoso.

---
**Nota sobre Netlify:** Se mantendrá el dominio `https://odontologianisadobaani.com/` como referencia canónica.
