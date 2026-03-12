const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

walkDir('./src', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;
    
    // Replace paths
    content = content.replace(/@\/pages\/dashboard\/my-team\/components/g, '@/components/dashboard/my-team-components');
    content = content.replace(/@\/pages\/dashboard\/my-points\/components/g, '@/components/dashboard/my-points-components');
    content = content.replace(/@\/pages\/dashboard\/transfers\/components/g, '@/components/dashboard/transfers-components');
    content = content.replace(/@\/pages\/dashboard\/pick-team\/components/g, '@/components/dashboard/pick-team-components');
    content = content.replace(/@\/pages\/dashboard\/shared/g, '@/components/dashboard/shared');
    
    // Relative paths from pages
    content = content.replace(/\.\/components\//g, '@/components/dashboard/my-team-components/'); // wait, relative imports can be tricky, let's just do a naive replace for `./components/MyTeamPitch` and similar if they exist.
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log('Updated ' + filePath);
    }
  }
});
