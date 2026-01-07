# Storybook

# Setup Mantine in Storybook

Note that this guide covers only Storybook 10.0+ integration. If you are using older version of Storybook,
it will not work for you.

## Add Storybook to your application

If you already have Storybook in your application, you can skip this step.

Follow [Storybook getting started](https://storybook.js.org/docs/react/get-started/install/) guide
to add Storybook to your application:

```bash
npx storybook@latest init
```

## Configure addons

Install `@storybook/addon-themes` Storybook addon:

```bash
yarn add @storybook/addon-themes
```

```bash
npm install @storybook/addon-themes
```

Add addons to `.storybook/main.ts`:

```tsx
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  // ... other config properties
  addons: ['@storybook/addon-themes'],
};

export default config;
```

## Theme object

To shared [theme object](https://mantine.dev/theming/theme-object) between your application and Storybook, create
`src/theme.ts` (or any other path in your application) file with your theme override:

```tsx
// src/theme.ts
import { createTheme } from '@mantine/core';

export const theme = createTheme({
  fontFamily: 'serif',
  // ... other theme override properties
});
```

Then you will be able to use the same theme both in your application and Storybook:

```tsx
// In your application

import { MantineProvider } from '@mantine/core';
import { theme } from './theme';

function App() {
  return <MantineProvider theme={theme}>{/* ... */}</MantineProvider>;
}
```

## Storybook preview

If `.storybook/preview.tsx` file does not exist, create it and add
the following content:

```tsx
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../theme';

export const parameters = {
  layout: 'fullscreen',
  options: {
    showPanel: false,
    storySort: (a, b) => a.title.localeCompare(b.title, undefined, { numeric: true }),
  },
  backgrounds: { disable: true },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Mantine color scheme',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
    },
  },
};

export const decorators = [
  (renderStory: any, context: any) => {
    const scheme = (context.globals.theme || 'light') as 'light' | 'dark';
    return (
      <MantineProvider theme={theme} forceColorScheme={scheme}>
        <ColorSchemeScript />
        {renderStory()}
      </MantineProvider>
    );
  },
];
```

All set! Start Storybook:

```bash
npm run storybook
```
