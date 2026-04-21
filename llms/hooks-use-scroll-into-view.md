# useScrollIntoView
Package: @mantine/hooks
Import: import { UseScrollIntoView } from '@mantine/hooks';

## Usage

The `use-scroll-into-view` hook handles scroll behavior for any scrollable element. Basic usage works the same way as `element.scrollIntoView()`.
The hook adjusts the scrolling animation with respect to the `reduced-motion` user preference.

```tsx
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Text, Group, Box } from '@mantine/core';

function Demo() {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });

  return (
    <Group justify="center">
      <Button
        onClick={() =>
          scrollIntoView({
            alignment: 'center',
          })
        }
      >
        Scroll to target
      </Button>
      <Box
        style={{
          width: '100%',
          height: '50vh',
          backgroundColor: 'var(--mantine-color-blue-light)',
        }}
      />
      <Text ref={targetRef}>Hello there</Text>
    </Group>
  );
}
```


## API

The hook is configured with a settings object:

* `onScrollFinish` – function that will be called after the scroll animation
* `onScrollCancel` – function that will be called when the scroll animation is canceled by user interaction
* `easing` – custom math easing function
* `duration` - duration of the scroll animation in milliseconds
* `axis` - axis of the scroll
* `cancelable` - indicator if the animation may be interrupted by user scrolling
* `offset` - additional distance between the nearest edge and the element
* `isList` - indicator that prevents content jumping in scrolling lists with multiple targets, for example Select, Carousel

The hook returns an object with:

* `scrollIntoView` – function that starts the scroll animation
* `cancel` – function that stops the scroll animation
* `scrolling` – boolean indicating whether a scroll animation is in progress
* `targetRef` - ref of the target HTML node
* `scrollableRef` - ref of the scrollable parent HTML element; if not used, the document element will be used

The returned `scrollIntoView` function accepts a single optional argument `alignment` - optional target element alignment relative to the parent based on the current axis.

```tsx
import { useScrollIntoView } from '@mantine/hooks';

const { scrollIntoView } = useScrollIntoView();

scrollIntoView({ alignment: 'center' });
```

## Easing

The hook accept custom `easing` math function to control the flow of animation.
It takes `t` argument, which is a number between `0` and `1`.

Default easing is `easeInOutQuad` - more info [here](https://easings.net/#easeInOutQuad).
You can find other popular examples on [easings.net](https://easings.net/)

```tsx
import { useScrollIntoView } from '@mantine/hooks';

useScrollIntoView({
  easing: (t) => (t < 0.5 ? 16 * t ** 5 : 1 - (-2 * t + 2) ** 5 / 2), // easeInOutQuint
});
```

## Parent node

```tsx
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Text, Group, Paper, Box } from '@mantine/core';

function Demo() {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<
    HTMLDivElement,
    HTMLDivElement
  >();

  return (
    <Group justify="center">
      <Paper ref={scrollableRef} h={300} style={{ overflowY: 'scroll', flex: 1 }}>
        <Box pt={260} pb={450}>
          <Paper
            ref={targetRef}
            p="xl"
            style={{
              backgroundColor: 'var(--mantine-color-blue-light)',
              width: '100%',
            }}
          >
            <Text>Scroll me into view</Text>
          </Paper>
        </Box>
      </Paper>
      <Button onClick={() => scrollIntoView()}>Scroll to target</Button>
    </Group>
  );
}
```


## Scroll X axis

```tsx
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Text, Group, Paper, Box } from '@mantine/core';

function Demo() {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<
    HTMLDivElement,
    HTMLDivElement
  >({ axis: 'x' });

  return (
    <Group justify="center">
      <Paper ref={scrollableRef} h={150} w={300} style={{ overflowX: 'scroll' }}>
        <Box pl={260} pr={450}>
          <Paper
            ref={targetRef}
            p="md"
            style={{
              backgroundColor: 'var(--mantine-color-blue-light)',
              width: 'max-content',
            }}
          >
            <Text>Scroll me into view</Text>
          </Paper>
        </Box>
      </Paper>
      <Button onClick={() => scrollIntoView()}>Scroll to target</Button>
    </Group>
  );
}
```


## Definition

```tsx
interface UseScrollIntoViewAnimation {
  /** Target element alignment relatively to parent based on current axis */
  alignment?: 'start' | 'end' | 'center';
}

interface UseScrollIntoViewOptions {
  /** Callback fired after scroll */
  onScrollFinish?: () => void;

  /** Callback fired when scroll animation is canceled by user interaction */
  onScrollCancel?: () => void;

  /** Duration of scroll in milliseconds */
  duration?: number;

  /** Axis of scroll */
  axis?: 'x' | 'y';

  /** Custom mathematical easing function */
  easing?: (t: number) => number;

  /** Additional distance between nearest edge and element */
  offset?: number;

  /** Indicator if animation may be interrupted by user scrolling */
  cancelable?: boolean;

  /** Prevents content jumping in scrolling lists with multiple targets */
  isList?: boolean;
}

export interface UseScrollIntoViewReturnValue<
  Target extends HTMLElement = any,
  Parent extends HTMLElement | null = null,
> {
  scrollableRef: React.RefObject<Parent | null>;
  targetRef: React.RefObject<Target | null>;
  scrollIntoView: (params?: UseScrollIntoViewAnimation) => void;
  cancel: () => void;
  scrolling: boolean;
}

function useScrollIntoView<
  Target extends HTMLElement = any,
  Parent extends HTMLElement | null = null
>(
  options?: UseScrollIntoViewOptions,
): UseScrollIntoViewReturnValue<Target, Parent>
```

## Exported types

`UseScrollIntoViewOptions` and `UseScrollIntoViewReturnValue` types are exported from the `@mantine/hooks` package;
you can import them in your application:

```tsx
import type { UseScrollIntoViewOptions, UseScrollIntoViewReturnValue } from '@mantine/hooks';
```
