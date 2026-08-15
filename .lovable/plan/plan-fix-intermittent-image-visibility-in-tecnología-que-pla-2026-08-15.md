# Plan: Fix Intermittent Image Visibility in "Tecnología que planifica" Section

The user reports that images in the "Tecnología que planifica" section occasionally fail to appear. My investigation shows the section uses `framer-motion` for reveal animations and `loading="lazy"` on the images. The intermittent failure is likely due to a combination of the `whileInView` animation trigger and lazy loading competing, or the `viewport={{ once: true }}` setting not triggering correctly if the section is scrolled past too quickly or if the intersection observer fails to fire due to layout shifts.

## Proposed Changes

### Frontend Optimization

- **Ensure Visibility During Loading**: Add a placeholder background color to the image containers to prevent layout shifts and ensure the `whileInView` trigger has a consistent target.
- **Animation Trigger Refinement**: Adjust the `viewport` threshold for the `framer-motion` animations to be more sensitive (`amount: 0.1` or `0.2`) ensuring they trigger as soon as the section enters the screen.
- **Eager Loading for Viewport Proximity**: Change `loading="lazy"` to `loading="eager"` for the main images in this section since it's relatively high up the page (Section 01) and should be ready as the user scrolls down from the Hero.
- **Fallback State**: Ensure the images have a base opacity that isn't dependent solely on the animation finishing, or simplify the animation to avoid `opacity: 0` states if the JS fails to execute.

### Technical Details

- Modify `src/routes/index.tsx`:
    - Update `motion.div` containers in `#tecnologia` section.
    - Change `viewport={{ once: true }}` to include `amount: 0.2`.
    - Change `loading="lazy"` to `loading="eager"` for `nisadoAssets.technology.computadora` and `nisadoAssets.references.tableta`.
    - Add `bg-soft-black/5` to the `aspect-[3/4]` containers as a loading placeholder.

## Verification Plan

- **Manual Inspection**: Scroll to the section multiple times in the preview to ensure images reveal consistently.
- **Network Tab Check**: Verify images are requested promptly.
- **Lighthouse/Performance Check**: Ensure changing to eager loading doesn't negatively impact initial LCP (unlikely as they are below the fold, but close).
