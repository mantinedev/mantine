import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { SheetsRegistry, JssProvider, createGenerateId } from 'react-jss';

export default class _Document extends Document {
  static async getInitialProps(ctx: any) {
    const registry = new SheetsRegistry();
    const generateId = createGenerateId();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) => (
          <JssProvider registry={registry} generateId={generateId}>
            <App {...props} />
          </JssProvider>
        ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style id="mantine-ssr-styles">{registry.toString()}</style>
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="link to favicon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
