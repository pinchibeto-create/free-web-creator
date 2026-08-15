---
name: Actualizar logotipo de Nisado Baani
description: Reemplazar el logotipo actual por la nueva versión dorada en alta resolución subida por el usuario.
type: feature
---

## Tareas
1. **Actualizar puntero de activo:** El nuevo logo `image-3.png` ya ha sido registrado como `src/assets/branding/logo_final_oro_v3.png.asset.json`.
2. **Actualizar constantes de activos:** Modificar `src/data/nisadoAssets.ts` para que `branding.logoPng` y `branding.logoPrincipal` utilicen el nuevo activo `logo_final_oro_v3`.
3. **Verificación visual:** Confirmar que el logo se muestra correctamente en la sección de marca post-hero y en el footer.

## Detalles técnicos
- Archivo de datos: `src/data/nisadoAssets.ts`
- Nuevo activo: `src/assets/branding/logo_final_oro_v3.png.asset.json`
- El cambio se propagará automáticamente a `src/routes/index.tsx` donde se consumen estas constantes.
