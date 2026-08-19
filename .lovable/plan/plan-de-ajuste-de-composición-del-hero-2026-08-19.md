# Plan de Ajuste de Composición del Hero

Ajustar la posición de los botones del Hero para que se ubiquen inmediatamente después del título, mejorando la jerarquía visual y facilitando la interacción.

## Cambios sugeridos

### Frontend
- Modificar `src/routes/index.tsx` para reducir el espaciado superior del contenedor de botones en la sección Hero.
- Ajustar las clases de Tailwind CSS en el componente `motion.div` que envuelve los botones (`Agendar valoración` y selectores de ubicación).
- Cambiar `pt-12` por un valor menor (ej. `pt-6` o `pt-4`) para acercar los botones al título "Diseñamos sonrisas para ti".

## Detalles técnicos
- El cambio se realizará en el componente `Index` dentro de `src/routes/index.tsx`.
- Se conservarán todas las animaciones de Framer Motion existentes.
- Se mantendrá la responsividad del diseño en dispositivos móviles y escritorio.
