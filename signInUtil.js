const puppeteer = require('puppeteer');
const path = require('path');

const readJsonFile = require('./readJsonFile.js').readJsonFile;

signInUtil = async (wsEndpoint, page_index) => {
    try {
        const browser = await puppeteer.connect({ browserWSEndpoint: wsEndpoint });

        const pages = await browser.pages();
        const page = pages[page_index];

        const json_path = path.join(__dirname, 'creds.json',);
        const key = 'username';

        json_read = readJsonFile(json_path);
        const id = json_read[key];

        console.log("json_path: " + json_path);
        console.log("json_read: " + json_read);
        console.log("id: " + id);
        console.log("page_index: " + page_index);

        await page.type('#login', id);
        await page.screenshot({ path: 'screenshots/screen-2.png' });

        await Promise.all([
            page.waitForNavigation(),
            page.click('#refreshbut')
        ]);

        await page.screenshot({ path: 'screenshots/screen-3.png' });
        browser.disconnect();
    } catch (err) {
        console.log(err);
        throw err;
    }
};


module.exports = { signInUtil };