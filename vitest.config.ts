import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./jsdom.mocks.ts'],
    include: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  },
  resolve: {
    alias: [
      { find: /^@mantine\/(.*)$/, replacement: `${rootDir}packages/@mantine/$1/src` },
      { find: /^@mantine-tests\/(.*)$/, replacement: `${rootDir}packages/@mantine-tests/$1/src` },
      { find: /^(\.{1,2}\/.*)\.js$/, replacement: '$1' },
    ],
  },
});
