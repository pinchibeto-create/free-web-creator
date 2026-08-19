# Plan: Actualizar Logo a Nueva Versión (v5)

El usuario ha solicitado actualizar el logo del sitio por una nueva imagen proporcionada. Se ha creado el asset correspondiente y ahora se integrará en el sistema de activos y en las vistas donde se utiliza.

## Cambios Técnicos

### Datos de Activos
- Modificar `src/data/nisadoAssets.ts` para importar y utilizar el nuevo logo `logo_final_oro_v5.png` a través de su puntero de asset.

### Componentes y Rutas
- Verificar que `src/routes/index.tsx` utilice la referencia actualizada desde `nisadoAssets.branding.logoPng`.

## Pasos de Ejecución

1. **Actualizar `src/data/nisadoAssets.ts`**:
   - Reemplazar el import de `logoPng` por el nuevo asset `logo_final_oro_v5.png.asset.json`.
   - Actualizar el objeto `nisadoAssets.branding.logoPng` para usar `.url` del nuevo asset.

2. **Verificación**:
   - Confirmar en el preview que el logo se visualiza correctamente en el header y el footer.
