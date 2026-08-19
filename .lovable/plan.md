# Plan - Actualización de enlace Roma Sur

Actualizar de forma centralizada todos los accesos a la ubicación de **Roma Sur** con el nuevo enlace verificado de Google Maps.

## Cambios

### Frontend
- Actualizar el enlace de **Roma Sur** en la sección Hero (`src/routes/index.tsx`).
- Actualizar el enlace en el pie de página (Footer) dentro de la lista de ubicaciones.
- Asegurar que todos los enlaces incluyan `target="_blank"` y `rel="noopener noreferrer"`.

### SEO y Metadatos
- Actualizar el script `LD+JSON` en el componente `head` de la ruta principal para reflejar la dirección exacta y asegurar coherencia con los botones.

## Detalles Técnicos
- Nuevo enlace: `https://www.google.com/maps/search/?api=1&query=Tlaxcala+84%2C+Roma+Sur%2C+Cuauht%C3%A9moc%2C+06760+Ciudad+de+M%C3%A9xico%2C+CDMX`
- Se mantendrán intactos los enlaces de Polanco y Del Valle.
- No se realizarán cambios estéticos ni estructurales.

## Verificación
- Abrir la vista previa y hacer clic en el botón de Roma Sur del Hero.
- Verificar el enlace de "Ver ubicación" en el Footer.
- Validar que ambos abran la dirección "Tlaxcala 84" en una pestaña nueva.
