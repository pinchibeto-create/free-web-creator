# Plan: Actualización de Logotipo Premium

Actualizaré la identidad visual de Nisado Baani integrando el nuevo logotipo proporcionado.

## Cambios Propuestos

### Gestión de Assets
- Importar el nuevo activo `logo_final_oro_v4.png.asset.json` en el sistema central de assets.
- Actualizar `src/data/nisadoAssets.ts` para que todas las referencias al logotipo utilicen la nueva versión.

### Actualización de Interfaz
- Verificar que el nuevo logotipo se visualice correctamente en el Header (sticky y frosted glass).
- Asegurar que la sección Post-Hero mantenga su animación editorial con el nuevo diseño del logo.
- Validar el SEO: actualizar el logotipo en los metadatos de OpenGraph y en el esquema JSON-LD para motores de búsqueda.

## Detalles Técnicos
- **Asset Pipeline**: Integración mediante Lovable Assets (CDN-ready).
- **SEO**: Actualización de `og:image` y `schema:image`.
- **UI**: Mantenimiento de las animaciones de Framer Motion existentes.
