import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.[tj]sx?$': ['@swc/jest', { jsc: { transform: { react: { runtime: 'automatic' } } } }],
  },
  testMatch: ['<rootDir>/src/examples/**/?(*.)+(test).ts?(x)'],
  testTimeout: 20000,
  setupFilesAfterEnv: ['<rootDir>/test-utils/jest.setup.ts'],
  moduleNameMapper: {
    '^@test-utils$': '<rootDir>/test-utils',
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css)$': 'identity-obj-proxy',
  },
};

export default config;
