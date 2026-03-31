# Flex
Package: @mantine/core
Import: import { Flex } from '@mantine/core';
Description: Compose elements in a flex container

## Usage

```tsx
import { Flex, Button } from '@mantine/core';


function Demo() {
  return (
    <Flex
      mih={50}
      bg="rgba(0, 0, 0, .3)"
       gap="md" justify="flex-start" align="flex-start" direction="row" wrap="wrap"
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  );
}
```


## Supported props

## Responsive props

`Flex` component props can have responsive values the same way as other [style props](https://mantine.dev/llms/styles-style-props.md):

```tsx
import { Flex, Button } from '@mantine/core';

function Demo() {
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'center' }}
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  );
}
```


## Difference from Group and Stack

The `Flex` component is an alternative to [Group](https://mantine.dev/llms/core-group.md) and [Stack](https://mantine.dev/llms/core-stack.md).
`Flex` is more flexible – it allows creating both horizontal and vertical flexbox layouts, but requires more configuration.
Unlike [Group](https://mantine.dev/llms/core-group.md) and [Stack](https://mantine.dev/llms/core-stack.md), `Flex` is [polymorphic](https://mantine.dev/llms/guides-polymorphic.md) and supports responsive props.

## Browser support

Flex component uses CSS flexbox gap to add spacing between children. Flexbox gap is supported by all modern browsers, but if you need to support older browsers, use Space component instead.


#### Props

**Flex props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| align | StyleProp<AlignItems> | - | `align-items` CSS property |
| columnGap | StyleProp<MantineSpacing> | - | `column-gap` CSS property |
| direction | StyleProp<FlexDirection> | - | `flex-direction` CSS property |
| gap | StyleProp<MantineSpacing> | - | `gap` CSS property |
| justify | StyleProp<JustifyContent> | - | `justify-content` CSS property |
| rowGap | StyleProp<MantineSpacing> | - | `row-gap` CSS property |
| wrap | StyleProp<FlexWrap> | - | `flex-wrap` CSS property |


#### Styles API

Flex component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Flex selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Flex-root | Root element |
