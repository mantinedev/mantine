# Skeleton
Package: @mantine/core
Import: import { Skeleton } from '@mantine/core';
Description: Indicate content loading state

## Usage

Use `Skeleton` to create a placeholder for loading content. `Skeleton` support the following props:

* `height` – height – any valid CSS value
* `width` – width - any valid CSS value
* `radius` – key of `theme.radius` or any valid CSS value to set border-radius
* `circle` – if true width, height and border-radius will equal to value specified in `height` prop
* `animate` – true by default, controls animation

#### Example: configurator

```tsx
import { Skeleton } from '@mantine/core';

  function Demo() {
    return (
      <>
        <Skeleton'} height={50} circle mb="xl" />
        <Skeleton'} height={8} radius="xl" />
        <Skeleton'} height={8} mt={6} radius="xl" />
        <Skeleton${
          props.animate ? '' : ' animate={false}'
        } height={8} mt={6} width="70%" radius="xl" />
      </>
    );
  }
```


## With content

If you want to indicate the loading state of content that is already on page, wrap it with Skeleton
and control loading overlay visibility with `visible` prop:

#### Example: content

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

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| animate | boolean | - | Enables animation |
| circle | boolean | - | If set, Skeleton <code>width</code> and <code>border-radius</code> are equal to its <code>height</code> |
| height | Height<string | number> | - | Skeleton <code>height</code>, numbers are converted to rem |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set border-radius. Numbers are converted to rem. |
| visible | boolean | - | Determines whether Skeleton overlay should be displayed |
| width | React.CSSProperties["width"] | - | Skeleton <code>width</code>, numbers are converted to rem, ignored when <code>circle</code> prop is set. |


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
| root | data-visible | - | - |
| root | data-animate | - | - |