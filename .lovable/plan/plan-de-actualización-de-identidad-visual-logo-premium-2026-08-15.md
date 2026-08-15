# Plan de Actualización de Identidad Visual: Logo Premium

El usuario ha solicitado reemplazar el logo actual por una nueva versión en alta resolución con acabados dorados y monograma "NB" integrado en una silueta dental, manteniendo la estética de lujo de Nisado Baani.

## Cambios a realizar

### 1. Gestión de Activos
- Registrar formalmente la imagen subida (`image.png`) como un activo del sistema utilizando la infraestructura de Lovable Assets.
- Nombre del recurso: `logo_final_oro.png.asset.json`.

### 2. Integración en el Repositorio de Datos
- Actualizar `src/data/nisadoAssets.ts` para incluir este nuevo logo en el objeto de branding.
- Definir `branding.logoPrincipal` y `branding.logoPng` apuntando a esta nueva versión para asegurar consistencia en todo el sitio.

### 3. Implementación en la Interfaz
- Asegurar que en `src/routes/index.tsx` se utilicen las referencias actualizadas.
- La sección de marca post-hero mostrará el nuevo logo en gran formato, respetando sus colores originales (dorado y champagne).
- El footer y la navegación también se actualizarán automáticamente al cambiar la fuente en el archivo de datos.

## Verificación
- Confirmar visualmente que el logo aparece con nitidez en el Hero reveal.
- Verificar que el logo del footer mantiene la elegancia sobre el fondo oscuro.
- Validar que no hay filtros CSS de inversión que alteren los nuevos tonos dorados.
