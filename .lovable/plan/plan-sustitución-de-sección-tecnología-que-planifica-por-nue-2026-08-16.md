# Plan: Sustitución de sección "Tecnología que planifica" por "Nuestra esencia"

Implementar una nueva sección institucional "Nuestra esencia" centrada en la interacción humana, sustituyendo la sección técnica actual, siguiendo una estética editorial premium.

## Cambios

### Datos y Activos
- Registrar la nueva fotografía de la doctora con la paciente en `src/data/nisadoAssets.ts`.
- Asegurar que la tipografía `Julius Sans One` esté disponible (ya añadida a `src/routes/__root.tsx`).

### Estilo
- Añadir la clase de fuente `--font-julius: "Julius Sans One", sans-serif;` en `src/styles.css` para su uso en la nueva sección.

### Componentes y Rutas
- Modificar `src/routes/index.tsx`:
    - Eliminar la sección con `id="tecnologia"`.
    - Insertar la nueva sección "Nuestra esencia" en la misma posición.
    - Implementar un diseño de dos columnas (55% foto / 45% texto) para desktop y una columna para móvil.
    - Aplicar tipografías específicas: `Julius Sans One` para microtítulos y títulos, y `Manrope` para el cuerpo.
    - Configurar animaciones suaves de `framer-motion` (entrada progresiva para texto y fade-in con movimiento para la imagen).
    - Actualizar los enlaces de navegación del menú si es necesario (cambiar "Tecnología" por "Nuestra esencia").

## Detalles Técnicos
- **Layout Desktop**: `flex flex-col lg:flex-row` con anchos proporcionales y espaciado generoso.
- **Layout Mobile**: Columna única con orden: Microtítulo > Título > Texto > Imagen.
- **Imagen**: `object-fit: cover` con encuadre que priorice la interacción doctora-paciente.
- **Tipografía**: `tracking-[0.6em]` para el microtítulo en `Julius Sans One`.
