# ActionIcon
Package: @mantine/core
Import: import { ActionIcon } from '@mantine/core';
Description: Icon button

## Usage

```tsx
import { ActionIcon } from '@mantine/core';
import { SlidersHorizontalIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <ActionIcon variant="filled" color="blue" size="md" radius="md" aria-label="Settings">
      <SlidersHorizontalIcon style={{ width: '70%', height: '70%' }} />
    </ActionIcon>
  );
}
```


```tsx
import { ActionIcon } from '@mantine/core';
import { HeartIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <ActionIcon
      variant="gradient"
      size="xl"
      aria-label="Gradient action icon"
      gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
    >
      <HeartIcon />
    </ActionIcon>
  );
}
```


## Size

You can use any valid CSS value in the `size` prop, which is used to set the `width`, `min-width`, `min-height` and `height`
properties. Note that the `size` prop does not control the child [icon](https://mantine.dev/llms/guides-icons.md) size – you need to
set it manually on the icon component. When `size` is a number, the value is treated as `px` units and
converted to [rem](https://mantine.dev/llms/styles-rem.md) units.

```tsx
import { ActionIcon } from '@mantine/core';
import { HeartIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <ActionIcon size={42} variant="default" aria-label="ActionIcon with size as a number">
      <HeartIcon size={24} />
    </ActionIcon>
  );
}
```


If you want `ActionIcon` to have the same size as Mantine inputs, use the `size="input-sm"` prop:

```tsx
import { ActionIcon, Group, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <TextInput placeholder="sm size input" size="sm" />
      <ActionIcon size="input-sm" variant="default" aria-label="ActionIcon the same size as inputs">
        SM
      </ActionIcon>
    </Group>
  );
}
```


## Disabled state

To make `ActionIcon` disabled, set the `disabled` prop. This will prevent any interactions with the button
and add disabled styles. If you want the button to just look disabled but still be interactive,
set the `data-disabled` prop instead. Note that disabled styles are the same for all variants.

```tsx
import { ActionIcon, Group } from '@mantine/core';
import { HeartIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Group justify="center">
      <ActionIcon size="xl" disabled aria-label="Disabled and not interactive">
        <HeartIcon />
      </ActionIcon>

      <ActionIcon size="xl" data-disabled aria-label="Has disabled styles but still interactive">
        <HeartIcon />
      </ActionIcon>
    </Group>
  );
}
```


## Disabled state when ActionIcon is link

The `<a />` element does not support the `disabled` attribute. To make `ActionIcon` disabled when it is
rendered as a link, set the `data-disabled` attribute instead and prevent default behavior in the
`onClick` event handler.

```tsx
import { ActionIcon } from '@mantine/core';
import { ArrowSquareOutIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <ActionIcon
      component="a"
      href="https://mantine.dev"
      data-disabled
      size="xl"
      aria-label="Open in a new tab"
      onClick={(event) => event.preventDefault()}
    >
      <ArrowSquareOutIcon />
    </ActionIcon>
  );
}
```


## Customize disabled styles

To customize disabled styles, it is recommended to use both `&:disabled` and `&[data-disabled]`
selectors:

* `&:disabled` is used to style the button when the `disabled` prop is set and
  also when the button is disabled by the parent component (for example, when the `disabled` prop is set on a
  `<fieldset />` element which contains `ActionIcon`).
* `&[data-disabled]` is used to style the button when it is not actually disabled but should look like
  it is (for example, `data-disabled` should be used if you need to use [Tooltip](https://mantine.dev/llms/core-tooltip.md) with a disabled `ActionIcon`
  or when `ActionIcon` is used as a link)

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
import { ActionIcon } from '@mantine/core';
import { HeartIcon } from '@phosphor-icons/react';
import classes from './Demo.module.css';

function Demo() {
  return (
    <ActionIcon size="xl" className={classes.button} disabled aria-label="Disabled with styles">
      <HeartIcon />
    </ActionIcon>
  );
}
```


## Disabled button with Tooltip

The `onMouseLeave` event [is not triggered](https://github.com/facebook/react/issues/18753) when `ActionIcon` is disabled, so if you need to use
[Tooltip](https://mantine.dev/llms/core-tooltip.md) with a disabled `ActionIcon`, you need to set the `data-disabled` prop on `ActionIcon`
instead of `disabled`. Note that it is also required to change the `onClick` event handler to
`(event) => event.preventDefault()` as `ActionIcon` is not actually disabled and will still trigger
the `onClick` event.

```tsx
import { ActionIcon, Tooltip } from '@mantine/core';
import { HeartIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Tooltip label="Tooltip for disabled button">
      <ActionIcon
        aria-label="Hover to see tooltip"
        size="xl"
        data-disabled
        onClick={(event) => event.preventDefault()}
      >
        <HeartIcon />
      </ActionIcon>
    </Tooltip>
  );
}
```


## Loading state

When the `loading` prop is set, `ActionIcon` will be disabled and a [Loader](https://mantine.dev/llms/core-loader.md) with overlay will be rendered
in the center of the button. The [Loader](https://mantine.dev/llms/core-loader.md) color depends on the `ActionIcon` variant.

```tsx
import { ActionIcon, Group, Switch } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { HeartIcon } from '@phosphor-icons/react';

function Demo() {
  const [loading, { toggle }] = useDisclosure();
  return (
    <>
      <Group>
        <ActionIcon loading={loading} aria-label="Like">
          <HeartIcon size={18} />
        </ActionIcon>
        <ActionIcon variant="light" loading={loading} aria-label="Like">
          <HeartIcon size={18} />
        </ActionIcon>
        <ActionIcon variant="outline" loading={loading} aria-label="Like">
          <HeartIcon size={18} />
        </ActionIcon>
      </Group>

      <Switch checked={loading} onChange={toggle} label="Loading state" mt="md" />
    </>
  );
}
```


## Loader props

You can customize the [Loader](https://mantine.dev/llms/core-loader.md) with the `loaderProps` prop, which accepts all props that the
[Loader](https://mantine.dev/llms/core-loader.md) component has:

```tsx
import { ActionIcon } from '@mantine/core';

function Demo() {
  return <ActionIcon size="xl" loading loaderProps={{ type: 'dots' }} aria-label="Loading..." />;
}
```


## Add custom variants

To add new `ActionIcon` variants, use the [data-variant](https://mantine.dev/llms/styles-variants-sizes.md) attribute.
Usually new variants are added to the [theme](https://mantine.dev/llms/theming-theme-object.md). This way they are
available in all `ActionIcon` components in your application.

```tsx
// Demo.tsx
import { Group, ActionIcon, MantineProvider, createTheme } from '@mantine/core';
import { HeartIcon } from '@phosphor-icons/react';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    ActionIcon: ActionIcon.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group justify="center">
        <ActionIcon size="xl" variant="danger" aria-label="Danger variant">
          <HeartIcon />
        </ActionIcon>
        <ActionIcon size="xl" variant="primary" aria-label="Primary variant">
          <HeartIcon />
        </ActionIcon>
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
  }
}
```


## Customize variants colors

You can customize colors for `ActionIcon` and other components variants by adding
[variantColorResolver](https://mantine.dev/llms/theming-colors.md#colors-variant-resolver) to your theme.

```tsx
import { ImageIcon, FingerprintIcon, WarningIcon } from '@phosphor-icons/react';
import {
  ActionIcon,
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
        <ActionIcon color="lime.4" variant="filled" size="lg" aria-label="Photo">
          <ImageIcon size={20} />
        </ActionIcon>

        <ActionIcon color="orange" variant="light" size="lg" aria-label="FingerprintIcon">
          <FingerprintIcon size={20} />
        </ActionIcon>

        <ActionIcon variant="danger" size="lg" aria-label="Error 404">
          <WarningIcon size={20} />
        </ActionIcon>
      </Group>
    </MantineProvider>
  );
}
```


```tsx
import { FingerprintIcon } from '@phosphor-icons/react';
import { ActionIcon, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <ActionIcon aria-label="default action icon" size="lg" color="lime.4">
        <FingerprintIcon size={20} />
      </ActionIcon>
      <ActionIcon autoContrast aria-label="autoContrast action icon" size="lg" color="lime.4">
        <FingerprintIcon size={20} />
      </ActionIcon>
    </Group>
  );
}
```


## Add custom sizes

`ActionIcon` sizes are defined by `--ai-size-{x}` CSS variables. The easiest way to add new sizes is to
define additional `--ai-size-{x}` variables on the `root` element:

```tsx
// Demo.tsx
import { ActionIcon, createTheme, Group, MantineThemeProvider } from '@mantine/core';
import { HeartIcon } from '@phosphor-icons/react';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    ActionIcon: ActionIcon.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Group justify="center">
        <ActionIcon size="xxs" aria-label="Custom xxs size">
          <HeartIcon size={10} />
        </ActionIcon>

        <ActionIcon size="xxl" aria-label="Custom xxl size">
          <HeartIcon size={32} />
        </ActionIcon>
      </Group>
    </MantineThemeProvider>
  );
}

