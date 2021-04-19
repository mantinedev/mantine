import React from 'react';
import Layout from './src/components/Layout/Layout';

export const onInitialClientRender = () => {
  const ssStyles = window.document.getElementById('server-side-jss');
  if (ssStyles) {
    ssStyles.parentNode.removeChild(ssStyles);
  }
};

export const wrapPageElement = ({ element }) => (
  <div>
    <Layout>{element}</Layout>
  </div>
);
