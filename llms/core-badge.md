# Badge
Package: @mantine/core
Import: import { Badge } from '@mantine/core';
Description: Display badge, pill or tag

## Usage

#### Example: usage

```tsx
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge>Badge</Badge>;
}
```


<Gradient component="Badge" />

## Gradient

Badge supports Mantine color format in color prop. Color can be specified as:
- Mantine color name (e.g., 'blue')
- CSS color value (e.g., '#fff', 'rgba(255, 255, 255, 0.8)')
- Gradient string (e.g., 'linear-gradient(45deg, blue, red)')

#### Example: gradient

```tsx
import { Badge } from '@mantine/core';

function Demo() {
  return (
    <Badge
      size="xl"
      variant="gradient"
      gradient={{ from: 'cyan', to: 'blue', deg: 90 }}
    >
      Gradient badge
    </Badge>
  );
}
```


## Rounded

Set `circle` prop, to reduce horizontal padding and make badge width equal to its height:

#### Example: rounded

```tsx
import { Badge, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Badge size="xs" circle>
        1
      </Badge>
      <Badge size="sm" circle>
        7
      </Badge>
      <Badge size="md" circle>
        9
      </Badge>
      <Badge size="lg" circle>
        3
      </Badge>
      <Badge size="xl" circle>
        8
      </Badge>
    </Group>
  );
}
```


## Left and right sections

#### Example: sections

```tsx
import { Badge, Group } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt size={12} />;
  return (
    <Group>
      <Badge leftSection={icon}>With left section</Badge>
      <Badge rightSection={icon}>With right section</Badge>
    </Group>
  );
}
```


## Full width

Set `fullWidth` to make badge span full width of its parent element:

#### Example: fullWidth

```tsx
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge fullWidth>Full width badge</Badge>;
}
```


## Customize variants colors

You can customize colors for `Badge` and other components variants by adding
[variantColorResolver](https://mantine.dev/theming/colors#colors-variant-resolver) to your theme.

#### Example: variantColorsResolver

```tsx
import { IconPhoto, IconFingerprint, IconError404 } from '@tabler/icons-react';
import {
  Badge,
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
        <Badge color="lime.4" variant="filled">
          Lime filled
        </Badge>

        <Badge color="orange" variant="light">
          Orange light
        </Badge>

        <Badge variant="danger">
          Danger
        </Badge>
      </Group>
    </MantineProvider>
  );
}
```


<AutoContrast component="Badge" />

## autoContrast

Badge supports autoContrast prop and [theme.autoContrast](https://mantine.dev/theming/theme-object/#autocontrast). If autoContrast is set either on Badge or on theme, content color will be adjusted to have sufficient contrast with the value specified in color prop.

Note that autoContrast feature works only if you use color prop to change background color. autoContrast works only with filled variant.

#### Example: autoContrast

```tsx
import { Badge, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Badge size="lg" color="lime.4">
        Default
      </Badge>
      <Badge autoContrast size="lg" color="lime.4">
        Auto contrast
      </Badge>
    </Group>
  );
}
```


#### Example: stylesApi

```tsx
import { Badge } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt size={12} />;

  return (
    <Badge leftSection={icon} rightSection={icon}>
      Badge component
    </Badge>
  );
}
```


<Polymorphic defaultElement="div" changeToElement="a" component="Badge" withNext />

## Polymorphic component

Badge is a polymorphic component – its default root element is div, but it can be changed to any other element or component with component prop:

```tsx
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge component="a" />;
}
```

You can also use components in component prop, for example, Next.js Link:

```tsx
import Link from 'next/link';
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge component={Link} href="/" />;
}
```

**Polymorphic components with TypeScript**

Note that polymorphic components props types are different from regular components – they do not extend HTML element props of the default element. For example, BadgeProps does not extend React.ComponentPropsWithoutRef<'div'> although div is the default element.

If you want to create a wrapper for a polymorphic component that is not polymorphic (does not support component prop), then your component props interface should extend HTML element props.


#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for <code>filled</code> variant |
| children | React.ReactNode | - | Main badge content |
| circle | boolean | - | If set, badge <code>min-width</code> becomes equal to its <code>height</code> and horizontal padding is removed |
| color | MantineColor | - | Key of <code>theme.colors</code> or any valid CSS color |
| fullWidth | boolean | - | Determines whether Badge should take 100% of its parent width |
| gradient | MantineGradient | - | Gradient configuration used when <code>variant=\"gradient\"</code> |
| leftSection | React.ReactNode | - | Content displayed on the left side of the badge label |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code> |
| rightSection | React.ReactNode | - | Content displayed on the right side of the badge label |
| size | MantineSize | (string & {}) | - | Controls <code>font-size</code>, <code>height</code> and horizontal <code>padding</code> |


#### Styles API

Badge component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Badge selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Badge-root | Root element |
| section | .mantine-Badge-section | Left and right sections |
| label | .mantine-Badge-label | Badge children |

**Badge CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --badge-bd | Controls `border` |
| root | --badge-bg | Controls `background` |
| root | --badge-color | Controls text `color` |
| root | --badge-dot-color | Controls dot `color`, only applicable when `variant="dot"` |
| root | --badge-fz | Controls `font-size` |
| root | --badge-height | Controls `height` |
| root | --badge-padding-x | Controls horizontal `padding` |
| root | --badge-radius | Controls `border-radius` |

**Badge data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-block | - | - |
| section | data-position | - | Section position: left or right |