# Center
Package: @mantine/core
Import: import { Center } from '@mantine/core';
Description: Centers content vertically and horizontally

## Usage

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

To use `Center` with inline elements, set the `inline` prop.
For example, you can center a link icon and label:

```tsx
import { Center, Anchor, Box } from '@mantine/core';
import { ArrowLeftIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Anchor href="https://mantine.dev" target="_blank">
      <Center inline>
        <ArrowLeftIcon size={12} />
        <Box ml={5}>Back to Mantine website</Box>
      </Center>
    </Anchor>
  );
}
```



#### Props

**Center props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | - | Content to center |
| inline | boolean | - | If set, `inline-flex` is used instead of `flex` |


#### Styles API

Center component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Center selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Center-root | Root element |
