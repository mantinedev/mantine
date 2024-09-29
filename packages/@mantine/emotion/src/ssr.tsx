import htmlReactParser from 'html-react-parser';

// Type is not imported to avoid dependency on @emotion/server
type EmotionServer = any;
type NextDocumentType = any;

export function getSSRStyles(html: string, server: EmotionServer) {
  return server.constructStyleTagsFromChunks(server.extractCriticalToChunks(html));
}

interface ServerStylesProps {
  html: string;
  server: EmotionServer;
}

export function ServerStyles({ html, server }: ServerStylesProps): any {
  const styles = getSSRStyles(html, server);
  return <>{htmlReactParser(styles)}</>;
}

export function createGetInitialProps(
  NextDocument: NextDocumentType,
  server: EmotionServer
): (ctx: any) => any {
  return async function getInitialProps(ctx: any) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <ServerStyles html={initialProps.html} server={server} />
        </>
      ),
    };
  };
}
