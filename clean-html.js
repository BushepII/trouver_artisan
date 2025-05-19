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

  // Remove type="text/javascript" from script tags
    $('script[type="text/javascript"]').each((_, el) => {
        $(el).removeAttr('type');
    });

  // Optional: Minify inline style tag content if needed
  $('style').each((_, el) => {
    let css = $(el).html();

    // Remove @layer, @property, @supports blocks
    css = css.replace(/@layer\s+[^{]+\{[^]*?\}/gs, '');
    css = css.replace(/@property\s+[^{]+\{[^]*?\}/gs, '');
    css = css.replace(/@supports\s+[^{]+\{[^]*?\}/gs, '');

    // Remove leading orphan brace
    css = css.replace(/^}\s*/, '');

    // Fix orphaned braces before class selectors
    css = css.replace(/}\s*}(?=\.\w)/g, '');
    css = css.replace(/}\s*(?=\.\w)/g, '');

    // Fix invalid calc expressions (e.g., calc(infinity * 1px))
    css = css.replace(/calc\((infinity|NaN|undefined)[^)]*\)/gi, '');
    css = css.replace(/[\w-]+:\s*(infinity|NaN|undefined)[^;{]*[;}]/gi, '');

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
