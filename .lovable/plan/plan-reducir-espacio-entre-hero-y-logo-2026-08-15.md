# Plan: Reducir Espacio entre Hero y Logo

El usuario solicita reducir el espacio visual entre la sección **Hero** (que tiene un efecto sticky de revelado) y la sección que contiene el **Logo Principal** de la marca en fondo oscuro.

## Cambios Propuestos

### Componente Principal
- **Archivo**: `src/routes/index.tsx`
- **Acción**: Ajustar la estructura de espaciado entre el `header` (Hero) y la `section` (Logo).
- **Detalle**: 
    - El Hero actualmente tiene una altura de `200vh` para permitir el scroll de revelado.
    - La sección del Logo tiene un padding vertical de `py-48` (12rem / 192px).
    - Reduciré el padding superior de la sección del logo y ajustaré la transición para que el logo aparezca más cerca del final del scroll del hero.

## Pasos de Ejecución
1. Modificar `src/routes/index.tsx` para reducir `py-48` a `py-24` (o similar) en la sección del logo.
2. Ajustar el margen o altura del contenedor del Hero si es necesario para que el logo "entre" antes en la vista del usuario.
3. Verificar visualmente el resultado.
