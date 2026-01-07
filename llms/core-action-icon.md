# ActionIcon
Package: @mantine/core
Import: import { ActionIcon } from '@mantine/core';
Description: Icon button

## Usage

#### Example: usage

```tsx
import { ActionIcon } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon aria-label="Settings">
      <IconAdjustments style={{ width: '70%', height: '70%' }} stroke={1.5} />
    </ActionIcon>
  );
}
```


<Gradient component="ActionIcon" />

## Gradient

ActionIcon supports Mantine color format in color prop. Color can be specified as:
- Mantine color name (e.g., 'blue')
- CSS color value (e.g., '#fff', 'rgba(255, 255, 255, 0.8)')
- Gradient string (e.g., 'linear-gradient(45deg, blue, red)')

#### Example: gradient

```tsx
import { ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon
      variant="gradient"
      size="xl"
      aria-label="Gradient action icon"
      gradient={{ from: 'cyan', to: 'blue', deg: 90 }}
    >
      <IconHeart />
    </ActionIcon>
  );
}
```


## Size

You can use any valid CSS value in `size` prop, it is used to set `width`, `min-width`, `min-height` and `height`
properties. Note that `size` prop does not control child [icon](https://mantine.dev/guides/icons) size, you need to
set it manually on icon component. When `size` is a number, the value is treated as `px` units and
converted to [rem](https://mantine.dev/styles/rem) units.

#### Example: size

```tsx
import { ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon size={42} variant="default" aria-label="ActionIcon with size as a number">
      <IconHeart size={24} />
    </ActionIcon>
  );
}
```


If you want `ActionIcon` to have the same size as Mantine inputs, use `size="input-sm"` prop:

#### Example: inputSize

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

To make `ActionIcon` disabled set `disabled` prop, this will prevent any interactions with the button
and add disabled styles. If you want the button to just look disabled but still be interactive,
set `data-disabled` prop instead. Note that disabled styles are the same for all variants.

#### Example: disabled

```tsx
import { ActionIcon, Group } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <Group justify="center">
      <ActionIcon size="xl" disabled aria-label="Disabled and not interactive">
        <IconHeart />
      </ActionIcon>

      <ActionIcon size="xl" data-disabled aria-label="Has disabled styles but still interactive">
        <IconHeart />
      </ActionIcon>
    </Group>
  );
}
```


## Disabled state when ActionIcon is link

`<a />` element does not support `disabled` attribute. To make `ActionIcon` disabled when it is
rendered as a link, set `data-disabled` attribute instead and prevent default behavior in
`onClick` event handler.

#### Example: disabledLink

```tsx
import { ActionIcon } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

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
      <IconExternalLink />
    </ActionIcon>
  );
}
```


## Customize disabled styles

To customize disabled styles, it is recommended to use both `&:disabled` and `&[data-disabled]`
selectors:

* `&:disabled` is used to style the button when `disabled` prop is set and
  also when the button is disabled by the parent component (for example, when `disabled` prop is set on a
  `<fieldset />` element which contains `ActionIcon`).
* `&[data-disabled]` is used to style the button when it is not actually disabled but should look like
  it is (for example, `data-disabled` should be used if you need to use [Tooltip](https://mantine.dev/core/tooltip) with disabled `ActionIcon`
  or when `ActionIcon` is used as a link)

#### Example: disabledStyles

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
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

function Demo() {
  return (
    <ActionIcon size="xl" className={classes.button} disabled aria-label="Disabled with styles">
      <IconHeart />
    </ActionIcon>
  );
}
```


## Disabled button with Tooltip

`onMouseLeave` event [is not triggered](https://github.com/facebook/react/issues/18753) when `ActionIcon` is disabled, so if you need to use
[Tooltip](https://mantine.dev/core/tooltip) with disabled `ActionIcon` you need to set `data-disabled` prop on `ActionIcon`
instead of `disabled`. Note that it is also required to change `onClick` event handler to
`(event) => event.preventDefault()` as `ActionIcon` is not actually disabled and will still trigger
`onClick` event.

#### Example: disabledTooltip

```tsx
import { ActionIcon, Tooltip } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <Tooltip label="Tooltip for disabled button">
      <ActionIcon size="xl" data-disabled onClick={(event) => event.preventDefault()}>
        <IconHeart />
      </ActionIcon>
    </Tooltip>
  );
}
```


## Loading state

When `loading` prop is set, `ActionIcon` will be disabled and [Loader](https://mantine.dev/core/loader) with overlay will be rendered
in the center of the button. [Loader](https://mantine.dev/core/loader) color depends on `ActionIcon` variant.

#### Example: loading

```tsx
import { ActionIcon, Group, Switch } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  const [loading, { toggle }] = useDisclosure();
  return (
    <>
      <Group>
        <ActionIcon loading={loading}>
          <IconHeart size={18} stroke={1.5} />
        </ActionIcon>
        <ActionIcon variant="light" loading={loading}>
          <IconHeart size={18} stroke={1.5} />
        </ActionIcon>
        <ActionIcon variant="outline" loading={loading}>
          <IconHeart size={18} stroke={1.5} />
        </ActionIcon>
      </Group>

      <Switch checked={loading} onChange={toggle} label="Loading state" mt="md" />
    </>
  );
}
```


## Loader props

You can customize [Loader](https://mantine.dev/core/loader) with `loaderProps` prop, it accepts all props that
[Loader](https://mantine.dev/core/loader) component has:

#### Example: loaderProps

```tsx
import { ActionIcon } from '@mantine/core';

