# Plan - Localize Assets and Verify Deployment Links

Ensure all images used in the application are physically present in the repository and correctly linked for successful deployment on Netlify.

## User Review Required

> [!IMPORTANT]
> I will download all remote assets (currently managed as `.asset.json` files) and store them locally in `src/assets/`. This ensures the project is self-contained and works correctly on any hosting platform like Netlify.

- Does the production URL `https://budget-web-studio.lovable.app` remain the same for SEO metadata, or should I use a different one?

## Proposed Changes

### Assets Localization
- Iterate through all `.asset.json` files in `src/assets/`.
- Download the corresponding image from the platform's asset store.
- Save the image to the local path (e.g., `src/assets/branding/logo_final_oro_v4.png`).
- Remove the `.asset.json` metadata files.

### Code Updates
- **src/data/nisadoAssets.ts**: Update all imports to use the local image files directly instead of `.asset.json` wrappers.
- **src/routes/index.tsx**: Ensure all components use `nisadoAssets` instead of hardcoded strings if any remain.
- **SEO Metadata**: Verify that `og:image` and `twitter:image` point to the correct production asset URL.

### Deployment Verification
- Run a production build (`npm run build`) to ensure all assets are correctly bundled.
- Check that no external dependencies or broken links remain.

## Technical Details
- Use a Node.js script to automate the download of ~40 assets.
- Convert `.asset.json` imports to standard ES module imports for images.
- Ensure Vite correctly handles the image assets (hashing and compression).

## Verification Plan

### Automated Tests
- Run `npm run build` and check for any "asset not found" errors.
- Verify the `dist/` folder contains the processed images.

### Manual Verification
- Inspect the `src/assets/` directory to confirm physical file presence.
- Check the local preview to ensure all images load correctly from local sources.
