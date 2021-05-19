module.exports = {
  transform: {
    // https://github.com/aelbore/esbuild-jest/issues/21
    '^.+\\.tsx?$': '@sucrase/jest-plugin',
  },
  setupFilesAfterEnv: [
    './configuration/jest/enzyme.setup.js',
    './configuration/jest/jsdom.mocks.js',
  ],
  moduleNameMapper: {
    '@mantine/(.*)': '<rootDir>/src/mantine-$1/src',
  },
};
