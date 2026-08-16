# Plan - Fixing Broken Images on Deployment

The user reports that images are not loading after deployment on Netlify, while they work in the Lovable preview. Based on the provided screenshot (image-8.png), the images in the "Artesanía" section are missing (showing alt text or empty boxes).

## Diagnosis
- The images in `src/data/nisadoAssets.ts` are imported using Vite's `@/assets/...` aliases.
- These aliases rely on Vite's bundling to resolve paths.
- If the build doesn't correctly process these imports or if the files are not being included in the build output, they will break in production.
- Some files in `src/assets/technology/` like `laptop_tech_1` (without extension) were seen in the file list, which might cause resolution issues.
- The `ResultsSlider` uses images from `nisadoAssets.results`.
- The screenshot shows "Artesanía" (Esculpir, Detallar, Pulir) and "Resultados" images failing.

## Proposed Changes

### 1. Fix Asset Imports
- Verify and standardize all file extensions in `src/data/nisadoAssets.ts`.
- Ensure all imported assets exist in the filesystem with the exact case-sensitive path.
- Check for any hidden characters or incorrect paths that might work locally but fail in a strict case-sensitive production environment (like Netlify's Linux-based build).

### 2. Verify `netlify.toml` and Build Settings
- Ensure the build command `npm run build` is correctly configured to include the `src/assets` folder in the bundle.
- Since it's a TanStack Start project, it uses Nitro/Vite. The assets should be automatically bundled if imported correctly.

### 3. Debugging Component Rendering
- Add fallbacks or check if the image URLs are being correctly generated in production.

## Technical Details
- Standardize `nisadoAssets.ts` imports.
- Re-run the build to verify asset manifest.
- Ensure all `.webp` and `.jpg` files are correctly referenced.
