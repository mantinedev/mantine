# Skeleton
Package: @mantine/core
Import: import { Skeleton } from '@mantine/core';
Description: Indicate content loading state

## Usage

Use `Skeleton` to create a placeholder for loading content. `Skeleton` supports the following props:

* `height` – height – any valid CSS value
* `width` – width - any valid CSS value
* `radius` – key of `theme.radius` or any valid CSS value to set border-radius
* `circle` – if true, width, height and border-radius will equal the value specified in the `height` prop
* `animate` – true by default, controls animation

```tsx
import { Skeleton } from '@mantine/core';

  function Demo() {
    return (
      <>
        <Skeletontrue'} height={50} circle mb="xl" />
        <Skeletontrue'} height={8} radius="xl" />
        <Skeletontrue'} height={8} mt={6} radius="xl" />
        <Skeleton${
          props.animate ? '' : ' animate={false}'
        } height={8} mt={6} width="70%" radius="xl" />
      </>
    );
  }
```


## With content

If you want to indicate the loading state of content that is already on the page, wrap it with Skeleton
and control the loading overlay visibility with the `visible` prop:

```tsx
import { useState } from 'react';
import { Skeleton, Button } from '@mantine/core';

function Demo() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Skeleton visible={loading}>
        Lorem ipsum dolor sit amet...
        {/* other content */}
      </Skeleton>

      <Button onClick={() => setLoading((l) => !l)}>
        Toggle Skeleton
      </Button>
    </>
  );
}
```



#### Props

**Skeleton props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| animate | boolean | - | Enables animation |
| circle | boolean | - | If set, Skeleton `width` and `border-radius` are equal to its `height` |
| height | Height<string \| number> | - | Skeleton `height`, numbers are converted to rem |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. |
| visible | boolean | - | Determines whether Skeleton overlay should be displayed |
| width | React.CSSProperties["width"] | - | Skeleton `width`, numbers are converted to rem, ignored when `circle` prop is set. |


#### Styles API

Skeleton component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Skeleton selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Skeleton-root | Root element |

**Skeleton CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --skeleton-height | Controls skeleton `height` |
| root | --skeleton-width | Controls skeleton `width` |
| root | --skeleton-radius | Controls skeleton `border-radius` |

**Skeleton data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-visible | `visible` prop is set | - |
| root | data-animate | `animate` prop is set | - |
