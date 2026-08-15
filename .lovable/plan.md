# Plan - Remove Location Icons in Hero

Remove the map pin emoji/icon from the branch selection buttons in the Hero section to simplify the visual design.

## Proposed Changes

### Hero Section Refinement
- **File**: `src/routes/index.tsx`
- **Location**: Hero branch buttons (Polanco, Del Valle, Roma Sur).
- **Action**: Remove the `📍` emoji span from the button content.
- **Styling**: Maintain the existing typography and layout for the branch names.

## Technical Details
- In the `map` function generating the branch links (around line 223), remove the `<span className="text-[10px]">📍</span>` element.
