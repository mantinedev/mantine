# ThemeObject

# Theme object

Mantine theme is an object where your application's colors, fonts, spacing, border-radius, and other design tokens are stored.

```tsx
interface MantineTheme {
  /** Controls focus ring styles. Supports the following options:
   *  - `auto` – focus ring is displayed only when the user navigates with keyboard (default value)
   *  - `always` – focus ring is displayed when the user navigates with keyboard and mouse
   *  - `never` – focus ring is always hidden (not recommended)
   */
  focusRing: 'auto' | 'always' | 'never';

  /** rem units scale; change if you customize font-size of `<html />` element
   *  default value is `1` (for `100%`/`16px` font-size on `<html />`)
   */
  scale: number;

  /** Determines whether `font-smoothing` property should be set on the body; `true` by default */
  fontSmoothing: boolean;

  /** White color */
  white: string;

  /** Black color */
  black: string;

  /** Object of colors; key is color name, value is an array of at least 10 strings (colors) */
  colors: MantineThemeColors;

  /** Index of theme.colors[color].
   *  Primary shade is used in all components to determine which color from theme.colors[color] should be used.
   *  Can be either a number (0–9) or an object to specify different color shades for light and dark color schemes.
   *  Default value `{ light: 6, dark: 8 }`
   *
   *  For example,
   *  { primaryShade: 6 } // shade 6 is used both for dark and light color schemes
   *  { primaryShade: { light: 6, dark: 7 } } // different shades for dark and light color schemes
   * */
  primaryShade: MantineColorShade | MantinePrimaryShade;

  /** Key of `theme.colors`; hex/rgb/hsl values are not supported.
   *  Determines which color will be used in all components by default.
   *  Default value – `blue`.
   * */
  primaryColor: string;

  /** Function to resolve colors based on variant.
   *  Can be used to deeply customize how colors are applied to `Button`, `ActionIcon`, `ThemeIcon`
   *  and other components that use colors from the theme.
   * */
  variantColorResolver: VariantColorsResolver;

  /** Determines whether text color must be changed based on the given `color` prop in filled variant
   *  For example, if you pass `color="blue.1"` to the Button component, text color will be changed to `var(--mantine-color-black)`
   *  Default value – `false`
   * */
  autoContrast: boolean;

  /** Determines which luminance value is used to determine if text color should be light or dark.
   *  Used only if `theme.autoContrast` is set to `true`.
   *  Default value is `0.3`
   * */
  luminanceThreshold: number;

  /** font-family used in all components; system fonts by default */
  fontFamily: string;

  /** Monospace font-family; used in code and other similar components, system fonts by default  */
  fontFamilyMonospace: string;

  /** Controls various styles of h1-h6 elements; used in Typography and Title components */
  headings: {
    fontFamily: string;
    fontWeight: string;
    textWrap: 'wrap' | 'nowrap' | 'balance' | 'pretty' | 'stable';
    sizes: {
      h1: HeadingStyle;
      h2: HeadingStyle;
      h3: HeadingStyle;
      h4: HeadingStyle;
      h5: HeadingStyle;
      h6: HeadingStyle;
    };
  };

  /** Object of values that are used to set `border-radius` in all components that support it */
  radius: MantineRadiusValues;

  /** Key of `theme.radius` or any valid CSS value. Default `border-radius` used by most components */
  defaultRadius: MantineRadius;

  /** Object of values that are used to set various CSS properties that control spacing between elements */
  spacing: MantineSpacingValues;

  /** Object of values that are used to control `font-size` property in all components */
  fontSizes: MantineFontSizesValues;

  /** Object of values that are used to control `line-height` property in `Text` component */
  lineHeights: MantineLineHeightValues;

  /** Object of values that are used to control `font-weight` property in components */
  fontWeights: MantineFontWeightsValues;

  /** Object of values that are used to control breakpoints in all components;
   *  values are expected to be defined in em
   * */
  breakpoints: MantineBreakpointsValues;

  /** Object of values that are used to add `box-shadow` styles to components that support `shadow` prop */
  shadows: MantineShadowsValues;

  /** Determines whether user OS settings to reduce motion should be respected; `false` by default */
  respectReducedMotion: boolean;

  /** Determines which cursor type will be used for interactive elements
   * - `default` – cursor that is used by native HTML elements, for example, `input[type="checkbox"]` has `cursor: default` styles
   * - `pointer` – sets `cursor: pointer` on interactive elements that do not have these styles by default
   */
  cursorType: 'default' | 'pointer';

  /** Default gradient configuration for components that support `variant="gradient"` */
  defaultGradient: MantineGradient;

  /** Class added to the elements that have active styles, for example, `Button` and `ActionIcon` */
  activeClassName: string;

  /** Class added to the elements that have focus styles, for example, `Button` or `ActionIcon`.
   *  Overrides `theme.focusRing` property.
   */
  focusClassName: string;

  /** Allows adding `classNames`, `styles` and `defaultProps` to any component */
  components: MantineThemeComponents;

  /** Any other properties that you want to access with the theme objects */
  other: MantineThemeOther;
}
```

