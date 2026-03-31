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

Render the `NavigationProgress` component anywhere in your app within [MantineProvider](https://mantine.dev/llms/theming-mantine-provider.md):

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

```tsx
import { Button, Group } from '@mantine/core';
import { nprogress, NavigationProgress } from '@mantine/nprogress';

function Demo() {
  return (
    <>
      <NavigationProgress />
      <Group justify="center">
        <Button onClick={() => nprogress.start()}>Start</Button>
        <Button onClick={() => nprogress.stop()}>Stop</Button>
        <Button onClick={() => nprogress.increment()}>Increment</Button>
        <Button onClick={() => nprogress.decrement()}>Decrement</Button>
        <Button onClick={() => nprogress.set(50)}>Set 50%</Button>
        <Button onClick={() => nprogress.reset()}>Reset</Button>
        <Button onClick={() => nprogress.complete()}>Complete</Button>
      </Group>
    </>
  );
}
```

