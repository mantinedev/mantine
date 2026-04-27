# Typography
Package: @mantine/core
Import: import { Typography } from '@mantine/core';
Description: Styles provider for html content

# Typography

## Change fonts

You can change fonts and other text styles for headings, code, and all other components with the following theme properties:

* `theme.fontFamily` – controls font-family in all components except [Title](https://mantine.dev/llms/core-title.md), [Code](https://mantine.dev/llms/core-code.md), and [Kbd](https://mantine.dev/llms/core-kbd.md)
* `theme.fontFamilyMonospace` – controls font-family of components that require monospace font: [Code](https://mantine.dev/llms/core-code.md), [Kbd](https://mantine.dev/llms/core-kbd.md), and [CodeHighlight](https://mantine.dev/llms/x-code-highlight.md)
* `theme.headings.fontFamily` – controls font-family of h1-h6 tags in [Title](https://mantine.dev/llms/core-title.md) and [Typography](https://mantine.dev/llms/core-typography.md) components; falls back to `theme.fontFamily` if not defined

```tsx
import { Button, Code, Title, MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  fontFamily: 'Verdana, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { fontFamily: 'Outfit, sans-serif' },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Title order={3}>Outfit or sans-serif title</Title>
      <Button>Verdana button</Button>
      <Code>Monaco, Courier Code</Code>
    </MantineProvider>
  );
}
```


## System fonts

By default, Mantine uses system fonts. This means that different devices will display components based on the available font.
For example, macOS and iOS users will see the [San Francisco font](https://developer.apple.com/fonts/),
Windows users will see the [Segoe UI font](https://docs.microsoft.com/en-us/typography/font-list/segoe-ui),
Android users will see the [Roboto font](https://fonts.google.com/specimen/Roboto), and so on.
This approach provides a familiar experience to users and allows avoiding common problems
related to custom fonts loading (layout shift, invisible text, etc.). If you do not have strict
requirements, it is recommended to use system fonts for better performance.

Default values for theme properties:

* Default value for `theme.fontFamily` and `theme.headings.fontFamily` is `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji`
* Default value for `theme.fontFamilyMonospace` is `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace`

## Font sizes

```tsx
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text fz="md" lh="md">
      Paras is an orange, insectoid Pokémon that resembles the nymph stage of a cicada. Its ovoid
      body is segmented, and it has three pairs of legs. The foremost pair of legs is the largest
      and has sharp claws at the tips. There are five specks on its forehead and three teeth on
      either side of its mouth. It has circular eyes with large pseudopupils.
    </Text>
  );
}
```


The `theme.fontSizes` property defines font-size values for all Mantine components:

```tsx
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  fontSizes: {
    xs: 10,
    sm: 11,
    md: 14,
    lg: 16,
    xl: 20,
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

Default `theme.fontSizes` values:

## Line heights

The `theme.lineHeights` property defines line-height values for the [Text](https://mantine.dev/llms/core-text.md) component;
most other components use `theme.lineHeights.md` by default:

```tsx
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  lineHeights: {
    xs: '1.4',
    sm: '1.45',
    md: '1.55',
    lg: '1.6',
    xl: '1.65',
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

Default `theme.lineHeights` values:

## h1-h6 styles

To customize headings styles in [Title](https://mantine.dev/llms/core-title.md) and [Typography](https://mantine.dev/llms/core-typography.md) components,
set `theme.headings`:

```tsx
import { createTheme, MantineProvider, rem } from '@mantine/core';

const theme = createTheme({
  headings: {
    // properties for all headings
    fontWeight: '400',
    fontFamily: 'Roboto',

    // properties for individual headings, all of them are optional
    sizes: {
      h1: {
        fontWeight: '100',
        fontSize: 36,
        lineHeight: '1.4',
      },
      h2: { fontSize: 30, lineHeight: '1.5' },
      // ...up to h6
      h6: { fontWeight: '900' },
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

With `theme.headings` you can customize font-size, font-weight, and line-height per heading level.
If you need more control over styles, use the [:is selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:is)
with the [Styles API](https://mantine.dev/llms/styles-styles-api.md) to target a specific heading level:

```tsx
import { Title, MantineProvider } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Title: Title.extend({
      classNames: {
        root: classes.heading,
      },
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Title order={1}>Heading 1</Title>
      <Title order={2}>Heading 2</Title>
      <Title order={3}>Heading 3</Title>
      <Title order={4}>Heading 4</Title>
      <Title order={5}>Heading 5</Title>
      <Title order={6}>Heading 6</Title>
    </MantineThemeProvider>
  );
}
```

