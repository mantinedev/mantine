# Mantine Next

Next.js integration for [Mantine](https://mantine.dev)

## Installation

Install with npm:

```sh
npm install @mantine/next
```

Install with yarn:

```sh
yarn add @mantine/next
```

## Documentation

[Read documentation on Mantine website](https://mantine.dev/theming/next/)

## Usage

1. Create `pages/_document.tsx` file:

```tsx
import Document from 'next/document';
import { createGetInitialProps } from '@mantine/next';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;
}
```

2. (Optional) Replace your `pages/_app.tsx` with

```tsx
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
```

## License

MIT
