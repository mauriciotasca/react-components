module.exports = {
  "verbose": true,
  "moduleNameMapper": {
    "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js"
  },
  "setupFilesAfterEnv": [
    "<rootDir>/spec-helper.js"
  ],
  "testMatch": [
    "<rootDir>/src/**/*spec.{js,jsx}"
  ]
}
