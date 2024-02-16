module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  setupFilesAfterEnv: ['./jsdom.mocks.cjs'],
  globalSetup: './jest.setup.cjs',
  moduleNameMapper: {
    '@mantine/(.*)': '<rootDir>/packages/@mantine/$1/src',
    '@mantine-tests/(.*)': '<rootDir>/packages/@mantine-tests/$1/src',
    '\\.(css)$': 'identity-obj-proxy',
    "(\\.+/.+)\\.js$": "$1",  // handle relative imports with .js extensions
  },
};
