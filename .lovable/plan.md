# Plan de Optimización SEO y Miniatura (Open Graph) para Nisado Baani

Optimización integral del SEO técnico y configuración de la miniatura visual (OG Image) para garantizar una presencia premium al compartir el sitio en redes sociales y buscadores.

## Acciones

### 1. Configuración de Metadatos Globales y Rutas
- Actualizar `src/routes/__root.tsx` con metadatos base (título, descripción, autor).
- Configurar las etiquetas Open Graph y Twitter Card en `src/routes/index.tsx` para usar una URL absoluta de imagen.
- Asegurar que el título y la descripción sean únicos y contengan palabras clave relevantes (Diseño de sonrisa, Odontología estética, CDMX, Polanco).

### 2. Gestión de Activos para SEO
- Verificar la existencia de `public/og-image.png`. Si no existe, crearla o usar el logo principal como respaldo visual optimizado para miniaturas (1200x630px).
- Asegurar que el `favicon.png` esté correctamente referenciado en el root.

### 3. Validación y Pruebas
- Verificar que la jerarquía de encabezados (H1, H2) sea correcta para indexación.
- Comprobar que el marcado JSON-LD (Dentist) esté completo y sin errores de sintaxis.
- Validar la visualización de la miniatura mediante herramientas de inspección (simulación de Open Graph).

## Detalles Técnicos

- **Rutas afectadas:** `src/routes/__root.tsx`, `src/routes/index.tsx`.
- **Activos:** `public/og-image.png` (debe ser accesible mediante URL absoluta).
- **SEO Semántico:** Uso de `Julius Sans One` y `Bodoni Moda` en metadatos para coherencia de marca.
- **Canónical:** Asegurar que `https://budget-web-studio.lovable.app/` sea la URL base oficial.
