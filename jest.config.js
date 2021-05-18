module.exports = {
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
  setupFilesAfterEnv: [
    './configuration/jest/enzyme.setup.js',
    './configuration/jest/jsdom.mocks.js',
  ],
  moduleNameMapper: {
    '@mantine/(.*)': '<rootDir>/src/mantine-$1/src',
  },
};
