# Plan - Fix Broken Image Assets

The user reported that images are not visible. This is due to incorrect referencing of assets in `src/data/nisadoAssets.ts`. Instead of using absolute sandbox paths (which the browser cannot access), we must use the URLs provided by the registered Lovable Assets.

## Technical Details
- Assets were registered as Lovable Assets, creating `.asset.json` files in `src/assets/`.
- `src/data/nisadoAssets.ts` currently uses string paths like `"/src/assets/..."`, which are not served by the Vite dev server to the client.
- Solution: Import the `.asset.json` files and use their `.url` property.

## Proposed Changes

### 1. Update `src/data/nisadoAssets.ts`
- Replace string paths with imports of the corresponding `.asset.json` files.
- Map the asset properties to use the `.url` from the imported JSON objects.
- Ensure all categories (branding, hero, cutouts, concepts, comparisons, references, extras) are correctly mapped.

### 2. Verification
- Verify that the preview loads with all images visible.
- Check the console for any remaining 404 errors for assets.
