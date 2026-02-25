import { readFileSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const messagesDir = resolve(__dirname, '../messages');

const files = readdirSync(messagesDir).filter(f => f.endsWith('.json'));

if (files.length === 0) {
  console.error('No JSON files found in messages/');
  process.exit(1);
}

let hasError = false;
const parsed = {};

for (const file of files) {
  const filePath = resolve(messagesDir, file);
  const content = readFileSync(filePath, 'utf-8');
  try {
    parsed[file] = JSON.parse(content);
    console.log(`✅  ${file} — valid JSON`);
  } catch (err) {
    console.error(`❌  ${file} — INVALID JSON: ${err.message}`);
    hasError = true;
  }
}

// Check structural parity of top-level keys
const validFiles = Object.keys(parsed);
if (validFiles.length > 1) {
  const referenceKeys = Object.keys(parsed[validFiles[0]]).sort().join(',');
  for (const file of validFiles.slice(1)) {
    const keys = Object.keys(parsed[file]).sort().join(',');
    if (keys !== referenceKeys) {
      console.warn(`⚠️  ${file} has different top-level keys than ${validFiles[0]}`);
      console.warn(`   Expected: ${referenceKeys}`);
      console.warn(`   Got:      ${keys}`);
      hasError = true;
    }
  }
}

// Check cta key parity across all files
const ctaKeysSets = validFiles.map(f => ({
  file: f,
  keys: parsed[f]?.cta ? Object.keys(parsed[f].cta).sort().join(',') : ''
}));
const referenceCta = ctaKeysSets[0]?.keys;
for (const { file, keys } of ctaKeysSets.slice(1)) {
  if (keys !== referenceCta) {
    console.warn(`⚠️  ${file} cta keys differ from ${ctaKeysSets[0].file}`);
    console.warn(`   Expected: ${referenceCta}`);
    console.warn(`   Got:      ${keys}`);
    hasError = true;
  }
}

if (hasError) {
  console.error('\nValidation failed.');
  process.exit(1);
} else {
  console.log('\n✅ All message files are valid and structurally consistent.');
  process.exit(0);
}
