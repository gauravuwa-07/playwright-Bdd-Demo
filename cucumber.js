module.exports = {
  default: [
    "features/**/*.feature",
    "--require-module ts-node/register",
    "--require step-definitions/**/*.ts",
    "--format json:reports/cucumber-report.json",
    "--publish-quiet"
  ].join(" ")
};
