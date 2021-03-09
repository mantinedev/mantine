import React from 'react';
import { MantineProvider } from '@mantine/core';
import Layout from './src/components/Layout/Layout';

export const onInitialClientRender = () => {
  const ssStyles = window.document.getElementById('server-side-jss');
  if (ssStyles) {
    ssStyles.parentNode.removeChild(ssStyles);
  }
};

export const wrapRootElement = ({ element }) => (
  <MantineProvider theme={{ headings: { fontFamily: 'IBM Plex Mono, monospace' } }}>
    <Layout>{element}</Layout>
  </MantineProvider>
);
