# Collapse
Package: @mantine/core
Import: import { Collapse } from '@mantine/core';
Description: Animate presence with slide down/up transition

## Usage

#### Example: usage

```tsx
import { Button, Group, Text, Collapse, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Group justify="center" mb={5}>
        <Button onClick={toggle}>Toggle content</Button>
      </Group>

      <Collapse in={opened}>
        <Text>{/* ... content */}</Text>
      </Collapse>
    </Box>
  );
}
```


## Change transition

Set following props to control transition:

* `transitionDuration` – duration in ms
* `transitionTimingFunction` – timing function (ease, linear, etc.), defaults to `ease`
* `onTransitionEnd` – called when transition ends (both open and close)

#### Example: transition

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Button, Group, Text, Collapse, Box } from '@mantine/core';

function Demo() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Group justify="center" mb={5}>
        <Button onClick={toggle}>Toggle with linear transition</Button>
      </Group>

      <Collapse in={opened} transitionDuration={1000} transitionTimingFunction="linear">
        <Text>{/* ...content */}</Text>
      </Collapse>
    </Box>
  );
}
```


## Nested Collapse components

#### Example: nested

```tsx
function Demo() {
  return (
    <CollapsedDemo buttonProps={{ children: 'Root collapse' }}>
      <Text mt="md" size="lg" fw={700}>
        This collapse contains another collapse
      </Text>
      <Text mt="xs">{lorem}</Text>
      <CollapsedDemo buttonProps={{ variant: 'outline', children: 'Inner collapse' }}>
        <Text mt="md" size="lg" fw={700}>
          This collapse is inside another collapse
        </Text>
        <Text mt="xs">{lorem}</Text>
      </CollapsedDemo>
    </CollapsedDemo>
  );
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| animateOpacity | boolean | - | Determines whether opacity should be animated |
| in | boolean | required | Opened state |
| keepMounted | boolean | - | Keep element in DOM when collapsed, useful for nested collapses |
| onTransitionEnd | () => void | - | Called each time transition ends |
| transitionDuration | number | - | Transition duration in ms |
| transitionTimingFunction | string | - | Transition timing function |