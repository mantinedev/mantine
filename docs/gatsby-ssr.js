/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToString } from 'react-dom/server';
import htmlReactParser from 'html-react-parser';
import { JssProvider, SheetsRegistry, createGenerateId } from 'react-jss';
import createEmotionServer from '@emotion/server/create-instance';
import { getCache } from '@mantine/tss';

const emotionServer = createEmotionServer(getCache());

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

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const html = renderToString(bodyComponent);

  const styles = emotionServer.constructStyleTagsFromChunks(
    emotionServer.extractCriticalToChunks(html)
  );

  setHeadComponents([htmlReactParser(styles)]);

  replaceBodyHTMLString(html);
};
