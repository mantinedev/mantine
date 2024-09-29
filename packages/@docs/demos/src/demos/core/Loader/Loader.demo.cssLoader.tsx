import { createTheme, Loader, MantineThemeProvider } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { CssLoader, cssLoaderModuleCssCode, cssLoaderTsxCode } from './_CssLoader';

const code = `
import { MantineProvider, Loader } from '@mantine/core';
import { CssLoader } from './CssLoader';

const theme = createTheme({
  components: {
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, custom: CssLoader },
        type: 'custom',
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
`;

const theme = createTheme({
  components: {
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, custom: CssLoader },
        type: 'custom',
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

export const cssLoader: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'CssLoader.tsx', language: 'tsx', code: cssLoaderTsxCode },
    { fileName: 'CssLoader.module.css', language: 'scss', code: cssLoaderModuleCssCode },
  ],
};
