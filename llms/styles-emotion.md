# Emotion

# Usage with Emotion

Prior to version 7.0 Mantine used [Emotion](https://emotion.sh/) as a styling solution.
It was replaced with [CSS modules](https://mantine.dev/styles/css-modules/) in version 7.0, but you can still
use Emotion with Mantine if you prefer it over CSS modules.

Note that `createStyles` function, `sx` and `styles` prop work different from the same
features in [version 6.x](https://v6.mantine.dev/styles/create-styles/). If you are planning
to upgrade from version 6.x to 7.x, follow the [migration guide](https://mantine.dev/guides/6x-to-7x/).

`@mantine/emotion` package is compatible with `@mantine/core` 7.9.0 and higher. Before
installing, make sure that you are using the latest version of all `@mantine/*` packages.

## Caveats and support

[Emotion](https://emotion.sh/) is a runtime CSS-in-JS library – styles are generated
and injected into the DOM at runtime. This approach has some limitations:

* **Limited server-side rendering support** – modern frameworks like Next.js with app router
  do not fully support emotion or require additional configuration.
* **Runtime overhead** – styles are generated and injected at runtime, which can lead to
  performance issues on pages with a lot of components.
* **Additional bundle size** – your bundle will include `@emotion/react` (21.2kB minified),
  `@mantine/emotion` (~2kb minified) and all styles that you use in your components.

`@mantine/emotion` package can be used with the following frameworks:

* **Vite** and **CRA** with basic setup
* **Next.js with pages router** with additional setup for server side rendering provided by the package
* **Next.js with app router** with additional setup for server side rendering provided by Emotion
* Any other framework that does not require server-side rendering with basic setup

There is no official support (the package probably can be used but it's not tested and documentation is not provided) for:

* **React Router**
* **Gatsby**
* **Redwood**
* Any other framework that has server-side rendering

Note that Emotion is not recommended for new projects, if you are starting a new project with Mantine,
consider using [CSS modules](https://mantine.dev/styles/css-modules/) instead.

## Usage with Vite

[View example repository with full setup](https://github.com/mantinedev/vite-min-template/tree/emotion)

Install dependencies:

```bash
yarn add @mantine/emotion @emotion/react @emotion/cache @emotion/serialize @emotion/utils
```

```bash
npm install @mantine/emotion @emotion/react @emotion/cache @emotion/serialize @emotion/utils
```

Create `emotion.d.ts` file in `src` directory to add types support for `sx` and `styles` props:

```tsx
import '@mantine/core';

import type { EmotionStyles, EmotionSx } from '@mantine/emotion';

declare module '@mantine/core' {
  export interface BoxProps {
    sx?: EmotionSx;
    styles?: EmotionStyles;
  }
}
```

Wrap your application with `MantineEmotionProvider` and add `emotionTransform` to `MantineProvider`:

```tsx
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import {
  emotionTransform,
  MantineEmotionProvider,
} from '@mantine/emotion';

export default function App() {
  return (
    <MantineProvider stylesTransform={emotionTransform}>
      <MantineEmotionProvider>App</MantineEmotionProvider>
    </MantineProvider>
  );
}
```

Done! You can now use `sx`, `styles` props and `createStyles` in your application:

```tsx
import { Box } from '@mantine/core';

function Demo() {
  return (
    <Box
      sx={(theme, u) => ({
        padding: 40,

        [u.light]: {
          backgroundColor: theme.colors.blue[0],
          color: theme.colors.blue[9],

          '&:hover': {
            backgroundColor: theme.colors.blue[1],
          },
        },
      })}
    >
      Box with emotion sx prop
    </Box>
  );
}
```

## Usage with Next.js pages router

[View example repository with full setup](https://github.com/mantinedev/next-pages-min-template/tree/emotion)

Install dependencies:

```bash
yarn add @mantine/emotion @emotion/react @emotion/cache @emotion/serialize @emotion/utils @emotion/server
```

```bash
npm install @mantine/emotion @emotion/react @emotion/cache @emotion/serialize @emotion/utils @emotion/server
```

Create `emotion` folder with `cache.ts` and `emotion.d.ts` files.

`cache.ts` file:

```tsx
import createCache from '@emotion/cache';

export const emotionCache = createCache({ key: 'css' });
```

`emotion.d.ts` file:

```tsx
import '@mantine/core';

import type { EmotionStyles, EmotionSx } from '@mantine/emotion';

declare module '@mantine/core' {
  export interface BoxProps {
    sx?: EmotionSx;
    styles?: EmotionStyles;
  }
}
```

Add the following content to `pages/_document.tsx` file:

```tsx
import NextDocument, {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import { ColorSchemeScript } from '@mantine/core';
import { createGetInitialProps } from '@mantine/emotion';
// Import cache created in the previous step
import { emotionCache } from '../emotion/cache';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <ColorSchemeScript />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

const stylesServer = createEmotionServer(emotionCache);

Document.getInitialProps = createGetInitialProps(
  NextDocument,
  stylesServer
);
```

Add `MantineEmotionProvider` and `emotionTransform` to `pages/_app.tsx` file:

```tsx
import '@mantine/core/styles.css';

import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import {
  emotionTransform,
  MantineEmotionProvider,
} from '@mantine/emotion';
import { emotionCache } from '../emotion/cache';

export default function App({ Component, pageProps }: any) {
  return (
    <MantineEmotionProvider cache={emotionCache}>
      <MantineProvider stylesTransform={emotionTransform}>
        <Head>
          <title>Mantine Template</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
          <link rel="shortcut icon" href="/favicon.svg" />
        </Head>
        <Component {...pageProps} />
      </MantineProvider>
    </MantineEmotionProvider>
  );
}
```

Done! You can now use `sx`, `styles` props and `createStyles` in your application:

```tsx
import { Box } from '@mantine/core';

function Demo() {
  return (
    <Box
      sx={(theme, u) => ({
        padding: 40,

        [u.light]: {
          backgroundColor: theme.colors.blue[0],
          color: theme.colors.blue[9],

          '&:hover': {
            backgroundColor: theme.colors.blue[1],
          },
        },
      })}
    >
      Box with emotion sx prop
    </Box>
  );
}
```

## Usage with Next.js app router

[View example repository with full setup](https://github.com/mantinedev/next-app-min-template/tree/emotion)

Install dependencies:

```bash
yarn add @mantine/emotion @emotion/react @emotion/cache @emotion/serialize @emotion/utils @emotion/server
```

```bash
npm install @mantine/emotion @emotion/react @emotion/cache @emotion/serialize @emotion/utils @emotion/server
```

Create `app/emotion.d.ts` file with the following content:

```tsx
import '@mantine/core';

import type { EmotionStyles, EmotionSx } from '@mantine/emotion';

declare module '@mantine/core' {
  export interface BoxProps {
    sx?: EmotionSx;
    styles?: EmotionStyles;
  }
}
```

Create `app/EmotionRootStyleRegistry.tsx` file with the following content:

```tsx
'use client';

import { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

export function RootStyleRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [{ cache, flush }] = useState(() => {
    const cache = createCache({ key: 'my' });
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) return null;
    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
```

Add `RootStyleRegistry`, `MantineEmotionProvider` and `emotionTransform` to `app/layout.tsx`.
It should look something like this:

```tsx
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import {
  emotionTransform,
  MantineEmotionProvider,
} from '@mantine/emotion';
import { RootStyleRegistry } from './EmotionRootStyleRegistry';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <RootStyleRegistry>
          <MantineEmotionProvider>
            <MantineProvider stylesTransform={emotionTransform}>
              {children}
            </MantineProvider>
          </MantineEmotionProvider>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
```

Done! You can now use `sx`, `styles` props and `createStyles` in your application.
Note that `'use client'` is required in most components that use `sx`, `styles` or `createStyles`:

```tsx
'use client';

import { Box } from '@mantine/core';

export default function HomePage() {
  return (
    <Box
      sx={(theme, u) => ({
        padding: 40,

        [u.light]: {
          backgroundColor: theme.colors.blue[0],
          color: theme.colors.blue[9],

          '&:hover': {
            backgroundColor: theme.colors.blue[1],
          },
        },
      })}
    >
      Box with emotion sx prop
    </Box>
  );
}
```

## sx prop

With the setup above you can use `sx` prop in all Mantine components.
`sx` prop allows adding styles to the root element of the component.
It accepts either a styles object or a function that receives theme, utilities and returns styles object:

```tsx
import { Box, Button } from '@mantine/core';

function Demo() {
  return (
    <>
      <Box
        sx={{
          padding: 40,
          '&:hover': { padding: 80 },
        }}
      >
        Box with object sx
      </Box>

      <Button
        sx={(theme, u) => ({
          padding: 10,

          [u.light]: {
            backgroundColor: theme.colors.blue[0],
            color: theme.colors.blue[9],
            '&:hover': {
              backgroundColor: theme.colors.blue[1],
            },
          },

          [u.dark]: {
            backgroundColor: theme.colors.blue[9],
            color: theme.colors.blue[0],
            '&:hover': {
              backgroundColor: theme.colors.blue[8],
            },
          },
        })}
      >
        Button with function sx
      </Button>
    </>
  );
}
```

### mergeSx function

You can use the `mergeSx` function to merge multiple `sx` props into one. This
can be useful for merging `sx` prop provided to a custom component with its
own `sx`, like so:

```tsx
import { Box } from '@mantine/core'
import { EmotionSx, mergeSx } from '@mantine/emotion'

interface MyCustomBoxProps {
  sx?: EmotionSx
}

function MyCustomBox({ sx }: MyCustomBoxProps) {
  return (
    <Box sx={mergeSx(theme => ({ ... }), sx)}>...</Box>
  )
}

function App() {
  return (
    <MyCustomBox sx={(theme) => ({ ... })} />
  )
}
```

## styles prop

`styles` prop works similar to `sx` prop, but it allows adding styles to all
nested elements of the components that are specified in the Styles API table.
`styles` prop accepts either an object of styles objects or a function that
receives theme, component props, utilities and returns styles object:

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button
      color="red"
      styles={(theme, { color }, u) => ({
        root: {
          padding: 10,
          backgroundColor: theme.colors[color || 'blue'][7],
          color: theme.white,

          '&:hover': {
            backgroundColor: theme.colors[color || 'blue'][8],
          },
        },

        label: {
          [u.light]: {
            border: `1px solid ${theme.black}`,
          },
          [u.dark]: {
            border: `1px solid ${theme.white}`,
          },
        },
      })}
    >
      Button with styles prop
    </Button>
  );
}
```

## styles in theme

You can add styles to Mantine components with [Styles API](https://mantine.dev/styles/styles-api/) using
Emotion with `styles` prop. Note that to avoid types collisions, you should not use
`Component.extend` method and just pass component configuration object directly.

```tsx
import { createTheme, MantineTheme, TextProps } from '@mantine/core';
import { EmotionHelpers } from '@mantine/emotion';

export const theme = createTheme({
  components: {
    Text: {
      styles: (
        theme: MantineTheme,
        _props: TextProps,
        u: EmotionHelpers
      ) => ({
        root: {
          [u.light]: {
            color: theme.colors.blue[7],
          },
        },
      }),
    },
  },
});
```

## createStyles

`createStyles` function accepts a function to generate styles with [Emotion](https://emotion.sh/).
The function receives 3 arguments that will be described more detailed in the following demos:

* `theme` – [Mantine theme object](https://mantine.dev/theming/theme-object)
* `params` – object with additional parameters that can be passed to the function in `useStyles` hook
* `u` - object with utilities to generate selectors

`createStyles` function returns `useStyles` hook that should be called in the component
that uses given styles:

#### Example: usage

```tsx
import { createStyles } from '@mantine/emotion';

const useStyles = createStyles((theme, _, u) => ({
  wrapper: {
    maxWidth: 400,
    width: '100%',
    height: 180,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: theme.radius.sm,

    // Use light and dark selectors to change styles based on color scheme
    [u.light]: {
      backgroundColor: theme.colors.gray[1],
    },

    [u.dark]: {
      backgroundColor: theme.colors.dark[5],
    },

    // Reference theme.breakpoints in smallerThan and largerThan functions
    [u.smallerThan('sm')]: {
      // Child reference in nested selectors via ref
      [`& .${u.ref('child')}`]: {
        fontSize: theme.fontSizes.xs,
      },
    },
  },

  child: {
    // Assign selector to a ref to reference it in other styles
    ref: u.ref('child'),
    padding: theme.spacing.md,
    borderRadius: theme.radius.sm,
    boxShadow: theme.shadows.md,

    [u.light]: {
      backgroundColor: theme.white,
      color: theme.black,
    },

    [u.dark]: {
      backgroundColor: theme.colors.dark[8],
      color: theme.white,
    },
  },
}));

function Demo() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.child}>createStyles demo</div>
    </div>
  );
}
```


### Pseudo-classes

You can add pseudo-classes the same way as in any css-preprocessor like Sass:

#### Example: pseudo

```tsx
import { createStyles } from '@mantine/emotion';

const useStyles = createStyles((theme) => ({
  button: {
    color: theme.white,
    backgroundColor: theme.colors.blue[6],
    border: 0,
    borderRadius: theme.radius.md,
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    cursor: 'pointer',
    margin: theme.spacing.md,

    // Use pseudo-classes just like you would in Sass
    '&:hover': {
      backgroundColor: theme.colors.blue[9],
    },

    '&:not(:first-of-type)': {
      backgroundColor: theme.colors.violet[6],

      // pseudo-classes can be nested
      '&:hover': {
        backgroundColor: theme.colors.violet[9],
      },
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  return (
    <div>
      <button type="button" className={classes.button}>
        First
      </button>
      <button type="button" className={classes.button}>
        Second
      </button>
      <button type="button" className={classes.button}>
        Third
      </button>
    </div>
  );
}
```


### Styles parameters

You can receive any amount of parameters as second argument of `createStyles` function,
latter you will need to pass those parameters as argument to `useStyles` hook:

#### Example: parameters

```tsx
import { createStyles } from '@mantine/emotion';

interface ButtonProps {
  color: 'blue' | 'violet';
  radius: number;
}

const useStyles = createStyles((theme, { color, radius }: ButtonProps) => ({
  button: {
    color: theme.white,
    backgroundColor: theme.colors[color][6],
    borderRadius: radius,
    padding: theme.spacing.md,
    margin: theme.spacing.md,
    border: 0,
    cursor: 'pointer',
  },
}));

function Button({ color, radius }: ButtonProps) {
  const { classes } = useStyles({ color, radius });
  return (
    <button type="button" className={classes.button}>
      {color} button with {radius} radius
    </button>
  );
}

function Demo() {
  return (
    <>
      <Button color="blue" radius={5} />
      <Button color="violet" radius={50} />
    </>
  );
}
```


### Composition and nested selectors

Since `createStyles` produces scoped class names you will need to create a reference to selector
in order to get static selector. Use `u.ref` function to assign static selectors:

#### Example: composition

```tsx
import { createStyles } from '@mantine/emotion';

const useStyles = createStyles((theme, _, u) => ({
  button: {
    // assign reference to selector
    ref: u.ref('button'),

    // and add any other properties
    backgroundColor: theme.colors.blue[6],
    color: theme.white,
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    borderRadius: theme.radius.md,
    cursor: 'pointer',
    border: 0,
  },

  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing.xl,

    [u.light]: {
      backgroundColor: theme.colors.gray[1],
    },

    [u.dark]: {
      backgroundColor: theme.colors.dark[8],
    },

    // reference button with nested selector
    [`&:hover .${u.ref('button')}`]: {
      backgroundColor: theme.colors.violet[6],
    },
  },
}));

function Demo() {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <button className={classes.button} type="button">
        Hover container to change button color
      </button>
    </div>
  );
}
```


### Classes merging (cx function)

To merge class names use `cx` function, it has the same api as [clsx](https://www.npmjs.com/package/clsx) package.

**!important:** Do not use external libraries like [classnames](https://www.npmjs.com/package/classnames)
or [clsx](https://www.npmjs.com/package/clsx) with class names created with `createStyles` function
as it will produce styles collisions.

#### Example: cx

```tsx
import { useState } from 'react';
import { createStyles } from '@mantine/emotion';

const useStyles = createStyles((theme, _, u) => ({
  button: {
    border: 0,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    cursor: 'pointer',
    margin: theme.spacing.md,
    lineHeight: 1,

    [u.light]: {
      backgroundColor: theme.colors.gray[1],
    },

    [u.dark]: {
      backgroundColor: theme.colors.dark[5],
    },
  },

  active: {
    color: theme.white,

    [u.light]: {
      backgroundColor: theme.colors.blue[6],
    },
    [u.dark]: {
      backgroundColor: theme.colors.blue[8],
    },
  },
}));

function Demo() {
  const [active, setActive] = useState(0);
  const { classes, cx } = useStyles();

  return (
    <div>
      <button
        className={cx(classes.button, { [classes.active]: active === 0 })}
        onClick={() => setActive(0)}
        type="button"
      >
        First
      </button>
      <button
        className={cx(classes.button, { [classes.active]: active === 1 })}
        onClick={() => setActive(1)}
        type="button"
      >
        Second
      </button>
    </div>
  );
}
```


### Media queries

You can use nested media queries like in Sass. Within query body you can use `theme.breakpoints`
defined with [MantineProvider](https://mantine.dev/theming/mantine-provider) or just static values:

#### Example: media

```tsx
import { em, getBreakpointValue } from '@mantine/core';
import { createStyles } from '@mantine/emotion';

const useStyles = createStyles((theme, _, u) => ({
  container: {
    height: 100,
    backgroundColor: theme.colors.blue[6],

    // Media query with value from theme
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.xl, theme.breakpoints) - 1)})`]: {
      backgroundColor: theme.colors.pink[6],
    },

    // Simplify media query writing with theme functions
    [u.smallerThan('lg')]: {
      backgroundColor: theme.colors.yellow[6],
    },

    // Static media query
    [`@media (max-width: ${em(800)})`]: {
      backgroundColor: theme.colors.orange[6],
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  return <div className={classes.container} />;
}
```


### Keyframes

#### Example: keyframes

```tsx
import { createStyles, keyframes } from '@mantine/emotion';

// Export animation to reuse it in other components
export const bounce = keyframes({
  'from, 20%, 53%, 80%, to': { transform: 'translate3d(0, 0, 0)' },
  '40%, 43%': { transform: 'translate3d(0, -30px, 0)' },
  '70%': { transform: 'translate3d(0, -15px, 0)' },
  '90%': { transform: 'translate3d(0, -4px, 0)' },
});

const useStyles = createStyles((theme) => ({
  container: {
    textAlign: 'center',
    padding: theme.spacing.xl,
    animation: `${bounce} 3s ease-in-out infinite`,
  },
}));

function Demo() {
  const { classes } = useStyles();
  return <div className={classes.container}>Keyframes demo</div>;
}
```


## Utilities

`sx`, `styles` and `createStyles` callback functions receive `u` object with utilities
to generate selectors. `u` object contains the following properties:

```tsx
const u = {
  light: '[data-mantine-color-scheme="light"] &',
  dark: '[data-mantine-color-scheme="dark"] &',
  rtl: '[dir="rtl"] &',
  ltr: '[dir="ltr"] &',
  notRtl: '[dir="ltr"] &',
  notLtr: '[dir="rtl"] &',
  ref: getStylesRef,
  smallerThan: (breakpoint: MantineBreakpoint | number) =>
    `@media (max-width: ${em(getBreakpointValue(theme, breakpoint) - 0.1)})`,
  largerThan: (breakpoint: MantineBreakpoint | number) =>
    `@media (min-width: ${em(getBreakpointValue(theme, breakpoint))})`,
};
```

All utilities except `ref` can be used as selectors in styles object:

```tsx
const styles = {
  root: {
    [u.dark]: { color: 'white' },
    [u.rtl]: { padding: 10 },
    [u.smallerThan('md')]: { lineHeight: 20 },
  },
};
```
