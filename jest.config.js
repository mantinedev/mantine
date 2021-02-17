module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./configuration/jest/enzyme.setup.js'],
  moduleNameMapper: {
    '@mantine/(.*)': '<rootDir>/node_modules/@mantine/$1/src',
  },
};
