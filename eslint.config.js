const mantine = require('eslint-config-mantine');
const jest = require('eslint-plugin-jest');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
  ...mantine,
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.eslint.json',
      },
    },
  },
  { ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}'] },
  {
    rules: {
      '@typescript-eslint/no-deprecated': 'warn',
    },
  },
  {
    plugins: { jest },
    rules: {
      ...jest.configs['flat/recommended'].rules,
      'jest/no-export': 'off',
      'jest/expect-expect': 'off',
      'jest/valid-title': 'off',
      '@typescript-eslint/no-namespace': 'off',
      'no-console': 'error',
    },
  },
  {
    rules: {
      '@typescript-eslint/no-unsafe-function-type': 'off',
    },
  },
  {
    files: ['**/*.story.tsx'],
    rules: {
      'no-console': 'off',
      'react/button-has-type': 'off',
    },
  }
);
