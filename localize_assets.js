
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ASSETS_DIR = 'src/assets';
const PREVIEW_URL = 'https://id-preview--82982e52-9362-45c9-9d72-22a1c53f5fea.lovable.app';

async function localizeAssets(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await localizeAssets(fullPath);
    } else if (entry.name.endsWith('.asset.json')) {
      try {
        const content = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
        
        // Skip if already local or doesn't have a URL
        if (!content.url || content.url.startsWith('/src/assets/')) {
          console.log(`Skipping already local asset: ${fullPath}`);
          continue;
        }

        // Only process CDN URLs
        if (content.url.startsWith('/__l5e/')) {
          const remoteUrl = `${PREVIEW_URL}${content.url}`;
          const extension = content.original_filename ? path.extname(content.original_filename) : '.webp';
          const localFileName = entry.name.replace('.asset.json', '') + extension;
          const localFilePath = path.join(dir, localFileName);

          console.log(`Downloading ${remoteUrl} to ${localFilePath}...`);
          
          try {
            execSync(`curl -s -f -o "${localFilePath}" "${remoteUrl}"`);
            
            // Update the .asset.json to point to the local file
            content.url = `/${localFilePath}`;
            fs.writeFileSync(fullPath, JSON.stringify(content, null, 2));
            console.log(`Updated ${fullPath}`);
          } catch (error) {
            console.error(`Failed to download ${remoteUrl}: ${error.message}`);
          }
        }
      } catch (error) {
        console.error(`Error processing ${fullPath}: ${error.message}`);
      }
    }
  }
}

console.log('Starting asset localization...');
localizeAssets(ASSETS_DIR).then(() => {
  console.log('Localization complete.');
}).catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
