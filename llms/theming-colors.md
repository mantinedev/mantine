# Colors

# Colors

Mantine uses [open-color](https://yeun.github.io/open-color/) in default theme with some additions.
Each color has 10 shades.

Colors are exposed on the [theme object](https://mantine.dev/theming/theme-object) as an array of strings,
you can access color shade by color name and index (0-9), colors with larger index are darker:

```tsx
import { useMantineTheme } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();

  return (
    <div
      style={{
        backgroundColor: theme.colors.blue[1],
        color: theme.colors.blue[9],
      }}
    >
      This is a blue theme
    </div>
  );
}
```

Colors are also exposed as [CSS variables](https://mantine.dev/styles/css-variables):

```scss
.demo {
  color: var(--mantine-color-red-5);
  background: var(--mantine-color-grape-9);
  border: 1px solid var(--mantine-color-blue-1);
}
```

## Adding extra colors

You can add any number of extra colors to `theme.colors` object.
This will allow you to use them in all components that support `color` prop, for example
[Button](https://mantine.dev/core/button), [Badge](https://mantine.dev/core/badge) and [Switch](https://mantine.dev/core/switch).

#### Example: colorsOverride

```tsx
import { Group, Button, MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  colors: {
    'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
    'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button color="ocean-blue">Ocean blue button</Button>
        <Button color="bright-pink" variant="filled">
          Bright pink button
        </Button>
      </Group>
    </MantineProvider>
  );
}
```


> **10 shades per color**
>
> Colors override must include **at least 10 shades per color**. Otherwise, you will get a TypeScript error
> and some variants will not have proper colors. If you only have one color value, you can either
> pick the remaining colors manually or use the [colors generator tool](https://mantine.dev/colors-generator).
>
> You can add more than 10 shades per color: these values will not be used by Mantine components with the default colors resolver,
> but you can still reference them by index, for example, `color="blue.11"`.

## Virtual colors

Virtual color is a special color which values should be different for light and dark color schemes.
To define a virtual color, use `virtualColor` function which accepts an object with the following
properties as a single argument:

* `name` – color name, must be the same as the key in `theme.colors` object
* `light` – a key of `theme.colors` object for light color scheme
* `dark` – a key of `theme.colors` object for dark color scheme

To see the demo in action, switch between light and dark color schemes (`Ctrl + J`):

#### Example: virtualColors

```tsx
// App.tsx
import { createTheme, MantineProvider, virtualColor } from '@mantine/core';
import { Demo } from './Demo';

const theme = createTheme({
  colors: {
    primary: virtualColor({
      name: 'primary',
      dark: 'pink',
      light: 'cyan',
    }),
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Demo />
    </MantineProvider>
  );
}

// Demo.tsx
import { Box } from '@mantine/core';

export function Demo() {
  return (
    <Box bg="primary" c="white" p="md" fw={700}>
      This box has virtual background color,
      it is pink in dark mode and cyan in light mode
    </Box>
  );
}
```


## colorsTuple

Use `colorsTuple` function to:

* Use single color as the same color for all shades
* Transform dynamic string arrays to Mantine color tuple (the array should still have 10 values)

```tsx
import { colorsTuple, createTheme } from '@mantine/core';

const theme = createTheme({
  colors: {
    custom: colorsTuple('#FFC0CB'),
    dynamic: colorsTuple(
      Array.from({ length: 10 }, (_, index) => '#FFC0CB')
    ),
  },
});
```

## Supported color formats

You can use the following color formats in `theme.colors`:

* HEX: `#fff`, `#ffffff`
* RGB: `rgb(255, 255, 255)`, `rgba(255, 255, 255, 0.5)`
* HSL: `hsl(0, 0%, 100%)`, `hsla(0, 0%, 100%, 0.5)`
* OKLCH: `oklch(96.27% 0.0217 238.66)`, `oklch(96.27% 0.0217 238.66 / 0.5)`

Example of adding oklch color to theme:

#### Example: oklch

```tsx
import { MantineProvider, createTheme, Group, Button } from '@mantine/core';

const theme = createTheme({
  colors: {
    'oklch-blue': [
      'oklch(96.27% 0.0217 238.66)',
      'oklch(92.66% 0.0429 240.01)',
      'oklch(86.02% 0.0827 241.66)',
      'oklch(78.2% 0.13 243.83)',
      'oklch(71.8% 0.1686 246.06)',
      'oklch(66.89% 0.1986 248.32)',
      'oklch(62.59% 0.2247 250.29)',
      'oklch(58.56% 0.2209 251.26)',
      'oklch(54.26% 0.2067 251.67)',
      'oklch(49.72% 0.1888 251.59)',
    ],
  }
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button color="oklch-blue">Filled</Button>
        <Button color="oklch-blue" variant="outline">
          Outline
        </Button>
        <Button color="oklch-blue" variant="light">
          Light
        </Button>
      </Group>
    </MantineProvider>
  );
}
```


## primaryColor

`theme.primaryColor` is a key of `theme.colors`, it is used:

* As a default value for most of the components that support `color` prop
* To set default focus ring outline color

#### Example: primaryColor

```tsx
import { Group, Button, MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  primaryColor: 'bright-pink',
  colors: {
    'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button>Primary button</Button>
        <Button color="blue">Blue button</Button>
      </Group>
    </MantineProvider>
  );
}
```


> **CSS color values at `theme.primaryColor`**
>
> Value of `theme.primaryColor` must be a key of `theme.colors` object. For example, `blue`, `orange` or `green`.
> You cannot assign CSS color values, for example, the following code will throw an error during theme merging:
>
> ```tsx
> import { MantineProvider } from '@mantine/core';
>
> function Demo() {
>   return (
>     <MantineProvider
>       theme={{
>         primaryColor: '#CEFEDC', // This will throw an error
>       }}
>     >
>       {/* Your app here */}
>     </MantineProvider>
>   );
> }
> ```

## primaryShade

`theme.primaryShade` is a number from 0 to 9. It determines which shade will be used for the components that have `color` prop.

#### Example: primaryShadeConfigurator

```tsx
import { MantineProvider, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ primaryShade:  }}>
      <Group>
        <Button>Filled</Button>
        <Button variant="light">Light</Button>
        <Button variant="outline">Outline</Button>
      </Group>
    </MantineProvider>
  );
}
```


You can also customize primary shade for dark and light color schemes separately:

```tsx
import { MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ primaryShade: { light: 6, dark: 8 } }}>
      {/* Your app here */}
    </MantineProvider>
  );
}
```

## Color prop

Components that support changing their color have `color` prop. This prop supports the following values:

* Key of `theme.colors`, for example, `blue` or `green`
* Key of `theme.colors` with color index, for example, `blue.5` or `green.9`
* CSS color value, for example, `#fff` or `rgba(0, 0, 0, 0.5)`

#### Example: colorProp

```tsx
import { Group, Button, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm" mb={5} fw={500}>
        Filled variant
      </Text>
      <Group>
        <Button color="cyan">Theme color</Button>
        <Button color="#1D72FE">Hex color</Button>
      </Group>

      <Text size="sm" mb={5} mt="md" fw={500}>
        Light variant
      </Text>
      <Group>
        <Button variant="light" color="cyan">
          Theme color
        </Button>
        <Button variant="light" color="#1D72FE">
          Hex color
        </Button>
      </Group>

      <Text size="sm" mb={5} mt="md" fw={500}>
        Outline variant
      </Text>
      <Group>
        <Button variant="outline" color="cyan">
          Theme color
        </Button>
        <Button variant="outline" color="#1D72FE">
          Hex color
        </Button>
      </Group>
    </>
  );
}
```


## Colors index reference

You can reference colors by index in `color` prop and [style props](https://mantine.dev/styles/style-props), for example `c` prop:

#### Example: colorsIndexConfigurator

```tsx
import { Button, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text c="blue.">Text with blue. color</Text>
      <Button color="cyan.">Button</Button>
    </>
  );
}
```


## Difference between color and c props

`color` prop is used to control multiple CSS properties of the component. These properties can vary across different components,
but usually `color` prop controls `background`, `color` and `border-color` CSS properties. For example,
when you set `color="#C3FF36"` on [Button](https://mantine.dev/core/button) component (with `variant="filled"`), it will set the following CSS properties:

* `background-color` to `#C3FF36`
* `background-color` when button is hovered to `#B0E631` (`#C3FF36` darkened by 10%)
* `color` to `var(--mantine-color-white)`
* `border-color` to `transparent`

`c` is a [style prop](https://mantine.dev/styles/style-props) – it is responsible for setting a single CSS property `color` (color of the text).
You can combine both props to achieve better contrast between text and background. In the following example:

* `color` prop sets all `background: #C3FF36` and `color: var(--mantine-color-white)`
* `c` prop overrides color styles to `color: var(--mantine-color-black)`

#### Example: colorAndCProps

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button color="#C3FF36" c="black">
      Button with color and c props
    </Button>
  );
}
```


## Colors variant resolver

`theme.variantColorResolver` is a function that is used to determine which colors will be used
in different variants in the following components: [Alert](https://mantine.dev/core/alert), [Avatar](https://mantine.dev/core/avatar), [Button](https://mantine.dev/core/button), [Badge](https://mantine.dev/core/badge) and [ActionIcon](https://mantine.dev/core/action-icon).

It accepts an object argument with the following properties:

```tsx
interface VariantColorsResolverInput {
  /** `color` prop passed to component */
  color: MantineColor | undefined;

  /** `variant` prop passed to component */
  variant: string;

  /** `gradient` prop passed to component, used only for gradient variant by default */
  gradient?: MantineGradient;

  /** Theme object */
  theme: MantineTheme;
}
```

`theme.variantColorResolver` must return an object with the following properties:

```tsx
interface VariantColorResolverResult {
  background: string;
  hover: string;
  color: string;
  border: string;
}
```

You can use `theme.variantColorResolver` to customize colors handling by default variants
or to add new variants support:

#### Example: variantColorsResolver

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


## Colors generation

You can use [colors generator](https://mantine.dev/colors-generator) to generate 10 shades of color based on a single value
or install `@mantine/colors-generator` package to generate dynamic colors in your application:

```bash
yarn add chroma-js @mantine/colors-generator
```

```bash
npm install chroma-js @mantine/colors-generator
```

The package exports `generateColors` function that accepts a color value and returns an array of 10 shades.
Note that `generateColors` function works best with darker colors (blue, violet, red) and may produce
colors with poor contrast for lighter colors (yellow, teal, orange). Usually, it is better to generate
colors in advance to avoid contrast issues.

```tsx
import { generateColors } from '@mantine/colors-generator';
import { MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      theme={{
        colors: {
          'pale-blue': generateColors('#375EAC'),
        },
      }}
    >
      {/* Your app here */}
    </MantineProvider>
  );
}
```

## Default colors

<ThemeColors />

## Add custom colors types

TypeScript will only autocomplete Mantine's default colors when accessing the theme. To add your custom colors to the MantineColor type, you can use TypeScript module declaration.

```ts
import {
  DefaultMantineColor,
  MantineColorsTuple,
} from '@mantine/core';

type ExtendedCustomColors =
  | 'primaryColorName'
  | 'secondaryColorName'
  | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }
}
```


#### Styles API

Colors component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Colorswatch selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Colorswatch-root | Root element |
| alphaOverlay | .mantine-Colorswatch-alphaOverlay | Overlay with checkerboard pattern |
| shadowOverlay | .mantine-Colorswatch-shadowOverlay | Overlay with inner box-shadow |
| colorOverlay | .mantine-Colorswatch-colorOverlay | Overlay with given color background |
| childrenOverlay | .mantine-Colorswatch-childrenOverlay | Overlay with `children` inside |

**Colorswatch CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --cs-radius | Controls `border-radius` of all overlays and `root` element |
| root | --cs-size | Controls `width`, `height`, `min-width` and `min-height` of the `root` element |