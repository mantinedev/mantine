import React from 'react';
import { MantineProvider } from '@mantine/core';

export const onInitialClientRender = () => {
  const ssStyles = window.document.getElementById('server-side-jss');
  if (ssStyles) {
    ssStyles.parentNode.removeChild(ssStyles);
  }
};

export const wrapRootElement = ({ element }) => (
  <MantineProvider theme={{ headings: { fontFamily: 'IBM Plex Mono, monospace' } }}>
    {element}
  </MantineProvider>
);
