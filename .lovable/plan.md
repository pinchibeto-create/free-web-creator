# Plan: Synchronize and Localize Project Assets

The user wants to ensure all project images are "copied to the GitHub repository." In the context of Lovable, this means ensuring assets are stored locally in `src/assets/` and tracked by Git, rather than only existing as remote CDN URLs (`/__l5e/assets-v1/...`) in `.asset.json` files.

Currently, most assets in `src/assets/` are metadata-only JSON files pointing to a CDN. We need to download these assets from the CDN and save them locally, updating the metadata files to point to local paths. This ensures that when the project is pushed to GitHub, all images are included.

## User Review Required

> [!IMPORTANT]
> This process involves downloading approximately 30-40 images from the project's current CDN storage and saving them into the `src/assets/` directory. This will increase the size of the repository.

- Are there any specific images you *don't* want to store locally?
- Do you want to keep both the original high-resolution versions and the optimized WebP versions, or just the optimized ones? (We recommend just optimized to keep the repository size manageable).

## Proposed Changes

### Assets Localization
- Iterate through all `.asset.json` files in `src/assets/`.
- For each file pointing to a remote CDN URL (`/__l5e/...`):
    - Download the image content using `curl`.
    - Save the image to the corresponding subdirectory in `src/assets/`.
    - Update the `.asset.json` file to use a local path (e.g., `"url": "/src/assets/branding/logo.png"`).
- Remove redundant metadata files that are no longer used by `src/data/nisadoAssets.ts`.

### Verification
- Check `git status` to ensure all new image files are detected as untracked/modified (indicating they are now part of the local workspace).
- Verify the live preview to ensure all images still load correctly from their new local paths.
- Run a build to ensure the static asset pipeline correctly handles the local files.

## Technical Details
- We will use a Node.js script to automate the "download and update" process to avoid manual errors.
- The script will respect the current directory structure (branding, hero, results, etc.).
- Images will be saved with their original filenames or sanitized versions where necessary.
