# EmptyState
Package: @mantine/core
Import: import { EmptyState } from '@mantine/core';
Description: Display a placeholder for no data, empty results and first-run states

## Usage

`EmptyState` displays a placeholder for "no data" situations: empty search results, empty
tables and lists, first-run states or error illustrations with an optional call to action.
The simplest way to use it is with `icon`, `title` and `description` props:

```tsx
import { Button, EmptyState } from '@mantine/core';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <EmptyState
      icon={<MagnifyingGlassIcon />}
      title="No results found"
      description="We couldn't find anything matching your search. Try adjusting your filters or searching with different keywords to see more results." size="md" align="center" withIndicatorBackground={false}
    >
      <EmptyState.Actions>
        <Button variant="default">Reset filters</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
}
```


## Compound components

For full control over the content, use compound components instead of (or together with)
the shorthand props. Available components:

* `EmptyState.Indicator` – icon or illustration
* `EmptyState.Title` – title text
* `EmptyState.Description` – description text
* `EmptyState.Actions` – wrapper for action buttons

```tsx
import { Button, EmptyState } from '@mantine/core';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <EmptyState>
      <EmptyState.Indicator>
        <MagnifyingGlassIcon />
      </EmptyState.Indicator>
      <EmptyState.Title>No results found</EmptyState.Title>
      <EmptyState.Description>
        We couldn't find anything matching your search. Try adjusting your filters or searching with
        different keywords to see more results.
      </EmptyState.Description>
      <EmptyState.Actions>
        <Button variant="default">Reset filters</Button>
        <Button variant="default">Create new</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
}
```


Shorthand props and compound components can be mixed. When both are provided, the content
from `icon`, `title` and `description` props is rendered first, followed by `children`:

```tsx
import { Button, EmptyState } from '@mantine/core';

function Demo() {
  return (
    <EmptyState icon={<Icon />} title="No results found">
      {/* Rendered after the title */}
      <EmptyState.Actions>
        <Button variant="default">Reset filters</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
}
```

## Alignment

Set the `align` prop to control how the content is arranged:

* `center` (default) – indicator, title, description and actions are stacked in a centered column
* `left` – indicator is placed on the left, the content is aligned next to it on the right
* `right` – indicator is placed on the right, the content is aligned next to it on the left

Change the `align` prop in the configurator above to see how it works. With `left` and `right`
alignment the indicator is aligned to the top of the content.

## Variant

Set the `variant` prop to `filled` or `light` to display the icon inside a colored circular
indicator. Use the `color` prop to change the indicator color. If `variant` is not set, the icon
is displayed with a dimmed color:

```tsx
import { EmptyState } from '@mantine/core';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <EmptyState
      icon={<MagnifyingGlassIcon />}
      title="No results found"
      description="We couldn't find anything matching your search. Try adjusting your filters or searching with different keywords to see more results." variant="light" color="blue"
    />
  );
}
```


## Indicator background

Set `withIndicatorBackground` prop to display a neutral circular background behind the indicator
without setting a `variant`:

```tsx
import { Button, EmptyState } from '@mantine/core';
import { ShoppingCartSimpleIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <EmptyState withIndicatorBackground icon={<ShoppingCartSimpleIcon />} title="Your cart is empty">
      <EmptyState.Description>
        Your shopping cart is empty right now. Browse our catalog and add the items you like to get
        started with your first order.
      </EmptyState.Description>
      <EmptyState.Actions>
        <Button variant="default">Browse products</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
}
```


## Size

`EmptyState` supports `xs`, `sm`, `md`, `lg` and `xl` sizes. The `size` prop controls the
indicator size, gap between elements and font sizes of the title and description. Change the
`size` prop in the configurator above to see how it scales.

## Accessibility

* The root element is a plain `div`, it is not assigned a landmark role.
* `EmptyState.Title` renders a non-heading `div` by default. Set the `order` prop if the title
  should be exposed as a heading to assistive technologies.
* Action buttons are rendered as provided – make sure they have accessible labels.


#### Props

**EmptyState props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| align | "center" \| "left" \| "right" | - | Content alignment. `center` stacks the content in a centered column, `left`/`right` place the indicator on the side with the content next to it |
| children | React.ReactNode | - | `EmptyState` compound components, rendered after the shorthand props content |
| color | MantineColor | - | Key of `theme.colors` or any valid CSS color, used by `filled` and `light` variants |
| description | React.ReactNode | - | Description content, rendered inside `EmptyState.Description` |
| icon | React.ReactNode | - | Icon or illustration, rendered inside `EmptyState.Indicator` |
| size | MantineSize | - | Controls indicator size, gap between elements and font sizes of title and description |
| title | React.ReactNode | - | Title content, rendered inside `EmptyState.Title` |
| withIndicatorBackground | boolean | - | If set, a neutral circular background is displayed behind the indicator. Setting `variant` always displays a colored background regardless of this prop |


#### Styles API

EmptyState component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**EmptyState selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-EmptyState-root | Root element |
| body | .mantine-EmptyState-body | Wrapper around `title`, `description` and `actions` |
| indicator | .mantine-EmptyState-indicator | Wrapper around the icon or illustration |
| title | .mantine-EmptyState-title | Title element |
| description | .mantine-EmptyState-description | Description element |
| actions | .mantine-EmptyState-actions | Wrapper around action buttons |

**EmptyState CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --empty-state-indicator-size | Controls indicator icon size |
| root | --empty-state-gap | Controls gap between elements |
| root | --empty-state-title-fz | Controls title `font-size` |
| root | --empty-state-description-fz | Controls description `font-size` |
| root | --empty-state-indicator-color | Controls indicator color of `filled` and `light` variants |

**EmptyState data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-align | - | Value of `align` prop |
| root | data-variant | - | Value of `variant` prop |
| indicator | data-with-background | `withIndicatorBackground` prop is set or `variant` is set | - |
