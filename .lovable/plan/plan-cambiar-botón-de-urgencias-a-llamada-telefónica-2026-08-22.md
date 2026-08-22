# Plan: Cambiar botón de Urgencias a llamada telefónica

El usuario solicita que el botón de la sección de **Urgencias** no abra WhatsApp, sino que realice una llamada telefónica al número **5615308633**.

## Cambios propuestos

### Frontend

- **src/routes/index.tsx**
    - Localizar la sección de urgencias (bloque "Atención ahora").
    - Cambiar el enlace `href` del botón de WhatsApp (`https://wa.me/...`) a un enlace telefónico (`tel:+525615308633`).
    - Mantener el diseño premium y la funcionalidad táctil.

## Detalles técnicos

- Se utilizará el prefijo internacional de México `+52` para asegurar que la llamada funcione correctamente desde cualquier dispositivo.
- El cambio es puramente en el atributo `href` del elemento `<a>` dentro del componente `Index`.

## Verificación

- Se verificará visualmente en el código que el enlace ha sido actualizado.
- Se puede usar Playwright para confirmar que el elemento tiene el atributo `tel:` correcto.
