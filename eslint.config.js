// @ts-check

const eslint = require('@eslint/js');
const jest = require('eslint-plugin-jest');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const react = require('eslint-plugin-react');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.eslint.json',
      },
    },
  },
  { ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}'] },
  {
    // ESLint specific rules
    // https://eslint.org/docs/latest/rules/
    rules: {
      'array-callback-return': 'error',
      'no-duplicate-imports': 'error',
      'no-var': 'error',
      'no-self-compare': 'error',
      'no-template-curly-in-string': 'error',
      'capitalized-comments': ['error', 'always', { ignorePattern: 'prettier' }],
      curly: 'error',
      'default-case': 'off',
      'default-case-last': 'error',
      'dot-notation': 'error',
      'no-alert': 'error',
      'no-console': 'warn',
      'no-else-return': 'error',
      'no-eval': 'warn',
      'no-lonely-if': 'error',
      'no-multi-assign': 'error',
      'no-multi-str': 'error',
      'no-param-reassign': 'error',
      'no-return-assign': 'error',
      'no-script-url': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-unneeded-ternary': 'error',
      'no-useless-call': 'error',
      'no-useless-constructor': 'error',
      'no-useless-return': 'error',
      'object-shorthand': 'error',
      'operator-assignment': ['error', 'always'],
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-exponentiation-operator': 'error',
      'prefer-object-has-own': 'error',
      'prefer-promise-reject-errors': 'error',
      'prefer-object-spread': 'error',
      'prefer-template': 'error',
      yoda: 'error',
      radix: 'error',
      eqeqeq: ['error', 'smart'],
      'no-undef': 'off',
    },
  },
  {
    // TypeScript ESLint specific rules
    // https://typescript-eslint.io/rules/
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/consistent-generic-constructors': 'error',
      '@typescript-eslint/method-signature-style': ['error', 'property'],
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/lines-between-class-members': 'off',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/comma-dangle': 'off',
      '@typescript-eslint/no-redeclare': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-loop-func': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'none',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  {
    // React specific rules
    plugins: { react },
    settings: { react: { version: 'detect' } },
    rules: {
      'react/button-has-type': 'error',
      'react/jsx-boolean-value': 'error',
      'react/jsx-curly-brace-presence': ['error', 'never'],
      'react/jsx-fragments': ['error', 'syntax'],
      'react/jsx-no-comment-textnodes': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-target-blank': 'error',
      'react/no-children-prop': 'error',
      'react/no-deprecated': 'error',
      'react/no-find-dom-node': 'error',
      'react/no-string-refs': 'error',
      'react/self-closing-comp': 'error',
      'react/void-dom-elements-no-children': 'error',
    },
  },
  {
    // Jest specific rules
    plugins: { jest },
    rules: {
      ...jest.configs['flat/recommended'].rules,
      'jest/no-export': 'off',
      'jest/expect-expect': 'off',
      'jest/valid-title': 'off',
    },
  },
  {
    // JSX A11y specific rules
    rules: {
      'jsx-a11y/no-autofocus': 'off',
      'jsx-a11y/control-has-associated-label': 'off',
      'jsx-a11y/mouse-events-have-key-events': 'off',
      'jsx-a11y/label-has-for': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'jsx-a11y/anchor-has-content': 'off',
    },
  }
);
