# Anchor
Package: @mantine/core
Import: import { Anchor } from '@mantine/core';
Description: Display link with theme styles

## Usage

```tsx
import { Anchor } from '@mantine/core';

function Demo() {
  return (
    <Anchor href="https://mantine.dev/" target="_blank">
      Anchor component
    </Anchor>
  );
}
```


## Underline

Use the `underline` prop to configure the `text-decoration` property. It accepts the following values:

* `always` - link is always underlined
* `hover` - link is underlined on hover
* `never` - link is never underlined
* `not-hover` - link is underlined when not hovered

```tsx
import { Anchor, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Anchor href="https://mantine.dev/" target="_blank" underline="always">
        Underline always
      </Anchor>
      <Anchor href="https://mantine.dev/" target="_blank" underline="hover">
        Underline hover
      </Anchor>
      <Anchor href="https://mantine.dev/" target="_blank" underline="never">
        Underline never
      </Anchor>
      <Anchor href="https://mantine.dev/" target="_blank" underline="not-hover">
        Underline not-hover
      </Anchor>
    </Group>
  );
}
```


You can also configure the `underline` prop for all `Anchor` components with [default props](https://mantine.dev/llms/theming-default-props.md):

```tsx
import { Anchor, createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  components: {
    Anchor: Anchor.extend({
      defaultProps: {
        underline: 'always',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      {/* Your app here */}
    </MantineProvider>
  );
}
```

## Text props

The `Anchor` component supports all [Text](https://mantine.dev/llms/core-text.md) component props.
For example, you can use the gradient variant:

```tsx
import { Anchor } from '@mantine/core';

function Demo() {
  return (
    <Anchor
      variant="gradient"
      gradient={{ from: 'pink', to: 'yellow' }}
      fw={500}
      fz="lg"
      href="#text-props"
    >
      A link with pink to yellow gradient
    </Anchor>
  );
}
```



#### Props

**Anchor props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| gradient | MantineGradient | - | Gradient configuration, ignored when `variant` is not `gradient` |
| inherit | boolean | - | Determines whether font properties should be inherited from the parent |
| inline | boolean | - | Sets `line-height` to 1 for centering |
| lineClamp | number | - | Number of lines after which Text will be truncated |
| size | MantineSize \| (string & {}) | - | Controls `font-size` and `line-height` |
| truncate | TextTruncate | - | Side on which Text must be truncated, if `true`, text is truncated from the start |
| underline | "always" \| "hover" \| "not-hover" \| "never" | - | Defines when `text-decoration: underline` styles are applied. |