---
title: Reduce spacing between Results and Manifesto
description: Reduce the vertical padding between the Results section (containing the ResultsSlider) and the "Nuestro Manifiesto" section to create a more compact layout.
---

# Plan - Reduce spacing between Results and Manifesto

The user wants to reduce the white space between the image slider in the Results section and the "Nuestro Manifiesto" section.

## Proposed Changes

### Component: `src/routes/index.tsx`
- The Results section (`#resultados`) currently has `py-48` (line 289).
- The Manifesto section has `py-48` (line 308).
- I will reduce the bottom padding of the Results section and the top padding of the Manifesto section to decrease the gap between them.

## Technical Steps
1. In `src/routes/index.tsx`:
   - Change `className="py-48 bg-ivory overflow-hidden"` in the `#resultados` section to `className="pt-48 pb-12 bg-ivory overflow-hidden"`.
   - Change `className="py-48 px-8 lg:px-24 relative overflow-hidden bg-ivory"` in the manifesto section to `className="pt-12 pb-48 px-8 lg:px-24 relative overflow-hidden bg-ivory"`.
