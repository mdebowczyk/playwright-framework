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

3. Run Cucumber BDD tests (TypeScript):
   ```sh
   npm run cucumber
   ```
   This will also generate an HTML report at `test-results/cucumber_report.html`.

## Project Structure
- `tests/features/` - Cucumber feature files (Gherkin syntax)
- `tests/steps/` - Step definitions for Cucumber in TypeScript (integrated with Playwright)
- `tests/generate-html-report.ts` - Generates HTML report from Cucumber JSON output
- `tests/` - Playwright test files (if any)
- `test-results/` - Test artifacts (screenshots, videos, HTML report)
- `package.json` - Project configuration and scripts
- `tsconfig.json` - TypeScript configuration

## Example Tests
- See `tests/features/homepage.feature` and `tests/steps/homepage.steps.ts` for a Cucumber BDD test in TypeScript.

## Documentation
- [Playwright documentation](https://playwright.dev/)
- [Cucumber.js documentation](https://github.com/cucumber/cucumber-js)
- [TypeScript documentation](https://www.typescriptlang.org/)
