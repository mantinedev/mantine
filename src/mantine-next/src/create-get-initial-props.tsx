import React from 'react';
import NextDocument, { DocumentContext } from 'next/document';
import { ServerStyles, createStylesServer } from '@mantine/ssr';

export function createGetInitialProps() {
  const stylesServer = createStylesServer();

  return async function getInitialProps(ctx: DocumentContext) {
    const page = await ctx.renderPage();
    const initialProps = await NextDocument.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <ServerStyles html={page.html} server={stylesServer} />
        </>
      ),
    };
  };
}
