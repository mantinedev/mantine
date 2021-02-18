import React from 'react';
import Layout from '../components/Layout/Layout';
import AppContainer from '../components/AppContainer/AppContainer';
import ButtonDocs from '../docs/Button.mdx';

export default function IndexPage() {
  return (
    <AppContainer>
      <Layout>
        <ButtonDocs />
      </Layout>
    </AppContainer>
  );
}
