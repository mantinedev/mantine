# Mantine ESLint and Prettier configuration

Installation:

```sh
npx install-peerdeps @mantine/eslint-config --dev
```

In your `.eslintrc.js` file:

```tsx
module.exports = {
  extends: ['@mantine/eslint-config'],
  parserOptions: {
    project: './tsconfig.json',
  },
};
```

In your `.prettierrc.js` file:

```tsx
module.exports = require('@mantine/eslint-config/prettier.config');
```
