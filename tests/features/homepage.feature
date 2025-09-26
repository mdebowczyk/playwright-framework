Feature: Playwright basic test
  As a user
  I want to verify the Playwright homepage loads
  So that I can confirm the title is correct

  Scenario: Homepage loads and title is correct
    Given I navigate to "https://playwright.dev" with "firefox" browser
    Then the page title should contain "Playwright"
