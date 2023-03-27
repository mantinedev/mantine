module.exports = {
  extends: ['mantine', 'plugin:jest/recommended'],
  plugins: ['jest'],
  rules: {
    'jest/no-export': 'off',
    'jest/expect-expect': 'off',
    'react/jsx-pascal-case': 'off',
    'newline-per-chained-call': 'off',
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
