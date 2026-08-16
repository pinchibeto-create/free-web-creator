# Plan: SEO & Quality Verification

This plan focuses on verifying the final SEO health and ensuring all assets are production-ready for the luxury dental site.

## Proposed Changes

### SEO & Metadata Verification
- Audit `src/routes/index.tsx` to ensure `head()` metadata perfectly matches the premium luxury brand identity.
- Verify that JSON-LD structured data includes all three clinic locations (Polanco, Del Valle, Roma Sur).
- Ensure canonical URLs are correctly set to the primary domain.

### Asset & Performance Audit
- Check `src/data/nisadoAssets.ts` to confirm all visual elements use hashed Vite imports for deployment stability.
- Verify that image `alt` tags are descriptive and keyword-rich across the entire homepage.
- Validate that the Technology section uses eager loading to prevent "flicker" on initial scroll.

### Final Build Check
- Run `npm run build` to confirm all assets are correctly bundled into the production directory.
- Verify that custom fonts are loading correctly without layout shifts.

## Technical Details
- **SEO Engine**: TanStack Start `head()` integration.
- **Structured Data**: Schema.org `Dentist` type.
- **Asset Management**: Vite asset hashing and bundling.
- **Performance**: WebP format optimization and lazy/eager loading balancing.
