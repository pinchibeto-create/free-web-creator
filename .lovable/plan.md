# Plan: Estandarización de Tamaño de Imágenes en Sección de Servicios

El objetivo es unificar el tamaño de todas las imágenes en la sección "¿Cómo te podemos ayudar?" para lograr una cuadrícula visualmente equilibrada y profesional, tanto en móvil (2x3) como en escritorio.

## Cambios sugeridos

### Componentes de Interfaz
- **Estandarización de Relación de Aspecto**: Cambiar las diversas proporciones (`aspect-[16/10]`, `aspect-[16/11]`, `aspect-[21/9]`, `aspect-[16/9]`, `aspect-[4/5]`) a una proporción única de `aspect-square` para todos los contenedores de imagen de los 6 servicios.
- **Ajuste de Grid en Escritorio**:
    - Reorganizar los `col-span` en `md:grid-cols-12` para que todos los elementos tengan un peso visual similar.
    - Se propone usar `md:col-span-4` para cada uno de los 6 servicios, creando dos filas perfectas de 3 elementos cada una.
- **Refinamiento Visual**:
    - Eliminar márgenes asimétricos (como `md:mt-12`) que rompen la alineación de la cuadrícula.
    - Asegurar que `object-cover` esté presente en todas las etiquetas `<img>` para evitar deformaciones al recortar las fotos al nuevo formato cuadrado.

## Detalles técnicos
- Archivo principal a modificar: `src/routes/index.tsx`.
- Mantener las animaciones de `framer-motion` y los efectos de `hover`.
- Los textos y listas de servicios se ajustarán para fluir correctamente bajo los nuevos contenedores cuadrados.
