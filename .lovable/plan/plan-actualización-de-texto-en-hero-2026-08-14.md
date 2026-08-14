# Plan - Actualización de Texto en Hero

El usuario solicita cambiar el texto del encabezado principal (Hero) para reflejar un mensaje más directo y personal, manteniendo la estética editorial de lujo.

## Cambios propuestos

### Frontend
- Modificar el componente `Index` en `src/routes/index.tsx`.
- Reemplazar el texto actual del `h1`:
  - De: "Diseñamos sonrisas atemporales."
  - A: "Diseñamos sonrisas hechas para ti."
- Ajustar la estructura JSX para que el salto de línea y los estilos (script font, italic) se apliquen correctamente al nuevo texto.

## Detalles técnicos
- Se mantendrá el uso de `framer-motion` para las animaciones de entrada.
- El texto "Diseñamos" permanecerá en la primera línea.
- El texto "sonrisas" mantendrá la fuente script (`font-script`).
- El texto "hechas para ti." se colocará en la siguiente línea con el estilo `italic` y la línea decorativa inferior.

## Verificación
- Previsualizar el sitio para confirmar que el texto se renderiza correctamente con los saltos de línea deseados.
- Asegurar que la tipografía Bodoni Moda y Parisienne/Allura sigan aplicándose correctamente.
