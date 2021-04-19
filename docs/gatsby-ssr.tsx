import React from 'react';
import { JssProvider, SheetsRegistry } from 'react-jss';
import Layout from './src/components/Layout/Layout';

const sheetsRegistryManager = new Map();

export const wrapRootElement = ({ element, pathname }) => {
  const sheets = new SheetsRegistry();
  sheetsRegistryManager.set(pathname, sheets);

  return <JssProvider registry={sheets}>{element}</JssProvider>;
};

export const wrapPageElement = ({ element }) => (
  <div>
    <Layout>{element}</Layout>
  </div>
);

export const onRenderBody = ({ setHeadComponents, pathname }) => {
  const sheets = sheetsRegistryManager.get(pathname);

  if (sheets) {
    setHeadComponents([
      <style
        type="text/css"
        id="server-side-jss"
        key="server-side-jss"
        dangerouslySetInnerHTML={{ __html: sheets.toString() }}
      />,
    ]);

    sheetsRegistryManager.delete(pathname);
  }
};
