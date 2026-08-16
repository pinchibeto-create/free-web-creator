# Plan: Nueva Sección "La profundidad detrás de una sonrisa"

Sustituir la sección actual "Nuestro manifiesto" por una nueva propuesta institucional que enfatiza la esencia de Nisado Baani (salud, estética natural y atención personalizada), integrando nuevos iconos y una composición editorial de lujo.

## Cambios propuestos

### Gestión de Activos
- Integrar los tres nuevos iconos `.webp` desde `/tmp/nisado_icons` al sistema de assets de Lovable.
- Actualizar `src/data/nisadoAssets.ts` para centralizar el acceso a estos nuevos iconos.

### Estilos y Tipografía
- Asegurar la disponibilidad de la fuente **Julius Sans One** en `src/routes/__root.tsx`.
- Utilizar las tipografías existentes (**Bodoni Moda** para títulos, **Manrope** para párrafos) según las directrices de diseño.

### Implementación de la Sección
- Eliminar la sección `<section ref={manifestoRef} ...>` (líneas 490-512 en `src/routes/index.tsx`).
- Crear la nueva sección "La profundidad detrás de una sonrisa" con:
  - Microtítulo: **NISADO BAANI** (Julius Sans One, tracking amplio).
  - Título principal: **La profundidad detrás de una sonrisa** (Bodoni Moda).
  - Texto principal (dos párrafos, Manrope).
  - Tres pilares (**Salud primero**, **Estética natural**, **Atención personalizada**) con iconos dorados, títulos de marca y descripciones cortas.
- Aplicar diseño editorial:
  - Desktop: Pilares en fila horizontal con líneas verticales divisorias finas (champagne).
  - Mobile: Pilares apilados verticalmente con espaciado amplio.
  - Animación: Aparición suave del texto y entrada escalonada (*stagger*) de los pilares mediante `framer-motion`.

## Detalles técnicos
- Colores: Fondo marfil (`bg-ivory`), texto charcoal (`text-soft-black`), detalles champagne (`text-champagne`).
- Iconos: Tamaño controlado (70-90px en desktop), sin fondos ni sombras pesadas.
- Animación: `whileInView` con transiciones sutiles.

## Pasos
1. Crear los activos CDN para los nuevos iconos y actualizar `src/data/nisadoAssets.ts`.
2. Verificar la carga de fuentes en `src/routes/__root.tsx`.
3. Reemplazar la sección "Nuestro manifiesto" en `src/routes/index.tsx` con la nueva implementación.
4. Validar visualmente en escritorio y móvil.
