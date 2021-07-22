/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { JssProvider, SheetsRegistry, createGenerateId } from 'react-jss';

const sheetsRegistryManager = new Map();

// eslint-disable-next-line react/prop-types, react/display-name
export const wrapRootElement = ({ element, pathname }) => {
  const sheets = new SheetsRegistry();
  sheetsRegistryManager.set(pathname, sheets);
  const generateId = createGenerateId({ minify: true });

  return (
    <JssProvider registry={sheets} generateId={generateId}>
      {element}
    </JssProvider>
  );
};

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
