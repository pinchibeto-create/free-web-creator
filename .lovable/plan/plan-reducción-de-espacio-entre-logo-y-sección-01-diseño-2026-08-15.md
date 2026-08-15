# Plan: Reducción de espacio entre Logo y Sección 01 / Diseño

Reducir el espacio excesivo entre el logotipo principal (sección post-hero) y la primera sección de contenido ("01 / DISEÑO") para mejorar la fluidez narrativa y visual de la página.

## Cambios propuestos

### Frontend

- **Ajuste de espaciado en `src/routes/index.tsx`**:
    - Localizar la sección que contiene `nisadoAssets.branding.logoPrincipal`.
    - Reducir el padding inferior (`pb-16`) de esta sección.
    - Localizar la sección `id="tecnologia"` (01 / DISEÑO).
    - Reducir el padding superior (`py-48` -> `pt-24 pb-48` o similar) para acercarla al logotipo.

## Verificación

- Inspeccionar visualmente la transición entre el logotipo dorado y la sección de "Tecnología que planifica".
- Asegurar que el espaciado sea elegante pero no excesivamente amplio en dispositivos móviles y de escritorio.