// Demo.module.css
.root {
  --ai-size-xxs: 16px;
  --ai-size-xxl: 50px;
}
```


## ActionIcon.Group

```tsx
import { ActionIcon } from '@mantine/core';
import { ImageIcon, GearSixIcon, HeartIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <ActionIcon.Group orientation="horizontal">
      <ActionIcon variant="default" size="lg" aria-label="Gallery">
        <ImageIcon size={20} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Settings">
        <GearSixIcon size={20} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Likes">
        <HeartIcon size={20} />
      </ActionIcon>
    </ActionIcon.Group>
  );
}
```


Note that you must not wrap child `ActionIcon` components with any additional elements:

```tsx
import { ActionIcon } from '@mantine/core';

// Will not work correctly
function Demo() {
  return (
    <ActionIcon.Group>
      <div>
        <ActionIcon>This will not work</ActionIcon>
      </div>
      <ActionIcon>ActionIcons will have incorrect borders</ActionIcon>
    </ActionIcon.Group>
  );
}
```

## ActionIcon.GroupSection

Use the `ActionIcon.GroupSection` component to render sections that are not `ActionIcon` inside `ActionIcon.Group`:

```tsx
import { CaretDownIcon, CaretUpIcon } from '@phosphor-icons/react';
import { ActionIcon } from '@mantine/core';
import { useCounter } from '@mantine/hooks';

