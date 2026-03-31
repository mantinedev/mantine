# Collapse
Package: @mantine/core
Import: import { Collapse } from '@mantine/core';
Description: Animate presence with slide down/up transition

## Usage

```tsx
import { Button, Group, Text, Collapse, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [expanded, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Group justify="center" mb={5}>
        <Button onClick={toggle}>Toggle content</Button>
      </Group>

      <Collapse expanded={expanded}>
        <Text>{/* ... content */}</Text>
      </Collapse>
    </Box>
  );
}
```


## Horizontal orientation

```tsx
import { Button, Collapse, Stack, Typography } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [expanded, handlers] = useDisclosure(false);

  return (
    <Stack h={240} align="flex-start">
      <Button onClick={handlers.toggle} w="fit-content">
        {expanded ? 'Collapse' : 'Expand'}
      </Button>

      <Collapse expanded={expanded} orientation="horizontal">
        <Typography bg="var(--mantine-color-blue-light)" p="xs" bdrs="md" w={200}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Typography>
      </Collapse>
    </Stack>
  );
}
```


## Change transition

Set the following props to control the transition:

* `transitionDuration` – duration in ms
* `transitionTimingFunction` – timing function (ease, linear, etc.), defaults to `ease`
* `onTransitionEnd` – called when transition ends (both open and close)

```tsx
import { useDisclosure } from '@mantine/hooks';
import { Button, Group, Text, Collapse, Box } from '@mantine/core';

function Demo() {
  const [expanded, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Group justify="center" mb={5}>
        <Button onClick={toggle}>Toggle with linear transition</Button>
      </Group>

      <Collapse expanded={expanded} transitionDuration={1000} transitionTimingFunction="linear">
        <Text>{/* ...content */}</Text>
      </Collapse>
    </Box>
  );
}
```


## Example: nested Collapse components

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


## use-collapse hook

[use-collapse](https://mantine.dev/llms/hooks-use-collapse.md) is the hook version of the `Collapse` component.
It allows more flexible usage and control over the collapse behavior.

```tsx
import { Button, Typography } from '@mantine/core';
import { useCollapse, useDisclosure } from '@mantine/hooks';

function Demo() {
  const [expanded, handlers] = useDisclosure(false);
  const getCollapseProps = useCollapse({ expanded });

  return (
    <>
      <Button onClick={handlers.toggle} mb="md">
        {expanded ? 'Collapse' : 'Expand'}
      </Button>

      <div {...getCollapseProps()}>
        <Typography bg="var(--mantine-color-blue-light)" p="xs" bdrs="md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </div>
    </>
  );
}
```



#### Props

**Collapse props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| animateOpacity | boolean | - | Determines whether the opacity is animated |
| expanded | boolean | required | Expanded state |
| keepMounted | boolean | - | If set, the element is kept in the DOM when collapsed. When `true`, React 19 `Activity` is used to preserve state while collapsed. When `false`, the element is unmounted after the exit animation. |
| onTransitionEnd | () => void | - | Called when the transition ends |
| onTransitionStart | () => void | - | Called when transition starts |
| orientation | "horizontal" \| "vertical" | - | Collapse orientation |
| transitionDuration | number | - | Transition duration in ms |
| transitionTimingFunction | string | - | Transition timing function |