function Demo() {
  return <ActionIcon size="xl" loading loaderProps={{ type: 'dots' }} />;
}
```


## Add custom variants

To add new `ActionIcon` variants, use [data-variant](https://mantine.dev/styles/variants-sizes) attribute.
Usually new variants are added on [theme](https://mantine.dev/theming/theme-object), this way they are
available in all `ActionIcon` components in your application.

#### Example: customVariant

```tsx
// Demo.tsx
import { Group, ActionIcon, MantineProvider, createTheme } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
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
          <IconHeart />
        </ActionIcon>
        <ActionIcon size="xl" variant="primary" aria-label="Primary variant">
          <IconHeart />
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
[variantColorResolver](https://mantine.dev/theming/colors#colors-variant-resolver) to your theme.

#### Example: variantColorsResolver

```tsx
import { IconPhoto, IconFingerprint, IconError404 } from '@tabler/icons-react';
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
        <ActionIcon color="lime.4" variant="filled">
          <IconPhoto size={20} />
        </ActionIcon>

        <ActionIcon color="orange" variant="light">
          <IconFingerprint size={20} />
        </ActionIcon>

        <ActionIcon variant="danger">
          <IconError404 size={20} />
        </ActionIcon>
      </Group>
    </MantineProvider>
  );
}
```


<AutoContrast component="ActionIcon" />

## autoContrast

ActionIcon supports autoContrast prop and [theme.autoContrast](https://mantine.dev/theming/theme-object/#autocontrast). If autoContrast is set either on ActionIcon or on theme, content color will be adjusted to have sufficient contrast with the value specified in color prop.

Note that autoContrast feature works only if you use color prop to change background color. autoContrast works only with filled variant.

#### Example: autoContrast

```tsx
import { IconFingerprint } from '@tabler/icons-react';
import { ActionIcon, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <ActionIcon aria-label="default action icon" size="lg" color="lime.4">
        <IconFingerprint size={20} />
      </ActionIcon>
      <ActionIcon autoContrast aria-label="autoContrast action icon" size="lg" color="lime.4">
        <IconFingerprint size={20} />
      </ActionIcon>
    </Group>
  );
}
```


## Add custom sizes

`ActionIcon` sizes are defined by `--ai-size-{x}` CSS variables. The easiest way to add new sizes is to
define additional `--ai-size-{x}` variables on the `root` element:

#### Example: customSize

```tsx
// Demo.tsx
import { ActionIcon, createTheme, Group, MantineThemeProvider } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
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
          <IconHeart size={10} />
        </ActionIcon>

        <ActionIcon size="xxl" aria-label="Custom xxl size">
          <IconHeart size={32} />
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

#### Example: group

```tsx
import { ActionIcon } from '@mantine/core';
import { IconPhoto, IconSettings, IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon.Group>
      <ActionIcon variant="default" size="lg" aria-label="Gallery">
        <IconPhoto size={20} stroke={1.5} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Settings">
        <IconSettings size={20} stroke={1.5} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Likes">
        <IconHeart size={20} stroke={1.5} />
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

Use `ActionIcon.GroupSection` component to render sections that are not `ActionIcon` inside `ActionIcon.Group`:

#### Example: groupSection

```tsx
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import { useCounter } from '@mantine/hooks';

function Demo() {
  const [value, { increment, decrement }] = useCounter(135, { min: 0 });

  return (
    <ActionIcon.Group>
      <ActionIcon variant="default" size="lg" radius="md" onClick={decrement}>
        <IconChevronDown color="var(--mantine-color-red-text)" />
      </ActionIcon>
      <ActionIcon.GroupSection variant="default" size="lg" bg="var(--mantine-color-body)" miw={60}>
        {value}
      </ActionIcon.GroupSection>
      <ActionIcon variant="default" size="lg" radius="md" onClick={increment}>
        <IconChevronUp color="var(--mantine-color-teal-text)" />
      </ActionIcon>
    </ActionIcon.Group>
  );
}
```


<Polymorphic defaultElement="button" changeToElement="a" component="ActionIcon" withNext />

## Polymorphic component

ActionIcon is a polymorphic component – its default root element is button, but it can be changed to any other element or component with component prop:

```tsx
import { ActionIcon } from '@mantine/core';

function Demo() {
  return <ActionIcon component="a" />;
}
```

You can also use components in component prop, for example, Next.js Link:

```tsx
import Link from 'next/link';
import { ActionIcon } from '@mantine/core';

function Demo() {
  return <ActionIcon component={Link} href="/" />;
}
```

**Polymorphic components with TypeScript**

Note that polymorphic components props types are different from regular components – they do not extend HTML element props of the default element. For example, ActionIconProps does not extend React.ComponentPropsWithoutRef<'button'> although button is the default element.

If you want to create a wrapper for a polymorphic component that is not polymorphic (does not support component prop), then your component props interface should extend HTML element props.

<GetElementRef component="ActionIcon" refType="button" />

## Get element ref

```tsx
import { useRef } from 'react';
import { ActionIcon } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLButtonElement>(null);
  return <ActionIcon ref={ref} />;
}
```

## Accessibility

To make `ActionIcon` accessible for screen readers, you need to either set `aria-label` or
use [VisuallyHidden](https://mantine.dev/core/visually-hidden) component:

```tsx
import { IconHeart } from '@tabler/icons-react';
import { ActionIcon, VisuallyHidden } from '@mantine/core';

function Demo() {
  return (
    <>
      <ActionIcon aria-label="Like post">
        <IconHeart />
      </ActionIcon>

      <ActionIcon>
        <VisuallyHidden>Like post</VisuallyHidden>
        <IconHeart />
      </ActionIcon>
    </>
  );
}
```


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for <code>filled</code> variant |
| children | React.ReactNode | - | Icon element |
| color | MantineColor | - | Key of <code>theme.colors</code> or any valid CSS color. |
| disabled | boolean | - | Sets <code>disabled</code> attribute, prevents interactions |
| gradient | MantineGradient | - | Gradient values used with <code>variant="gradient"</code>. |
| loaderProps | LoaderProps | - | Props passed down to the <code>Loader</code> component. Ignored when <code>loading</code> prop is not set. |
| loading | boolean | - | If set, <code>Loader</code> component is displayed instead of the <code>children</code> |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set border-radius. Numbers are converted to rem. |
| size | number | MantineSize | (string & {}) | "input-xs" | "input-sm" | "input-md" | "input-lg" | "input-xl" | - | Controls width and height of the button. Numbers are converted to rem. |


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
| root | data-disabled | - | - |

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
| group | data-orientation | - | Value of  |