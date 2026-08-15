---
name: Reducir espacio entre Hero y Logo
description: Ajustar la altura del scroll del Hero y los paddings de la sección del logotipo para eliminar el espacio excesivo.
type: design
---

## Tareas
1. **Ajustar altura del Hero:** Reducir la altura del contenedor `<header>` en `src/routes/index.tsx` de `130vh` a `110vh` para acortar el recorrido del scroll.
2. **Reducir padding de la sección del Logo:** En `src/routes/index.tsx`, cambiar el padding de la sección `bg-soft-black` que contiene el logo de `pt-4 pb-32` a `pt-2 pb-16`.
3. **Optimizar márgenes del Logo:** Reducir la opacidad y posiblemente ajustar el tamaño máximo si es necesario para mantener la elegancia.

## Detalles técnicos
- Archivo a modificar: `src/routes/index.tsx`
- Línea 52: Cambiar `h-[130vh]` a `h-[110vh]`.
- Línea 128: Cambiar `pt-4 pb-32` a `pt-2 pb-16`.
- Esto hará que la transición entre el efecto de revelado del hero y la presencia del logo sea más inmediata y fluida.
