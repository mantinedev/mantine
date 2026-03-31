# useCollapse
Package: @mantine/hooks
Import: import { UseCollapse } from '@mantine/hooks';

## Usage

`use-collapse` is the hook version of [Collapse](https://mantine.dev/llms/core-collapse.md) component.
It allows animation of height from `0` to `auto` and vice versa.

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


## Horizontal collapse

`use-horizontal-collapse` works the same way as `use-collapse` but animates width instead of height:

```tsx
import { Button, Stack, Typography } from '@mantine/core';
import { useDisclosure, useHorizontalCollapse } from '@mantine/hooks';

function Demo() {
  const [expanded, handlers] = useDisclosure(false);
  const { getCollapseProps } = useHorizontalCollapse({ expanded });

  return (
    <Stack h={240}>
      <Button onClick={handlers.toggle} w="fit-content">
        {expanded ? 'Collapse' : 'Expand'}
      </Button>

      <div {...getCollapseProps({ style: { width: 200 } })}>
        <Typography bg="var(--mantine-color-blue-light)" p="xs" bdrs="md" w={200}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Typography>
      </div>
    </Stack>
  );
}
```


## ref prop

`getCollapseProps` return value now includes `ref` prop. It must be passed to the collapsible element
to make the hook work correctly.

## Definition

```tsx
interface UseCollapseInput {
  /** Expanded state  */
  expanded: boolean;

  /** Transition duration in milliseconds, by default calculated based on content height */
  transitionDuration?: number;

  /** Transition timing function, `ease` by default */
  transitionTimingFunction?: string;

  /** Called when transition ends */
  onTransitionEnd?: () => void;

  /** Called when transition starts */
  onTransitionStart?: () => void;

  /** If true, collapsed content is kept in the DOM and hidden with `display: none` styles */
  keepMounted?: boolean;
}

interface GetCollapsePropsInput {
  style?: CSSProperties;
  ref?: React.Ref<HTMLDivElement>;
}

interface GetCollapsePropsReturnValue {
  'aria-hidden': boolean;
  inert: boolean;
  ref: React.RefCallback<HTMLDivElement>;
  onTransitionEnd: (event: React.TransitionEvent<Element>) => void;
  style: React.CSSProperties;
}

type UseCollapseState = 'entering' | 'entered' | 'exiting' | 'exited';

interface UseCollapseReturnValue {
  state: UseCollapseState;
  getCollapseProps: (input?: GetCollapsePropsInput) => GetCollapsePropsReturnValue;
}

interface UseCollapseReturnValue {
  /** Whether the collapse transition is currently running */
  isTransitioning: boolean;

  /** Props to pass down to the collapsible element */
  getCollapseProps: (input?: GetCollapsePropsInput) => GetCollapsePropsReturnValue;
}

function useCollapse(input: UseCollapseInput): UseCollapseReturnValue;
```

## Exported types

The `UseCollapseInput`, `UseCollapseState`, and `UseCollapseReturnValue` types are exported from the `@mantine/hooks` package;
you can import them in your application:

```tsx
import type { UseCollapseInput, UseCollapseState, UseCollapseReturnValue } from '@mantine/hooks';
```
