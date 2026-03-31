# Loader
Package: @mantine/core
Import: import { Loader } from '@mantine/core';
Description: Indicate loading state

## Usage

The `Loader` component supports 3 types of loaders by default: `oval`, `bars`, and `dots`. All
loaders are animated with CSS for better performance.

```tsx
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader color="blue" size="md" type="oval" />;
}
```


## Size prop

You can pass any valid CSS values or numbers to the `size` prop. Numbers are treated as px, but
converted to [rem](https://mantine.dev/llms/styles-rem.md). For example, `size={32}` will produce the
`--loader-size: 2rem` CSS variable.

```tsx
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader size={30} />;
}
```


## Adding custom loaders

The `Loader` component is used in other components ([Button](https://mantine.dev/llms/core-button.md), [ActionIcon](https://mantine.dev/llms/core-action-icon.md), [LoadingOverlay](https://mantine.dev/llms/core-loading-overlay.md), etc.).
You can change the loader type with [default props](https://mantine.dev/llms/theming-default-props.md) by setting `type`.
You can also add a custom CSS or SVG loader with the `loaders` [default prop](https://mantine.dev/llms/theming-default-props.md).

### Custom CSS only loader

Note that in order for the `size` and `color` props to work with custom loaders, you need to
use the `--loader-size` and `--loader-color` CSS variables in your loader styles.

```tsx
import { MantineProvider, Loader } from '@mantine/core';
import { CssLoader } from './CssLoader';

const theme = createTheme({
  components: {
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, custom: CssLoader },
        type: 'custom',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Loader />
    </MantineThemeProvider>
  );
}
```


### Custom SVG loader

It is recommended to use CSS-only loaders, as SVG-based animations may have the following issues:

* High CPU usage – the loader may look glitchy on low-end devices
* Loader animation may not start playing until JS is loaded – users may see a static loader

In your SVG loader, you need to use the `--loader-size` and `--loader-color` variables the same
way as in CSS-only custom loaders in order for the `size` and `color` props to work. Usually,
you would need to set `width` and `height` to `var(--loader-size)` and `fill`/`stroke` to
`var(--loader-color)`.

```tsx
import { MantineProvider, Loader } from '@mantine/core';
import { RingLoader } from './RingLoader';

const theme = createTheme({
  components: {
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, ring: RingLoader },
        type: 'ring',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Loader />
    </MantineThemeProvider>
  );
}
```


## children prop

The `Loader` supports the `children` prop. If you pass anything to `children`, it will be rendered
instead of the loader. This is useful when you want to control the `Loader` representation
in components that use `loaderProps`, for example [Button](https://mantine.dev/llms/core-button.md), [LoadingOverlay](https://mantine.dev/llms/core-loading-overlay.md), [Dropzone](https://mantine.dev/llms/x-dropzone.md).

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

**Loader props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Overrides default loader with given content |
| color | MantineColor | - | Key of `theme.colors` or any valid CSS color |
| loaders | Partial<Record<(string & {}) \| "bars" \| "dots" \| "oval", MantineLoaderComponent>> | - | Object of loaders components, can be customized via default props or inline. |
| size | MantineSize \| number | - | Controls `width` and `height` of the loader. `Loader` has predefined `xs`-`xl` values. Numbers are converted to rem. |
| type | (string & {}) \| "bars" \| "dots" \| "oval" | - | Loader type, key of `loaders` prop |


#### Styles API

Loader component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Loader selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Loader-root | Root element |

**Loader CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --loader-color | Control loader color |
