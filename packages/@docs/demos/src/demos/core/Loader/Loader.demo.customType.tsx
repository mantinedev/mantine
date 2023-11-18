import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Loader, MantineThemeProvider } from '@mantine/core';
import { RingLoader, ringLoaderCode } from './_RingLoader';

const code = `
import { MantineProvider, Loader } from '@mantine/core';
import { RingLoader } from './RingLoader';

function Demo() {
  return (
    <MantineProvider
      theme={{
        components: {
          Loader: Loader.extend({
            defaultProps: {
              loaders: { ...Loader.defaultLoaders, ring: RingLoader },
              type: 'ring',
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
              loaders: { ...Loader.defaultLoaders, ring: RingLoader },
              type: 'ring',
            },
          }),
        },
      }}
    >
      <Loader />
    </MantineThemeProvider>
  );
}

export const customType: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'RingLoader.tsx', language: 'tsx', code: ringLoaderCode },
  ],
};
