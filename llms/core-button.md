# Button
Package: @mantine/core
Import: import { Button } from '@mantine/core';
Description: Button component to render button or link

## Usage

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return <Button variant="filled" color="blue" size="sm" radius="md">Button</Button>;
}
```


## Full width

If the `fullWidth` prop is set, the `Button` will take 100% of the parent width:

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return <Button fullWidth>Full width button</Button>;
}
```


## Left and right sections

`leftSection` and `rightSection` allow adding icons or any other element to the left and right sides of the button.
When a section is added, padding on the corresponding side is reduced.

Note that `leftSection` and `rightSection` are flipped in [RTL](https://mantine.dev/llms/styles-rtl.md) mode
(`leftSection` is displayed on the right and `rightSection` is displayed on the left).

```tsx
import { Group, Button } from '@mantine/core';
import { ImageIcon, DownloadSimpleIcon, ArrowRightIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Group justify="center">
      <Button leftSection={<ImageIcon size={14} />} variant="default">
        Gallery
      </Button>

      <Button rightSection={<DownloadSimpleIcon size={14} />}>Download</Button>

      <Button
        variant="light"
        leftSection={<ImageIcon size={14} />}
        rightSection={<ArrowRightIcon size={14} />}
      >
        Visit gallery
      </Button>
    </Group>
  );
}
```


## Sections position

The `justify` prop sets the `justify-content` of the `inner` element. You can use it to change the alignment of
left and right sections. For example, to spread them across the button, set `justify="space-between"`.

If you need to align just one section to the side of the button, set `justify` to `space-between`
and add an empty `<span />` to the opposite section.

```tsx
import { Button } from '@mantine/core';
import { ImageIcon } from '@phosphor-icons/react';

function Demo() {
  const icon = <ImageIcon size={14} />;
  return (
    <>
      <Button justify="center" fullWidth leftSection={icon} rightSection={icon} variant="default">
        Button label
      </Button>

      <Button justify="center" fullWidth leftSection={icon} variant="default" mt="md">
        Button label
      </Button>

      <Button justify="center" fullWidth rightSection={icon} variant="default" mt="md">
        Button label
      </Button>

      <Button
        justify="center"
        fullWidth
        rightSection={icon}
        leftSection={<span />}
        variant="default"
        mt="md"
      >
        Button label
      </Button>
    </>
  );
}
```


## Compact size

`Button` supports `xs` – `xl` and `compact-xs` – `compact-xl` sizes. `compact` sizes have
the same font size as `xs` – `xl` but with reduced padding and height.

```tsx
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Button size="md">Regular md</Button>
      <Button size="compact-md">Compact md</Button>
    </Group>
  );
}
```


```tsx
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button
      variant="gradient"
      gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
    >
      Gradient button
    </Button>
  );
}
```


## Disabled state

To make a `Button` disabled, set the `disabled` prop. This will prevent any interactions with the button
and add disabled styles. If you want the button to just look disabled but still be interactive,
set the `data-disabled` prop instead. Note that disabled styles are the same for all variants.

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return <Button disabled>Disabled button</Button>;
}
```


## Disabled state when Button is link

The `<a />` element does not support the `disabled` attribute. To make a `Button` disabled when it is
rendered as a link, set the `data-disabled` attribute instead and prevent default behavior in the
`onClick` event handler.

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button
      component="a"
      href="https://mantine.dev"
      data-disabled
      onClick={(event) => event.preventDefault()}
    >
      Disabled link
    </Button>
  );
}
```


## Customize disabled styles

To customize disabled styles, it is recommended to use both `&:disabled` and `&[data-disabled]`
selectors:

* `&:disabled` is used to style the button when the `disabled` prop is set and
  also when the button is disabled by the parent component (for example, when the `disabled` prop is set on a
  `<fieldset />` element which contains the `Button`).
