# Plan de Reorganización Narrativa - Nisado Baani

Reorganizaré la estructura de la página principal para seguir una narrativa lógica de "Diseño -> Artesanía -> Resultado", integrando nuevas secciones editoriales y mejorando la interactividad.

## Cambios propuestos

### 1. Nueva Sección: Tecnología que Planifica (01 / DISEÑO)
*   **Ubicación:** Primera sección después del Hero y el Logo.
*   **Visual:** Composición limpia con imágenes de análisis digital (computadora y tableta).
*   **Contenido:** Foco en la precisión y personalización del diseño de sonrisa.
*   **Estilo:** Minimalista, sin elementos "futuristas" o neón, reforzando la sofisticación técnica.

### 2. Nueva Sección: El Arte detrás de tu Sonrisa (02 / ARTESANÍA)
*   **Ubicación:** Inmediatamente después de Tecnología.
*   **Visual:** Composición editorial tipo "atelier" con imágenes de esculpido, detallado y pulido.
*   **Narrativa:** Tres pasos numerados (01 Esculpir, 02 Detallar, 03 Pulir) con micro-textos poéticos.
*   **Estilo:** Fondo cálido, mucho espacio negativo, estética de joyería/artesanía de precisión.

### 3. Nueva Sección: Resultados que Hablan por sí Mismos (03 / RESULTADO)
*   **Ubicación:** Inmediatamente después de Artesanía.
*   **Interactividad:** Implementación de un componente `BeforeAfterSlider` premium para casos reales.
*   **Estilo:** Línea central champagne, etiquetas discretas y protagonismo absoluto de las imágenes.

### 4. Reorganización de Secciones Existentes
*   Mantener el Hero cinematográfico actual.
*   Mover el "Manifiesto Editorial" y otras secciones para que no interrumpan el flujo 1-2-3 solicitado.
*   Integrar transiciones sutiles (numeración editorial, líneas champagne) entre los nuevos bloques.

## Detalles técnicos
*   Creación del componente `src/components/BeforeAfterSlider.tsx`.
*   Uso de `framer-motion` para revelaciones suaves y transiciones de scroll.
*   Asegurar que todas las imágenes utilizadas provengan de `src/data/nisadoAssets.ts`.
*   Optimización para móviles (especialmente el slider de antes/después).
