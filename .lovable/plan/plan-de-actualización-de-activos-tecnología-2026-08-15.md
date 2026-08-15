---
title: Rediseño de sección Tecnología
description: Actualización de activos visuales en el apartado "Tecnología que planifica" con nuevas imágenes de planificación digital.
---

# Plan de actualización de activos - Tecnología

El usuario ha solicitado cambiar las imágenes de la sección "Tecnología que planifica" utilizando archivos contenidos en un ZIP. Se han identificado dos imágenes principales que muestran software de planificación dental en laptops.

## Acciones realizadas
- Descompresión de `tecnologia.zip` en `/tmp/tecnologia_assets/`.
- Identificación de `laptop_tech_1.png` y `laptop_tech_2.png`.
- Registro de los archivos como Lovable Assets en `src/assets/technology/`.

## Cambios propuestos

### Datos
- Actualizar `src/data/nisadoAssets.ts` para importar los nuevos activos `laptop_tech_1.asset.json` y `laptop_tech_2.asset.json`.
- Modificar el objeto `nisadoAssets.technology` y `nisadoAssets.references` para usar estas nuevas imágenes en lugar de las anteriores en la sección de tecnología.

### Componentes
- Ajustar `src/routes/index.tsx` para asegurar que las referencias a `nisadoAssets.technology.computadora` y `nisadoAssets.references.tableta` (o las nuevas claves) reflejen los cambios.

## Pasos técnicos
1. Modificar `src/data/nisadoAssets.ts` para importar y exportar los nuevos activos.
2. Actualizar las referencias de imagen en la sección `#tecnologia` de `src/routes/index.tsx`.
