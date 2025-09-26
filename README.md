# Playwright Test Project

This project is set up for running Playwright tests.

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Run Playwright tests:
   ```sh
   npx playwright test
   ```

3. Run Cucumber BDD tests:
   ```sh
   npm run cucumber
   ```
   This will also generate an HTML report at `test-results/cucumber_report.html`.

## Project Structure
- `tests/features/` - Cucumber feature files (Gherkin syntax)
- `tests/steps/` - Step definitions for Cucumber (integrated with Playwright)
- `tests/` - Playwright test files (e.g., example.spec.js)
- `test-results/` - Test artifacts (screenshots, videos, HTML report)
- `package.json` - Project configuration and scripts

## Example Tests
- See `tests/example.spec.js` for a basic Playwright test.
- See `tests/features/playwright-homepage.feature` and `tests/steps/playwright-homepage.steps.js` for a Cucumber BDD test.

## Documentation
- [Playwright documentation](https://playwright.dev/)
- [Cucumber.js documentation](https://github.com/cucumber/cucumber-js)
