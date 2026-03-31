# ScrollArea
Package: @mantine/core
Import: import { ScrollArea } from '@mantine/core';
Description: Area with custom scrollbars

## Usage

The `ScrollArea` component supports the following props:

* `type` defines scrollbars behavior:
  * `hover` – scrollbars are visible on hover
  * `scroll` – scrollbars are visible on scroll
  * `auto` – similar to `overflow: auto` – scrollbars are always visible when the content is overflowing
  * `always` – same as `auto`, but scrollbars are always visible regardless of whether the content is overflowing
  * `never` – scrollbars are always hidden
* `offsetScrollbars` – adds padding to offset scrollbars with the following options:
  * `true` – adds padding to offset both scrollbars
  * `x` – adds padding to offset horizontal scrollbar only
  * `y` – adds padding to offset vertical scrollbar only
  * `present` – adds padding only when scrollbars are visible
* `scrollbarSize` – scrollbar size, controls scrollbar and thumb width/height
* `scrollHideDelay` – delay in ms to hide scrollbars, applicable only when type is `hover` or `scroll`
* `overscrollBehavior` – controls [overscroll-behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior) of the viewport

```tsx
import { ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea h={250} type="hover" offsetScrollbars={false} overscrollBehavior="auto" scrollbarSize={10} scrollHideDelay={1000}>
      {/* ... content */}
    </ScrollArea>
  );
}
```


## Horizontal scrollbars

```tsx
import { ScrollArea, Box } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea w={300} h={200}>
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}
```


## Disable horizontal scrollbars

To disable horizontal scrollbars, set the `scrollbars="y"` prop:

```tsx
import { ScrollArea, Box } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea w={300} h={200} scrollbars="y">
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}
```


## Subscribe to scroll position changes

Set the `onScrollPositionChange` function to subscribe to scroll position changes.
It will be called each time the user scrolls with x and y coordinates:

```tsx
import { useState } from 'react';
import { Text, ScrollArea, Code, Box } from '@mantine/core';

function Demo() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });

  return (
    <>
      <ScrollArea
        w={300}
        h={200}
        onScrollPositionChange={onScrollPositionChange}
      >
        <Box w={600}>
          {/* ... content */}
        </Box>
      </ScrollArea>

      <Text>
        Scroll position: <Code>{`{ x: ${scrollPosition.x}, y: ${scrollPosition.y} }`}</Code>
      </Text>
    </>
  );
}
```


## Scroll boundary callbacks

`ScrollArea` component supports callbacks that are triggered when scrolling reaches boundaries:

```tsx
import { useState } from 'react';
import { Badge, Box, Group, ScrollArea, Stack, Text } from '@mantine/core';

function Demo() {
  const [topReached, setTopReached] = useState(0);
  const [bottomReached, setBottomReached] = useState(0);
  const [leftReached, setLeftReached] = useState(0);
  const [rightReached, setRightReached] = useState(0);

  return (
    <Stack align="center">
      <Group>
        <Badge color="blue">Top: {topReached}</Badge>
        <Badge color="green">Bottom: {bottomReached}</Badge>
        <Badge color="orange">Left: {leftReached}</Badge>
        <Badge color="grape">Right: {rightReached}</Badge>
      </Group>

      <ScrollArea
        h={200}
        w={300}
        onTopReached={() => setTopReached((c) => c + 1)}
        onBottomReached={() => setBottomReached((c) => c + 1)}
        onLeftReached={() => setLeftReached((c) => c + 1)}
        onRightReached={() => setRightReached((c) => c + 1)}
      >
        <Box w={600}>
          {Array(50)
            .fill(0)
            .map((_, i) => (
              <Text key={i}>
                Line {i + 1} - This is a long line that requires horizontal scrolling
              </Text>
            ))}
        </Box>
      </ScrollArea>
    </Stack>
  );
}
```


## Scroll to position

To programmatically scroll to any position,
get the viewport element ref with the `viewportRef` prop and call the `scrollTo` method:

```tsx
import { useRef } from 'react';
import { ScrollArea, Button, Stack, Group } from '@mantine/core';

function Demo() {
  const viewport = useRef<HTMLDivElement>(null);

  const scrollToBottom = () =>
    viewport.current!.scrollTo({ top: viewport.current!.scrollHeight, behavior: 'smooth' });

  const scrollToCenter = () =>
    viewport.current!.scrollTo({ top: viewport.current!.scrollHeight / 2, behavior: 'smooth' });

  const scrollToTop = () => viewport.current!.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Stack align="center">
      <ScrollArea w={300} h={200} viewportRef={viewport}>
        {/* ... content */}
      </ScrollArea>

      <Group justify="center">
        <Button onClick={scrollToBottom}>Scroll to bottom</Button>
        <Button onClick={scrollToCenter}>Scroll to center</Button>
        <Button onClick={scrollToTop}>Scroll to top</Button>
      </Group>
    </Stack>
  );
}
```


