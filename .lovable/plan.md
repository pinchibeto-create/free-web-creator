# Plan: Improve mobile menu legibility with background blur

The user reported that the mobile menu overlaps with the content below it, making it difficult to read. I will add a background blur effect to the menu overlay and drawer to ensure the menu items are clear and distinct from the underlying page content.

## Proposed Changes

### 1. Update Navigation Menu in `src/routes/index.tsx`
- Increase the blur intensity on the menu overlay (`motion.div` that acts as a backdrop).
- Add a significant backdrop blur and a more opaque background to the menu drawer itself.
- Ensure the drawer has a consistent background color that provides enough contrast for the menu items.

### 2. Technical Details
- Change the overlay's blur from `backdrop-blur-md` to `backdrop-blur-xl` or similar for better isolation.
- Verify the menu drawer (`motion.div` for the sidebar) has `backdrop-blur-2xl` (which it seems to have, but the background might be too transparent).
- Adjust the `bg-ivory/95` background if it's still letting too much detail through.

## Verification Plan

### Automated Tests
- Use Playwright to capture screenshots of the mobile menu before and after changes.
- Inspect the computed styles to confirm `backdrop-filter` is applied.

### Visual Verification
- Manually check the preview in mobile mode to ensure text is legible against complex backgrounds (like the Hero image).
