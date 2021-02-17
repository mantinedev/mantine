module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./configuration/jest/enzyme.setup.js'],
  moduleNameMapper: {
    '@mantine/(.*)': '<rootDir>/src/mantine-$1/src',
  },
};
