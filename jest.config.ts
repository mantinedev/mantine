export default {
  testTimeout: 30_000,
  testEnvironment: 'warpdom/jest',
  workerIdleMemoryLimit: '512MB',
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  modulePathIgnorePatterns: ['<rootDir>/.claude/'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/.claude/'],
  setupFilesAfterEnv: ['./jest.mocks.ts', './jest.react.ts'],
  moduleNameMapper: {
    '@mantine/(.*)': '<rootDir>/packages/@mantine/$1/src',
    '@mantine-tests/(.*)': '<rootDir>/packages/@mantine-tests/$1/src',
    '\\.(css)$': 'identity-obj-proxy',
    '(\\.+/.+)\\.js$': '$1',
  },
};
