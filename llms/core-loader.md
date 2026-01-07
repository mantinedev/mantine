# Loader
Package: @mantine/core
Import: import { Loader } from '@mantine/core';
Description: Indicate loading state

## Usage

`Loader` component supports 3 types of loaders: `oval`, `bars` and `dots` by default. All
loaders are animated with CSS for better performance.

#### Example: configurator

```tsx
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader />;
}
```


## Size prop

You can pass any valid CSS values and numbers to `size` prop. Numbers are treated as px, but
converted to [rem](https://mantine.dev/styles/rem). For example, `size={32}` will produce
`--loader-size: 2rem` CSS variable.

#### Example: size

```tsx
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader />;
}
```


## Adding custom loaders

`Loader` component is used in other components ([Button](https://mantine.dev/core/button), [ActionIcon](https://mantine.dev/core/action-icon), [LoadingOverlay](https://mantine.dev/core/loading-overlay), etc.).
You can change loader type with [default props](https://mantine.dev/theming/default-props) by setting `type`.
You can also add a custom CSS or SVG loader with `loaders` [default prop](https://mantine.dev/theming/default-props).

### Custom CSS only loader

Note that in order for `size` and `color` props to work with custom loaders, you need to
use `--loader-size` and `--loader-color` CSS variables in your loader styles.

#### Example: cssLoader

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

It is recommended to use CSS only loaders, as SVG based animations may have the following issues:

* High CPU usage – loader may look glitchy on low-end devices
* Loader animation may not start playing until js is loaded – user may see static loader

In your SVG loader, you need to use `--loader-size` and `--loader-color` variables the same
way as in CSS only custom loader in order for `size` and `color` props to work. Usually,
you would need to set `width` and `height` to `var(--loader-size)` and `fill`/`stroke` to
`var(--loader-color)`.

#### Example: customType

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

`Loader` supports `children` prop. If you pass anything to `children`, it will be rendered
instead of the loader. This is useful when you want to control `Loader` representation
in components that use `loaderProps`, for example [Button](https://mantine.dev/core/button/), [LoadingOverlay](https://mantine.dev/core/loading-overlay/), [Dropzone](https://mantine.dev/x/dropzone/).

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
| children | React.ReactNode | - | Overrides default loader with given content |
| color | MantineColor | - | Key of <code>theme.colors</code> or any valid CSS color |
| loaders | Partial<Record<(string & {}) | "bars" | "dots" | "oval", MantineLoaderComponent>> | - | Object of loaders components, can be customized via default props or inline. |
| size | number | MantineSize | (string & {}) | - | Controls <code>width</code> and <code>height</code> of the loader. <code>Loader</code> has predefined <code>xs</code>-<code>xl</code> values. Numbers are converted to rem. |
| type | (string & {}) | "bars" | "dots" | "oval" | - | Loader type, key of <code>loaders</code> prop |


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