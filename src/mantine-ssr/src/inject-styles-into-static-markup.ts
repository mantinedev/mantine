import { createStylesServer } from './create-styles-server';
import { getSSRStyles } from './get-ssr-styles';

const server = createStylesServer();

export function injectStylesIntoStaticMarkup(markup: string) {
  return markup.replace('<head>', `<head>${getSSRStyles(markup, server)}`);
}
