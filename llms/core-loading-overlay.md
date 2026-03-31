# LoadingOverlay
Package: @mantine/core
Import: import { LoadingOverlay } from '@mantine/core';
Description: An overlay with centered loader

## Usage

`LoadingOverlay` renders an overlay with a loader over the parent element with relative position.
It is usually used to indicate the loading state of forms.
Note that elements under the overlay are still focusable with the keyboard, so remember to add additional logic to handle this case.

The `LoadingOverlay` rendering is controlled by the `visible` prop:

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

You can pass props down to the [Loader](https://mantine.dev/llms/core-loader.md) component with `loaderProps`:

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

To replace the default loader with any custom content, set `loaderProps={{ children: <div>Your content</div> }}`.
You can put any React node inside `loaderProps.children`:

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

**LoadingOverlay props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| loaderProps | LoaderProps | - | Props passed down to `Loader` component |
| onEnter | () => void | - | Called when transition starts |
| onEntered | () => void | - | Called when transition ends |
| onExit | () => void | - | Called when exit transition starts |
| onExited | () => void | - | Called when exit transition ends |
| overlayProps | OverlayProps | - | Props passed down to `Overlay` component. Use to customizing blur, opacity, color and other properties. |
| transitionProps | TransitionProps | - | Props passed down to `Transition` component. Set `duration` to create custom transition or override default transition. |
| visible | boolean | - | Controls overlay visibility. Typically used with state (useState, useDisclosure). |
| zIndex | string \| number | - | Controls `z-index` of both the overlay and loader. The loader receives `z-index + 1`. |


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
