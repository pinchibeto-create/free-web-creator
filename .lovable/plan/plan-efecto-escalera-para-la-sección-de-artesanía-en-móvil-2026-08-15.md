# Plan - Efecto escalera para la sección de Artesanía en móvil

El usuario desea que las tres imágenes de la sección "Atelier" (Artesanía) mantengan su disposición en fila (3 columnas) en móvil, pero con un efecto de "escalera" donde cada imagen esté un poco más abajo que la anterior.

## Cambios propuestos

### Estilizado (Tailwind CSS)

- **Modificar `src/routes/index.tsx`**:
    - Aplicar clases de margen superior (`mt-X`) o traslación (`translate-y-X`) de forma progresiva a los tres contenedores de las imágenes en la sección `#atelier`.
    - La primera imagen (Esculpir) se mantiene en su posición o con un margen mínimo.
    - La segunda imagen (Detallar) tendrá un desplazamiento vertical moderado en móvil.
    - La tercera imagen (Pulir) tendrá un desplazamiento vertical mayor en móvil.
    - Asegurar que estos desplazamientos no interfieran negativamente con los márgenes ya existentes para escritorio (`md:mt-24` y `md:mt-48`).

## Detalles técnicos

- Añadir clases de utilidad de Tailwind para el desplazamiento en móvil:
    - Primer elemento: `mt-0` (por defecto).
    - Segundo elemento: `mt-8 md:mt-24`.
    - Tercer elemento: `mt-16 md:mt-48`.
- Alternativamente, usar `translate-y` si el margen afecta demasiado al flujo del documento, aunque `mt` es más común para este tipo de grids editoriales.
- Se usará `mt-8` y `mt-16` como base para el escalonado en móvil.
