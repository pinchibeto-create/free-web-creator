# Plan - Increase Header Logo Size

Maximize the visibility of the logo in the navigation bar to enhance brand presence.

## Proposed Changes

### Header Refinement
- Increase the height of the logo in the navigation bar.
- Adjust the container constraints if necessary to allow for a larger visual footprint without breaking the layout.
- Ensure the logo remains balanced within the sticky header's `h-[70px]` (mobile) and `h-[85px]` (desktop) height.

#### File: `src/routes/index.tsx`
- Update the `img` class from `h-6 md:h-7` to a larger size like `h-10 md:h-12` (or the maximum that fits comfortably within the header height).
- Verify the `invert` logic still applies correctly to maintain visibility against the light/dark backgrounds during scroll.

## Technical Details
- **Target Element**: `img` tag inside the `nav` component.
- **Current Classes**: `h-6 md:h-7 transition-all duration-500`.
- **Proposed Classes**: `h-10 md:h-12 transition-all duration-500`.
