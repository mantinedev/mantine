import type { EmotionServer } from '@emotion/server/create-instance';

export function getSSRStyles(html: string, server: EmotionServer) {
  return server.constructStyleTagsFromChunks(server.extractCriticalToChunks(html));
}
