import React from 'react';
import { JssProvider, SheetsRegistry } from 'react-jss';
import { renderToString } from 'react-dom/server';
import { MantineProvider } from '@mantine/core';

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const sheets = new SheetsRegistry();

  const App = () => (
    <JssProvider registry={sheets} id={{ minify: true }}>
      <MantineProvider>{bodyComponent}</MantineProvider>
    </JssProvider>
  );

  replaceBodyHTMLString(renderToString(<App />));

  setHeadComponents([
    <style
      type="text/css"
      id="server-side-jss"
      key="server-side-jss"
      dangerouslySetInnerHTML={{ __html: sheets.toString() }}
    />,
  ]);
};
