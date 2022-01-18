module.exports = {
  extends: ['../packages/eslint/eslint.config'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
