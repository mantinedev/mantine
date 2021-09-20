/* eslint-disable react/jsx-filename-extension */
import { renderToString } from 'react-dom/server';
import htmlReactParser from 'html-react-parser';
import createEmotionServer from '@emotion/server/create-instance';
import { getCache } from '@mantine/styles';

const emotionServer = createEmotionServer(getCache());

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const html = renderToString(bodyComponent);

  const styles = emotionServer.constructStyleTagsFromChunks(
    emotionServer.extractCriticalToChunks(html)
  );

  setHeadComponents([htmlReactParser(styles)]);
  replaceBodyHTMLString(html);
};
