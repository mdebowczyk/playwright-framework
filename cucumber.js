module.exports = {
  default: [
    "--require-module", "ts-node/register",
    "--require", "tests/steps/*.ts",
    "--format", "json:test-results/cucumber_report.json"
  ]
};