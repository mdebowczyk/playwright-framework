
# Playwright & Cucumber TypeScript Test Project

## Overview
This project provides a modern setup for end-to-end testing using Playwright and Cucumber with TypeScript. It supports BDD scenarios, browser automation, and code generation for rapid test development.

---

## Setup
1. **Install dependencies:**
   ```sh
   npm install
   ```

---

## Running Tests
### Playwright Tests
Run all Playwright test files:
```sh
npx playwright test
```

### Cucumber BDD Tests (TypeScript)
Run all feature files and step definitions:
```sh
npm run cucumber
```
This will also generate an HTML report at `test-results/cucumber_report.html`.

---

## Recording Tests with Playwright Codegen
Record browser actions and generate Playwright test code automatically:
```sh
npx playwright codegen https://your-url.com
```
Replace `https://your-url.com` with the site you want to record. The recorder will open a browser window, capture your actions, and generate code you can copy into your test files. This is useful for quickly creating new test scenarios and step definitions.

---

## Project Structure
- `tests/features/` — Cucumber feature files (Gherkin syntax)
- `tests/steps/` — Step definitions for Cucumber in TypeScript (integrated with Playwright)
- `tests/generate-html-report.ts` — Generates HTML report from Cucumber JSON output
- `test-results/` — Test artifacts (screenshots, videos, HTML report)
- `package.json` — Project configuration and scripts
- `tsconfig.json` — TypeScript configuration

---

## Example Tests
- See `tests/features/homepage.feature` and `tests/steps/homepage.steps.ts` for a Cucumber BDD test in TypeScript.
- See `tests/features/authentication.feature` and `tests/steps/authentication.steps.ts` for an authentication scenario.

---

## Documentation
- [Playwright documentation](https://playwright.dev/)
- [Cucumber.js documentation](https://github.com/cucumber/cucumber-js)
- [TypeScript documentation](https://www.typescriptlang.org/)
