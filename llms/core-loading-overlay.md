# LoadingOverlay
Package: @mantine/core
Import: import { LoadingOverlay } from '@mantine/core';
Description: An overlay with centered loader

## Usage

`LoadingOverlay` renders an overlay with a loader over the parent element with relative position.
It is usually used to indicate loading state of forms.
Note that elements under overlay are still focusable with keyboard, remember to add additional logic to handle this case.

`LoadingOverlay` rendering is controlled by `visible` prop:

#### Example: usage

```tsx
import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);

  // Note that position: relative is required
  return (
    <>
      <Box pos="relative">
        <LoadingOverlay visible={visible} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
        {/* ...other content */}
      </Box>

      <Group justify="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}
```


## Loader props

You can pass props down to the [Loader](https://mantine.dev/core/loader) component with `loaderProps`:

#### Example: loaderProps

```tsx
import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(true);

  // Note that position: relative is required
  return (
    <>
      <Box pos="relative">
        <LoadingOverlay
          visible={visible}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'pink', type: 'bars' }}
        />
        {/* ...other content */}
      </Box>

      <Group justify="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}
```


## Custom inline loaders

To replace default loader with any custom content, set `loaderProps={{ children: <div>Your content</div> }}`.
You can put any React node inside `loaderProps.children`:

#### Example: customLoader

```tsx
import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);

  return (
    <>
      <Box pos="relative">
        <LoadingOverlay visible={visible} loaderProps={{ children: 'Loading...' }} />
        {/* ...other content */}
      </Box>

      <Group justify="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| loaderProps | LoaderProps | - | Props passed down to <code>Loader</code> component |
| overlayProps | OverlayProps | - | Props passed down to <code>Overlay</code> component |
| transitionProps | TransitionProps | - | Props passed down to <code>Transition</code> component |
| visible | boolean | - | Determines whether the overlay should be visible |
| zIndex | string | number | - | Controls overlay <code>z-index</code> |


#### Styles API

LoadingOverlay component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**LoadingOverlay selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-LoadingOverlay-root | Root element |
| overlay | .mantine-LoadingOverlay-overlay | `Overlay` component |
| loader | .mantine-LoadingOverlay-loader | `Loader` component |

**LoadingOverlay CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --lo-z-index | Controls `z-index` of the overlay and loader |