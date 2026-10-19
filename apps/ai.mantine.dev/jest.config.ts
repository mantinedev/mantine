import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
    '^.+\\.m?js$': 'esbuild-jest',
  },
  testMatch: ['<rootDir>/src/examples/**/?(*.)+(test).ts?(x)'],
  setupFilesAfterEnv: ['<rootDir>/test-utils/jest.setup.ts'],
  moduleNameMapper: {
    '^@test-utils$': '<rootDir>/test-utils',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^vite-plus/test$': '<rootDir>/test-utils/vite-plus-test.ts',
    '\\.(css)$': 'identity-obj-proxy',
  },
};

export default config;