function Demo() {
  const [value, { increment, decrement }] = useCounter(135, { min: 0 });

  return (
    <ActionIcon.Group>
      <ActionIcon
        variant="default"
        size="lg"
        onClick={decrement}
        aria-label="Decrement value"
      >
        <CaretDownIcon color="var(--mantine-color-red-text)" />
      </ActionIcon>
      <ActionIcon.GroupSection variant="default" size="lg" bg="var(--mantine-color-body)" miw={60}>
        {value}
      </ActionIcon.GroupSection>
      <ActionIcon
        variant="default"
        size="lg"
        onClick={increment}
        aria-label="Increment value"
      >
        <CaretUpIcon color="var(--mantine-color-teal-text)" />
      </ActionIcon>
    </ActionIcon.Group>
  );
}
```


## Accessibility

To make `ActionIcon` accessible for screen readers, you need to either set `aria-label` or
use the [VisuallyHidden](https://mantine.dev/llms/core-visually-hidden.md) component:

```tsx
import { HeartIcon } from '@phosphor-icons/react';
import { ActionIcon, VisuallyHidden } from '@mantine/core';

function Demo() {
  return (
    <>
      <ActionIcon aria-label="Like post">
        <HeartIcon />
      </ActionIcon>

      <ActionIcon>
        <VisuallyHidden>Like post</VisuallyHidden>
        <HeartIcon />
      </ActionIcon>
    </>
  );
}
```


#### Props

**ActionIcon props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for `filled` variant |
| children | React.ReactNode | - | Icon element |
| color | MantineColor | - | Key of `theme.colors` or any valid CSS color. |
| disabled | boolean | - | Sets `disabled` attribute, prevents interactions |
| gradient | MantineGradient | - | Gradient values used with `variant="gradient"`. |
| loaderProps | LoaderProps | - | Props passed down to the `Loader` component. Ignored when `loading` prop is not set. |
| loading | boolean | - | If set, `Loader` component is displayed instead of the `children` |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. |
| size | number \| MantineSize \| (string & {}) \| "input-xs" \| "input-sm" \| "input-md" \| "input-lg" \| "input-xl" | - | Controls width and height of the button. Numbers are converted to rem. |

**ActionIcon.Group props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| borderWidth | string \| number | - | `border-width` of the child components. |
| children | React.ReactNode | - | `ActionIcon` and `ActionIcon.GroupSection` components only |
| orientation | "horizontal" \| "vertical" | - | Group orientation |


#### Styles API

ActionIcon component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**ActionIcon selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-ActionIcon-root | Root element |
| loader | .mantine-ActionIcon-loader | `Loader` component, rendered inside root element when `loading` prop is set |
| icon | .mantine-ActionIcon-icon | Inner icon wrapper |

**ActionIcon CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --ai-bg | Controls `background` |
| root | --ai-hover | Controls `background` when hovered |
| root | --ai-bd | Controls `border` |
| root | --ai-color | Controls icon `color` |
| root | --ai-hover-color | Controls icon `color` when hovered |
| root | --ai-radius | Controls `border-radius` |
| root | --ai-size | Controls `width`, `height`, `min-width` and `min-height` styles |

**ActionIcon data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-disabled | `disabled` prop is set | - |

**ActionIcon.Group selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| group | .mantine-ActionIconGroup-group | Root element |

**ActionIcon.Group CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|

**ActionIcon.Group data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| group | data-orientation | - | Value of `orientation` prop |
