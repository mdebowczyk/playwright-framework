import { Given, Then, After } from '@cucumber/cucumber';
import { Browser, Page, BrowserType, chromium, firefox, webkit } from 'playwright';
import assert from 'assert';

let page: Page;
let browser: Browser;

Given('I navigate to {string} with {string} browser', async function (url: string, browserName: string) {
  let browserType: BrowserType<{}> | undefined;
  if (browserName === 'chromium') browserType = chromium;
  else if (browserName === 'firefox') browserType = firefox;
  else if (browserName === 'webkit') browserType = webkit;
  else throw new Error(`Unsupported browser: ${browserName}`);
  browser = await browserType.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto(url);
});

Then('the page title should contain {string}', async function (expectedTitle: string) {
  const title = await page.title();
  assert(title.includes(expectedTitle), `Expected title to include '${expectedTitle}', but got '${title}'`);
  await page.screenshot({ path: 'test-results/homepage-title.png' });
});

After(async function () {
  if (browser) {
    await browser.close();
  }
});
