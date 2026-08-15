# Plan - Logo Clarity and Color Refinement

The user wants to clarify the color of the text "NISADO BAANI Luxury Dental" in the logo, which currently consists of a golden tooth and accompanying text. The goal is to make the text more legible and premium, ensuring it contrasts well with the dark background while maintaining the brand's luxury identity.

## Proposed Changes

### Design & Assets
- No changes to the asset files are required, but the rendering of the logo in the UI will be improved.
- The "clarification" of the color will be achieved by adjusting the CSS filters applied to the logo in the dark section to ensure the champagne/gold text pops without losing its character.

### UI Components

#### `src/routes/index.tsx`
- Refine the `motion.div` wrapping the logo in the "Post-Hero" dark section.
- Adjust the `opacity` from `0.9` to `1` for maximum clarity.
- Apply a subtle `brightness` and `contrast` filter if needed to make the text part of the logo stand out more against the `soft-black` background.
- Ensure the logo is properly sized for both mobile and desktop to maintain high resolution.

## Technical Details
- Use `backdrop-filter` or `filter: drop-shadow(...)` to add a very subtle glow or depth to the logo if it helps readability without being tacky.
- Specifically targeting the text portion is difficult with a single PNG, so overall image enhancement is the way to go.

## Verification Plan
- Use Playwright to capture screenshots of the logo section.
- Verify that the text "NISADO BAANI Luxury Dental" is clearly legible and the colors are vibrant.
- Check responsiveness on mobile viewports.
