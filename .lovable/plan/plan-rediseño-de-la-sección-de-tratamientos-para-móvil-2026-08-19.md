# Plan: Rediseño de la sección de tratamientos para móvil

El objetivo es modificar la sección "¿Cómo te podemos ayudar?" para que las seis soluciones se muestren en una cuadrícula de 2 columnas por 3 filas en dispositivos móviles, manteniendo el diseño actual en escritorio.

## Cambios propuestos

### 1. Modificar `src/routes/index.tsx`
- Ajustar las clases de Tailwind en el contenedor del grid de la sección `#tratamientos`.
- Cambiar `grid-cols-1` por `grid-cols-2` en móvil.
- Asegurar que los elementos que ocupan varias columnas en escritorio (`md:col-span-X`) se comporten correctamente en la nueva cuadrícula móvil de 2 columnas.
- Ajustar tamaños de texto y espaciados para que la información sea legible en el nuevo formato más compacto de 2 columnas por fila.

## Detalles técnicos
- Se utilizará `grid-cols-2` para el estado inicial (móvil).
- Se mantendrá `md:grid-cols-12` para escritorio.
- Los elementos individuales tendrán `col-span-1` por defecto en móvil y sus respectivos `md:col-span-X` para escritorio.
- Es posible que necesitemos ajustar el `aspect-ratio` de las imágenes en móvil para que encajen mejor en el formato de 2 columnas.

## Verificación
- Abrir la vista previa y redimensionar a tamaño móvil (aprox. 375px - 414px).
- Confirmar que se ven 3 filas de 2 elementos cada una.
- Verificar que la legibilidad de los textos (títulos y listas) sea adecuada.
