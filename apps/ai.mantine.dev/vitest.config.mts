import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@test-utils': path.resolve(import.meta.dirname, 'test-utils'),
      'vite-plus/test': 'vitest',
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
    include: ['src/examples/**/*.test.{ts,tsx}'],
    passWithNoTests: true,
  },
});
