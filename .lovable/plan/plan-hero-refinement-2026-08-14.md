---
name: Hero Refinement
description: Update Hero image to the newly uploaded JPG and ensure scroll-driven blur/text animation is perfectly integrated.
type: design
---

# Plan - Hero Refinement

Modify the Hero section to use the newly uploaded image and refine the scroll-driven animation for a cinematic, luxury feel.

## Technical Details

- **Asset Registration**: Register `user-uploads://a02_consultorio_premium_con_doctora.jpg` as a new Lovable Asset.
- **Data Update**: Add the new asset pointer to `src/data/nisadoAssets.ts`.
- **Hero Update**:
    - Update `src/routes/index.tsx` to use the new image in the Hero.
    - Verify the `framer-motion` `useScroll` and `useTransform` logic.
    - Ensure the text "Diseñamos sonrisas para ti" is perfectly centered and integrated over the image.
    - Apply the requested animation ranges:
        - `imgBlur`: `blur(8px)` -> `blur(0px)`
        - `imgScale`: `scale(1.03)` -> `scale(1)`
        - `textY`: `0px` -> `-80px`
        - `textOpacity`: `1` -> `0`
- **Responsiveness**: Maintain mobile-specific values (6px blur, -50px Y offset).
- **Accessibility**: Support `prefers-reduced-motion`.

## User Review Required

> [!IMPORTANT]
> The text will be updated to exactly "Diseñamos sonrisas para ti" as per the new instruction, replacing the previous "Diseñamos sonrisas hechas para ti".
