import { getSSRStyles } from '@mantine/ssr';
import type { EmotionServer } from '@emotion/server/types/create-instance';

export function injectStyles(markup: string, stylesServer: EmotionServer) {
  return markup.replace('__MANTINE_STYLES__', `${getSSRStyles(markup, stylesServer)}`);
}
