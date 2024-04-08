module.exports = {
  extends: ['mantine', 'plugin:jest/recommended'],
  plugins: ['jest'],
  rules: {
    'jest/no-export': 'off',
    'jest/expect-expect': 'off',
    'jest/valid-title': 'off',
    'wrap-iife': 'off',
    'import/no-relative-packages': 'off',
    'no-spaced-func': 'off',
    'consistent-return': 'off',
  },
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
};
