const envVars = require("./env-config.js");

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["**/src/**/*.js"],
  bail: 1,
  verbose: true,
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["src", "node_modules", "js"],
  transform: {
    "^.+\\.js|x?$": "babel-jest"
  },
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  },
  rootDir: "./",
  globals: {
    apiUrls: envVars.apiUrls,
    imagesUrl: "http://localhost:3999/images"
  },
  coverageDirectory: "coverage",
  coverageReporters: ["json", "text", "html", "clover", "lcov"],
  cacheDirectory: '.jest/cache',
  setupFilesAfterEnv: ["<rootDir>/src/js/test/mocks.js"]
};
