# AspectRatio
Package: @mantine/core
Import: import { AspectRatio } from '@mantine/core';
Description: Maintain responsive consistent width/height ratio

## Usage

`AspectRatio` maintains a consistent width/height ratio.
It can be used to display images, maps, videos and other media.

#### Example: image

```tsx
import { AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={1080 / 720} maw={300} mx="auto">
      <img
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png"
        alt="Panda"
      />
    </AspectRatio>
  );
}
```


## Map embed

#### Example: map

```tsx
import { AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru"
        title="Google map"
        style={{ border: 0 }}
      />
    </AspectRatio>
  );
}
```


## Video embed

#### Example: video

```tsx
import { AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.youtube.com/embed/mzJ4vCjSt28"
        title="YouTube video player"
        style={{ border: 0 }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </AspectRatio>
  );
}
```


## Inside flex container

By default, `AspectRatio` does not have fixed width and height, it will take as much space as possible
in a regular container. However, when used inside a flex container, it will not stretch to fill the available space.
To make it work inside flexbox container, you need to set `width` or `flex` property.

#### Example: flex

```tsx
import { AspectRatio, Image } from '@mantine/core';

function Demo() {
  return (
    <div style={{ display: 'flex' }}>
      <AspectRatio ratio={1} flex="0 0 100px">
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png"
          alt="Avatar"
        />
      </AspectRatio>
    </div>
  );
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ratio | number | - | Aspect ratio, for example, <code>16 / 9</code>, <code>4 / 3</code>, <code>1920 / 1080</code> |


#### Styles API

AspectRatio component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**AspectRatio selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-AspectRatio-root | Root element |

**AspectRatio CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --ar-ratio | Aspect ratio |