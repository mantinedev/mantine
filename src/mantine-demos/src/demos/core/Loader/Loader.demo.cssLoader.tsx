import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Loader, MantineThemeProvider } from '@mantine/core';
import { CssLoader, cssLoaderModuleCssCode, cssLoaderTsxCode } from './_CssLoader';

const code = `
import { MantineProvider, Loader } from '@mantine/core';
import { CssLoader } from './CssLoader';

function Demo() {
  return (
    <MantineProvider
      theme={{
        components: {
          Loader: Loader.extend({
            defaultProps: {
              loaders: { ...Loader.defaultLoaders, custom: CssLoader },
              type: 'custom',
            },
          }),
        },
      }}
    >
      <Loader />
    </MantineProvider>
  );
}
`;

function Demo() {
  return (
    <MantineThemeProvider
      theme={{
        components: {
          Loader: Loader.extend({
            defaultProps: {
              loaders: { ...Loader.defaultLoaders, custom: CssLoader },
              type: 'custom',
            },
          }),
        },
      }}
    >
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
    { fileName: 'CssLoader.module.css', language: 'css', code: cssLoaderModuleCssCode },
  ],
};
