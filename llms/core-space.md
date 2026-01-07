# Space
Package: @mantine/core
Import: import { Space } from '@mantine/core';
Description: Add horizontal or vertical spacing from theme

## Usage

Use `Space` component to add horizontal or vertical spacing between elements:

#### Example: horizontal

```tsx
import { Text, Space } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text>First line</Text>
      <Space />
      <Text>Second line</Text>
    </>
  );
}
```


<br />

#### Example: vertical

```tsx
import { Text, Space } from '@mantine/core';

function Demo() {
  return (
    <div style={{ display: 'flex' }}>
      <Text>First line</Text>
      <Space />
      <Text>Second line</Text>
    </div>
  );
}
```


## Where to use

In most cases, you would want to use margin props instead of `Space` when working with Mantine components:

```tsx
import { Space, Text } from '@mantine/core';

// Space is not required as the same can be achieved with `mt` prop
function Demo() {
  return (
    <>
      <Text>First line</Text>
      <Text mt="md">Second line</Text>
    </>
  );
}
```

But when you work with regular HTML elements you do not have access to `theme.spacing` and you may want to use
`Space` component to skip direct theme subscription:

```tsx
import { Space } from '@mantine/core';

// Margin props are not available on div,
// use Space to add spacing from theme
function Demo() {
  return (
    <>
      <div>First line</div>
      <Space h="md" />
      <div>Second line</div>
    </>
  );
}
```


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|