# Plan - Visual updates for "Diseño que se construye contigo" section

Increase the font size of the title in the "Diseño que se construye contigo" section to match other section titles and reorganize the images to be side-by-side with a dynamic feel.

## User Review Required

> [!IMPORTANT]
> I will arrange the two images side-by-side. On desktop, they will be positioned together within the 7-column visual area. On mobile, they will transition from an overlapping layout to a more horizontal alignment to maintain the "dynamic" feel while ensuring they fit the viewport.

- Does "side-by-side" imply a perfect horizontal alignment, or a more editorial, slightly offset arrangement (which often feels more "dynamic" in this brand's style)? I'll proceed with a dynamic offset arrangement unless specified otherwise.

## Proposed Changes

### 1. Typography Adjustment
- Locate the `h2` title in the `#esencia` section.
- Update its classes from `text-4xl md:text-5xl lg:text-7xl` to `text-5xl md:text-6xl lg:text-8xl` (or similar) to match other prominent headers like the one in `#atelier` (`text-6xl lg:text-8xl`).

### 2. Image Composition Redesign
- Modify the "Zona Visual" in the `#esencia` section.
- Remove the absolute positioning that causes heavy overlapping.
- Implement a flex or grid layout to place the two transparent images (`sillon` and `conversando`) side-by-side.
- Apply different scroll-based parallax effects or entrance animations to each image to create the "dynamic" feel.
- Ensure the layout remains responsive, possibly stacking or maintaining a tight side-by-side view on smaller screens.

## Technical Details
- File: `src/routes/index.tsx`
- Framework: TanStack Start with Framer Motion for animations.
- CSS: Tailwind CSS for layout and sizing.
