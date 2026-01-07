# NavigationProgress
Package: @mantine/nprogress
Import: import { NavigationProgress } from '@mantine/nprogress';
Description: Navigation progress bar

## Installation

```bash
yarn add @mantine/nprogress
```

```bash
npm install @mantine/nprogress
```

After installation import package styles at the root of your application:

```tsx
import '@mantine/core/styles.css';
// ‼️ import nprogress styles after core package styles
import '@mantine/nprogress/styles.css';
```

## Setup NavigationProgress

Render `NavigationProgress` anywhere in your app within [MantineProvider](https://mantine.dev/theming/mantine-provider/):

```tsx
import { MantineProvider } from '@mantine/core';
import { NavigationProgress } from '@mantine/nprogress';

function Demo() {
  return (
    <MantineProvider>
      <NavigationProgress />
      {/* Your app here */}
    </MantineProvider>
  );
}
```

## Usage


