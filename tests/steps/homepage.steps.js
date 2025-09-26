const { Given, Then } = require('@cucumber/cucumber');
const playwright = require('playwright');
const assert = require('assert');

let page;
let browser;

Given('I navigate to {string} with {string} browser', async function (url, browserName) {
  browser = await playwright[browserName].launch({ headless: false });
  const context = await browser.newContext({
    screenshot: 'only-on-failure',
    trace: 'on'
  });
  page = await context.newPage();
  await page.goto(url);
});


Then('the page title should contain {string}', async function (expectedTitle) {
  const title = await page.title();
  assert(title.includes(expectedTitle), `Expected title to include '${expectedTitle}', but got '${title}'`);
  await page.screenshot({ path: 'test-results/homepage-title.png' });
});

const { After } = require('@cucumber/cucumber');
After(async function () {
  if (browser) {
    await browser.close();
  }
});