## Start scroll position

Use the `startScrollPosition` prop to set the initial scroll position when the component mounts.
Unlike using `viewportRef` with `useEffect`, this approach avoids the flash of content at position (0, 0):

```tsx
import { ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea h={200} startScrollPosition={{ y: 250 }}>
      {/* ... content */}
    </ScrollArea>
  );
}
```


## Styles API

```tsx
// Demo.tsx
import { ScrollArea, Box } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <ScrollArea w={300} h={200} type="always" offsetScrollbars classNames={classes}>
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}

// Demo.module.css
.scrollbar {
  &,
  &:hover {
    background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  }

  &[data-orientation='vertical'] .thumb {
    background-color: var(--mantine-color-red-6);
  }

  &[data-orientation='horizontal'] .thumb {
    background-color: var(--mantine-color-blue-6);
  }
}

.corner {
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  opacity: 1;
}
```


## Scroll element into view

```tsx
import { useState, useRef } from 'react';
import { ScrollArea, UnstyledButton, TextInput } from '@mantine/core';

const groceries: string[] = [
  '🍎 Apples',
  '🍌 Bananas',
  '🍊 Oranges',
  '🥛 Milk',
  '🍞 Bread',
  '🥚 Eggs',
  '🍗 Chicken',
  '🥩 Beef',
  '🍝 Pasta',
  '🍚 Rice',
  '🥔 Potatoes',
  '🧅 Onions',
  '🍅 Tomatoes',
  '🥒 Cucumbers',
  '🥕 Carrots',
  '🥬 Lettuce',
  '🍃 Spinach',
  '🥦 Broccoli',
  '🧀 Cheese',
  '🍦 Yogurt',
  '🧈 Butter',
  '🍚 Sugar',
  '🧂 Salt',
  '🌶️ Pepper',
  '☕ Coffee',
  '🍵 Tea',
  '🥤 Juice',
  '💧 Water',
  '🍪 Cookies',
  '🍫 Chocolate',
];

function Demo() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');
  const [hovered, setHovered] = useState(-1);
  const filtered = groceries.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  const items = filtered.map((item, index) => (
    <UnstyledButton
      data-list-item
      key={item}
      display="block"
      bg={index === hovered ? 'var(--mantine-color-blue-light)' : undefined}
      w="100%"
      p={5}
    >
      {item}
    </UnstyledButton>
  ));

  return (
    <>
      <TextInput
        value={query}
        onChange={(event) => {
          setQuery(event.currentTarget.value);
          setHovered(-1);
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown') {
            event.preventDefault();
            setHovered((current) => {
              const nextIndex = current + 1 >= filtered.length ? current : current + 1;
              viewportRef.current
                ?.querySelectorAll('[data-list-item]')
                ?.[nextIndex]?.scrollIntoView({ block: 'nearest' });
              return nextIndex;
            });
          }

          if (event.key === 'ArrowUp') {
            event.preventDefault();
            setHovered((current) => {
              const nextIndex = current - 1 < 0 ? current : current - 1;
              viewportRef.current
                ?.querySelectorAll('[data-list-item]')
                ?.[nextIndex]?.scrollIntoView({ block: 'nearest' });
              return nextIndex;
            });
          }
        }}
        placeholder="Search groceries"
      />
      <ScrollArea h={150} type="always" mt="md" viewportRef={viewportRef}>
        {items}
      </ScrollArea>
    </>
  );
}
```


## ScrollArea.Autosize

`ScrollArea.Autosize` component allows to create scrollable containers when given max-height is reached.
It also supports a callback for detecting when vertical overflow occurs:

* onOverflowChange – triggered when content exceeds max-height, making the container scrollable or not

