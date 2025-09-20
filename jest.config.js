export default {
  testEnvironment: "node",
  verbose: true,
  testTimeout: 30000,
  reporters: [
    "default",
    [
      "jest-stare",
      {
        resultDir: "reports/jest-stare",
        reportTitle: "Reqres API Test Report",
      },
    ],
  ],
};
