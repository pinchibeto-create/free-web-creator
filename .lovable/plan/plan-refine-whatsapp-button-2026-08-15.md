# Plan - Refine WhatsApp Button

Simplify the WhatsApp floating button to a circular icon-only format while maintaining the premium aesthetic.

## User Review Required

> [!IMPORTANT]
> The text label "WhatsApp" that appeared on hover will be removed to achieve the requested circular shape.

## Proposed Changes

### Frontend Refinements

#### WhatsApp Button Styling
- Modify the floating WhatsApp button in `src/routes/index.tsx`.
- Remove the hidden text label.
- Update `className` to use consistent padding (e.g., `p-4`) or fixed dimensions (e.g., `w-14 h-14`) with `flex items-center justify-center` to ensure a perfect circle.
- Retain the `backdrop-blur-md`, `border-white/20`, and `champagne` icon color.

## Technical Details
- **File**: `src/routes/index.tsx`
- **Component**: Floating action group at the bottom of the page.
- **Animation**: Keep `framer-motion` scale effects.
