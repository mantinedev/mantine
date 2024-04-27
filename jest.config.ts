export default {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  setupFilesAfterEnv: ['./jsdom.mocks.ts', './jest.react.ts'],
  globalSetup: './jest.setup.ts',
  moduleNameMapper: {
    '@mantine/(.*)': '<rootDir>/packages/@mantine/$1/src',
    '@mantine-tests/(.*)': '<rootDir>/packages/@mantine-tests/$1/src',
    '\\.(css)$': 'identity-obj-proxy',
    '(\\.+/.+)\\.js$': '$1',
  },
};
