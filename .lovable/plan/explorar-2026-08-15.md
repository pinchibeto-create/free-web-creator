---
title: Rediseño de Sección de Resultados Nisado Baani
description: Reemplazo de imágenes de resultados por una galería deslizable (slider) con efecto de color en hover/focus.
---

## Explorar
- Se han identificado los activos actuales en `src/data/nisadoAssets.ts`.
- Se han registrado las 5 nuevas imágenes de resultados subidas por el usuario en `src/assets/results/`.
- La sección de resultados actual en `src/routes/index.tsx` utiliza `BeforeAfterSlider` y una imagen estática.

## Objetivos
- Reemplazar las fotos de resultados actuales por las nuevas 5 imágenes.
- Presentar los resultados en un slider (carrusel) horizontal.
- Aplicar un efecto visual: las imágenes se ven grises por defecto y vuelven a color al interactuar (hover/touch).
- Mantener la estética editorial de lujo de Nisado Baani.

## Cambios propuestos

### Datos y Activos
- Actualizar `src/data/nisadoAssets.ts` para incluir las nuevas imágenes de resultados.

### Componentes
- Crear `src/components/ResultsSlider.tsx` utilizando `framer-motion` para el carrusel y los efectos de color.
- El componente manejará el estado de "grises a color" mediante CSS/Framer Motion.

### Rutas
- Modificar `src/routes/index.tsx` para integrar el nuevo `ResultsSlider` en la sección `#resultados`.
- Ajustar el layout de la sección para dar prioridad al nuevo slider.

## Detalles Técnicos
- **Efecto de color**: `filter: grayscale(100%)` con transición a `filter: grayscale(0%)`.
- **Carrusel**: Implementación fluida con `framer-motion` (drag) o un slider simple centrado.
- **Responsividad**: Asegurar que el slider funcione perfectamente en dispositivos móviles (touch).

## Validación
- Verificar visualmente que las 5 imágenes carguen correctamente.
- Probar el efecto de escala de grises a color en escritorio y móvil.
- Validar que el desplazamiento del slider sea suave.
