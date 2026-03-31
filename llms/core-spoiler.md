# Spoiler
Package: @mantine/core
Import: import { Spoiler } from '@mantine/core';
Description: Hide long sections of content under a spoiler

## Usage

Use `Spoiler` to hide a long section of content.
Set the `maxHeight` prop to control the point at which content will be hidden under the spoiler and the show/hide control appears.
If the content height is less than `maxHeight`, the spoiler will just render children.

`hideLabel` and `showLabel` props are required – they are used as the spoiler toggle button label in the corresponding state.

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

To control the expanded state, use `expanded` and `onExpandedChange` props. Note that the
`expanded` prop does not have any effect on spoiler visuals if the content height
is less than the given `maxHeight`.

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

Control the transition duration by setting the `transitionDuration` prop (transition-duration CSS property in ms).
To disable animations, set `transitionDuration={0}`:

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

## Accessibility

The Spoiler component implements proper ARIA attributes for screen reader support:

* Toggle button has `aria-expanded` indicating the expanded/collapsed state
* Content region has `role="region"` and is associated with the button via `aria-controls`
* Keyboard support: Space or Enter key toggles the spoiler when the button is focused

### Best practices for label text

Provide descriptive labels for `showLabel` and `hideLabel` props that clearly indicate the action:

```tsx
// Good - clear, descriptive labels
<Spoiler showLabel="Show full article" hideLabel="Hide article" />
<Spoiler showLabel="Expand details" hideLabel="Collapse details" />

// Avoid vague labels
<Spoiler showLabel="More" hideLabel="Less" />
<Spoiler showLabel="..." hideLabel="..." />
```

### Custom accessibility labels

If your button labels don't clearly describe the action for screen reader users, use the `showAriaLabel` and `hideAriaLabel` props to provide custom ARIA labels:

```tsx
import { Spoiler } from '@mantine/core';

function Demo() {
  return (
    <Spoiler
      showLabel="👁️"
      hideLabel="👁️"
      showAriaLabel="Show discussion comments"
      hideAriaLabel="Hide discussion comments"
    >
      {/* Comments content */}
    </Spoiler>
  );
}
```


#### Props

**Spoiler props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| controlRef | Ref<HTMLButtonElement> | - | Ref of the toggle button element |
| defaultExpanded | boolean | - | Initial expanded state in uncontrolled mode. If `true`, content starts expanded. If `false`, content starts collapsed |
| expanded | boolean | - | Controlled expanded state value |
| hideAriaLabel | string | - | Accessible label for the toggle button when expanded. If not set, `hideLabel` is used |
| hideLabel | React.ReactNode | required | Content displayed in the toggle button when content is expanded (to collapse) |
| maxHeight | number | - | Maximum height of visible content in px. When content exceeds this height, the toggle control appears |
| onExpandedChange | (expanded: boolean) => void | - | Called when expanded state changes (when spoiler visibility is toggled by the user) |
| showAriaLabel | string | - | Accessible label for the toggle button when collapsed. If not set, `showLabel` is used |
| showLabel | React.ReactNode | required | Content displayed in the toggle button when content is collapsed (to expand) |
| transitionDuration | number | - | Spoiler reveal transition duration in ms. Set to 0 to disable animation |


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
