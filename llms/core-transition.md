# Transition
Package: @mantine/core
Import: import { Transition } from '@mantine/core';
Description: Animate presence of component with pre-made animations

## Premade transitions

Mantine includes several premade transitions:

#### Example: transitions

```tsx
function Demo() {
  const transitions = keys(MANTINE_TRANSITIONS).map((transition) => (
    <Tooltip key={transition} label={transition} transitionProps={{ transition, duration: 300 }}>
      <Badge variant="light">{transition}</Badge>
    </Tooltip>
  ));

  return (
    <Group justify="center" style={{ cursor: 'default' }}>
      {transitions}
    </Group>
  );
}
```


To use one of them set `transition` property to one of these values:

```tsx
import { Transition } from '@mantine/core';

function Demo({ opened }: { opened: boolean }) {
  return (
    <Transition
      mounted={opened}
      transition="fade"
      duration={400}
      timingFunction="ease"
    >
      {(styles) => <div style={styles}>Your modal</div>}
    </Transition>
  );
}
```

## Custom transitions

You can create your own transition. `transition` is an object with 4 properties:

* `in` – styles for mounted state
* `out` – styles for unmounted state
* `common` (optional) – styles for both mounted and unmounted states
* `transitionProperty` – properties which participate in transition

#### Example: custom

```tsx
import { useState } from 'react';
import { useClickOutside } from '@mantine/hooks';
import { Transition, Paper, Button, Box } from '@mantine/core';

const scaleY = {
  in: { opacity: 1, transform: 'scaleY(1)' },
  out: { opacity: 0, transform: 'scaleY(0)' },
  common: { transformOrigin: 'top' },
  transitionProperty: 'transform, opacity',
};

function Demo() {
  const [opened, setOpened] = useState(false);
  const clickOutsideRef = useClickOutside(() => setOpened(false));

  return (
    <Box
      maw={200}
      pos="relative"
      style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}
    >
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>
      <Transition
        mounted={opened}
        transition={scaleY}
        duration={200}
        timingFunction="ease"
        keepMounted
      >
        {(transitionStyle) => (
          <Paper
            shadow="md"
            p="xl"
            h={120}
            pos="absolute"
            top={0}
            left={0}
            right={0}
            ref={clickOutsideRef}
            style={{ ...transitionStyle, zIndex: 1 }}
          >
            Dropdown
          </Paper>
        )}
      </Transition>
    </Box>
  );
}
```


## Enter and exit delay

Use `enterDelay` and `exitDelay` props to delay transition start. Values are in milliseconds:

#### Example: delay

```tsx
import { useState } from 'react';
import { Button, Flex, Paper, Transition } from '@mantine/core';

export function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <Flex maw={200} pos="relative" justify="center" m="auto">
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>

      <Transition mounted={opened} transition="pop" enterDelay={500} exitDelay={300}>
        {(transitionStyle) => (
          <Paper
            shadow="md"
            p="xl"
            h={120}
            pos="absolute"
            inset={0}
            bottom="auto"
            onClick={() => setOpened(false)}
            style={{ ...transitionStyle, zIndex: 1 }}
          >
            Click to close
          </Paper>
        )}
      </Transition>
    </Flex>
  );
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | (styles: CSSProperties) => Element | required | Render function with transition styles argument |
| duration | number | - | Transition duration in ms |
| enterDelay | number | - | Delay in ms before enter transition starts |
| exitDelay | number | - | Delay in ms before exit transition starts |
| exitDuration | number | - | Exit transition duration in ms |
| keepMounted | boolean | - | If set, the element is not unmounted from the DOM when hidden, <code>display: none</code> styles are applied instead |
| mounted | boolean | required | Determines whether component should be mounted to the DOM |
| onEnter | () => void | - | Called when enter transition starts |
| onEntered | () => void | - | Called when enter transition ends |
| onExit | () => void | - | Called when exit transition starts |
| onExited | () => void | - | Called when exit transition ends |
| timingFunction | string | - | Transition timing function |
| transition | MantineTransition | - | Transition name or object |