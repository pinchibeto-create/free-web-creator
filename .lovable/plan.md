# Plan - Actualización de Imágenes en Resultados Reales

Sustituir las 5 imágenes de la sección "Resultados reales en diseño de sonrisa" por las nuevas versiones optimizadas en formato `.webp` proporcionadas en el ZIP.

## Cambios

### Gestión de Activos (Assets)
- Extraer las 5 imágenes del ZIP a `/tmp/nisado_results/`.
- Mover las imágenes a `src/assets/results/` (nueva carpeta para organización).
- Mantener los nombres de archivo originales:
  - `01_resultado_sonrisa.webp`
  - `02_antes_despues_ortodoncia.webp`
  - `03_antes_despues_sonrisa.webp`
  - `04_antes_despues_sonrisa_masculina.webp`
  - `05_antes_despues_estetica.webp`

### Configuración de Datos (`src/data/nisadoAssets.ts`)
- Importar las nuevas imágenes utilizando la sintaxis de Vite: `import resX from "@/assets/results/file.webp"`.
- Actualizar el array `results` en el objeto `nisadoAssets` con el orden específico solicitado por el usuario:
  1. `01_resultado_sonrisa.webp`
  2. `03_antes_despues_sonrisa.webp`
  3. `05_antes_despues_estetica.webp`
  4. `02_antes_despues_ortodoncia.webp`
  5. `04_antes_despues_sonrisa_masculina.webp`

### Interfaz (`src/components/ResultsSlider.tsx` / `src/routes/index.tsx`)
- Dado que `ResultsSlider` ya recibe `nisadoAssets.results` como prop, el cambio en el archivo de datos propagará las nuevas imágenes automáticamente.
- Verificar que el `alt` text se genere correctamente.
- Asegurar el uso de `object-fit: cover` o `contain` según sea necesario para evitar recortes en la sonrisa.

## Detalles Técnicos
- Formato: `.webp`.
- Método de importación: Vite imports (ESM).
- Validación de build: Ejecutar `npm run build` para confirmar que los activos se resuelven correctamente.

## Verificación
- Confirmar visualmente en el carrusel de resultados que las nuevas fotos aparecen en el orden correcto.
- Verificar en móvil que el antes/después sea visible y no esté excesivamente recortado.
- Validar que no existan errores de consola por rutas de imagen rotas.
