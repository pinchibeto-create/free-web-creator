---
name: Hero Scroll Fix
description: Fix for hero text not disappearing correctly on scroll and image blur not resolving fully.
type: feature
---

# Hero Scroll Fix

## Issue
The user reported an error with the hero scroll animation. In the previous iteration, I reduced the range of `scrollYProgress` to `[0, 0.3]` for the text disappearance and image nitidez, but since the container is `200vh` and the image is `sticky` for the entire height, the `scrollYProgress` of the target `heroRef` (the `200vh` header) might be behaving differently than expected or the content might be getting stuck/showing white space because the content container didn't have enough room to scroll past the viewport effectively while staying sticky.

## Proposed Changes
- Ensure the hero text fully fades to `opacity: 0` and translates out of view.
- Ensure the image blur fully resolves to `0px`.
- Adjust the sticky/absolute positioning to ensure smooth transition without visual artifacts.
- Extend the animation range slightly if needed to make it feel more natural.

## Technical Details
- `useScroll` with `target: heroRef` on a `200vh` header.
- `textOpacity` should reach 0 before the next section appears.
- `imgBlur` should reach 0px.