* `&[data-disabled]` is used to style the button when it is not actually disabled but should look like
  it is (for example, `data-disabled` should be used if you need to use [Tooltip](https://mantine.dev/llms/core-tooltip.md) with a disabled `Button`
  or when the `Button` is used as a link)

```tsx
// Demo.module.css
.button {
  &:disabled,
  &[data-disabled] {
    border-color: light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
    background-color: transparent;
  }
}

// Demo.tsx
import { Button } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Button className={classes.button} disabled>
      Disabled with styles
    </Button>
  );
}
```


## Disabled button with Tooltip

The `onMouseLeave` event [is not triggered](https://github.com/facebook/react/issues/18753) when a `Button` is disabled, so if you need to use a
[Tooltip](https://mantine.dev/llms/core-tooltip.md) with a disabled `Button`, you need to set the `data-disabled` prop on the `Button`
instead of `disabled`. Note that it is also required to change the `onClick` event handler to
`(event) => event.preventDefault()` as the `Button` is not actually disabled and will still trigger the
`onClick` event.

```tsx
import { Button, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip for disabled button">
      <Button data-disabled onClick={(event) => event.preventDefault()}>
        Disabled button with tooltip
      </Button>
    </Tooltip>
  );
}
```


## Loading state

When the `loading` prop is set, the `Button` will be disabled and a [Loader](https://mantine.dev/llms/core-loader.md) with overlay will be rendered
in the center of the button. [Loader](https://mantine.dev/llms/core-loader.md) color depends on the `Button` variant.

```tsx
import { Button, Group, Switch } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [loading, { toggle }] = useDisclosure();
  return (
    <>
      <Group>
        <Button loading={loading}>Filled button</Button>
        <Button variant="light" loading={loading}>
          Light button
        </Button>
        <Button variant="outline" loading={loading}>
          Outline button
        </Button>
      </Group>

      <Switch checked={loading} onChange={toggle} label="Loading state" mt="md" />
    </>
  );
}
```


## Custom variants

To add new `Button` variants, use the [data-variant](https://mantine.dev/llms/styles-variants-sizes.md) attribute.
Usually new variants are added to the [theme](https://mantine.dev/llms/theming-theme-object.md), this way they are
available in all `Button` components in your application.

```tsx
// Demo.tsx
import { Group, Button, MantineProvider, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Button: Button.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button variant="danger">Danger variant</Button>
        <Button variant="primary">Primary variant</Button>
      </Group>
    </MantineProvider>
  );
}

// Demo.module.css
.root {
  &[data-variant='danger'] {
    background-color: var(--mantine-color-red-9);
    color: var(--mantine-color-red-0);
  }

  &[data-variant='primary'] {
    background: linear-gradient(45deg, #4b6cb7 10%, #253b67 90%);
    color: var(--mantine-color-white);
    border-width: 0;
  }
}
```


## Customize variant colors

You can customize colors for `Button` and other component variants by adding
[variantColorResolver](https://mantine.dev/llms/theming-colors.md#colors-variant-resolver) to your theme.

```tsx
import {
  Button,
  Group,
  MantineProvider,
  defaultVariantColorsResolver,
  VariantColorsResolver,
  parseThemeColor,
  rgba,
  darken,
} from '@mantine/core';

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  // Override some properties for variant
  if (parsedColor.isThemeColor && parsedColor.color === 'lime' && input.variant === 'filled') {
    return {
      ...defaultResolvedColors,
      color: 'var(--mantine-color-black)',
      hoverColor: 'var(--mantine-color-black)',
    };
  }

  // Completely override variant
  if (input.variant === 'light') {
    return {
      background: rgba(parsedColor.value, 0.1),
      hover: rgba(parsedColor.value, 0.15),
      border: `1px solid ${parsedColor.value}`,
      color: darken(parsedColor.value, 0.1),
    };
  }

  // Add new variants support
  if (input.variant === 'danger') {
    return {
      background: 'var(--mantine-color-red-9)',
      hover: 'var(--mantine-color-red-8)',
      color: 'var(--mantine-color-white)',
      border: 'none',
    };
  }

  return defaultResolvedColors;
};

function Demo() {
  return (
    <MantineProvider theme={{ variantColorResolver }}>
      <Group>
        <Button color="lime.4" variant="filled">
          Lime filled button
        </Button>

        <Button color="orange" variant="light">
          Orange light button
        </Button>

        <Button variant="danger">Danger button</Button>
      </Group>
    </MantineProvider>
  );
}
```


```tsx
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Button color="lime.4">Default</Button>
      <Button color="lime.4" autoContrast>
        Auto contrast
      </Button>
    </Group>
  );
}
```


## Button.Group

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button.Group orientation="horizontal">
      <Button variant="default">First</Button>
      <Button variant="default">Second</Button>
      <Button variant="default">Third</Button>
    </Button.Group>
  );
}
```


Note that you must not wrap child `Button` components with any additional elements:

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button.Group>
      <div>
        <Button>This will not work</Button>
      </div>
      <Button>Buttons will have incorrect borders</Button>
    </Button.Group>
  );
}
```

## Button.GroupSection

Use `Button.GroupSection` component to render sections that are not buttons inside `Button.Group`:

```tsx
import { CaretDownIcon, CaretUpIcon } from '@phosphor-icons/react';
import { Button } from '@mantine/core';
import { useCounter } from '@mantine/hooks';

function Demo() {
  const [value, { increment, decrement }] = useCounter(135, { min: 0 });

  return (
    <Button.Group>
      <Button variant="default" onClick={decrement}>
        <CaretDownIcon color="var(--mantine-color-red-text)" />
      </Button>
      <Button.GroupSection variant="default" bg="var(--mantine-color-body)" miw={80}>
        {value}
      </Button.GroupSection>
      <Button variant="default" onClick={increment}>
        <CaretUpIcon color="var(--mantine-color-teal-text)" />
      </Button>
    </Button.Group>
  );
}
```



#### Props

**Button props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for `filled` variant |
| children | React.ReactNode | - | Button content |
| color | MantineColor | - | Key of `theme.colors` or any valid CSS color |
| disabled | boolean | - | Sets `disabled` attribute, applies disabled styles |
| fullWidth | boolean | - | Sets `width: 100%` |
| gradient | MantineGradient | - | Gradient configuration used for `variant="gradient"` |
| justify | JustifyContent | - | Sets `justify-content` of `inner` element, can be used to change distribution of sections and label |
| leftSection | React.ReactNode | - | Content on the left side of the button label |
| loaderProps | LoaderProps | - | Props added to the `Loader` component (only visible when `loading` prop is set) |
| loading | boolean | - | If set, the `Loader` component is displayed over the button |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius` |
| rightSection | React.ReactNode | - | Content on the right side of the button label |
| size | ButtonSize | - | Controls button `height`, `font-size` and horizontal `padding` |

**Button.Group props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| borderWidth | string \| number | - | `border-width` of the child `Button` components. Numbers are converted to rem. |
| children | React.ReactNode | - | `Button` components |
| orientation | "horizontal" \| "vertical" | - | Orientation of the group |

**Button.GroupSection props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for `filled` variant |
| gradient | MantineGradient | - | Gradient configuration used when `variant="gradient"` |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius` |
| size | ButtonSize | - | Controls section `height`, `font-size` and horizontal `padding` |


#### Styles API

Button component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Button selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Button-root | Root element |
| loader | .mantine-Button-loader | Loader component, displayed only when `loading` prop is set |
| inner | .mantine-Button-inner | Contains all other elements, child of the `root` element |
| section | .mantine-Button-section | Left and right sections of the button |
| label | .mantine-Button-label | Button children |

**Button CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --button-bg | Controls `background` |
| root | --button-bd | Control `border` |
| root | --button-hover | Controls `background` when hovered |
| root | --button-color | Control text `color` |
| root | --button-hover-color | Control text `color` when hovered |
| root | --button-radius | Controls `border-radius` |
| root | --button-height | Controls `height` of the button |
| root | --button-padding-x | Controls horizontal `padding` of the button |
| root | --button-fz | Controls `font-size` of the button |
| root | --button-justify | Controls `justify-content` of `inner` element |

**Button data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-disabled | `disabled` prop is set | - |

**Button.Group selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| group | .mantine-ButtonGroup-group | Root element |

**Button.Group CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| group | --button-border-width | `border-width` of child `Button` components |

**Button.Group data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| group | data-orientation | - | Value of `orientation` prop |

**Button.GroupSection selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| groupSection | .mantine-ButtonGroupSection-groupSection | Root element |

**Button.GroupSection CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| groupSection | --section-bg | Controls `background` |
| groupSection | --section-bd | Control `border` |
| groupSection | --section-color | Control text `color` |
| groupSection | --section-radius | Controls `border-radius` |
| groupSection | --section-height | Controls `height` of the section |
| groupSection | --section-padding-x | Controls horizontal `padding` of the section |
| groupSection | --section-fz | Controls `font-size` of the section |
