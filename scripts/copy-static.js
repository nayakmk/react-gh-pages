const fs = require('fs');
const path = require('path');

// Function to recursively copy directory
function copyDir(src, dest) {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // Read source directory
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      // Recursively copy directory
      copyDir(srcPath, destPath);
    } else {
      // Copy file
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Main function to handle static file copying
function copyStaticFiles() {
  // Create out/_next/static directory
  const staticDir = path.join('out', '_next', 'static');
  fs.mkdirSync(staticDir, { recursive: true });

  // Copy public files if they exist
  const publicDir = path.join('src', 'public');
  if (fs.existsSync(publicDir)) {
    const entries = fs.readdirSync(publicDir);
    for (const entry of entries) {
      const srcPath = path.join(publicDir, entry);
      const destPath = path.join('out', entry);
      
      if (fs.statSync(srcPath).isDirectory()) {
        copyDir(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }

  // Copy Next.js static files if they exist
  const nextStaticDir = path.join('.next', 'static');
  if (fs.existsSync(nextStaticDir)) {
    copyDir(nextStaticDir, staticDir);
  }
}

try {
  copyStaticFiles();
  console.log('Static files copied successfully');
} catch (error) {
  console.error('Error copying static files:', error);
  process.exit(1);
} 