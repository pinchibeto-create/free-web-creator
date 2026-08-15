---
title: Integración de Logo en Sección Post-Hero
description: Incorporar el logo de la marca en gran formato en la sección oscura inmediatamente después del Hero para reforzar la identidad visual.
type: feature
---

## Tareas

1. **Registrar nuevo activo de logo**
   - Importar el archivo `a01_logo_transparente_principal.asset.json` en `src/data/nisadoAssets.ts`.
   - Añadirlo a la categoría `branding` como `logoPrincipal`.

2. **Crear sección de Transición con Logo**
   - Insertar una nueva sección entre el `header` (Hero) y la sección de "Manifiesto Editorial" en `src/routes/index.tsx`.
   - La sección tendrá fondo `bg-soft-black` para un contraste máximo.
   - Mostrar el logo en gran tamaño, centrado, con una animación de aparición suave al hacer scroll.
   - El logo debe tener un ancho máximo controlado (ej. `max-w-4xl`) para mantener la elegancia.

3. **Ajustar Navegación de Colores**
   - Asegurar que la transición entre el fondo oscuro de esta nueva sección y el fondo `bg-ivory` del manifiesto sea fluida.

## Detalles Técnicos

- **Componente**: `src/routes/index.tsx`
- **Estilos**: Tailwind CSS con `framer-motion` para la entrada visual (`initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}`).
- **Activo**: `user-uploads://a01_logo_transparente_principal.png` (ya convertido a Lovable Asset).
