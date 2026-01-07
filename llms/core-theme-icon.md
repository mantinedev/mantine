# ThemeIcon
Package: @mantine/core
Import: import { ThemeIcon } from '@mantine/core';
Description: Render icon inside element with theme colors

## Usage

#### Example: usage

```tsx
import { ThemeIcon } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

function Demo() {
  return (
    <ThemeIcon>
      <IconPhoto style={{ width: '70%', height: '70%' }} />
    </ThemeIcon>
  );
}
```


<Gradient component="ThemeIcon" />

## Gradient

ThemeIcon supports Mantine color format in color prop. Color can be specified as:
- Mantine color name (e.g., 'blue')
- CSS color value (e.g., '#fff', 'rgba(255, 255, 255, 0.8)')
- Gradient string (e.g., 'linear-gradient(45deg, blue, red)')

#### Example: gradient

```tsx
import { ThemeIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ThemeIcon
      variant="gradient"
      size="xl"
      aria-label="Gradient action icon"
      gradient={{ from: 'cyan', to: 'blue', deg: 90 }}
    >
      <IconHeart />
    </ThemeIcon>
  );
}
```


## Customize variants colors

You can customize colors for `ThemeIcon` and other components variants by adding
[variantColorResolver](https://mantine.dev/theming/colors#colors-variant-resolver) to your theme.

#### Example: variantColorsResolver

```tsx
import { IconPhoto, IconFingerprint, IconError404 } from '@tabler/icons-react';
import {
  ThemeIcon,
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
        <ThemeIcon color="lime.4" variant="filled">
          <IconPhoto size={20} />
        </ThemeIcon>

        <ThemeIcon color="orange" variant="light">
          <IconFingerprint size={20} />
        </ThemeIcon>

        <ThemeIcon variant="danger">
          <IconError404 size={20} />
        </ThemeIcon>
      </Group>
    </MantineProvider>
  );
}
```


<AutoContrast component="ThemeIcon" />

## autoContrast

ThemeIcon supports autoContrast prop and [theme.autoContrast](https://mantine.dev/theming/theme-object/#autocontrast). If autoContrast is set either on ThemeIcon or on theme, content color will be adjusted to have sufficient contrast with the value specified in color prop.

Note that autoContrast feature works only if you use color prop to change background color. autoContrast works only with filled variant.

#### Example: autoContrast

```tsx
import { IconFingerprint } from '@tabler/icons-react';
import { ThemeIcon, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <ThemeIcon size="lg" color="lime.4">
        <IconFingerprint size={20} />
      </ThemeIcon>
      <ThemeIcon size="lg" color="lime.4" autoContrast>
        <IconFingerprint size={20} />
      </ThemeIcon>
    </Group>
  );
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for <code>filled</code> variant |
| children | React.ReactNode | - | Icon displayed inside the component |
| color | MantineColor | - | Key of <code>theme.colors</code> or any valid CSS color. |
| gradient | MantineGradient | - | Gradient data used when <code>variant="gradient"</code> |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set border-radius. Numbers are converted to rem. |
| size | number | MantineSize | (string & {}) | - | Controls width and height of the button. Numbers are converted to rem. |


#### Styles API

ThemeIcon component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**ThemeIcon selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-ThemeIcon-root | Root element |

**ThemeIcon CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --ti-bg | Controls `background` |
| root | --ti-bd | Controls `border` |
| root | --ti-color | Controls icon `color` |
| root | --ti-radius | Controls `border-radius` |
| root | --ti-size | Controls `width`, `height`, `min-width` and `min-height` styles |