# Flex
Package: @mantine/core
Import: import { Flex } from '@mantine/core';
Description: Compose elements in a flex container

## Usage

#### Example: configurator

```tsx
import { Flex, Button } from '@mantine/core';


function Demo() {
  return (
    <Flex
      mih={50}
      bg="rgba(0, 0, 0, .3)"
      
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  );
}
```


## Supported props

<StylePropsTable source={FLEX_STYLE_PROPS_DATA} />

## Responsive props

`Flex` component props can have responsive values the same way as other [style props](https://mantine.dev/styles/style-props/):

#### Example: responsive

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

`Flex` component is an alternative to [Group](https://mantine.dev/core/group/) and [Stack](https://mantine.dev/core/stack/).
`Flex` is more flexible, it allows creating both horizontal and vertical flexbox layouts, but requires more configuration.
Unlike [Group](https://mantine.dev/core/group/) and [Stack](https://mantine.dev/core/stack/) `Flex` is [polymorphic](https://mantine.dev/guides/polymorphic/) and supports responsive props.

<FlexboxGapSupport component="Flex" />

## Browser support

Flex component uses CSS flexbox gap to add spacing between children. Flexbox gap is supported by all modern browsers, but if you need to support older browsers, use Space component instead.


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| align | StyleProp<AlignItems> | - | <code>align-items</code> CSS property |
| columnGap | StyleProp<MantineSpacing> | - | <code>column-gap</code> CSS property |
| direction | StyleProp<FlexDirection> | - | <code>flex-direction</code> CSS property |
| gap | StyleProp<MantineSpacing> | - | <code>gap</code> CSS property |
| justify | StyleProp<JustifyContent> | - | <code>justify-content</code> CSS property |
| rowGap | StyleProp<MantineSpacing> | - | <code>row-gap</code> CSS property |
| wrap | StyleProp<FlexWrap> | - | <code>flex-wrap</code> CSS property |


#### Styles API

Flex component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Flex selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Flex-root | Root element |