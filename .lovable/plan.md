# Plan de actualización de números de contacto

Este plan actualiza los números de WhatsApp en el sitio para dirigir a los usuarios a las líneas de contacto correctas según la acción solicitada.

## Cambios solicitados
1.  **Botones "Agendar valoración":** Cambiar el número al **+52 1 56 1530 8630**.
2.  **Botón flotante de WhatsApp (globo):** Cambiar el número al **+52 1 55 4213 9276**.

## Detalles técnicos
- Se actualizarán las URLs de `wa.me` en `src/routes/index.tsx`.
- Se verificará el JSON-LD en los metadatos SEO para asegurar consistencia (aunque el usuario no lo pidió explícitamente, es buena práctica si el número de contacto principal cambia). *Nota: El usuario especificó números distintos para cada tipo de botón, por lo que mantendré los metadatos si no hay una instrucción clara sobre el número "oficial" del negocio.*

### Archivos a modificar
- `src/routes/index.tsx`:
    - Línea 318: Botón en el Hero.
    - Línea 1055: Botón "Agendar valoración" flotante.
    - Línea 1033: Botón flotante de WhatsApp (globo).

## Pasos de verificación
1.  Inspeccionar los enlaces en el navegador para confirmar las nuevas URLs.
2.  Validar que los clics abran WhatsApp con los números correctos.
