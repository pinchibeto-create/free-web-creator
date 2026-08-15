# Plan: Actualización de Identidad Visual del Logo

El usuario desea actualizar el logotipo de la marca por uno nuevo proporcionado en formato PNG (oro sobre fondo negro). Esta imagen ya ha sido procesada como un activo de Lovable.

## Acciones

1.  **Registrar el nuevo activo**:
    *   Registrar la imagen `user-uploads://image-2.png` como un activo de Lovable en `src/assets/branding/logo_final_oro_v2.png.asset.json`.
2.  **Actualizar la referencia de datos**:
    *   Modificar `src/data/nisadoAssets.ts` para que las claves `branding.logoPng` y `branding.logoPrincipal` apunten al nuevo activo registrado.
3.  **Verificación**:
    *   Confirmar que el logo se visualiza correctamente en la sección de marca post-hero y en el footer de `src/routes/index.tsx`.

## Detalles técnicos

*   El archivo `src/data/nisadoAssets.ts` centraliza las rutas de las imágenes. Al cambiar la importación y la asignación en este archivo, el cambio se propagará a todos los componentes que lo utilizan.
*   Se utilizará la herramienta `lovable-assets` para crear el puntero JSON.
