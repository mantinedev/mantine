import type { EmotionCache } from '@mantine/styles';
import { createStylesServer } from './create-styles-server';
import { getSSRStyles } from './get-ssr-styles';

export function injectStylesIntoStaticMarkup(markup: string, cache?: EmotionCache) {
  const server = createStylesServer(cache);
  return markup.replace('<head>', `<head>${getSSRStyles(markup, server)}`);
}
