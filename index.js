const puppeteer = require('puppeteer');

console.log(">>>>>> begin - create PDF <<<<<<<");
console.log("args=" + process.argv[0]);
console.log("args=" + process.argv[1]);

// #. argv[0] : node, argv[1] : index.js

const url = process.argv[2];
const filePath = process.argv[3];

(async (path, filename) => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url + "?filePath=" + filePath);
	await page.waitFor(500);
	await page.pdf({
		path: filePath + '/Result.pdf',
		preferCSSPageSize: true,
		printBackground: true,
		format: 'A4'});
	await browser.close();
})();

console.log(">>>>>> end - create PDF <<<<<<<");