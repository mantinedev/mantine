import React from 'react';
import { Text, Button } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { Installation } from './Installation';
import { Done } from './Done';

interface CraGuideProps {
  dependencies: string;
}

const appCode = `
// pages/_app.tsx
import { useEffect } from "react";
import { JssProvider } from "react-jss";
import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { createGenerateId } from "jss";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  useEffect(() => {
    const jssStyles = document.getElementById("mantine-ssr-styles");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <JssProvider generateId={createGenerateId({ minify: true })}>
        <Head>
          <title>Mantine next example</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <MantineProvider
          theme={{
            /** Put your mantine theme override here */
            colorScheme: "light",
          }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </JssProvider>
    </>
  );
}
`.trim();

const documentCode = `
// pages/_document.tsx
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { SheetsRegistry, JssProvider, createGenerateId } from "react-jss";

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const registry = new SheetsRegistry();
    const generateId = createGenerateId({ minify: true });
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          (
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
`.trim();

export function NextGuide({ dependencies }: CraGuideProps) {
  return (
    <div>
      <Button
        component="a"
        href="https://github.com/mantinedev/mantine-next-template"
        target="_blank"
        size="lg"
      >
        Get stared with Github template
      </Button>

      <Text weight={700} style={{ marginBottom: 15, marginTop: 30 }}>
        Or init new application
      </Text>
      <Prism language="bash">npx create-next-app --ts</Prism>
      <Text weight={700} style={{ marginTop: 30 }}>
        Install dependencies
      </Text>
      <Installation dependencies={dependencies} />
      <Text weight={700} style={{ marginBottom: 15, marginTop: 30 }}>
        Replace pages/_app.tsx file with
      </Text>
      <Prism language="tsx">{appCode}</Prism>

      <Text weight={700} style={{ marginBottom: 15, marginTop: 30 }}>
        Create pages/_document.tsx file with
      </Text>
      <Prism language="tsx">{documentCode}</Prism>
      <Done />
    </div>
  );
}
