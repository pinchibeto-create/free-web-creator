# Plan: Composición Interactiva "Focus Swap / Spotlight" en Sección Esencia

Este plan describe la implementación de una interacción dinámica y premium para las dos imágenes transparentes en la sección "Diseño que se construye contigo" (#esencia), siguiendo las especificaciones de "Focus Swap / Spotlight".

## Cambios

### Frontend (src/routes/index.tsx)

- **Estado de Interacción**:
  - Implementar un `useState` (ej. `activeImage`) para rastrear cuál de las dos imágenes está en "foco" (`'conversando'` por defecto, `'sillon'` como alternativa).
  
- **Contenedor Visual**:
  - Aplicar `perspective: 1200px` al contenedor de las imágenes.
  - Asegurar que el layout mantenga la proporción 40-45% texto y 55-60% visual.

- **Imágenes Interactivas (Framer Motion)**:
  - **Imagen Principal (`02_doctora_conversando_paciente.webp`)**:
    - **Activa**: `scale(1.03)`, `opacity(1)`, `z-index(20)`, `rotateY(0deg)`, sombra suave.
    - **Inactiva**: `scale(0.8)`, `opacity(0.6)`, `z-index(10)`, `rotateY(4deg)`, desplazamiento lateral.
  - **Imagen Secundaria (`01_doctora_paciente_sillon.webp`)**:
    - **Activa**: `scale(1.05)`, `opacity(1)`, `z-index(20)`, `rotateY(0deg)`, sombra suave.
    - **Inactiva**: `scale(0.85)`, `opacity(0.7)`, `z-index(10)`, `rotateY(-4deg)`, desplazamiento lateral.
  - **Transiciones**: Configurar `transition` con `cubic-bezier(0.22, 1, 0.36, 1)` y duración de 750ms para transformaciones, 650ms para opacidad y filtros.

- **Microtextos Interactivos**:
  - Añadir dos elementos de texto absolutos posicionados cerca de las imágenes.
  - Usar la fuente `Julius Sans One`, mayúsculas, tracking amplio y color champagne.
  - Controlar su visibilidad (`opacity`) basándose en `activeImage`.
  - Texto 1: "ESCUCHAMOS" (para `conversando`).
  - Texto 2: "CONSTRUIMOS CONTIGO" (para `sillon`).

### Diseño y Estilos
- Mantener las imágenes transparentes actuales sin marcos ni tarjetas.
- Aplicar `drop-shadow` discreto a la imagen activa.
- Asegurar que la transición sea directa entre estados sin pasar por un estado neutro intermedio.

## Verificación
- Comprobar la fluidez de la animación en desktop al pasar el mouse entre imágenes.
- Validar que los microtextos aparezcan y desaparezcan correctamente.
- Verificar que la perspectiva 3D sea sutil y no deforme las imágenes.
- Asegurar que no se alteren los textos principales ni otras secciones.
