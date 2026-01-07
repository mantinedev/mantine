# EslintConfig

# Mantine ESLint config

[eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)
is a set of ESLint rules and configurations used in Mantine projects.
You can use it in your project to ensure that your code follows the same
style and conventions as Mantine.

## Installation

Mantine ESLint config requires ESLint 9 or higher:

```bash
yarn add @eslint/js eslint eslint-plugin-jsx-a11y eslint-plugin-react typescript-eslint eslint-config-mantine
```

```bash
npm install @eslint/js eslint eslint-plugin-jsx-a11y eslint-plugin-react typescript-eslint eslint-config-mantine
```

## Usage

Add the following configuration to your `eslint.config.mjs`:

```tsx
import mantine from 'eslint-config-mantine';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  ...mantine,
  { ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}'] },
);
```

## Rules and source code

Mantine ESLint config extends recommended [ESLint](https://eslint.org/docs/rules/), [typescript-eslint](https://typescript-eslint.io/)
and [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) rules and adds custom rules and configurations.
You can find the full list of rules and source code in the [eslint-config-mantine repository](https://github.com/mantinedev/eslint-config-mantine/blob/master/eslint.config.js).
