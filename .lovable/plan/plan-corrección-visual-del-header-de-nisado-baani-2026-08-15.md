# Plan - Corrección Visual del Header de Nisado Baani

Eliminar la inversión de colores y los filtros dinámicos del header para mantener los colores reales del logotipo y el menú desde la carga inicial y durante toda la navegación.

## Cambios Propuestos

### Header y Logotipo
- **Eliminar inversión de colores**: Quitar la clase `invert` y cualquier lógica de inversión del logotipo (`img`).
- **Fondo del Header**: Implementar un fondo translúcido con `backdrop-blur` desde el inicio para garantizar el contraste sobre el Hero sin alterar el color del logo.
- **Transición de Fondo**: Ajustar la transición por scroll para que solo afecte la opacidad del fondo, el desenfoque y sombras sutiles, manteniendo el logo intacto.

### Menú Hamburguesa
- **Color Constante**: Cambiar la lógica de color de las líneas del menú hamburguesa para que usen un color fijo que sea consistente con la identidad visual (e.g., `bg-soft-black` o el color real de la marca) en lugar de alternar entre `bg-ivory` y `bg-soft-black`.

### Archivos a Modificar
- `src/routes/index.tsx`: 
    - Línea 59-63: Ajustar clases del `nav` para tener un fondo ligero desde el inicio.
    - Línea 69: Eliminar `invert` y `opacity-80` dinámico del logo.
    - Líneas 80, 83, 86: Fijar el color del menú hamburguesa.

## Especificaciones Técnicas
- **Blur**: `backdrop-blur-[14px]` o similar.
- **Fondo Inicial**: `bg-ivory/20` o similar (muy ligero).
- **Fondo Scroll**: `bg-ivory/80` con sombra sutil.
- **Logo**: Mantener `nisadoAssets.branding.logoPng`.
