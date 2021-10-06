import createEmotionServer from '@emotion/server/create-instance';
import { getCache } from '@mantine/styles';

export function createStylesServer() {
  return createEmotionServer(getCache());
}
