# Plan: Actualización de Identidad Tipográfica Nisado Baani

El objetivo es alinear la tipografía del sitio con la identidad visual del logotipo real ( Julius Sans One), eliminando el uso de Bodoni Moda y estableciendo un sistema coherente, elegante y minimalista.

## Cambios Visuales y Tipográficos

### 1. Sistema Global de Fuentes
- **Identidad Principal:** `Julius Sans One` (Sans-serif, delgada, elegante).
- **Lectura/Cuerpo:** `Manrope` (Mantener pesos ligeros: 300, 400, 500).
- **Acentos:** `Allura` (Firma/Detalle editorial).

### 2. Configuración de Estilos (CSS)
- Cargar `Julius Sans One` desde Google Fonts en `src/routes/__root.tsx`.
- Actualizar variables de tema en `src/styles.css`:
  - `--font-serif` -> Cambiar a `Julius Sans One` (aunque el nombre sea serif en Tailwind, se usará para títulos).
  - `--font-brand` (Nueva variable para claridad).
  - Configurar `letter-spacing` global para la marca: `0.04em` en títulos, `0.08em` en navegación/labels, `0.12em` en microtextos premium.

### 3. Aplicación en Componentes (src/routes/index.tsx)
- **Hero:**
  - Cambiar "Diseñamos sonrisas para ti" a `Julius Sans One`.
  - Ajustar interlineado y espaciado entre letras.
- **Navegación:**
  - Menú hamburguesa y enlaces de navegación lateral en `Julius Sans One`.
- **Botones:**
  - "RESERVAR AHORA", selectores de ubicación ("POLANCO", "ROMA SUR", etc.) y "VER RESULTADOS" en `Julius Sans One` con `uppercase` y `letter-spacing: 0.08em`.
- **Títulos de Sección:**
  - "Tecnología que planifica", "El arte detrás de tu sonrisa", "Resultados que hablan por sí mismos" y numeración editorial ("01 /", etc.) en `Julius Sans One`.
- **Párrafos:**
  - Asegurar que todos los bloques de texto largo usen `Manrope` con pesos ligeros.

## Detalles Técnicos
- Mantener animaciones, imágenes y estructura intactas.
- Reemplazar clases `font-serif` (que apuntaban a Bodoni) por la nueva identidad o asegurar que la variable CSS apunte a Julius Sans One.
- Limpiar importaciones de fuentes no utilizadas si es posible para optimizar carga.

## Verificación
- Ejecutar `npm run build` para asegurar compatibilidad.
- Revisar consistencia en móvil (evitar saltos de línea por tracking excesivo).
