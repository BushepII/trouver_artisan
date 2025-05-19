const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const outputDir = path.join(__dirname, 'dist', 'trouver_artisan');


function cleanHTMLFile(filePath) {
  const html = fs.readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(html, { decodeEntities: false });

  // Remove unwanted attributes
  $('*').each((_, el) => {
    const attribs = el.attribs;
    if (!attribs) return;
    Object.keys(attribs).forEach(attr => {
      if (attr === 'ng-app-id' || attr === 'jsaction') {
        $(el).removeAttr(attr);
      }
    });
  });

  // Optional: Minify inline style tag content if needed
  $('style').each((_, el) => {
    let css = $(el).html();
    css = css.replace(/@layer\s+[^{]+\{[^}]*\}/g, ''); // Remove @layer blocks
    $(el).html(css);
  });

  fs.writeFileSync(filePath, $.html(), 'utf-8');
  console.log(`✅ Cleaned: ${filePath}`);
}

function walkAndClean(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      walkAndClean(fullPath);
    } else if (file.endsWith('.html')) {
      cleanHTMLFile(fullPath);
    }
  });
}

walkAndClean(outputDir);
