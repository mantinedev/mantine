# Title
Package: @mantine/core
Import: import { Title } from '@mantine/core';
Description: h1-h6 heading

## Usage

Use the Title component to render h1-h6 headings with Mantine [theme](https://mantine.dev/llms/theming-theme-object.md) styles.
By default, `Title` has no margins and paddings.
You can change `font-size`, `font-weight` and `line-height` per heading with [theme.headings](https://mantine.dev/llms/theming-typography.md).

Set the `order` prop to render a specific element (h1-h6); the default order is `1`:

```tsx
import { Title } from '@mantine/core';

function Demo() {
  return (
    <>
      <Title order={1}>This is h1 title</Title>
      <Title order={2}>This is h2 title</Title>
      <Title order={3}>This is h3 title</Title>
      <Title order={4}>This is h4 title</Title>
      <Title order={5}>This is h5 title</Title>
      <Title order={6}>This is h6 title</Title>
    </>
  );
}
```


## Size

You can change the Title `size` independent of its `order`:

* If you set the size to `h1`-`h6`, then the component will add corresponding `font-size` and `line-height` from the [theme](https://mantine.dev/llms/theming-theme-object.md)
* If you set the size to any other value, then `line-height` will be calculated based on `order` – `size` will impact only `font-size`

```tsx
import { Title } from '@mantine/core';

function Demo() {
  return (
    <>
      <Title order={3} size="h1">
        H3 heading with h1 font-size
      </Title>
      <Title size="h4">H1 heading with h4 font-size</Title>
      <Title size={16}>H1 heading with 16px size</Title>
      <Title size="xs">H1 heading with xs size</Title>
    </>
  );
}
```


## Text wrap

Use the `textWrap` prop to control the [text-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap)
CSS property. It controls how text inside an element is wrapped.

```tsx
import { Title } from '@mantine/core';

function Demo() {
  return (
    <Title order={3} textWrap="wrap">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto
      cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!
    </Title>
  );
}
```


You can also set `textWrap` on [theme](https://mantine.dev/llms/theming-theme-object.md):

```tsx
import { createTheme, MantineProvider, Title } from '@mantine/core';

const theme = createTheme({
  headings: {
    textWrap: 'wrap',
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Title>Some very long title that should wrap</Title>
    </MantineProvider>
  );
}
```

## Line clamp

Set the `lineClamp` prop to truncate text after the specified number of lines:

```tsx
import { Title, Box } from '@mantine/core';

function Demo() {
  return (
    <Box maw={400}>
      <Title order={2} lineClamp={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque quas dolorum. Quo
        amet earum alias consequuntur quam accusamus a quae beatae, odio, quod provident consectetur
        non repudiandae enim adipisci?
      </Title>
    </Box>
  )
}
```



#### Props

**Title props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| lineClamp | number | - | Number of lines after which heading will be truncated |
| order | TitleOrder | - | Heading order (1-6), controls `font-size` style if `size` prop is not set |
| size | TitleSize | - | Changes title size, if not set, then size is controlled by `order` prop |
| textWrap | "wrap" \| "nowrap" \| "balance" \| "pretty" \| "stable" | - | Heading `text-wrap` CSS property |


#### Styles API

Title component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Title selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Title-root | Root element |

**Title CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --title-fw | Title `font-weight`, by default value from `theme.headings` |
| root | --title-fz | Title `font-size`, by default value from `theme.headings` |
| root | --title-lh | Title `line-height`, by default value from `theme.headings` |
| root | --title-line-clamp | Controls `-webkit-line-clamp` css property |
| root | --title-text-wrap | Controls `text-wrap` css property |

**Title data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-order | - | Value of the `order` prop |
| root | data-line-clamp | `lineClamp` prop is a number | - |
