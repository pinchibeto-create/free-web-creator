# Plan: Corregir Interacción Focus Swap en Sección "Diseño que se construye contigo"

El objetivo es unificar el comportamiento visual y la interactividad de las dos imágenes en la sección `#esencia`, asegurando que ambas alcancen el mismo protagonismo al activarse y que el área de interacción sea equitativa y funcional tanto en escritorio como en móvil.

## Acciones

### 1. Unificación de Lógica de Estados
- Modificar `src/routes/index.tsx` para asegurar que el componente utilice un sistema de estados simétrico para las animaciones.
- Estandarizar las propiedades de `motion.div` para ambas imágenes:
  - **Estado Activo:** `scale: 1.08`, `rotateY: 0`, `opacity: 1`, `z-index: 20`, filtros de brillo/contraste optimizados y sombra suave premium.
  - **Estado Inactivo:** `scale: 0.82`, `rotateY: +/- 5`, `opacity: 0.65`, `z-index: 10`.
- Asegurar que la transición sea: `transform 750ms cubic-bezier(0.22, 1, 0.36, 1)`, `opacity 650ms ease`, `filter 650ms ease`.

### 2. Mejora de Interactividad y Dimensiones
- Revisar y ajustar `width`, `max-width` y `x` (posicionamiento horizontal) para que las imágenes no se bloqueen entre sí.
- Verificar que el contenedor `min-h-[500px] md:min-h-[700px]` sea suficiente para albergar la escala 1.08 sin cortes.
- Garantizar que los eventos `onMouseEnter`, `onClick` y `onTouchStart` cubran toda el área visual de cada imagen.
- Ajustar `transform-origin` si es necesario para evitar desplazamientos bruscos hacia los bordes del contenedor.

### 3. Validación y Comparativa
- Realizar pruebas visuales comparando la imagen izquierda activa vs la imagen derecha activa.
- Validar el comportamiento en dispositivos móviles mediante la emulación de eventos táctiles.
- Confirmar que los microtextos ("ESCUCHAMOS" / "CONSTRUIMOS CONTIGO") cambien en perfecta sincronía con la imagen protagonista.

## Detalles Técnicos
- **Framework:** React con TanStack Router.
- **Animación:** Framer Motion (`AnimatePresence`, `motion.div`).
- **Assets:** `nisadoAssets.customDesign.sillon` y `nisadoAssets.customDesign.conversando`.
- **Z-Index:** Gestión dinámica para que la imagen activa siempre esté por encima de la otra y de los microtextos si fuera necesario.
