
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
        
        // Even if it looks local, let's re-verify and fix naming
        if (content.url && (content.url.startsWith('/__l5e/') || content.url.includes('.png.png') || content.url.includes('.jpg.jpg'))) {
          const remoteUrl = content.url.startsWith('/__l5e/') ? `${PREVIEW_URL}${content.url}` : null;
          
          let localFileName = entry.name.replace('.asset.json', '');
          const extension = content.original_filename ? path.extname(content.original_filename) : '.webp';
          
          // Ensure we don't double extension if base name already has one
          if (!localFileName.toLowerCase().endsWith(extension.toLowerCase())) {
            localFileName += extension;
          }
          
          const localFilePath = path.join(dir, localFileName);

          if (remoteUrl) {
            console.log(`Downloading ${remoteUrl} to ${localFilePath}...`);
            try {
              execSync(`curl -s -f -o "${localFilePath}" "${remoteUrl}"`);
            } catch (error) {
              console.error(`Failed to download ${remoteUrl}: ${error.message}`);
              continue;
            }
          }

          // Update the .asset.json to point to the local file
          content.url = `/${localFilePath}`;
          fs.writeFileSync(fullPath, JSON.stringify(content, null, 2));
          console.log(`Updated metadata for ${fullPath} to point to ${localFilePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${fullPath}: ${error.message}`);
      }
    }
  }
}

console.log('Starting asset localization fix...');
localizeAssets(ASSETS_DIR).then(() => {
  console.log('Localization fix complete.');
}).catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
