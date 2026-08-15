---
name: Typography Sync
description: Ensure the typography used in the project matches the branding guidelines and is correctly implemented for GitHub/deployment.
type: feature
---

# Typography Sync Plan

Ensure all typography settings (Bodoni Moda, Parisienne/Allura, Manrope) are correctly configured in `src/styles.css`, loaded in `src/routes/__root.tsx`, and consistently applied in `src/routes/index.tsx`.

## Technical Details

- **Font Loading**: Verify `@tanstack/react-router` `head()` in `src/routes/__root.tsx` loads all required Google Fonts.
- **Tailwind Configuration**: Ensure `src/styles.css` defines the fonts in the `@theme` block and applies them via `@layer base`.
- **Consistency Check**: Scan `src/routes/index.tsx` for hardcoded font classes that might bypass the theme variables.
- **GitHub Verification**: Ensure no local font files are missing (though Google Fonts are preferred for this project).

## Steps

1. **Verify `__root.tsx`**: Check if the `<link>` for fonts includes `Bodoni Moda`, `Parisienne`, `Allura`, `Cormorant Garamond`, and `Manrope`.
2. **Verify `styles.css`**: Check `@theme` variables for `--font-serif`, `--font-sans`, and `--font-script`.
3. **Audit `index.tsx`**: Ensure sections like Hero, Technology, and Results use the correct semantic font classes (`font-serif`, `font-sans`, `font-script`).
4. **Fix Discrepancies**: Update files to align with the "Maison BE" luxury aesthetic defined in memory.
