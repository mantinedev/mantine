# Paper
Package: @mantine/core
Import: import { Paper } from '@mantine/core';
Description: Renders white or dark background depending on color scheme

## Usage

#### Example: usage

```tsx
import { Text, Paper } from '@mantine/core';

function Demo() {
  return (
    <Paper p="xl">
      <Text>Paper is the most basic ui component</Text>
      <Text>
        Use it to create cards, dropdowns, modals and other components that require background
        with shadow
      </Text>
    </Paper>
  );
}
```


<Polymorphic defaultElement="div" changeToElement="button" component="Paper" withNext />

## Polymorphic component

Paper is a polymorphic component – its default root element is div, but it can be changed to any other element or component with component prop:

```tsx
import { Paper } from '@mantine/core';

function Demo() {
  return <Paper component="button" />;
}
```

You can also use components in component prop, for example, Next.js Link:

```tsx
import Link from 'next/link';
import { Paper } from '@mantine/core';

function Demo() {
  return <Paper component={Link} href="/" />;
}
```

**Polymorphic components with TypeScript**

Note that polymorphic components props types are different from regular components – they do not extend HTML element props of the default element. For example, PaperProps does not extend React.ComponentPropsWithoutRef<'div'> although div is the default element.

If you want to create a wrapper for a polymorphic component that is not polymorphic (does not support component prop), then your component props interface should extend HTML element props.


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set border-radius, numbers are converted to rem |
| shadow | MantineShadow | - | Key of <code>theme.shadows</code> or any valid CSS value to set <code>box-shadow</code> |
| withBorder | boolean | - | Adds border to the root element |


#### Styles API

Paper component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Paper selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Paper-root | Root element |

**Paper CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --paper-radius | Controls `border-radius` |
| root | --paper-shadow | Controls `box-shadow` |

**Paper data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-with-border | - | - |