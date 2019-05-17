module.exports = {
  cacheDirectory: 'tmp',
  verbose: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/__mocks__/',
  ],
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  setupFilesAfterEnv: [
    '<rootDir>/spec-helper.js',
  ],
  testMatch: [
    '<rootDir>/src/**/*spec.{js,jsx}',
  ],
  testPathIgnorePatterns: [
    '/*.scratch/',
    '/node_modules/',
  ],
};
