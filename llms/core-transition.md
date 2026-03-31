# Transition
Package: @mantine/core
Import: import { Transition } from '@mantine/core';
Description: Animate presence of component with pre-made animations

## Usage

The Transition component is designed to animate the presence of elements with
fixed or absolute positioning, such as dropdowns, modals, or tooltips. Other Mantine
components (like [Modal](https://mantine.dev/llms/core-modal.md) and [Tooltip](https://mantine.dev/llms/core-tooltip.md)) use Transition internally
for their animations.

Note that the Transition component is not intended to be a comprehensive solution for all
animations. It is a simple utility for animating the presence of elements
with fixed or absolute positioning. If you need to implement more complex animations,
consider using [Motion](https://motion.dev/), [React Spring](https://www.react-spring.dev/),
or other dedicated animation libraries.

Example usage of the Transition component:

```tsx
import { Transition } from '@mantine/core';

function Demo({ opened }: { opened: boolean }) {
  return (
    <Transition mounted={opened} transition="fade">
      {(styles) => <div style={styles}>Your modal</div>}
    </Transition>
  );
}
```

## Premade transitions

Mantine includes several premade transitions:

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


To use one of them, set the `transition` property to one of these values:

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
* `transitionProperty` – properties which participate in the transition

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

Use the `enterDelay` and `exitDelay` props to delay the transition start. Values are in milliseconds:

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


## Reduced motion

Transition respects the `prefers-reduced-motion` media query and your theme's
`respectReducedMotion` setting. When reduced motion is preferred, all
transitions complete instantly:

```tsx
import { createTheme, MantineProvider, Transition } from '@mantine/core';

const theme = createTheme({
  respectReducedMotion: true, // default
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Transition mounted transition="fade" duration={400}>
        {(styles) => <div style={styles}>Content</div>}
      </Transition>
    </MantineProvider>
  );
}
```

This improves accessibility for users with vestibular disorders who may
experience motion sickness from animations.

## Lifecycle callbacks

Use lifecycle callbacks to perform actions at different stages of the transition:

* `onEnter` - Called when enter transition starts
* `onEntered` - Called when enter transition completes
* `onExit` - Called when exit transition starts
* `onExited` - Called when exit transition completes

```tsx
import { Transition } from '@mantine/core';

function Demo() {
  return (
    <Transition
      mounted
      transition="fade"
      duration={200}
      onEnter={() => console.log('Enter started')}
      onEntered={() => console.log('Enter completed')}
      onExit={() => console.log('Exit started')}
      onExited={() => console.log('Exit completed')}
    >
      {(styles) => <div style={styles}>Content</div>}
    </Transition>
  );
}
```

## Keep mounted

By default, the element is unmounted from the DOM when the transition is
complete. Use `keepMounted` to keep the element mounted with `display: none`:

```tsx
import { Transition } from '@mantine/core';

function Demo() {
  return (
    <Transition mounted={false} keepMounted transition="fade">
      {(styles) => <div style={styles}>Content</div>}
    </Transition>
  );
}
```

This is useful when you want to:

* Preserve element state during hide/show
* Avoid remounting overhead
* Maintain focus/scroll position


#### Props

**Transition props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | (styles: CSSProperties) => Element | required | Render function with transition styles argument |
| duration | number | - | Transition duration in ms |
| enterDelay | number | - | Delay in ms before enter transition starts |
| exitDelay | number | - | Delay in ms before exit transition starts |
| exitDuration | number | - | Exit transition duration in ms |
| keepMounted | boolean | - | If set, the element is kept in the DOM when hidden. React 19 `Activity` is used to preserve state while the element is not visible. |
| mounted | boolean | required | Determines whether component should be mounted to the DOM |
| onEnter | () => void | - | Called when enter transition starts |
| onEntered | () => void | - | Called when enter transition ends |
| onExit | () => void | - | Called when exit transition starts |
| onExited | () => void | - | Called when exit transition ends |
| timingFunction | string | - | Transition timing function |
| transition | MantineTransition | - | Transition name or object |