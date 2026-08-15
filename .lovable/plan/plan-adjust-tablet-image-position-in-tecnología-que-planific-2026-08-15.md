# Plan: Adjust Tablet Image Position in "Tecnología que planifica"

The user wants to move the tablet image slightly to the left in the "Tecnología que planifica" section so that it is more visible. Currently, the images are in a 2-column grid.

## Proposed Changes

### 1. Adjust Layout in `src/routes/index.tsx`
- Locate the "Tecnología que planifica" section (id: `tecnologia`).
- Adjust the positioning of the second `motion.div` which contains the tablet image.
- We can use negative horizontal margin or translate to shift it to the left, overlapping slightly with the first image or just moving within its container.
- Alternatively, adjust the grid gap or the container's width/alignment.
- Based on the current code:
  - Computer image has `translate-y-12`.
  - Tablet image is in the second column of a `grid-cols-2`.
- I will apply a `relative` position and a negative `left` or `-translate-x` to the tablet image's container to "move it more to the left" as requested.

## Technical Details
- File: `src/routes/index.tsx`
- Component: `Index`
- Target lines: ~295-303
- Current classes for tablet container: `aspect-[3/4] rounded-sm overflow-hidden shadow-2xl`
- New classes suggested: `aspect-[3/4] rounded-sm overflow-hidden shadow-2xl -translate-x-4 md:-translate-x-8` (to make it more visible by shifting it away from the right edge or towards the center).
