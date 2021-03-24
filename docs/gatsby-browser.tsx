import React from 'react';
import { MantineProvider } from '@mantine/theme';
import Layout from './src/components/Layout/Layout';

export const onInitialClientRender = () => {
  const ssStyles = window.document.getElementById('server-side-jss');
  if (ssStyles) {
    ssStyles.parentNode.removeChild(ssStyles);
  }
};

export const wrapRootElement = ({ element }) => (
  <MantineProvider theme={{ fontFamilyMonospace: 'IBM Plex Mono, Monaco, Courier, monospace' }}>
    <div>
      <Layout>{element}</Layout>
    </div>
  </MantineProvider>
);
