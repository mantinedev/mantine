# Vite

# Usage with Vite

## Generate new application

Follow the [Vite getting started](https://vitejs.dev/guide/) guide to create a new Vite application:

## Installation

## PostCSS setup

Install PostCSS plugins and [postcss-preset-mantine](https://mantine.dev/llms/styles-postcss-preset.md):

```bash
yarn add postcss postcss-preset-mantine postcss-simple-vars
```

```bash
npm install postcss postcss-preset-mantine postcss-simple-vars
```

Create a `postcss.config.cjs` file at the root of your application with the following content:

```js
module.exports = {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '36em',
        'mantine-breakpoint-sm': '48em',
        'mantine-breakpoint-md': '62em',
        'mantine-breakpoint-lg': '75em',
        'mantine-breakpoint-xl': '88em',
      },
    },
  },
};
```

## Setup

Add styles imports and [MantineProvider](https://mantine.dev/llms/theming-mantine-provider.md) to your application root component (usually `App.tsx`):

```tsx
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

export default function App() {
  return <MantineProvider>{/* Your app here */}</MantineProvider>;
}
```

All set! Start the development server:

```bash
npm run dev
```
