const puppeteer = require('puppeteer');

(async (path, filename) => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('path');
	await page.waitFor(500);
	await page.pdf({
		path: 'aa.pdf',
		preferCSSPageSize: true,
		printBackground: true,
		format: 'A4'});
	await browser.close();
})();