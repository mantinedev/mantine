# BackgroundImage
Package: @mantine/core
Import: import { BackgroundImage } from '@mantine/core';
Description: Displays image as background

## Usage

#### Example: usage

```tsx
import { BackgroundImage, Center, Text, Box } from '@mantine/core';


function Demo() {
  return (
    <Box maw={300} mx="auto">
      <BackgroundImage
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
        
      >
        <Center p="md">
          <Text c="white">
            BackgroundImage component can be used to add any content on image. It is useful for hero
            headers and other similar sections
          </Text>
        </Center>
      </BackgroundImage>
    </Box>
  );
}
```


<Polymorphic defaultElement="div" changeToElement="button" component="BackgroundImage" />

## Polymorphic component

BackgroundImage is a polymorphic component – its default root element is div, but it can be changed to any other element or component with component prop:

```tsx
import { BackgroundImage } from '@mantine/core';

function Demo() {
  return <BackgroundImage component="button" />;
}
```

**Polymorphic components with TypeScript**

Note that polymorphic components props types are different from regular components – they do not extend HTML element props of the default element. For example, BackgroundImageProps does not extend React.ComponentPropsWithoutRef<'div'> although div is the default element.

If you want to create a wrapper for a polymorphic component that is not polymorphic (does not support component prop), then your component props interface should extend HTML element props.


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set border-radius, numbers are converted to rem |
| src | string | required | Image url |


#### Styles API

BackgroundImage component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**BackgroundImage selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-BackgroundImage-root | Root element |

**BackgroundImage CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --bi-radius | Controls `border-radius` |