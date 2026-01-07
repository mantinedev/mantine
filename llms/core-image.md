# Image
Package: @mantine/core
Import: import { Image } from '@mantine/core';
Description: Image with optional fallback

## Usage

`Image` is a wrapper for `img` with minimal styles. By default, the image
will take 100% of parent width. The image size can be controlled with `w`
and `h` [style props](https://mantine.dev/styles/style-props).

#### Example: usage

```tsx
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
    />
  );
}
```


## Image height

In most case, you will need to set image height to prevent layout jumps when
image is loading. You can do so with `h` [style props](https://mantine.dev/styles/style-props).

#### Example: height

```tsx
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      h={200}
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png"
    />
  );
}
```


## Image fit

By default the image has `object-fit: cover` style - it will
resize to cover parent element. To change this behavior, set `w="auto"` and `fit="contain"` props.

#### Example: contain

```tsx
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      h={200}
      w="auto"
      fit="contain"
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
    />
  );
}
```


## Fallback image

Set `fallbackSrc` prop to display fallback image when image fails to load:

#### Example: fallback

```tsx
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      src={null}
      h={200}
      fallbackSrc="https://placehold.co/600x400?text=Placeholder"
    />
  );
}
```


## Usage with Next.js Image

`Image` component is a [polymorphic component](https://mantine.dev/guides/polymorphic), its root element can be changed with `component` prop.
You can use it with `next/image` and other similar components.

```tsx
import NextImage from 'next/image';
import { Image } from '@mantine/core';
import myImage from './my-image.jpg';

function Demo() {
  return <Image component={NextImage} src={myImage} alt="My image" />;
}
```


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| fallbackSrc | string | - | Image url used as a fallback if the image cannot be loaded |
| fit | ObjectFit | - | Controls <code>object-fit</code> style |
| onError | (event: SyntheticEvent<HTMLImageElement, Event>) => void | - | Called when image fails to load |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code> |
| src | any | - | Image url |


#### Styles API

Image component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Image selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Image-root | Root element |

**Image CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --image-object-fit | Controls `object-fit` property |
| root | --image-radius | Controls `border-radius` property |

**Image data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-fallback | Image failed to load | - |