export default {
  testTimeout: 30_000,
  testEnvironment: 'jest-environment-jsdom',
  workerIdleMemoryLimit: '512MB',
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
    '^.+\\.m?js$': 'esbuild-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!@tanstack/)'],
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  modulePathIgnorePatterns: ['<rootDir>/.claude/'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/.claude/'],
  setupFilesAfterEnv: ['./jsdom.mocks.ts', './jest.react.ts'],
  moduleNameMapper: {
    '@mantine/(.*)': '<rootDir>/packages/@mantine/$1/src',
    '@mantine-tests/(.*)': '<rootDir>/packages/@mantine-tests/$1/src',
    '^culori/fn$': '<rootDir>/node_modules/culori/bundled/culori.cjs',
    '\\.(css)$': 'identity-obj-proxy',
    '(\\.+/.+)\\.js$': '$1',
  },
};
