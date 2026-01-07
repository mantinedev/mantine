# Anchor
Package: @mantine/core
Import: import { Anchor } from '@mantine/core';
Description: Display link with theme styles

## Usage

#### Example: usage

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

Use `underline` prop to configure `text-decoration` property. It accepts the following values:

* `always` - link is always underlined
* `hover` - link is underlined on hover
* `never` - link is never underlined
* `not-hover` - link is underlined when not hovered

#### Example: decoration

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


You can also configure `underline` prop for all `Anchor` components with [default props](https://mantine.dev/theming/default-props):

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

`Anchor` components supports all [Text](https://mantine.dev/core/text) component props.
For example, you can use gradient variant:

#### Example: textProps

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


<Polymorphic defaultElement="a" changeToElement="button" component="Anchor" withNext />

## Polymorphic component

Anchor is a polymorphic component – its default root element is a, but it can be changed to any other element or component with component prop:

```tsx
import { Anchor } from '@mantine/core';

function Demo() {
  return <Anchor component="button" />;
}
```

You can also use components in component prop, for example, Next.js Link:

```tsx
import Link from 'next/link';
import { Anchor } from '@mantine/core';

function Demo() {
  return <Anchor component={Link} href="/" />;
}
```

**Polymorphic components with TypeScript**

Note that polymorphic components props types are different from regular components – they do not extend HTML element props of the default element. For example, AnchorProps does not extend React.ComponentPropsWithoutRef<'a'> although a is the default element.

If you want to create a wrapper for a polymorphic component that is not polymorphic (does not support component prop), then your component props interface should extend HTML element props.

<GetElementRef component="Anchor" refType="a" />

## Get element ref

```tsx
import { useRef } from 'react';
import { Anchor } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLAnchorElement>(null);
  return <Anchor ref={ref} />;
}
```


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| color | MantineColor | - | @deprecated Use <code>c</code> prop instead |
| gradient | MantineGradient | - | Gradient configuration, ignored when <code>variant</code> is not <code>gradient</code> |
| inherit | boolean | - | Determines whether font properties should be inherited from the parent |
| inline | boolean | - | Sets <code>line-height</code> to 1 for centering |
| lineClamp | number | - | Number of lines after which Text will be truncated |
| size | MantineSize | (string & {}) | - | Controls <code>font-size</code> and <code>line-height</code> |
| truncate | TextTruncate | - | Side on which Text must be truncated, if <code>true</code>, text is truncated from the start |
| underline | "always" | "hover" | "not-hover" | "never" | - | Defines when <code>text-decoration: underline</code> styles are applied. |