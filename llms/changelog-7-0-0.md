# Changelog700

## Migration to native CSS

Mantine no longer depends on [Emotion](https://emotion.sh/) for styles generation. All `@mantine/*`
packages are now shipped with native CSS files which can be imported from `@mantine/{package}/styles.css`,
for example:

```tsx
import '@mantine/core/styles.css';
```

This change improves performance, reduces bundle size of the library and allows using Mantine
in environments where CSS-in-JS is not supported (or supported with limitations), for example,
Next.js app directory.

Important breaking changes:

* `createStyles` function is no longer available, use [CSS modules](https://mantine.dev/llms/styles-css-modules.md) or any other styling solution of your choice instead
* Components no longer support `sx` prop. You can use `className` or `style` props instead.
* `styles` prop no longer supports nested selectors

It is now recommended to use [CSS modules](https://mantine.dev/llms/styles-css-modules.md) to style Mantine components.
To update your project to [CSS modules](https://mantine.dev/llms/styles-css-modules.md), follow the [6.x → 7.x migration guide](https://mantine.dev/llms/guides-6x-to-7x.md).

## Vanilla extract integration

If you prefer CSS-in-JS syntax for styling, you can use [Vanilla extract](https://mantine.dev/llms/styles-vanilla-extract.md)
as a TypeScript CSS preprocessor. You will be able to use most of Mantine styling features
with [Vanilla extract](https://mantine.dev/llms/styles-vanilla-extract.md).

## System color scheme support

All components now support system color scheme – when `colorScheme` value is `auto`,
components will use `prefers-color-scheme` media query to determine if the user prefers light or dark color scheme.

Note that `auto` is not the default value. You need to set it manually to enable system color scheme support
both on [MantineProvider](https://mantine.dev/llms/theming-mantine-provider.md) and in [ColorSchemeScript](https://mantine.dev/llms/theming-color-schemes.md#colorschemescript):

```tsx
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <>
      <ColorSchemeScript defaultColorScheme="auto" />
      <MantineProvider defaultColorScheme="auto">
        {/* Your app here */}
      </MantineProvider>
    </>
  );
}
```

## Built-in color scheme manager

[MantineProvider](https://mantine.dev/llms/theming-mantine-provider.md) now comes with a built-in color scheme manager.
It is no longer required to use any other components to set up color scheme logic.
Color scheme can be changed with [useMantineColorScheme hook](https://mantine.dev/llms/theming-color-schemes.md#use-mantine-color-scheme-hook):

```tsx
import { useMantineColorScheme, Button, Group } from '@mantine/core';

function Demo() {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();

  return (
    <Group>
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>
      <Button onClick={clearColorScheme}>Clear</Button>
    </Group>
  );
}
```


## CSS modules and PostCSS preset

[CSS modules](https://mantine.dev/llms/styles-css-modules.md) is now the recommended way to style Mantine components,
although it is not required – you can choose any other styling solution of your choice.

It is also recommended to use [postcss-preset-mantine](https://mantine.dev/llms/styles-postcss-preset.md). It includes
mixins and functions to simplify styling of Mantine components. [postcss-preset-mantine](https://mantine.dev/llms/styles-postcss-preset.md)
is included in all templates.

## Global styles

Mantine no longer includes normalize.css. Instead, it uses a bare minimum set of [global styles](https://mantine.dev/llms/styles-global-styles.md).
These styles are part of the `@mantine/core` package and are applied automatically when you import
`@mantine/core/styles.css` in your application. Note that these styles cannot be decoupled from the
rest of the library.

## Mantine as a headless UI library

You can now use Mantine as a [headless](https://mantine.dev/llms/styles-unstyled.md) library. To achieve that, just do not import
`@mantine/*/styles.css` in your application. Then you will be able to apply styles with
[Styles API](https://mantine.dev/llms/styles-styles-api.md).

## createTheme function

`createTheme` function is a replacement for `MantineThemeOverride` type. Use it to create a theme
override, it will give you autocomplete for all theme properties:

```tsx
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  fontFamily: 'sans-serif',
  primaryColor: 'orange',
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      {/* Your app here */}
    </MantineProvider>
  );
}
```

## Components extend functions

All components that support [default props](https://mantine.dev/llms/theming-default-props.md) or [Styles API](https://mantine.dev/llms/styles-styles-api.md) now have a static `extend` function which allows getting autocomplete when customizing
[defaultProps](https://mantine.dev/llms/theming-default-props.md), [classNames and styles](https://mantine.dev/llms/styles-styles-api.md) of the component
on [theme](https://mantine.dev/llms/theming-theme-object.md):

```tsx
import {
  createTheme,
  MantineProvider,
  TextInput,
} from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    TextInput: TextInput.extend({
      styles: (t, props) => ({
        input: {
          fontSize:
            props.size === 'compact' ? t.fontSizes.sm : undefined,
        },
      }),
      classNames: {
        root: classes.root,
        input: classes.input,
        label: classes.label,
      },

      defaultProps: {
        size: 'compact',
      },
    }),
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

## classNames based on component props

You can now get component props in [classNames and styles](https://mantine.dev/llms/styles-styles-api.md) to conditionally apply styles.
This feature is a more powerful replacement for styles params.

```tsx
// Demo.tsx
import cx from 'clsx';
import { MantineProvider, createTheme, TextInput } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    TextInput: TextInput.extend({
      classNames: (_theme, props) => ({
        label: cx({ [classes.labelRequired]: props.required }),
        input: cx({ [classes.inputError]: props.error }),
      }),
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput required label="Required input" placeholder="Required input" />
      <TextInput error label="Input with error" placeholder="Input with error" mt="md" />
    </MantineProvider>
  );
}

// Demo.module.css
.labelRequired {
  color: var(--mantine-color-red-filled);
}

.inputError {
  background-color: var(--mantine-color-red-light);
}
```


## Components CSS variables

You can now customize components [CSS variables](https://mantine.dev/llms/styles-styles-api.md) to change component styles based on its props.
For example, it can be used to add new [sizes](https://mantine.dev/llms/styles-variants-sizes.md):

```tsx
// MantineProvider.tsx
import { Button, Group, MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  components: {
    Button: Button.extend({
      vars: (theme, props) => {
        if (props.size === 'xxl') {
          return {
            root: {
              '--button-height': '60px',
              '--button-padding-x': '30px',
              '--button-fz': '24px',
            },
          };
        }

        if (props.size === 'xxs') {
          return {
            root: {
              '--button-height': '24px',
              '--button-padding-x': '10px',
              '--button-fz': '10px',
            },
          };
        }

        return { root: {} };
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button size="xxl">XXL Button</Button>
        <Button size="xxs">XXS Button</Button>
      </Group>
    </MantineProvider>
  );
}

// Inline.tsx
import { Button, PartialVarsResolver, ButtonFactory, Group } from '@mantine/core';

const varsResolver: PartialVarsResolver<ButtonFactory> = (theme, props) => {
  if (props.size === 'xxl') {
    return {
      root: {
        '--button-height': '60px',
        '--button-padding-x': '30px',
        '--button-fz': '24px',
      },
    };
  }

  if (props.size === 'xxs') {
    return {
      root: {
        '--button-height': '24px',
        '--button-padding-x': '10px',
        '--button-fz': '10px',
      },
    };
  }

  return { root: {} };
};

function Demo() {
  return (
    <Group>
      <Button vars={varsResolver} size="xxl">
        XXL Button
      </Button>
      <Button vars={varsResolver} size="xxs">
        XXS Button
      </Button>
    </Group>
  );
}
```


## New variants system

All components now have `data-variant` attribute on the root element, even if the component does not have any predefined variants.
You can use it to apply styles to all components of the same type on [theme](https://mantine.dev/llms/theming-theme-object.md):

```tsx
// Demo.tsx
import { Input, MantineProvider, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

// It is better to add new variants in theme.components
// This way you will be able to use them in anywhere in the app
const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  }
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Input variant="underline" placeholder="Underline input" />
      <Input variant="filled" placeholder="Filled input" mt="md" />
    </MantineProvider>
  );
}

// Demo.module.css
.input {
  &[data-variant='underline'] {
    border-bottom: 2px solid;
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;

    @mixin light {
      border-color: var(--mantine-color-gray-3);
    }

    @mixin dark {
      border-color: var(--mantine-color-dark-3);
    }

    &:focus {
      border-color: var(--mantine-color-blue-filled);
    }
  }
}
```


## New sizes system

There are multiple ways to customize component sizes:

* With `data-size` attribute
* With component [CSS variables](https://mantine.dev/llms/styles-styles-api.md)
* With [static CSS variables](https://mantine.dev/llms/styles-variants-sizes.md#sizes-with-static-css-variables)

Example of customizing [Button](https://mantine.dev/llms/core-button.md) size with `data-size` attribute:

```tsx
// Demo.tsx
import { Input, createTheme, MantineProvider } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Input placeholder="Size XXL" size="xxl" />
      <Input placeholder="Size XXS" size="xxs" mt="md" />
    </MantineProvider>
  );
}

// Demo.module.css
.wrapper {
  &[data-size='xxl'] {
    & .input {
      padding-left: 28px;
      padding-right: 28px;
      height: 68px;
      font-size: 28px;
    }
  }

  &[data-size='xxs'] {
    & .input {
      padding-left: 10px;
      padding-right: 10px;
      height: 28px;
      font-size: 10px;
    }
  }
}
```


## theme.variantColorResolver

[Button](https://mantine.dev/llms/core-button.md), [Badge](https://mantine.dev/llms/core-badge.md), [ActionIcon](https://mantine.dev/llms/core-action-icon.md), [ThemeIcon](https://mantine.dev/llms/core-theme-icon.md) and other
components now support custom variants with [variantColorResolver](https://mantine.dev/llms/theming-colors.md#colors-variant-resolver)
– it supports both changing colors of existing variants and adding new variants.

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


## rem units scaling

It is now possible to scale [rem](https://mantine.dev/llms/styles-rem.md#rem-units-scaling) units. It is useful when you want to change
font-size of `html`/`:root` element and preserve Mantine components sizes. For example, if you would like to set `html` font-size to `10px` and scale Mantine components accordingly, you need
to set `scale` to `1 / (10 / 16)` (16 – default font-size) = `1 / 0.625` = `1.6`:

```css
:root {
  font-size: 10px;
}
```

```tsx
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  scale: 1.6,
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      {/* Your app here */}
    </MantineProvider>
  );
}
```

## color prop improvements

All components that support `color` prop now support the following color values:

* Key of `theme.colors`, for example, `blue`
* `theme.colors` index reference, for example, `blue.5`
* Any valid CSS color value, for example, `#fff`, `rgba(0, 0, 0, 0.5)`, `hsl(0, 0%, 100%)`

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


## Components classes

Classes of each component are now available in `Component.classes` object. For example, you can
find [Button](https://mantine.dev/llms/core-button.md) classes in `Button.classes`:

You can use these classes to create components with the same styles as Mantine components:

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return <button type="button" className={Button.classes.root} />;
}
```

## Theme object changes

* `theme.lineHeight` is now `theme.lineHeights` – it is now possible to specify multiple line heights. `theme.lineHeights` values are used in the [Text](https://mantine.dev/llms/core-text.md) component.
* `theme.colorScheme` is no longer available, use [useMantineColorScheme](https://mantine.dev/llms/theming-color-schemes.md#use-mantine-color-scheme-hook) to get color scheme value
* `theme.dir` is no longer needed, direction is now managed by [DirectionProvider](https://mantine.dev/llms/styles-rtl.md)
* `theme.loader` was removed, you can now configure default loader with [default props](https://mantine.dev/llms/theming-default-props.md) of [Loader](https://mantine.dev/llms/core-loader.md) component
* `theme.transitionTimingFunction` was removed
* `theme.focusRingStyles` was replaced with `theme.focusClassName`
* `theme.activeStyles` was replaced with `theme.activeClassName`
* `theme.globalStyles` was removed
* `theme.fn` functions were removed, some of the functions are available as [standalone utilities](https://mantine.dev/llms/styles-color-functions.md)
* New [theme.scale](https://mantine.dev/llms/styles-rem.md#rem-units-scaling) property controls rem units scaling
* New `theme.fontSmoothing` property determines whether font smoothing styles should be applied to the body element
* New [theme.variantColorResolver](https://mantine.dev/llms/theming-colors.md#colors-variant-resolver) property allows customizing component colors per variant

## Colors generator

New [@mantine/colors-generator](https://mantine.dev/llms/theming-colors.md#colors-generation) package is now available to generate
color palettes based on single color value. It is also available as [online tool](https://mantine.dev/colors-generator/).
Note that it is usually better to generate colors in advance to avoid contrast issues.

```tsx
import { generateColors } from '@mantine/colors-generator';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  colors: {
    'pale-blue': generateColors('#375EAC'),
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

## New setup for RTL

`@mantine/core` package now exports [DirectionProvider](https://mantine.dev/llms/styles-rtl.md) component, which should be used to configure the direction of the application.
`useDirection` hook can be used to toggle direction. All components now include RTL styles by default, it is no
longer required to set up additional plugins. See [RTL documentation](https://mantine.dev/llms/styles-rtl.md) to learn more.

## React 18+ only

Starting from version 7.0 Mantine no longer supports older React versions. The minimum supported version is now React 18.
It is required because Mantine components now use [useId](https://react.dev/reference/react/useId) and [useSyncExternalStore](https://react.dev/reference/react/useSyncExternalStore)
hooks, which are available only in React 18.

## left and right section

Components that previously had `rightSection` and `icon` props, now use `leftSection` instead of `icon`.
Example of [Button](https://mantine.dev/llms/core-button.md) sections:

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button leftSection="left" rightSection="right">
      Label
    </Button>
  );
}
```

## NumberInput changes

[NumberInput](https://mantine.dev/llms/core-number-input.md) was migrated to [react-number-format](https://s-yadav.github.io/react-number-format/).
It now supports more features and has improvements in cursor position management.
Due to migration, some of the props were renamed – follow the [documentation](https://mantine.dev/llms/core-number-input.md) to learn about the changes.

```tsx
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="With prefix"
        placeholder="Dollars"
        prefix="$"
        defaultValue={100}
        mb="md"
      />
      <NumberInput
        label="With suffix"
        placeholder="Percents"
        suffix="%"
        defaultValue={100}
        mt="md"
      />
    </>
  );
}
```


## Loader changes

[Loader](https://mantine.dev/llms/core-loader.md) component is now built with CSS only. This change improves performance and reduces
HTML output of the component.

```tsx
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader color="blue" size="md" type="oval" />;
}
```


[Theme](https://mantine.dev/llms/theming-theme-object.md) object no longer supports `theme.loader` property –
it is also now possible to add custom loaders on [theme](https://mantine.dev/llms/theming-theme-object.md) with [default props](https://mantine.dev/llms/theming-default-props.md).
Specified [Loader](https://mantine.dev/llms/core-loader.md) will be used in all components that use it under the hood ([LoadingOverlay](https://mantine.dev/llms/core-loading-overlay.md), [Button](https://mantine.dev/llms/core-button.md), [ActionIcon](https://mantine.dev/llms/core-action-icon.md), [Stepper](https://mantine.dev/llms/core-stepper.md), etc.).

```tsx
import { MantineProvider, Loader } from '@mantine/core';
import { RingLoader } from './RingLoader';

const theme = createTheme({
  components: {
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, ring: RingLoader },
        type: 'ring',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Loader />
    </MantineThemeProvider>
  );
}
```


## Progress changes

[Progress](https://mantine.dev/llms/core-progress.md) component now supports compound components pattern.
Advanced features that were previously implemented in [Progress](https://mantine.dev/llms/core-progress.md) are now supposed to be implemented with
compound components instead.

```tsx
import { Progress } from '@mantine/core';

function Demo() {
  return (
    <Progress.Root size="xl">
      <Progress.Section value={35} color="cyan">
        <Progress.Label>Documents</Progress.Label>
      </Progress.Section>
      <Progress.Section value={28} color="pink">
        <Progress.Label>Photos</Progress.Label>
      </Progress.Section>
      <Progress.Section value={15} color="orange">
        <Progress.Label>Other</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  );
}
```


## Table changes

[Table](https://mantine.dev/llms/core-table.md) component changes:

* [Styles API](https://mantine.dev/llms/styles-styles-api.md) support
* It is now required to use compound components instead of elements: `Table.Tr`, `Table.Td`, etc.
* It is now easier to override styles – all styles are added with classes instead of deeply nested selectors on root element
* New props: `borderColor`, `withRowBorders`, `stripedColor`, `highlightOnHoverColor`
* `withBorder` prop was renamed to `withTableBorder`
* `fontSize` prop was removed, use `fz` [style prop](https://mantine.dev/llms/styles-style-props.md) instead
* New `Table.ScrollContainer` component to create scrollable table

```tsx
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
```


## Group changes

[Group](https://mantine.dev/llms/core-group.md) component changes:

* `position` prop was renamed to `justify` – it now supports all `justify-content` values
* `noWrap` prop was replaced with `wrap="nowrap"`, `wrap` prop now supports all `flex-wrap` values
* `spacing` prop was replaced with `gap`
* `Group` now supports new `preventGrowOverflow` prop which allows customizing how group items will behave when they grow larger than their dedicated space

```tsx
import { Group, Button } from '@mantine/core';

function Demo() {
  return (
    <Group justify="flex-start" gap="md" grow={false}>
      <Button variant="default">First</Button>
      <Button variant="default">Second</Button>
      <Button variant="default">Third</Button>
    </Group>
  );
}
```


## Tabs changes

* Styles API selector `tabsList` renamed to `list`
* `TabProps` type was renamed to `TabsTabProps`
* `onTabChange` prop was renamed to `onChange`
* `Tabs.List` `position` prop was renamed to `justify`, it now supports all `justify-content` values

## Button changes

* `compact` prop was removed, use `size="compact-XXX"` instead
* `leftIcon` and `rightIcon` props were renamed to `leftSection` and `rightSection`
* `uppercase` prop was removed, use `tt` [style prop](https://mantine.dev/llms/styles-style-props.md) instead
* `loaderPosition` prop was removed, [Loader](https://mantine.dev/llms/core-loader.md) is now always rendered in the center to prevent layout shifts
* Styles API selectors were changed, see [Button Styles API](https://mantine.dev/core/button?t=styles-api) documentation for more details

## AppShell changes

[AppShell](https://mantine.dev/llms/core-app-shell.md) component was completely rewritten, it now supports more features:

* `AppShell` now uses compound components pattern: `Navbar`, `Aside`, `Header` and `Footer` are no longer exported from `@mantine/core` package. Instead, use `AppShell.Navbar`, `AppShell.Aside`, etc.
* `AppShell` now supports animations when navbar/aside are opened/closed
* Navbar/aside can now be collapsed on desktop – state is handled separately for mobile and desktop
* Header/footer can now be collapsed the same way as navbar/aside. For example, the header can be collapsed based on scroll position or direction.
* `AppShell` no longer supports `fixed` prop – all components have `position: fixed` styles, static positioning is no longer supported
* The documentation was updated, it now includes [10+ examples on a separate page](https://mantine.dev/app-shell?e=BasicAppShell)

## SimpleGrid changes

[SimpleGrid](https://mantine.dev/llms/core-simple-grid.md) now uses object format to define grid breakpoints and spacing,
it works the same way as [style props](https://mantine.dev/llms/styles-style-props.md).

```tsx
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 5 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  );
}
```


## Grid changes

[Grid](https://mantine.dev/llms/core-grid.md) now uses object format in `gutter`, `offset`, `span` and order props,
all props now work the same way as [style props](https://mantine.dev/llms/styles-style-props.md).

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>1</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>2</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>3</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>4</Grid.Col>
    </Grid>
  );
}
```


## Image changes

[Image](https://mantine.dev/llms/core-image.md) component changes:

* `Image` component no longer includes `figure` and other associated elements
* `caption` prop is no longer available
* `width` and `height` props are replaced with `w` and `h` [style props](https://mantine.dev/llms/styles-style-props.md)
* Placeholder functionality was replaced with fallback image

```tsx
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      src={null}
      h={200}
      fallbackSrc="https://placehold.co/600x400?text=Placeholder"
    />
  );
}
```


## Spotlight changes

[Spotlight](https://mantine.dev/llms/x-spotlight.md) changes:

* The logic is no longer based on React context
* `SpotlightProvider` was renamed to `Spotlight`
* `useSpotlight` hook was removed, use `spotlight` object instead
* `actions` prop now uses a different data format
* It is now possible to have multiple spotlights in the same app
* `Spotlight` component now uses compound components pattern for advanced customization

```tsx
import { useState } from 'react';
import { Spotlight, spotlight } from '@mantine/spotlight';
import { Button } from '@mantine/core';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

const data = ['Home', 'About us', 'Contacts', 'Blog', 'Careers', 'Terms of service'];

function Demo() {
  const [query, setQuery] = useState('');

  const items = data
    .filter((item) => item.toLowerCase().includes(query.toLowerCase().trim()))
    .map((item) => <Spotlight.Action key={item} label={item} />);

  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>

      <Spotlight.Root query={query} onQueryChange={setQuery}>
        <Spotlight.Search placeholder="Search..." leftSection={<MagnifyingGlassIcon />} />
        <Spotlight.ActionsList>
          {items.length > 0 ? items : <Spotlight.Empty>Nothing found...</Spotlight.Empty>}
        </Spotlight.ActionsList>
      </Spotlight.Root>
    </>
  );
}
```


## Carousel changes

[Carousel](https://mantine.dev/llms/x-carousel.md) now uses object format for responsive values in
`slideSize` and `slideGap` props instead of `breakpoints` prop:

```tsx
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel
      withIndicators
      height={200}
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap={{ base: 0, sm: 'md' }}
      emblaOptions={{ loop: true, align: 'start' }}
    >
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
```


## @mantine/prism deprecation

`@mantine/prism` package was deprecated in favor of `@mantine/code-highlight` package. [The new package](https://mantine.dev/llms/x-code-highlight.md) uses [highlight.js](https://highlightjs.org/) instead of [Prism](https://prismjs.com/).

```tsx
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon, CssIcon } from '@mantinex/dev-icons';

const tsxCode = `
function Button() {
  return <button>Click me</button>;
}
`;

const cssCode = `
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`;

function getFileIcon(fileName: string) {
  if (fileName.endsWith('.ts') || fileName.endsWith('.tsx')) {
    return <TypeScriptIcon size={14} />;
  }

  if (fileName.endsWith('.css')) {
    return <CssIcon size={14} />;
  }

  return null;
}

function Demo() {
  return (
    <CodeHighlightTabs
      getFileIcon={getFileIcon}
      radius="md"
      code={[
        {
          fileName: 'Button.tsx',
          code: tsxCode,
          language: 'tsx',
        },
        {
          fileName: 'Button.module.css',
          code: cssCode,
          language: 'scss',
        },
      ]}
    />
  );
}
```


## Fieldset component

New [Fieldset](https://mantine.dev/llms/core-fieldset.md) component:

```tsx
import { Fieldset, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Fieldset legend="Personal information" variant="default" radius="md">
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />
    </Fieldset>
  );
}
```


## Combobox component

The new [Combobox](https://mantine.dev/llms/core-combobox.md) component allows building custom select, autocomplete, tags input, multiselect and other
similar components. It is used as a base for updated [Autocomplete](https://mantine.dev/llms/core-autocomplete.md), [Select](https://mantine.dev/llms/core-select.md),
[TagsInput](https://mantine.dev/llms/core-tags-input.md) and [MultiSelect](https://mantine.dev/llms/core-multi-select.md) components.

[Combobox](https://mantine.dev/llms/core-combobox.md) is very flexible and allows you to have full control over the component rendering and logic.
Advanced features that were previously implemented in [Autocomplete](https://mantine.dev/llms/core-autocomplete.md), [Select](https://mantine.dev/llms/core-select.md)
and [MultiSelect](https://mantine.dev/llms/core-multi-select.md) are now supposed to be implemented with [Combobox](https://mantine.dev/llms/core-combobox.md) instead.

You can find 50+ `Combobox` examples on [this page](https://mantine.dev/combobox).

```tsx
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```


## TagsInput component

New [TagsInput](https://mantine.dev/llms/core-tags-input.md) component based on [Combobox](https://mantine.dev/llms/core-combobox.md) component.
The component is similar to [MultiSelect](https://mantine.dev/llms/core-multi-select.md) but allows entering custom values.

```tsx
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      placeholder="Pick tag from list"
      data={['React', 'Angular', 'Svelte']}
    />
  );
}
```


## withErrorStyles prop

All inputs now support `withErrorStyles` prop, which allows removing error styles from the input.
It can be used to apply custom error styles without override, or use other techniques to
indicate error state. For example, it can be used to render an icon in the right section:

```tsx
import { TextInput } from '@mantine/core';
import { WarningCircleIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      <TextInput placeholder="Error as boolean" label="Error as boolean" error />
      <TextInput
        mt="md"
        placeholder="Error as react node"
        label="Error as react node"
        error="Something went wrong"
      />

      <TextInput
        mt="md"
        placeholder="Without error styles on input"
        label="Without error styles on input"
        error="Something went wrong"
        withErrorStyles={false}
        rightSectionPointerEvents="none"
        rightSection={
          <WarningCircleIcon
            size={20}
            color="var(--mantine-color-error)"
          />
        }
      />
    </>
  );
}
```


## hiddenFrom and visibleFrom props

All Mantine components now support `hiddenFrom` and `visibleFrom` props.
These props accept breakpoint (`xs`, `sm`, `md`, `lg`, `xl`) and hide the component when
viewport width is less than or greater than the specified breakpoint:

```tsx
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Button hiddenFrom="sm" color="orange">
        Hidden from sm
      </Button>
      <Button visibleFrom="sm" color="cyan">
        Visible from sm
      </Button>
      <Button visibleFrom="md" color="pink">
        Visible from md
      </Button>
    </Group>
  );
}
```


## Other changes

* New [VisuallyHidden](https://mantine.dev/llms/core-visually-hidden.md) component
* New [ActionIcon.Group](https://mantine.dev/llms/core-action-icon.md#actionicongroup) component
* All transitions are now disabled during color scheme change
* `theme.respectReducedMotion` is now set to `false` by default – it caused a lot of confusion for users who did not know about it
* [Notifications system](https://mantine.dev/llms/x-notifications.md) now exports `notifications.updateState` function to update notifications state with a given callback
* [Blockquote](https://mantine.dev/llms/core-blockquote.md) component has new design
* [Breadcrumbs](https://mantine.dev/llms/core-breadcrumbs.md) component now supports `separatorMargin` prop
* [Tooltip](https://mantine.dev/llms/core-tooltip.md) component now supports `mainAxis` and `crossAxis` offset configuration
* [Slider and RangeSlider](https://mantine.dev/llms/core-slider.md) components `radius` prop now affects thumb as well as track
* [NativeSelect](https://mantine.dev/llms/core-native-select.md) component now supports setting options as `children` and options groups
* [Anchor](https://mantine.dev/llms/core-anchor.md) component now supports `underline` prop which lets you configure how link will be underlined: `hover` (default), `always` or `never`
* [Affix](https://mantine.dev/llms/core-affix.md) component no longer supports `target` prop, use `portalProps` instead
* [Drawer](https://mantine.dev/llms/core-drawer.md) component no longer supports `target` prop, use `portalProps` instead: `portalProps={{ target: '.your-selector' }}`
* [Container](https://mantine.dev/llms/core-container.md) component no longer supports `sizes` prop, use [CSS variables](https://mantine.dev/llms/styles-styles-api.md) to customize sizes on [theme](https://mantine.dev/llms/theming-theme-object.md) instead
* `useComponentDefaultProps` hook was renamed to [useProps](https://mantine.dev/llms/theming-default-props.md#useprops-hook)
* `withinPortal` prop is now true by default in all overlay components ([Popover](https://mantine.dev/llms/core-popover.md), [HoverCard](https://mantine.dev/llms/core-hover-card.md), [Tooltip](https://mantine.dev/llms/core-tooltip.md), etc.)
* `AlphaSlider` and `HueSlider` components are no longer available, they can be used only as a part of [ColorPicker](https://mantine.dev/llms/core-color-picker.md)
* [Text](https://mantine.dev/llms/core-text.md) default root element is now `<p />`
* [Title](https://mantine.dev/llms/core-title.md) no longer supports all [Text](https://mantine.dev/llms/core-text.md) props, only [style props](https://mantine.dev/llms/styles-style-props.md) are available
* `MediaQuery` component was removed – use [CSS modules](https://mantine.dev/llms/styles-css-modules.md) to apply responsive styles
* [Highlight](https://mantine.dev/llms/core-highlight.md) component prop `highlightColor` was renamed to `color`
* [Tooltip and Tooltip.Floating](https://mantine.dev/llms/core-tooltip.md) components no longer support `width` prop, use `w` [style prop](https://mantine.dev/llms/styles-style-props.md) instead
* [Stack](https://mantine.dev/llms/core-stack.md) component `spacing` prop was renamed to `gap`
* [Input](https://mantine.dev/llms/core-input.md) and other `Input` based components `icon` prop was renamed to `leftSection`
* [Loader](https://mantine.dev/llms/core-loader.md) component `variant` prop was renamed to `type`
* `@mantine/core` package no longer depends on [Radix UI ScrollArea](https://www.radix-ui.com/docs/primitives/components/scroll-area#scroll-area), [ScrollArea](https://mantine.dev/llms/core-scroll-area.md) component is now a native Mantine component – it reduces bundle size, allows setting CSP for styles and improves performance (all styles are now applied with classes instead of inline `<style />` tags)
* [Overlay](https://mantine.dev/llms/core-overlay.md) `opacity` prop was renamed to `backgroundOpacity` to avoid collision with `opacity` [style prop](https://mantine.dev/llms/styles-style-props.md)
* [Badge](https://mantine.dev/llms/core-badge.md) Styles API selectors were changed, see [Badge Styles API](https://mantine.dev/core/badge?t=styles-api) documentation for more details
* [Slider](https://mantine.dev/llms/core-slider.md) Styles API selectors were changed, see [Slider Styles API](https://mantine.dev/core/slider?t=styles-api) documentation for more details
* [Text](https://mantine.dev/llms/core-text.md) component no longer supports `underline`, `color`, `strikethrough`, `italic`, `transform`, `align` and `weight` prop – use [style props](https://mantine.dev/llms/styles-style-props.md) instead
* [Portal](https://mantine.dev/llms/core-portal.md) component `innerRef` prop was renamed to `ref`
* [ScrollArea](https://mantine.dev/llms/core-scroll-area.md) now supports `x` and `y` values in `offsetScrollbars` prop
* `TransferList` component is no longer available as a part of `@mantine/core` package, instead you can implement it with [Combobox](https://mantine.dev/llms/core-combobox.md) component ([example](https://mantine.dev/combobox?e=TransferList))
* [Chip](https://mantine.dev/llms/core-chip.md) component now supports custom check icon
* [PasswordInput](https://mantine.dev/llms/core-password-input.md) no longer supports `visibilityToggleLabel` and `toggleTabIndex` props, use `visibilityToggleButtonProps` prop instead
* [Stepper](https://mantine.dev/llms/core-stepper.md) no longer supports `breakpoint` prop, you can apply responsive styles with Styles API
* [ColorInput](https://mantine.dev/llms/core-color-input.md) no longer supports `dropdownZIndex`, `transitionProps`, `withinPortal`, `portalProps` and `shadow` props, you can now pass these props with `popoverProps` prop
* [LoadingOverlay](https://mantine.dev/llms/core-loading-overlay.md) props are now grouped by the component they are passed down to: `overlayProps`, `loaderProps` and `transitionProps` now replace props that were previously passed to `LoadingOverlay` directly
* [Dropzone](https://mantine.dev/llms/x-dropzone.md) component no longer supports `padding` prop, use `p` style prop instead
* [Dialog](https://mantine.dev/llms/core-dialog.md) component now supports all [Paper](https://mantine.dev/llms/core-paper.md) and [Affix](https://mantine.dev/llms/core-affix.md) props, `transitionDuration`, `transition` and other transition related props were replaced with `transitionProps`
* [Checkbox](https://mantine.dev/llms/core-checkbox.md), [Radio](https://mantine.dev/llms/core-radio.md), [Chip](https://mantine.dev/llms/core-chip.md) and [Switch](https://mantine.dev/llms/core-switch.md) components now support `rootRef` prop which allows using them with [Tooltip](https://mantine.dev/llms/core-tooltip.md) and other similar components
* [Grid](https://mantine.dev/llms/core-grid.md) no longer has `overflow: hidden` styles by default, you can enable it by setting `overflow` prop to `hidden`
