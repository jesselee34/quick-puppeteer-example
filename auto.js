const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const text = fs.readFileSync(path.join(__dirname, 'text.txt'), 'utf8');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://www.editpad.org/');
  await page.click('[name="text"]');
  await page.type('[name="text"]', text);
  await page.waitFor(5000);

  await browser.close();
})();