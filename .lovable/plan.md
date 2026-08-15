---
name: Verify Asset Persistence
description: Check if all images and assets are properly tracked in git for deployment.
type: feature
---
## Asset Verification Plan

1. **Verify Git Tracking**:
   - Run `git status` to ensure there are no untracked files in `src/assets`.
   - Run `git ls-files src/assets` to confirm all files found on disk are also tracked in the repository.

2. **Check for Broken References**:
   - Inspect `src/data/nisadoAssets.ts` and verify all imports match files existing in `src/assets`.
   - Verify that all `.asset.json` files have corresponding image files (`.webp`, `.png`, etc.) referenced in their `url` field if they are local assets.

3. **Performance Audit (Image Size)**:
   - Identify any remaining large files (over 500KB) in `src/assets` and consider if they need further optimization.

4. **Consistency Check**:
   - Ensure `src/routes/index.tsx` uses `nisadoAssets` instead of direct hardcoded paths where possible to maintain a single source of truth.
