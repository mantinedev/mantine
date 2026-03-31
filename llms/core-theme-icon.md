# ThemeIcon
Package: @mantine/core
Import: import { ThemeIcon } from '@mantine/core';
Description: Render icon inside element with theme colors

## Usage

```tsx
import { ThemeIcon } from '@mantine/core';
import { ImageIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <ThemeIcon variant="filled" radius="md" size="md" color="blue">
      <ImageIcon style={{ width: '70%', height: '70%' }} />
    </ThemeIcon>
  );
}
```


```tsx
import { ThemeIcon } from '@mantine/core';
import { HeartIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <ThemeIcon
      variant="gradient"
      size="xl"
      aria-label="Gradient action icon"
      gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
    >
      <HeartIcon />
    </ThemeIcon>
  );
}
```


## Customize variants colors

You can customize colors for `ThemeIcon` and other component variants by adding
[variantColorResolver](https://mantine.dev/llms/theming-colors.md#colors-variant-resolver) to your theme.

```tsx
import { ImageIcon, FingerprintIcon, WarningIcon } from '@phosphor-icons/react';
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
          <ImageIcon size={20} />
        </ThemeIcon>

        <ThemeIcon color="orange" variant="light">
          <FingerprintIcon size={20} />
        </ThemeIcon>

        <ThemeIcon variant="danger">
          <WarningIcon size={20} />
        </ThemeIcon>
      </Group>
    </MantineProvider>
  );
}
```


```tsx
import { FingerprintIcon } from '@phosphor-icons/react';
import { ThemeIcon, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <ThemeIcon size="lg" color="lime.4">
        <FingerprintIcon size={20} />
      </ThemeIcon>
      <ThemeIcon size="lg" color="lime.4" autoContrast>
        <FingerprintIcon size={20} />
      </ThemeIcon>
    </Group>
  );
}
```



#### Props

**ThemeIcon props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autoContrast | boolean | - | If set, adjusts text color based on background color for `filled` variant |
| children | React.ReactNode | - | Icon displayed inside the component |
| color | MantineColor | - | Key of `theme.colors` or any valid CSS color. |
| gradient | MantineGradient | - | Gradient data used when `variant="gradient"` |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. |
| size | MantineSize \| number | - | Controls width and height of the button. Numbers are converted to rem. |


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
