---
name: Sección Diseño que se construye contigo
description: Sustitución de la sección "Donde la odontología se encuentra con la belleza natural" por una composición editorial con imágenes recortadas.
type: feature
---

# Plan de implementación: Nueva Sección "Diseño que se construye contigo"

Sustituir la sección actual de "Nuestra Esencia" por una nueva composición editorial dinámica que utiliza las imágenes recortadas transparentes (`.webp`) proporcionadas, enfocándose en la personalización y el diseño a mano alzada.

## 1. Registro de Activos
- Actualizar `src/data/nisadoAssets.ts` para incluir los nuevos punteros de imagen en una nueva categoría `customDesign`.
- Importar los archivos `.asset.json` generados.

## 2. Modificación de la Interfaz
Actualizar `src/routes/index.tsx` para:
- Sustituir el contenido de la sección `#esencia` (actualmente "Donde la odontología se encuentra con la belleza natural").
- Implementar un diseño de dos columnas (Editorial Desktop):
    - **Izquierda (Texto, 40-45%):** Microtítulo "DISEÑO PERSONALIZADO", Título principal "Diseño que se construye contigo" y el párrafo descriptivo.
    - **Derecha (Visual):** Composición orgánica de las dos imágenes transparentes superpuestas. La imagen `02_doctora_conversando_paciente.webp` será la principal y `01_doctora_paciente_sillon.webp` estará desplazada/detrás para dar profundidad.
- Aplicar un fondo marfil/crema con una mancha orgánica champagne muy tenue.
- Configurar animaciones de scroll con `framer-motion`:
    - Staggered entrance: Microtítulo/Título -> Texto -> Imagen 1 -> Imagen 2.
    - Efectos: fade, translateY suave.

## 3. Estilización y Tipografía
- Usar `Julius Sans One` para microtítulos y `Bodoni Moda` (o la fuente serif principal del proyecto) para el título principal, manteniendo la consistencia con el sistema de diseño actual.
- Aplicar sombras suaves a las imágenes para dar profundidad sin efecto "sticker".

## Detalles Técnicos
- **Zonas:** `md:grid-cols-12` con el texto ocupando `md:col-span-5` y lo visual `md:col-span-7`.
- **Imágenes:** Posicionamiento relativo/absoluto dentro del contenedor visual para lograr la superposición orgánica.
