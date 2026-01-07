# Spoiler
Package: @mantine/core
Import: import { Spoiler } from '@mantine/core';
Description: Hide long sections of content under a spoiler

## Usage

Use `Spoiler` to hide long section of content.
Set `maxHeight` prop to control point at which content will be hidden under spoiler and show/hide control appears.
If the content height is less than `maxHeight`, the spoiler will just render children.

`hideLabel` and `showLabel` props are required – they are used as spoiler toggle button label in corresponding state.

#### Example: usage

```tsx
import { Spoiler } from '@mantine/core';

function Demo() {
  return (
    <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
      {/* Content here */}
    </Spoiler>
  );
}
```


## Control expanded state

To control expanded state use `expanded` and `onExpandedChange` props. Note that
`expanded` prop does not have any effect on spoiler visuals if the content height
is less than given `maxHeight`.

```tsx
import { useState } from 'react';
import { Spoiler } from '@mantine/core';

function Demo() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Spoiler
      showLabel="Show more"
      hideLabel="Hide details"
      expanded={expanded}
      onExpandedChange={setExpanded}
    >
      {/* Spoiler content */}
    </Spoiler>
  );
}
```

## Subscribe to expanded state changes

Use `onExpandedChange` to subscribe to expanded state changes:

```tsx
import { Spoiler } from '@mantine/core';

function Demo() {
  return (
    <Spoiler
      showLabel="Show more"
      hideLabel="Hide details"
      onExpandedChange={(expanded) => console.log(expanded)}
    >
      {/* Spoiler content */}
    </Spoiler>
  );
}
```

## Transition duration

Control transition duration by setting `transitionDuration` prop (transition-duration CSS property in ms).
To disable animations, set `transitionDuration={0}`:

#### Example: transitions

```tsx
import { Spoiler } from '@mantine/core';

function Demo() {
  return (
    <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide" transitionDuration={0}>
      {/* Content here */}
    </Spoiler>
  );
}
```


## Get control ref

```tsx
import { useRef } from 'react';
import { Spoiler } from '@mantine/core';

function Demo() {
  const spoilerControlRef = useRef<HTMLButtonElement>(null);
  return (
    <Spoiler
      controlRef={spoilerControlRef}
      hideLabel="Hide"
      showLabel="Show"
    />
  );
}
```


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| controlRef | ForwardedRef<HTMLButtonElement> | - | Get ref of spoiler toggle button |
| expanded | boolean | - | Controlled expanded state value |
| hideLabel | React.ReactNode | required | Label for close spoiler action |
| initialState | boolean | - | Initial spoiler state, <code>true</code> to wrap content in spoiler, <code>false</code> to show content without spoiler, opened state is updated on mount |
| maxHeight | number | - | Maximum height of the visible content, when this point is reached spoiler appears |
| onExpandedChange | (expanded: boolean) => void | - | Called when expanded state changes (when spoiler visibility is toggled by the user) |
| showLabel | React.ReactNode | required | Label for open spoiler action |
| transitionDuration | number | - | Spoiler reveal transition duration in ms, set 0 or null to turn off animation |


#### Styles API

Spoiler component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Spoiler selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Spoiler-root | Root element |
| content | .mantine-Spoiler-content | Wraps content to set max-height and transition |
| control | .mantine-Spoiler-control | Show/hide content control |

**Spoiler CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --spoiler-transition-duration | Controls transition duration |

**Spoiler data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-has-spoiler | Whether the control button is shown or not | - |