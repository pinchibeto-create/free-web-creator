# Plan - Ajuste de Interlineado en Hero

El usuario desea que el espacio entre las líneas del encabezado principal (Hero) sea uniforme. Actualmente, la combinación de fuentes Serif y Script con etiquetas `<br />` puede generar un interlineado inconsistente debido a las métricas verticales de cada tipografía.

## Cambios propuestos

### Frontend
- Modificar el componente `Index` en `src/routes/index.tsx`.
- Reestructurar el `h1` del Hero:
  - Eliminar las etiquetas `<br />`.
  - Convertir cada línea en un elemento con bloque (`block`) o usar un contenedor `flex flex-col`.
  - Aplicar un `leading` (interlineado) consistente a cada segmento.
  - Asegurar que la tipografía `font-script` no añada espacio extra inesperado mediante el ajuste de su `leading` o margen.

## Detalles técnicos
- Utilizar una clase de interlineado explícita (como `leading-[0.8]`, `leading-tight` o una personalizada) en cada `span` para garantizar que la distancia entre líneas sea idéntica.
- Ajustar ligeramente el margen superior de la última línea si los trazos descendentes de la fuente script ("sonrisas") interfieren visualmente con la línea inferior.

## Verificación
- Comprobar visualmente en el preview que la distancia entre "Diseñamos" y "sonrisas" es igual a la distancia entre "sonrisas" y "hechas para ti.".
- Verificar que el diseño sigue siendo responsivo en dispositivos móviles.
