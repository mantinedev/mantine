# UnstyledButton
Package: @mantine/core
Import: import { UnstyledButton } from '@mantine/core';
Description: Unstyled polymorphic button

## Usage

`UnstyledButton` resets default button styles, it is used as a
base for all other button components. You can use it to as a base for custom
polymorphic buttons.

#### Example: usage

```tsx
import { UnstyledButton } from '@mantine/core';

function Demo() {
  return <UnstyledButton>Button without styles</UnstyledButton>;
}
```


<Polymorphic defaultElement="button" changeToElement="a" component="UnstyledButton" />

## Polymorphic component

UnstyledButton is a polymorphic component – its default root element is button, but it can be changed to any other element or component with component prop:

```tsx
import { UnstyledButton } from '@mantine/core';

function Demo() {
  return <UnstyledButton component="a" />;
}
```

**Polymorphic components with TypeScript**

Note that polymorphic components props types are different from regular components – they do not extend HTML element props of the default element. For example, UnstyledButtonProps does not extend React.ComponentPropsWithoutRef<'button'> although button is the default element.

If you want to create a wrapper for a polymorphic component that is not polymorphic (does not support component prop), then your component props interface should extend HTML element props.

<GetElementRef component="UnstyledButton" refType="button" />

## Get element ref

```tsx
import { useRef } from 'react';
import { UnstyledButton } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLButtonElement>(null);
  return <UnstyledButton ref={ref} />;
}
```


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | string | number | - | Size passed from parent component, sets <code>data-size</code> if value is not number like |


#### Styles API

UnstyledButton component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**UnstyledButton selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-UnstyledButton-root | Root element |