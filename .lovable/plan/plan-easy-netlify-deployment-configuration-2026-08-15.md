# Plan - Easy Netlify Deployment Configuration

The goal is to ensure the project has the correct `netlify.toml` and `vite.config.ts` settings to make deployment to Netlify seamless for a TanStack Start application.

## Proposed Changes

### Configuration

#### [netlify.toml](netlify.toml)
- The current file already exists and looks correct for a Nitro-based build:
  - `command = "npm run build"`
  - `publish = ".output/public"`
  - `directory = ".output/server"`
  - Redirect `/*` to `/.netlify/functions/server`.

#### [vite.config.ts](vite.config.ts)
- Ensure the Nitro preset is set to `netlify`.
- (The current file already has `nitro: { preset: "netlify" }`).

### Documentation
- Provide the user with the specific steps to take in the Netlify UI to connect this repository.

## Technical Details
- **Build Command**: `npm run build`
- **Publish Directory**: `.output/public`
- **Functions Directory**: `.output/server`
- **Nitro Preset**: `netlify` (handled in `vite.config.ts`)

## Steps to Deploy on Netlify
1. Log in to [Netlify](https://app.netlify.com/).
2. Click **Add new site** > **Import an existing project**.
3. Select your Git provider and the repository for this project.
4. Netlify should automatically detect the settings from `netlify.toml`.
5. Click **Deploy [site name]**.
