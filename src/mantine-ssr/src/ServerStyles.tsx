import React from 'react';
import type { EmotionServer } from '@emotion/server/create-instance';
import htmlReactParser from 'html-react-parser';
import { getSSRStyles } from './get-ssr-styles';

interface ServerStylesProps {
  html: string;
  server: EmotionServer;
}

export function ServerStyles({ html, server }: ServerStylesProps): any {
  const styles = getSSRStyles(html, server);
  return <>{htmlReactParser(styles)}</>;
}
