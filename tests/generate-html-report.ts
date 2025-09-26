import reporter from 'cucumber-html-reporter';

const options = {
  theme: 'bootstrap' as const,
  jsonFile: 'test-results/cucumber_report.json',
  output: 'test-results/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: false,
};

reporter.generate(options);
