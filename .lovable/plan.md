# Plan: Rediseño Editorial Nisado Baani — Luxury Dental

Implementar un rediseño completo inspirado en la estética de "Maison BE Dental Studio", priorizando el ritmo visual editorial, espacios en blanco y una narrativa boutique.

## Diseño Visual
- **Paleta**: Ivory (#F7F2EA), Warm White (#FCFAF7), Champagne (#C6A15B), Charcoal (#22201E), Soft Black (#151515).
- **Tipografía**:
  - `font-serif`: Bodoni Moda (Títulos).
  - `font-script`: Parisienne/Allura (Acentos).
  - `font-sans`: Manrope (Cuerpo).
- **Elementos**: Arco de sonrisa, líneas de diseño sutiles, monograma NB de fondo.

## Estructura de Secciones (Narrativa)
1.  **Hero Editorial**:
    - Grid de 12 columnas.
    - H1 asimétrico a la izquierda con acentos en script.
    - Bloque de imagen arquitectónico a la derecha.
    - Botones de ubicación premium (Polanco, Del Valle, Roma Sur) con micro-interacciones.
2.  **Manifiesto (Deseo)**:
    - Bloque de texto editorial minimalista.
    - Monograma "NB" en fondo con baja opacidad.
3.  **El Método (Diseño)**:
    - Sección "De boceto a sonrisa" con revelado horizontal y numeración editorial.
4.  **Ingeniería (Tecnología)**:
    - Fondo Charcoal/Soft Black.
    - Uso de assets `blueprint` y `dsdModern`.
5.  **Atelier (Artesanía)**:
    - Grid asimétrico con imágenes de `pulido`, `escultura` y `detallado`.
    - Enfoque en el detalle manual y artístico.
6.  **Galería de Resultados**:
    - Comparativas de casos clínicos reales con estética de revista de moda.
7.  **Especialista**:
    - Sección Dra. Nisado Baani con tipografía de lujo.
8.  **Footer Boutique**:
    - Información de sedes y contacto con jerarquía clara.

## Tareas Técnicas
- Actualizar `src/routes/index.tsx` con el nuevo layout editorial.
- Asegurar que todas las imágenes usen los assets correctos desde `src/data/nisadoAssets.ts`.
- Implementar animaciones de `framer-motion` para el ritmo visual (fade-ins, parallax sutil).
