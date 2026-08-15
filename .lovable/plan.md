# Plan: Rediseño Horizontal de Ubicaciones en el Hero

Cambiar la disposición de los botones de selección de ubicación en la sección Hero para que se muestren horizontalmente en lugar de verticalmente, manteniendo la estética de lujo.

## Cambios propuestos

### Frontend
- Modificar la clase del contenedor de botones de ubicación en `src/routes/index.tsx`.
- Cambiar `grid-cols-1 sm:grid-cols-3` por una disposición que fuerce la horizontalidad (usando `flex-row` o manteniendo `grid-cols-3` sin el cambio responsivo).
- Ajustar los paddings y tamaños de fuente si es necesario para asegurar que los tres nombres quepan cómodamente en pantallas pequeñas.

## Detalles técnicos
- Archivo a modificar: `src/routes/index.tsx`
- Línea aproximada: 210
- Clase actual: `grid grid-cols-1 sm:grid-cols-3 gap-3 w-full`
- Nueva clase sugerida: `flex flex-row gap-2 w-full justify-center flex-wrap sm:flex-nowrap` o simplemente `grid grid-cols-3 gap-2 w-full` dependiendo del espacio.
