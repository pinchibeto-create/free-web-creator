# Plan - Update Instagram Link

The Instagram link in the application needs to be updated to `https://www.instagram.com/nisadobaani/` to fix a broken link.

## User Review Required

> [!IMPORTANT]
> I will update the Instagram link in the SEO metadata and the navigation menus. Please confirm if there are any other specific locations where you noticed the link was broken.

## Proposed Changes

### Navigation and SEO

#### [src/routes/index.tsx](src/routes/index.tsx)
- Update the `sameAs` array in the JSON-LD metadata (line 82) to `https://www.instagram.com/nisadobaani/`.
- Search for and update any `href="#"` or broken Instagram links in the navigation and footer components.

## Verification Plan

### Automated Tests
- Run a grep command to ensure all instances of "instagram.com" point to the correct URL.
- Use Playwright to verify that clicking the Instagram link in the footer opens the correct URL in a new tab.

### Manual Verification
- Check the navigation menu and footer in the preview to ensure the Instagram link is functional.
