---
title: Conservar Colores Originales del Logo
description: Eliminar filtros CSS que convierten el logo a blanco para mostrar sus colores originales (dorado/champagne) en todas las secciones.
type: design
---

## Tareas

1. **Restaurar colores en la Sección de Marca Post-Hero**
   - En `src/routes/index.tsx`, eliminar las clases `brightness-0 invert` de la imagen del logo principal.

2. **Restaurar colores en el Footer**
   - En `src/routes/index.tsx`, eliminar las clases `brightness-0 invert` de la imagen del logo en el footer para mantener la consistencia de marca.

3. **Verificación Visual**
   - Asegurar que el logo sea legible sobre el fondo `bg-soft-black`. Los tonos dorados del logo original deberían destacar bien sobre el fondo oscuro.
