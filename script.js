const puppeteer = require('puppeteer');
const signInUtil = require('./signInUtil.js').signInUtil;


(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const ws = browser.wsEndpoint();
    const context = browser.defaultBrowserContext();

    await page.goto('https://yopmail.com/en/', { waitUntil: 'load' });
    // await page.waitForNavigation();

    pages = await browser.pages();
    var_type = typeof (pages)
    const page_index = await (pages.length - 1);

    console.log("ws: " + ws);
    console.log("page_index: " + page_index);
    console.log("type: " + var_type);

    await page.screenshot({ path: 'screenshots/screen-1.png' });

    browser.disconnect();

    await signInUtil(ws, page_index);

    console.log('Logged in!');

    await browser.close();
})();