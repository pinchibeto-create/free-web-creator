# Plan - Estandarización de Sección "Mejorar mi sonrisa"

El usuario desea que el apartado "Mejorar mi sonrisa" dentro de la sección "¿Cómo te podemos ayudar?" coincida visualmente con los otros 5 apartados, manteniendo la consistencia en el diseño y actualizando sus textos.

## Cambios

### Frontend

- **Ajuste de Grid**: Cambiar el ancho del bloque "Mejorar mi sonrisa" de `md:col-span-4` (que ya es el estándar para los demás en escritorio) para asegurar que no tenga estilos "protagonistas" que rompan la uniformidad (como bordes adicionales o tamaños de fuente aumentados).
- **Actualización de Contenido**:
    - Título: "Mejorar mi sonrisa"
    - Subtítulo/Descripción: "Armonía y naturalidad."
    - Lista de servicios:
        1. Diseño de sonrisa
        2. Carillas de resina
        3. Carillas de porcelana / cerámica
        4. Blanqueamiento dental
        5. Rehabilitación estética
- **Estilo Visual**:
    - Eliminar el borde lateral `border-l-4 border-champagne/10` que lo diferenciaba.
    - Unificar el tamaño de fuente del título a `md:text-2xl` (igual que el resto).
    - Quitar el tag "Especialidad" si el usuario busca paridad total.
    - Ajustar el espaciado de la lista para que coincida con el estilo de los otros bloques (una sola columna, tracking-widest, color `text-soft-black/60`).

## Detalles Técnicos
- Archivo a modificar: `src/routes/index.tsx`.
- Secciones afectadas: Componente `Index`, específicamente el bloque bajo el comentario `{/* 2. MEJORAR MI SONRISA (Protagonista) */}`.
