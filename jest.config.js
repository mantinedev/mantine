module.exports = {
  transform: {
    // https://github.com/aelbore/esbuild-jest/issues/21
    '^.+\\.tsx?$': '@sucrase/jest-plugin',
  },
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  setupFilesAfterEnv: [
    './configuration/jest/enzyme.setup.js',
    './configuration/jest/jsdom.mocks.js',
  ],
  moduleNameMapper: {
    '@mantine/(.*)': '<rootDir>/src/mantine-$1/src',
  },
};
