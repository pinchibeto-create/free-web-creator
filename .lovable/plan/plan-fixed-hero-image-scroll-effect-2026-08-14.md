---
name: Fixed Hero Image Scroll Effect
description: Update the Hero section so the background image remains fixed (sticky) while scrolling, gaining sharpness as the text moves upward.
type: design
---

# Plan - Fixed Hero Image Scroll Effect

Refine the Hero animation so the background image stays pinned (sticky) while the user scrolls, allowing the text to move up naturally while the image transitions from blurred to sharp.

## Technical Details

- **Structural Changes**:
    - Update `src/routes/index.tsx` Hero section.
    - Increase the `header` container height to approximately `150vh` to create a "scroll zone" where the effect is active.
    - Change the background image container (`motion.div`) to `sticky top-0 h-screen` so it remains fixed in the viewport while scrolling through the Hero's height.
    - Ensure the text content container is absolute/relative within the `header` so it moves upward with the natural scroll of the page.
- **Animation Refinement**:
    - Keep the `scrollYProgress` tracking the `heroRef` (the taller header).
    - Ensure `imgBlur` and `imgScale` are tied to the first part of the scroll progress (e.g., `0` to `0.5`).
    - Adjust `textY` if needed to complement the natural scroll, or rely on the natural scroll movement and use `useTransform` for additional emphasis.
- **Visual Integration**:
    - Ensure the overlay and gradients move with the image or stay sticky as appropriate for readability.

## User Review Required

> [!NOTE]
> By making the image sticky, it will appear "fixed" in the background while the text and the rest of the page content scroll over it. The total height of the Hero section will be increased to allow enough scroll distance for the blur to fully resolve before the image is eventually pushed off-screen by the following section.
