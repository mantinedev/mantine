# Container
Package: @mantine/core
Import: import { Container } from '@mantine/core';
Description: Center content with padding and max-width

## Grid strategy

Starting from 8.2.0, `Container` supports `strategy="grid"` prop which enables more
features.

Differences from the default `strategy="block"`:

* Uses `display: grid` instead of `display: block`
* Does not include default inline padding
* Does not set `max-width` on the root element (uses grid template columns instead)

Features supported by `strategy="grid"`:

* Everything that is supported by `strategy="block"`
* Children with `data-breakout` attribute take the entire width of the container's parent element
* Children with `data-container` inside `data-breakout` have the same width as the main grid column

Example of using breakout feature:

#### Example: breakout

```tsx
import { Box, Container } from '@mantine/core';

function Demo() {
  return (
    <Container strategy="grid" size={500}>
      <Box bg="var(--mantine-color-indigo-light)" h={50}>
        Main content
      </Box>

      <Box data-breakout bg="var(--mantine-color-indigo-light)" mt="xs">
        <div>Breakout</div>

        <Box data-container bg="indigo" c="white" h={50}>
          <div>Container inside breakout</div>
        </Box>
      </Box>
    </Container>
  );
}
```


## Usage

`Container` centers content and limits its `max-width` to the value specified in `size` prop.
Note that the `size` prop does not make `max-width` responsive, for example,
when it set to `lg` it will always be `lg` regardless of screen size.

#### Example: usage

```tsx
import { Container } from '@mantine/core';

function Demo() {
  const demoProps = {
    bg: 'var(--mantine-color-blue-light)',
    h: 50,
    mt: 'md',
  };

  return (
    <>
      <Container {...demoProps}>Default Container</Container>

      <Container size="xs" {...demoProps}>
        xs Container
      </Container>

      <Container px={0} size={480} {...demoProps}>
        480px Container without padding
      </Container>
    </>
  );
}
```


## Fluid

Set `fluid` prop to make container fluid, it will take 100% of available width,
it is the same as setting `size="100%"`.

#### Example: fluid

```tsx
import { Container } from '@mantine/core';

function Demo() {
  return (
    <Container fluid h={50} bg="var(--mantine-color-blue-light)">
      Fluid container has 100% max-width
    </Container>
  );
}
```


## Customize sizes

You can customize existing `Container` sizes and add new ones with [CSS variables](https://mantine.dev/styles/styles-api)
on [theme](https://mantine.dev/theming/theme-object):

#### Example: sizes

```tsx
import { Container, MantineProvider, createTheme, rem } from '@mantine/core';

const CONTAINER_SIZES: Record<string, number> = {
  xxs: 300,
  xs: 400,
  sm: 500,
  md: 600,
  lg: 700,
  xl: 800,
  xxl: 900,
};

const theme = createTheme({
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid
            ? '100%'
            : size !== undefined && size in CONTAINER_SIZES
              ? rem(CONTAINER_SIZES[size])
              : rem(size),
        },
      }),
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Container size="xxs" bg="var(--mantine-color-blue-light)">
        Container with custom size
      </Container>
    </MantineProvider>
  );
}
```


## Responsive max-width

To make `Container` `max-width` responsive, use [Styles API](https://mantine.dev/styles/styles-api) to set
`classNames`. For example, you can add `responsive` size that will make `Container`
`max-width` different depending on screen size:

#### Example: responsive

```tsx
// Demo.tsx
import cx from 'clsx';
import { MantineProvider, Container, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: cx({ [classes.responsiveContainer]: size === 'responsive' }),
      }),
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Container size="responsive" bg="var(--mantine-color-blue-light)">
        Container with responsive size
      </Container>
    </MantineProvider>
  );
}

// Demo.module.css
.responsiveContainer {
  max-width: 300px;

  @media (min-width: em(400px)) {
    max-width: 400px;
  }

  @media (min-width: em(600px)) {
    max-width: 600px;
  }
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| fluid | boolean | - | If set, the container takes 100% width of its parent and <code>size</code> prop is ignored. |
| size | number | MantineSize | (string & {}) | - | <code>max-width</code> of the container, value is not responsive – it is the same for all screen sizes. Numbers are converted to rem. Ignored when <code>fluid</code> prop is set. |
| strategy | "block" | "grid" | - | Centering strategy |


#### Styles API

Container component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Container selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Container-root | Root element |

**Container CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --container-size | Controls container `max-width` |