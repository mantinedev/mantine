module.exports = {
  extends: ['mantine', 'plugin:jest/recommended'],
  plugins: ['jest'],
  rules: {
    'jest/no-export': 'off',
    'jest/expect-expect': 'off',
    'jest/valid-title': 'off',
  },
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
};
