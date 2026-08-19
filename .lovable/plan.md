# Plan: Sustituir Logo Post-Hero

El usuario ha solicitado sustituir la imagen del logo que aparece justo después de la sección Hero por una nueva imagen proporcionada. Se integrará esta imagen como un asset y se actualizará la referencia en el sistema de activos.

## Cambios Técnicos

### Datos de Activos
- Modificar `src/data/nisadoAssets.ts` para importar y utilizar el nuevo logo `logo_principal_v2.png` a través de su puntero de asset.
- Actualizar `nisadoAssets.branding.logoPrincipal` para apuntar a la URL del nuevo asset.

### Componentes y Rutas
- El componente `src/routes/index.tsx` ya utiliza `nisadoAssets.branding.logoPrincipal`, por lo que el cambio en el archivo de datos debería reflejarse automáticamente.

## Pasos de Ejecución

1. **Actualizar `src/data/nisadoAssets.ts`**:
   - Importar el nuevo asset `logo_principal_v2.png.asset.json`.
   - Reemplazar la referencia de `logoPrincipal` en el objeto exportado.

2. **Verificación**:
   - Confirmar en el preview que la sección post-hero muestra el nuevo logo con la animación editorial existente.
