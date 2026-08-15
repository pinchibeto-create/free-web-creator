# Plan - Reducir espacio entre Logo y Hero

El usuario considera que hay demasiado espacio entre el logo principal (sección post-hero) y el hero. Actualmente, la sección del logo tiene un padding superior (`pt-12`) y el hero tiene una altura de scroll de `160vh`.

## Cambios propuestos

1. **Reducir padding superior de la sección del logo**: Cambiar `pt-12` por `pt-0` o un valor menor.
2. **Ajustar el final del scroll del hero**: Modificar el `offset` de `useScroll` o la altura del contenedor `header` para que la transición sea más compacta.

## Pasos técnicos

### src/routes/index.tsx
- Cambiar la clase `pt-12` a `pt-4` en la sección de marca post-hero (línea 127).
- Ajustar el `offset` de `useScroll` para el hero de `["start start", "center center"]` a algo más temprano si es necesario, o reducir ligeramente la altura del `header` de `160vh` a `140vh`.

## Verificación
- Comprobar visualmente en el preview que el logo aparezca más rápido tras iniciar el scroll.
