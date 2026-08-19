# Plan: Unificar Animación de Escala en la Sección de Diseño Personalizado

El objetivo es asegurar que ambas imágenes en la sección "Diseño que se construye contigo" tengan un comportamiento de escala similar cuando el usuario pasa el mouse sobre ellas. Actualmente, la imagen "sillon" (CONSTRUIMOS CONTIGO) escala a 1.06, mientras que la imagen "conversando" (ESCUCHAMOS) escala solo a 1.03.

## Cambios propuestos

### Frontend
- Modificar el componente `Index` en `src/routes/index.tsx`.
- Ajustar el valor de `scale` en la animación de la imagen "conversando" (línea 459) para que pase de `1.03` a `1.06`, igualando el factor de escala de la imagen "sillon".
- Revisar si el valor de escala cuando no están activas (`0.85` vs `0.82`) debe ser unificado para mayor consistencia visual. Propongo usar `0.85` para ambas cuando no tienen el foco.

## Detalles técnicos
- Archivo afectado: `src/routes/index.tsx`.
- Se mantendrán las transiciones `cubic-bezier` existentes para conservar la fluidez premium.
