---
name: Hero Scroll Fix
description: Fix for hero text not disappearing correctly on scroll and image blur not resolving fully.
type: feature
---

# Rediseño de Animación Hero y Fix de Scroll

Se corregirá la animación del Hero para que el texto desaparezca de forma fluida y la imagen gane nitidez total, eliminando cualquier glitch visual (espacios en blanco) durante la transición.

## Problemas Detectados
1. **Rango de Animación:** El texto y el blur no están respondiendo con la sensibilidad adecuada al scroll.
2. **Glitch de Scroll:** Aparece un fondo color marfil (ivory) en la parte inferior durante el scroll sticky, rompiendo la inmersión.
3. **Persistencia del Texto:** El texto no se oculta completamente antes de que la imagen sea totalmente nítida.

## Cambios Propuestos
- **Ajuste de sticky:** Asegurar que el contenedor de la imagen ocupe el 100% del viewport y no deje ver el fondo del padre.
- **Sincronización:** Ajustar los rangos de `useTransform` para que la transición sea más rápida y dramática (desaparición total en los primeros px de scroll).
- **Limpieza Visual:** Eliminar márgenes o paddings que puedan estar causando el espacio en blanco inferior.

## Detalles Técnicos
- Modificar `src/routes/index.tsx`.
- Usar un rango más agresivo para `textOpacity` (ej: `[0, 0.2]`).
- Asegurar que el contenedor sticky tenga un `z-index` y fondo adecuados para evitar sangrado de color.

