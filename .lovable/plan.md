# Plan: Corrección de Superposición del Botón de WhatsApp en el Hero Móvil

El objetivo es evitar que el botón flotante de WhatsApp cubra los botones de ubicación (especialmente "Roma Sur") en el Hero cuando se visualiza en dispositivos móviles. Para ello, el botón de WhatsApp se desplazará hacia arriba mientras la sección de ubicaciones sea visible.

## Cambios Propuestos

### Frontend
- **Detección de visibilidad**: Utilizar `useInView` de `framer-motion` o un observador de intersección para detectar cuándo el contenedor de ubicaciones del Hero está en pantalla.
- **Estado dinámico**: Crear un estado que controle la posición del botón de WhatsApp.
- **Ajuste del botón flotante**:
  - En móviles, el botón de WhatsApp tendrá una posición `bottom` dinámica.
  - Posición base: `bottom: 92px`.
  - Posición en el Hero: `bottom: 165px` (promedio del rango 155px-170px solicitado).
  - Mantener `right: 16px` y transición de `0.4s`.
- **Preservar otros elementos**:
  - El botón CTA inferior "Agendar valoración" permanece intacto.
  - Los botones de ubicación del Hero no se modifican.
  - El diseño en escritorio no se altera.

## Detalles Técnicos
- Archivo afectado: `src/routes/index.tsx`.
- Se añadirá una `ref` al contenedor de ubicaciones en el Hero.
- Se utilizará `useInView` con un margen adecuado para activar el desplazamiento del botón de WhatsApp.
- Se aplicará la lógica condicional en el componente de "Acciones Flotantes" al final del archivo.
