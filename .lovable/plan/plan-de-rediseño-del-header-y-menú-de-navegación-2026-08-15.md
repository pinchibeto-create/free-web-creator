# Plan de Rediseño del Header y Menú de Navegación

Este plan detalla los pasos para transformar el header actual en una barra minimalista y premium con un menú lateral elegante.

## Cambios en el Header

- **Estructura**: Logo a la izquierda y menú hamburguesa (tres líneas) a la derecha. Se eliminarán los botones y enlaces actuales.
- **Comportamiento de Scroll**:
    - `sticky top-0` para permanecer visible.
    - Estado inicial: Transparente.
    - Estado en scroll: Fondo translúcido con efecto `backdrop-blur` (14px), borde inferior sutil y sombra mínima (estilo "frosted glass").
- **Dimensiones**: Altura de 70-85px en desktop, ligeramente menor en móvil.

## Menú Hamburguesa y Panel Lateral

- **Icono**: Tres líneas que se transforman en una **X** al abrirse mediante una animación suave de 200-300ms.
- **Panel**: 
    - Desktop: Ocupa el 40-50% de la pantalla desde la derecha.
    - Móvil: Ocupa toda la pantalla.
    - Diseño: Fondo limpio (Ivory/Soft Black según la sección), tipografía grande (Bodoni Moda), espaciado generoso.
- **Navegación**: Enlaces con `smooth scroll` a las secciones:
    - Inicio
    - Tecnología que planifica
    - El arte detrás de tu sonrisa
    - Resultados
    - Ubicaciones
    - Agendar valoración

## Detalles Técnicos

- **Archivo**: `src/routes/index.tsx`
- **Librerías**: `framer-motion` para animaciones y gestión del estado del menú.
- **Estilos**: Tailwind CSS para el efecto de vidrio y posicionamiento. Se usará `useScroll` para detectar el estado del header.
- **Compensación**: Se asegurará que los anclajes de las secciones consideren la altura del header (`scroll-margin-top`).

## Pasos de Ejecución

1. Crear un estado local `isMenuOpen` y `isScrolled` en el componente `Index`.
2. Implementar el listener de scroll para actualizar `isScrolled`.
3. Reemplazar la barra de navegación actual por el nuevo diseño minimalista.
4. Crear el componente del menú lateral (Overlay) con animaciones de `framer-motion`.
5. Añadir `scroll-margin-top` a las secciones principales para evitar que el header cubra los títulos.

## Verificación

- El header debe cambiar de transparente a "vidrio" al hacer scroll.
- El menú hamburguesa debe abrir el panel lateral correctamente.
- Las animaciones del icono (hamburguesa a X) y del panel deben ser fluidas.
- La navegación por anclas debe dejar los títulos visibles debajo del header.
- Diseño responsivo impecable en móvil.
