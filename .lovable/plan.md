# Plan de Rediseño del Footer y Eliminación de Newsletter

Este plan detalla los pasos para eliminar la sección de suscripción y añadir la firma del desarrollador en el footer de la página de Nisado Baani.

## Cambios Realizados

### Frontend

- **Eliminación de Newsletter**: Se retirará el bloque completo de la sección de Newsletter en el footer, manteniendo la estructura de grid del sitio.
- **Añadir Firma**: Se agregará la leyenda "creado por Mi Vitrina Digital" al final de la página, junto a los derechos reservados.

## Detalles Técnicos

- **Archivo**: `src/routes/index.tsx`
- **Componente**: `Index`
- **Cambios en el código**:
  - Eliminar el div que contiene el título "Newsletter" y su formulario (líneas 384-393 aproximadamente).
  - Modificar el contenedor final del footer para incluir el nuevo texto de firma con el estilo tipográfico del sitio (fuente Manrope/Inter, tracking editorial).

## Verificación

- Inspección visual de la página para confirmar que la sección de Newsletter ya no existe.
- Confirmar que la leyenda "creado por Mi Vitrina Digital" aparece correctamente alineada en la parte inferior del sitio.
