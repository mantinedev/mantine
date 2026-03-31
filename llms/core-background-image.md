# BackgroundImage
Package: @mantine/core
Import: import { BackgroundImage } from '@mantine/core';
Description: Displays image as background

## Usage

```tsx
import { BackgroundImage, Center, Text, Box } from '@mantine/core';


function Demo() {
  return (
    <Box maw={300} mx="auto">
      <BackgroundImage
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
         radius="md"
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



#### Props

**BackgroundImage props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem |
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