## Usage

To customize the theme, pass a theme override object to [MantineProvider](https://mantine.dev/llms/theming-mantine-provider.md) `theme` prop.
The theme override will be deeply merged with the default theme.

```tsx
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  colors: {
    // Add your color
    deepBlue: [
      '#eef3ff',
      '#dce4f5',
      '#b9c7e2',
      '#94a8d0',
      '#748dc1',
      '#5f7cb8',
      '#5474b4',
      '#44639f',
      '#39588f',
      '#2d4b81',
    ],
    // or replace default theme color
    blue: [
      '#eef3ff',
      '#dee2f2',
      '#bdc2de',
      '#98a0ca',
      '#7a84ba',
      '#6672b0',
      '#5c68ac',
      '#4c5897',
      '#424e88',
      '#364379',
    ],
  },

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  headings: {
    fontFamily: 'Roboto, sans-serif',
    sizes: {
      h1: { fontSize: '36px' },
    },
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      {/* Your app here */}
    </MantineProvider>
  );
}
```

## Theme properties

### autoContrast

`autoContrast` controls whether text color should be changed based on the given `color` prop
in the following components:

* [ActionIcon](https://mantine.dev/llms/core-action-icon.md) with `variant="filled"` only
* [Alert](https://mantine.dev/llms/core-alert.md) with `variant="filled"` only
* [Avatar](https://mantine.dev/llms/core-avatar.md) with `variant="filled"` only
* [Badge](https://mantine.dev/llms/core-badge.md) with `variant="filled"` only
* [Button](https://mantine.dev/llms/core-button.md) with `variant="filled"` only
* [Chip](https://mantine.dev/llms/core-chip.md) with `variant="filled"` only
* [NavLink](https://mantine.dev/llms/core-nav-link.md) with `variant="filled"` only
* [ThemeIcon](https://mantine.dev/llms/core-theme-icon.md) with `variant="filled"` only
* [Checkbox](https://mantine.dev/llms/core-checkbox.md) with `variant="filled"` only
* [Radio](https://mantine.dev/llms/core-radio.md) with `variant="filled"` only
* [Tabs](https://mantine.dev/llms/core-tabs.md) with `variant="pills"` only
* [SegmentedControl](https://mantine.dev/llms/core-segmented-control.md)
* [Stepper](https://mantine.dev/llms/core-stepper.md)
* [Pagination](https://mantine.dev/llms/core-pagination.md)
* [Progress](https://mantine.dev/llms/core-progress.md)
* [Indicator](https://mantine.dev/llms/core-indicator.md)
* [Timeline](https://mantine.dev/llms/core-timeline.md)
* [Spotlight](https://mantine.dev/llms/x-spotlight.md)
* All [@mantine/dates](https://mantine.dev/llms/dates-getting-started.md) components that are based on [Calendar](https://mantine.dev/llms/dates-calendar.md) component

`autoContrast` checks whether the given color luminosity is above or below the `luminanceThreshold` value
and changes text color to either `theme.white` or `theme.black` accordingly.

`autoContrast` can be set globally on the theme level or individually for each component via the `autoContrast` prop,
except for [Spotlight](https://mantine.dev/llms/x-spotlight.md) and [@mantine/dates](https://mantine.dev/llms/dates-getting-started.md) components which only support the global theme setting.

```tsx
import { Button, Code, Group } from '@mantine/core';

function Demo() {
  return (
    <>
      <Code>autoContrast: true</Code>
      <Group mt="xs" mb="lg">
        <Button color="lime.4" autoContrast>
          Lime.4 button
        </Button>
        <Button color="blue.2" autoContrast>
          Blue.2 button
        </Button>
        <Button color="orange.3" autoContrast>
          Orange.3 button
        </Button>
      </Group>

      <Code>autoContrast: false</Code>
      <Group mt="xs">
        <Button color="lime.4">Lime.4 button</Button>
        <Button color="blue.2">Blue.2 button</Button>
        <Button color="orange.3">Orange.3 button</Button>
      </Group>
    </>
  );
}
```


### luminanceThreshold

`luminanceThreshold` controls which luminance value is used to determine if text color should be light or dark.
It is used only if `theme.autoContrast` is set to `true`. The default value is `0.3`.

```tsx
import { Button, createTheme, MantineProvider, Stack } from '@mantine/core';

const theme = createTheme({
  autoContrast: true,
  luminanceThreshold: 0.3,
});

function Wrapper(props: any) {
  const buttons = Array(10)
    .fill(0)
    .map((_, index) => (
      <Button
        key={index}
        color=${
          parseThemeColor({ theme: DEFAULT_THEME, color: props.color }).isThemeColor
            ?
```


### focusRing

`theme.focusRing` controls focus ring styles, it supports the following values:

* `auto` (default and recommended) – focus ring is visible only when the user navigates with a keyboard, this is the default browser behavior for native interactive elements
* `always` – focus ring is visible when the user navigates with a keyboard and mouse, for example, the focus ring will be visible when the user clicks on a button
* `never` – focus ring is always hidden; it is not recommended – users who navigate with a keyboard will not have visual indication of the current focused element

```tsx
function Demo() {
  return (
    <>
      <Text>
        Focus ring: <Code>auto</Code>
      </Text>

      <Group mt="xs">
        <Button size="xs">Button 1</Button>
        <Button size="xs">Button 2</Button>
      </Group>

      <MantineThemeProvider inherit theme={{ focusRing: 'always' }}>
        <Text mt="lg">
          Focus ring: <Code>always</Code>
        </Text>

        <Group mt="xs">
          <Button size="xs">Button 1</Button>
          <Button size="xs">Button 2</Button>
        </Group>
      </MantineThemeProvider>

      <MantineThemeProvider inherit theme={{ focusRing: 'never' }}>
        <Text mt="lg">
          Focus ring: <Code>never</Code>
        </Text>

        <Group mt="xs">
          <Button size="xs">Button 1</Button>
          <Button size="xs">Button 2</Button>
        </Group>
      </MantineThemeProvider>
    </>
  );
}
```


### focusClassName

`theme.focusClassName` is a CSS class that is added to elements that have focus styles, for example, [Button](https://mantine.dev/llms/core-button.md) or [ActionIcon](https://mantine.dev/llms/core-action-icon.md).
It can be used to customize focus ring styles of all interactive components except inputs. Note that when `theme.focusClassName` is set, `theme.focusRing` is ignored.



> **:focus-visible selector**
>
> `:focus-visible` selector is supported by more than [91% of browsers](https://caniuse.com/css-focus-visible) (data from April 2023).
> Safari browsers added support for it in version 15.4 (released in March 2022). If you need to support Safari 15.3 and older, you can use [focus-visible polyfill](https://github.com/WICG/focus-visible)
> or provide a [fallback](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible#providing_a_focus_fallback) with `:focus` pseudo-class.

### activeClassName

`theme.activeClassName` is a CSS class that is added to elements that have active styles, for example, [Button](https://mantine.dev/llms/core-button.md) or [ActionIcon](https://mantine.dev/llms/core-action-icon.md).
It can be used to customize active styles of all interactive components.



To disable active styles for all components, set `theme.activeClassName` to an empty string:

```tsx
import { MantineProvider, Button } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ activeClassName: '' }}>
      <Button>No active styles</Button>
    </MantineProvider>
  );
}
```


### defaultRadius

`theme.defaultRadius` controls the default `border-radius` property in most components, for example, [Button](https://mantine.dev/llms/core-button.md) or [TextInput](https://mantine.dev/llms/core-text-input.md).
You can set it to either one of the values from `theme.radius` or a number/string to use an exact value. Note that numbers are treated as pixels, but
converted to rem. For example, `theme.defaultRadius: 4` will be converted to `0.25rem`.
You can learn more about rem conversion in the [rem units guide](https://mantine.dev/llms/styles-rem.md).

```tsx
import { MantineProvider, TextInput, Button } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ defaultRadius: 'sm' }}>
      <Button fullWidth>Button with defaultRadius</Button>
      <TextInput mt="sm" label="TextInput with defaultRadius" placeholder="TextInput with default radius" />
    </MantineProvider>
  );
}
```


### cursorType

`theme.cursorType` controls the default cursor type for interactive elements
that do not have `cursor: pointer` styles by default. For example, [Checkbox](https://mantine.dev/llms/core-checkbox.md) and [NativeSelect](https://mantine.dev/llms/core-native-select.md).

```tsx
import { MantineProvider, createTheme, Checkbox } from '@mantine/core';

const theme = createTheme({
  cursorType: 'pointer',
});

function Demo() {
  return (
    <>
      <Checkbox label="Default cursor" />

      <MantineProvider theme={theme}>
        <Checkbox label="Pointer cursor" mt="md" />
      </MantineProvider>
    </>
  );
}
```


### defaultGradient

`theme.defaultGradient` controls the default gradient configuration for components that support `variant="gradient"`
([Button](https://mantine.dev/llms/core-button.md), [ActionIcon](https://mantine.dev/llms/core-action-icon.md), [Badge](https://mantine.dev/llms/core-badge.md), etc.).

```tsx
import { MantineProvider, createTheme, Button } from '@mantine/core';

const theme = createTheme({
  defaultGradient: {
    from: 'orange',
    to: 'red',
    deg: 45,
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Button variant="gradient">Button with custom default gradient</Button>
    </MantineProvider>
  );
}
```


### fontWeights

`theme.fontWeights` controls `font-weight` values used in all components.
The default values are `regular: 400`, `medium: 600`, `bold: 700`.
Each value is mapped to a CSS variable: `--mantine-font-weight-regular`, `--mantine-font-weight-medium`, `--mantine-font-weight-bold`.

For example, to revert the medium font weight from `600` back to `500` (the default in Mantine 8):

```tsx
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  fontWeights: {
    medium: '500',
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      {/* Your app here */}
    </MantineProvider>
  );
}
```

### components

`theme.components` allows overriding of components' [default props](https://mantine.dev/llms/theming-default-props.md) and styles with `classNames` and `styles` properties.
You can learn more about these features in the [default props](https://mantine.dev/llms/theming-default-props.md) and [Styles API](https://mantine.dev/llms/styles-styles-api.md) guides.

### other

`theme.other` is an object that can be used to store any other properties that you want to access with the theme object.

```tsx
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  other: {
    charcoal: '#333333',
    primaryHeadingSize: 45,
    fontWeights: {
      bold: 700,
      extraBold: 900,
    },
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      {/* Your app here */}
    </MantineProvider>
  );
}
```

## Store theme override object in a variable

To store a theme override object in a variable, use the `createTheme` function:

```tsx
import { createTheme, MantineProvider } from '@mantine/core';

const myTheme = createTheme({
  primaryColor: 'orange',
  defaultRadius: 0,
});

function Demo() {
  return (
    <MantineProvider theme={myTheme}>
      {/* Your app here */}
    </MantineProvider>
  );
}
```

## Merge multiple theme overrides

Use the `mergeThemeOverrides` function to merge multiple themes into one theme override object:

```tsx
import {
  createTheme,
  MantineProvider,
  mergeThemeOverrides,
} from '@mantine/core';

const theme1 = createTheme({
  primaryColor: 'orange',
  defaultRadius: 0,
});

const theme2 = createTheme({
  cursorType: 'pointer',
});

// Note: It is better to store the theme override outside of the component body
// to prevent unnecessary re-renders
const myTheme = mergeThemeOverrides(theme1, theme2);

function Demo() {
  return (
    <MantineProvider theme={myTheme}>
      {/* Your app here */}
    </MantineProvider>
  );
}
```

## use-mantine-theme hook

The `useMantineTheme` hook returns the theme object from [MantineProvider](https://mantine.dev/llms/theming-mantine-provider.md) context:

```tsx
import { useMantineTheme } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();
  return <div style={{ background: theme.colors.blue[5] }} />;
}
```

## Default theme

You can import the default theme object from the `@mantine/core` package. It includes
all theme properties with default values. When you pass a theme override to
[MantineProvider](https://mantine.dev/llms/theming-mantine-provider.md), it will be deeply merged with
the default theme.

```tsx
import { DEFAULT_THEME } from '@mantine/core';
```

## Access theme outside of components

To access theme outside of components, you need to create a full theme object
(your theme override merged with the default theme).

```tsx
// theme.ts
import {
  createTheme,
  DEFAULT_THEME,
  mergeMantineTheme,
} from '@mantine/core';

const themeOverride = createTheme({
  primaryColor: 'orange',
  defaultRadius: 0,
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
```

Then you will be able to import it anywhere in your application:

```tsx
import { theme } from './theme';
```
