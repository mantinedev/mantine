module.exports = {
  extends: ['./eslint/eslint.config'],
  parserOptions: {
    project: './tsconfig.json',
  },

  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
};
