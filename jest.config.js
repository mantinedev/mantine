module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    // https://github.com/aelbore/esbuild-jest/issues/21
    '^.+\\.tsx?$': '@sucrase/jest-plugin',
  },
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  setupFilesAfterEnv: ['./configuration/jest/jsdom.mocks.js'],
  globalSetup: "./configuration/jest/global-setup.js",
  moduleNameMapper: {
    '@mantine/(.*)': '<rootDir>/src/mantine-$1/src',
    '\\.(css)$': 'identity-obj-proxy',
  },
};
