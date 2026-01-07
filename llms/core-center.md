# Center
Package: @mantine/core
Import: import { Center } from '@mantine/core';
Description: Centers content vertically and horizontally

## Usage

#### Example: usage

```tsx
import { Center, Box } from '@mantine/core';

function Demo() {
  return (
    <Center maw={400} h={100} bg="var(--mantine-color-gray-light)">
      <Box bg="var(--mantine-color-blue-light)">All elements inside Center are centered</Box>
    </Center>
  );
}
```


## Inline

To use `Center` with inline elements set `inline` prop.
For example, you can center link icon and label:

#### Example: inline

```tsx
import { Center, Anchor, Box } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';

function Demo() {
  return (
    <Anchor href="https://mantine.dev" target="_blank">
      <Center inline>
        <IconArrowLeft size={12} />
        <Box ml={5}>Back to Mantine website</Box>
      </Center>
    </Anchor>
  );
}
```


<Polymorphic defaultElement="div" changeToElement="button" component="Center" />

## Polymorphic component

Center is a polymorphic component – its default root element is div, but it can be changed to any other element or component with component prop:

```tsx
import { Center } from '@mantine/core';

function Demo() {
  return <Center component="button" />;
}
```

**Polymorphic components with TypeScript**

Note that polymorphic components props types are different from regular components – they do not extend HTML element props of the default element. For example, CenterProps does not extend React.ComponentPropsWithoutRef<'div'> although div is the default element.

If you want to create a wrapper for a polymorphic component that is not polymorphic (does not support component prop), then your component props interface should extend HTML element props.


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Content to center |
| inline | boolean | - | If set, <code>inline-flex</code> is used instead of <code>flex</code> |


#### Styles API

Center component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Center selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Center-root | Root element |