const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'test-results/cucumber_report.json',
  output: 'test-results/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: false,
};

reporter.generate(options);
