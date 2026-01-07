# useScrollIntoView
Package: @mantine/hooks
Import: import { UseScrollIntoView } from '@mantine/hooks';

## Usage

`use-scroll-into-view` handles scroll behavior for any scrollable element. Basic usage works the same way as `element.scrollIntoView()`.
Hook adjusts scrolling animation with respect to the `reduced-motion` user preference.



## API

The hook is configured with settings object:

* `onScrollFinish` – function that will be called after scroll animation
* `easing` – custom math easing function
* `duration` - duration of scroll animation in milliseconds
* `axis` - axis of scroll
* `cancelable` - indicator if animation may be interrupted by user scrolling
* `offset` - additional distance between the nearest edge and element
* `isList` - indicator that prevents content jumping in scrolling lists with multiple targets, for example Select, Carousel

Hook returns an object with:

* `scrollIntoView` – function that starts scroll animation
* `cancel` – function that stops scroll animation
* `targetRef` - ref of target HTML node
* `scrollableRef` - ref of scrollable parent HTML element, if not used document element will be used

Returned `scrollIntoView` function accepts single optional argument `alignment` - optional target element alignment relatively to parent based on current axis.

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



## Scroll X axis



## Definition

```tsx
interface UseScrollIntoViewAnimation {
  /** Target element alignment relatively to parent based on current axis */
  alignment?: 'start' | 'end' | 'center';
}

interface UseScrollIntoViewOptions {
  /** Callback fired after scroll */
  onScrollFinish?: () => void;

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
}

function useScrollIntoView<
  Target extends HTMLElement = any,
  Parent extends HTMLElement | null = null
>(
  options?: UseScrollIntoViewOptions,
): UseScrollIntoViewReturnValue<Target, Parent>
```

## Exported types

`UseScrollIntoViewOptions` and `UseScrollIntoViewReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseScrollIntoViewOptions, UseScrollIntoViewReturnValue } from '@mantine/hooks';
```