```tsx
import { useCounter } from '@mantine/hooks';
import { ScrollArea, Button, Group } from '@mantine/core';

const lorem =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis reiciendis voluptate eaque itaque quos. Natus iure tenetur libero, reprehenderit ad, sequi, in aliquam eos necessitatibus expedita delectus veniam culpa!';

function Demo() {
  const [count, handlers] = useCounter(3, { min: 0, max: 10 });
  const content = Array(count)
    .fill(0)
    .map((_, index) => <p key={index}>{lorem}</p>);

  return (
    <>
      <ScrollArea.Autosize mah={300} maw={400} mx="auto">
        {content}
      </ScrollArea.Autosize>

      <Group justify="center" mt="md">
        <Button color="red" onClick={handlers.decrement}>
          Remove paragraph
        </Button>
        <Button onClick={handlers.increment}>
          Add paragraph
        </Button>
      </Group>
    </>
  );
}
```


## ScrollArea.Autosize with Popover

```tsx
import { useState, useRef } from 'react';
import { ScrollArea, Popover, TextInput, UnstyledButton, Text, Box } from '@mantine/core';

const groceries = [
  'Apples',
  'Bananas',
  'Oranges',
  'Milk',
  'Bread',
  'Eggs',
  'Chicken',
  'Beef',
  'Pasta',
  'Rice',
  'Potatoes',
  'Onions',
  'Tomatoes',
  'Cucumbers',
  'Carrots',
  'Lettuce',
  'Spinach',
  'Broccoli',
  'Cheese',
  'Yogurt',
  'Butter',
  'Sugar',
  'Salt',
  'Pepper',
  'Coffee',
  'Tea',
  'Juice',
  'Water',
  'Cookies',
  'Chocolate',
];

function Demo() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');
  const [opened, setOpened] = useState(false);
  const [hovered, setHovered] = useState(-1);
  const filtered = groceries.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  const items = filtered.map((item, index) => (
    <UnstyledButton
      data-list-item
      key={item}
      display="block"
      bg={index === hovered ? 'var(--mantine-color-blue-light)' : undefined}
      w="100%"
      p={5}
    >
      {item}
    </UnstyledButton>
  ));

  return (
    <Popover width="target" opened={opened}>
      <Popover.Target>
        <TextInput
          value={query}
          onFocus={() => setOpened(true)}
          onBlur={() => setOpened(false)}
          onChange={(event) => {
            setQuery(event.currentTarget.value);
            setHovered(-1);
          }}
          onKeyDown={(event) => {
            if (event.key === 'ArrowDown') {
              event.preventDefault();
              setHovered((current) => {
                const nextIndex = current + 1 >= filtered.length ? current : current + 1;
                viewportRef.current
                  ?.querySelectorAll('[data-list-item]')
                  ?.[nextIndex]?.scrollIntoView({ block: 'nearest' });
                return nextIndex;
              });
            }

            if (event.key === 'ArrowUp') {
              event.preventDefault();
              setHovered((current) => {
                const nextIndex = current - 1 < 0 ? current : current - 1;
                viewportRef.current
                  ?.querySelectorAll('[data-list-item]')
                  ?.[nextIndex]?.scrollIntoView({ block: 'nearest' });
                return nextIndex;
              });
            }
          }}
          placeholder="Search groceries"
        />
      </Popover.Target>
      <Popover.Dropdown p={0}>
        <ScrollArea.Autosize viewportRef={viewportRef} mah={200} type="always" scrollbars="y">
          <Box px="xs" py={5}>
            {items.length > 0 ? items : <Text c="dimmed">Nothing found</Text>}
          </Box>
        </ScrollArea.Autosize>
      </Popover.Dropdown>
    </Popover>
  );
}
```



#### Props

