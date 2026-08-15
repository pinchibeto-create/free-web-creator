# Plan - Rediseño de la sección de Artesanía para móviles

El usuario solicita que en la sección "El arte detrás de tu sonrisa" (Atelier), las tres imágenes (Esculpir, Detallar, Pulir) se visualicen simultáneamente en dispositivos móviles, eliminando la disposición vertical actual que obliga a hacer scroll para ver cada una.

## Cambios propuestos

### Frontend

- **Modificar `src/routes/index.tsx`**:
    - Localizar el contenedor de la sección `#atelier` que actualmente utiliza `grid-cols-1 md:grid-cols-3`.
    - Cambiar la configuración del grid para móviles de 1 columna a 3 columnas (`grid-cols-3`).
    - Ajustar los tamaños de texto, paddings y márgenes para que los elementos quepan armoniosamente en una fila horizontal en pantallas pequeñas.
    - Eliminar los márgenes superiores responsivos (`md:mt-24`, `md:mt-48`) que crean un efecto de escalera, ya que en una sola fila móvil esto desalinearía las imágenes excesivamente. Se mantendrá una alineación más compacta para móvil.
    - Reducir el tamaño de las fuentes y el espaciado de los títulos en la versión móvil para evitar solapamientos.

## Detalles técnicos

- Cambiar `grid-cols-1 md:grid-cols-3` por `grid-cols-3`.
- Ajustar `gap-16 md:gap-8` a un gap más pequeño en móviles, por ejemplo `gap-2 md:gap-8`.
- Modificar las clases de los textos (ej. `text-2xl`) para que sean más pequeñas en móviles (`text-xs md:text-2xl`).
- Asegurar que el aspecto ratio de las imágenes (`aspect-[4/5]`) se mantenga para conservar la estética editorial.
