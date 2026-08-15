---
title: Ajuste de visualización móvil para sección Artesanía
description: Modificación del layout de la sección "02 / ARTESANÍA" para que las tres imágenes se muestren en una cuadrícula similar a la versión de escritorio en dispositivos móviles.
---

# Plan de ajuste visual - Sección Artesanía Móvil

El usuario desea que en la versión móvil de la sección "02 / ARTESANÍA", las tres imágenes se vean de forma similar a la versión de escritorio (en lugar de una lista vertical larga).

## Cambios propuestos

### Componentes
- En `src/routes/index.tsx`, modificar la cuadrícula de la sección `#atelier`.
- Cambiar `grid-cols-1` (implícito) a `grid-cols-2` o `grid-cols-3` en móviles, o ajustar el espaciado y márgenes para que la jerarquía visual se mantenga.
- Dado que son 3 elementos, una opción elegante para móvil es usar `grid-cols-1` pero con menos margen, o `grid-cols-2` con el tercer elemento ocupando todo el ancho, o simplemente habilitar `grid-cols-3` si el espacio lo permite (aunque en móviles muy pequeños puede ser demasiado estrecho). 
- El usuario pide que sea "similar a la versión de escritorio", lo que sugiere una disposición horizontal o de cuadrícula más compacta.

## Pasos técnicos
1. Identificar el contenedor `div` con las clases `grid lg:grid-cols-3 gap-16 lg:gap-8` (línea 225 de `src/routes/index.tsx`).
2. Cambiarlo a `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8` o similar para permitir una mejor distribución en pantallas pequeñas.
3. Ajustar los márgenes superiores responsivos (`lg:mt-24`, `lg:mt-48`) para que no rompan el layout en móviles si se decide usar cuadrícula múltiple.