**ScrollArea props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| offsetScrollbars | boolean \| "x" \| "y" \| "present" | - | Determines whether scrollbars should be offset with padding on given axis - `true` - adds padding to offset both scrollbars (always) - `'x'` - adds padding to offset horizontal scrollbar (always) - `'y'` - adds padding to offset vertical scrollbar (always) - `'present'` - adds padding only when scrollbars are visible (dynamic) |
| onBottomReached | () => void | - | Called when scrollarea is scrolled to the bottom (within 0.8px tolerance for sub-pixel rendering) |
| onLeftReached | () => void | - | Called when scrollarea is scrolled to the left (within 0.8px tolerance for sub-pixel rendering) |
| onRightReached | () => void | - | Called when scrollarea is scrolled to the right (within 0.8px tolerance for sub-pixel rendering) |
| onScrollPositionChange | (position: { x: number; y: number; }) => void | - | Called with current position (`x` and `y` coordinates) when viewport is scrolled |
| onTopReached | () => void | - | Called when scrollarea is scrolled all the way to the top |
| overscrollBehavior | OverscrollBehavior | - | Defines `overscroll-behavior` of the viewport |
| scrollHideDelay | number | - | Scroll hide delay in ms, applicable only when type is set to `hover` or `scroll` |
| scrollbarSize | string \| number | - | Scrollbar size, any valid CSS value for width/height, numbers are converted to rem, default value is 12px (0.75rem) |
| scrollbars | false \| "x" \| "y" \| "xy" | - | Axis at which scrollbars must be rendered - `'x'` - horizontal scrollbar only - `'y'` - vertical scrollbar only - `'xy'` - both scrollbars - `false` - no scrollbars rendered (content remains scrollable via mouse/touch) |
| startScrollPosition | { x?: number; y?: number \| undefined; } \| undefined | - | Initial scroll position set on mount |
| type | "auto" \| "scroll" \| "always" \| "hover" \| "never" | - | Defines scrollbars behavior - `'hover'` – scrollbars visible on hover (default) - `'scroll'` – scrollbars visible during scrolling - `'auto'` – scrollbars visible only when content overflows (like CSS overflow: auto) - `'always'` – scrollbars always visible, even when content doesn't overflow - `'never'` – scrollbars always hidden |
| viewportProps | React.ComponentProps<"div"> | - | Props passed down to the viewport element |
| viewportRef | Ref<HTMLDivElement> | - | Assigns viewport element (scrollable container) ref |

**ScrollArea.Autosize props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| offsetScrollbars | boolean \| "x" \| "y" \| "present" | - | Determines whether scrollbars should be offset with padding on given axis - `true` - adds padding to offset both scrollbars (always) - `'x'` - adds padding to offset horizontal scrollbar (always) - `'y'` - adds padding to offset vertical scrollbar (always) - `'present'` - adds padding only when scrollbars are visible (dynamic) |
| onBottomReached | () => void | - | Called when scrollarea is scrolled to the bottom (within 0.8px tolerance for sub-pixel rendering) |
| onLeftReached | () => void | - | Called when scrollarea is scrolled to the left (within 0.8px tolerance for sub-pixel rendering) |
| onOverflowChange | (overflowing: boolean) => void | - | Called when content overflows due to max-height, making the container scrollable |
| onRightReached | () => void | - | Called when scrollarea is scrolled to the right (within 0.8px tolerance for sub-pixel rendering) |
| onScrollPositionChange | (position: { x: number; y: number; }) => void | - | Called with current position (`x` and `y` coordinates) when viewport is scrolled |
| onTopReached | () => void | - | Called when scrollarea is scrolled all the way to the top |
| overscrollBehavior | OverscrollBehavior | - | Defines `overscroll-behavior` of the viewport |
| scrollHideDelay | number | - | Scroll hide delay in ms, applicable only when type is set to `hover` or `scroll` |
| scrollbarSize | string \| number | - | Scrollbar size, any valid CSS value for width/height, numbers are converted to rem, default value is 12px (0.75rem) |
| scrollbars | false \| "x" \| "y" \| "xy" | - | Axis at which scrollbars must be rendered - `'x'` - horizontal scrollbar only - `'y'` - vertical scrollbar only - `'xy'` - both scrollbars - `false` - no scrollbars rendered (content remains scrollable via mouse/touch) |
| startScrollPosition | { x?: number; y?: number \| undefined; } \| undefined | - | Initial scroll position set on mount |
| type | "auto" \| "scroll" \| "always" \| "hover" \| "never" | - | Defines scrollbars behavior - `'hover'` – scrollbars visible on hover (default) - `'scroll'` – scrollbars visible during scrolling - `'auto'` – scrollbars visible only when content overflows (like CSS overflow: auto) - `'always'` – scrollbars always visible, even when content doesn't overflow - `'never'` – scrollbars always hidden |
| viewportProps | React.ComponentProps<"div"> | - | Props passed down to the viewport element |
| viewportRef | Ref<HTMLDivElement> | - | Assigns viewport element (scrollable container) ref |


#### Styles API

ScrollArea component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**ScrollArea selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-ScrollArea-root | Root element |
| content | .mantine-ScrollArea-content | Wraps component children |
| viewport | .mantine-ScrollArea-viewport | Main scrollable area |
| scrollbar | .mantine-ScrollArea-scrollbar | Horizontal or vertical scrollbar root |
| thumb | .mantine-ScrollArea-thumb | Scrollbar thumb |
| corner | .mantine-ScrollArea-corner | Corner between horizontal and vertical scrollbars |

**ScrollArea CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --scrollarea-scrollbar-size | Scrollbar size |
