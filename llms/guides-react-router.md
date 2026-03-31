# ReactRouter

# Usage with React Router

## Generate new application

Follow the [React Router getting started guide](https://reactrouter.com/start/framework/installation) to create a new React Router application:

```bash
npx create-react-router@latest my-react-router-app
```

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

Add styles imports, [MantineProvider](https://mantine.dev/llms/theming-mantine-provider.md) and [ColorSchemeScript](https://mantine.dev/llms/theming-color-schemes.md) to `app/root.tsx`:

```tsx
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <ColorSchemeScript />
        <Meta />
        <Links />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// ... other app/root.tsx content
```

All set! Start the development server:

```bash
npm run dev
```
