
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ASSETS_DIR = 'src/assets';
const PREVIEW_URL = 'https://id-preview--82982e52-9362-45c9-9d72-22a1c53f5fea.lovable.app';

async function redownloadMissing(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await redownloadMissing(fullPath);
    } else if (entry.name.endsWith('.asset.json')) {
      try {
        const content = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
        if (content.url && content.url.startsWith('/src/assets/')) {
            const localFilePath = content.url.startsWith('/') ? content.url.substring(1) : content.url;
            if (!fs.existsSync(localFilePath)) {
                // If it doesn't exist locally, we need to find its CDN source
                // We know the pattern for CDN URLs from the metadata: /__l5e/assets-v1/{asset_id}/{original_filename}
                const cdnUrl = `/__l5e/assets-v1/${content.asset_id}/${content.original_filename}`;
                const remoteUrl = `${PREVIEW_URL}${cdnUrl}`;
                
                console.log(`File missing: ${localFilePath}. Redownloading from ${remoteUrl}...`);
                try {
                    execSync(`mkdir -p "${path.dirname(localFilePath)}"`);
                    execSync(`curl -s -f -o "${localFilePath}" "${remoteUrl}"`);
                    console.log(`Successfully redownloaded ${localFilePath}`);
                } catch (error) {
                    console.error(`Failed to download ${remoteUrl}: ${error.message}`);
                }
            }
        }
      } catch (error) {
        console.error(`Error processing ${fullPath}: ${error.message}`);
      }
    }
  }
}

redownloadMissing(ASSETS_DIR).then(() => console.log('Check complete.')).catch(console.error);
