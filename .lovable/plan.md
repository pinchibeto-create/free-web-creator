# Plan: Ajustes finales de espaciado y refinamiento visual

Ajustar con mayor precisión el espacio entre el logotipo dorado y la primera sección de diseño, y realizar refinamientos menores de espaciado si es necesario para asegurar una transición fluida y editorial.

## Cambios propuestos

### Frontend

- **Refinamiento de espaciado en `src/routes/index.tsx`**:
    - Ajustar la sección del logotipo (`bg-soft-black`) para reducir el padding inferior a un mínimo (`pb-4` o similar).
    - Reducir el padding superior de la sección `#tecnologia` (01 / DISEÑO) de `pt-24` a `pt-12` o `pt-8` para acercar visualmente los elementos sin sacrificar el aire editorial.
    - Asegurar que el contraste entre el fondo oscuro del logo y el fondo claro (`bg-ivory`) de la sección de diseño sea limpio.

## Verificación

- Validar en la vista previa que la transición sea compacta y elegante.
- Comprobar que no haya saltos visuales bruscos al hacer scroll entre estas dos secciones.
