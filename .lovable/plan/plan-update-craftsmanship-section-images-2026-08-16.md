# Plan: Update Craftsmanship Section Images

The user wants to replace the current placeholder images in the "Artesanía Dental" (Dental Craftsmanship) section with specific newly uploaded images.

## Proposed Changes

### Assets and Data
- Use `lovable-assets` to create high-performance CDN pointers for the three new images:
  - `a23_pulido_artesanal_de_carillas.jpg` -> `craftsmanship.pulido`
  - `a24_escultura_artesanal_sobre_modelo_dental.jpg` -> `craftsmanship.escultura`
  - `a25_detallado_con_pincel_sobre_protesis_ceramica.jpg` -> `craftsmanship.detallado`
- Update `src/data/nisadoAssets.ts` to import these new assets and map them to their respective keys in `nisadoAssets.craftsmanship`.

### Frontend
- No changes needed to `src/routes/index.tsx` as it already consumes `nisadoAssets.craftsmanship.escultura`, `detallado`, and `pulido`. The update to the data file will automatically reflect on the site.

## Technical Details
- Images will be stored as `.asset.json` files in `src/assets/craftsmanship/` to leverage the Lovable CDN.
- The `nisadoAssets.ts` file will be updated to handle the `.url` property from the JSON asset pointers.

## Verification Plan
- Check the "Artesanía Dental" section in the preview to confirm the new images are displayed:
  - **Esculpir**: Should show the dental sculpture model.
  - **Detallar**: Should show the precision brush work on a prosthesis.
  - **Pulir**: Should show the manual polishing process.
- Verify responsiveness and that the "grayscale to color" hover effect remains functional.
