const fs = require('fs');
const path = require('path');

console.log('Running Heróis da IA verification checks...');

// Check logo existence
const logoPath = path.join(__dirname, '..', 'public', 'logo-herois.jpg');
if (!fs.existsSync(logoPath)) {
  console.error('ERROR: public/logo-herois.jpg is missing!');
  process.exit(1);
} else {
  console.log('✔ Logo file public/logo-herois.jpg exists.');
}

// Verify data imports structure
const dataDir = path.join(__dirname, '..', 'src', 'data');
const filesToVerify = ['articles.ts', 'tools.ts', 'courses.ts', 'antihype.ts', 'radar.ts'];

for (const file of filesToVerify) {
  const filePath = path.join(dataDir, file);
  if (!fs.existsSync(filePath)) {
    console.error(`ERROR: Data file ${file} is missing!`);
    process.exit(1);
  }
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.length < 100) {
    console.error(`ERROR: Data file ${file} is surprisingly empty!`);
    process.exit(1);
  }
  console.log(`✔ Data file ${file} verified (${content.length} bytes).`);
}

console.log('✔ All static verification checks passed successfully!');
