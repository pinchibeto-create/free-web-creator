# Plan - Animación Editorial de Logo Post-Hero

Implementar una animación de entrada refinada y sofisticada para el logotipo principal de Nisado Baani en la sección inmediatamente posterior al Hero.

## Cambios Propuestos

### Animación de Logo Principal
- **Objetivo**: Crear una entrada fluida que enfatice la elegancia y la precisión técnica.
- **Estado Inicial**: 
  - `opacity: 0`
  - `filter: blur(8px)`
  - `scale: 0.94`
  - `letter-spacing`: Aumento temporal sutil (para simular expansión).
- **Estado Final**: 
  - `opacity: 1`
  - `filter: blur(0px)`
  - `scale: 1`
  - `letter-spacing`: Original.
- **Especificaciones Técnicas**:
  - **Duración**: ~1200ms.
  - **Easing**: `easeOut` suave.
  - **Activación**: Por scroll (`whileInView`) con ejecución única (`once: true`).
  - **Delay**: El texto secundario ("Luxury Dental") aparecerá con un ligero retraso de 300ms respecto al nombre principal.

### Implementación en `src/routes/index.tsx`
- Dado que el logotipo es una imagen única (`logoPrincipalAsset`), la animación de los dos niveles de texto (principal vs secundario) se simulará mediante un contenedor que anime la imagen completa, o si es posible, mediante una máscara o capas.
- Si el logo es una imagen indivisible, aplicaremos la animación global de blur/escala/opacidad solicitada al contenedor.
- Se ajustará el `viewport` para que la animación comience en el momento exacto en que la sección entra en el campo de visión.

## Detalles Técnicos
- Uso de `framer-motion` para el control de estados y transiciones.
- Clases de Tailwind para el layout y espaciado.
