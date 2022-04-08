import React from 'react';
import { Text, Button, useMantineTheme } from '@mantine/core';
import { Prism } from '@mantine/prism';
import GatsbyLink from '../../MdxPage/MdxProvider/GatsbyLink/GatsbyLink';

/* eslint-disable react/no-unused-prop-types */
export interface GuideProps {
  dependencies: string;
  initScript?: string;
  children?: React.ReactNode;
  action?: string;
  actionLink?: string;
  withDone?: boolean;
}
/* eslint-enable react/no-unused-prop-types */

const done = `
import { Button } from '@mantine/core';

export function MyApp() {
  return <Button>Hello world!</Button>;
}
`;

function Guide({ dependencies, initScript, children, action, actionLink, withDone }: GuideProps) {
  const theme = useMantineTheme();
  return (
    <>
      {actionLink && (
        <Button
          component="a"
          href={actionLink}
          target="_blank"
          size="xl"
          fullWidth
          variant={theme.colorScheme === 'dark' ? 'outline' : 'default'}
          mb={30}
        >
          {action}
        </Button>
      )}

      <Text weight={500} mb={5} size="lg">
        {actionLink ? 'Or init' : 'Init'} new application
      </Text>

      <Prism language="bash">{initScript}</Prism>

      <Text weight={500} size="lg" mt={30}>
        Install dependencies
      </Text>

      <Text mb={5} mt={5} size="sm">
        With yarn
      </Text>

      <Prism language="bash">{`yarn add ${dependencies || '@mantine/core @mantine/hooks'}`}</Prism>

      <Text mb={5} mt={15} size="sm">
        With npm
      </Text>

      <Prism language="bash">
        {`npm install ${dependencies || '@mantine/core @mantine/hooks'}`}
      </Prism>

      {children}

      {withDone && (
        <>
          <Text weight={500} mt={30} mb={5} size="lg">
            All done!
          </Text>

          <Prism language="tsx">{done}</Prism>
        </>
      )}
    </>
  );
}

function CraGuide({ dependencies }: GuideProps) {
  return (
    <Guide
      dependencies={dependencies}
      initScript="npx create-react-app my-app --template typescript"
      withDone
    />
  );
}

function ViteGuide({ dependencies }: GuideProps) {
  return (
    <Guide
      dependencies={dependencies}
      initScript="yarn create @vitejs/app mantine-vite --template react-ts"
      withDone
    />
  );
}

function NextGuide({ dependencies }: GuideProps) {
  return (
    <Guide
      dependencies={`${dependencies} @mantine/next`}
      initScript="npx create-next-app --ts"
      action="Get started with Next.js GitHub template"
      actionLink="https://github.com/mantinedev/mantine-next-template"
    >
      <Text weight={500} mt={30} mb={5} size="lg">
        And follow Next.js guide
      </Text>

      <GatsbyLink to="/theming/next/">Follow Next.js getting started guide</GatsbyLink>
    </Guide>
  );
}

function GatsbyGuide({ dependencies }: GuideProps) {
  return (
    <Guide
      dependencies={`${dependencies} gatsby-plugin-mantine`}
      initScript="npm init gatsby"
      action="Get started with Gatsby.js GitHub template"
      actionLink="https://github.com/mantinedev/mantine-gatsby-template"
      withDone
    >
      <Text weight={500} mt={30} mb={5} size="lg">
        Add gatsby-plugin-mantine in your gatsby.config.js file:
      </Text>
      <Prism language="tsx">plugins: [&apos;gatsby-plugin-mantine&apos;]</Prism>
    </Guide>
  );
}

const remixCode = `import { renderToString } from 'react-dom/server';
import { RemixServer } from '@remix-run/react';
import type { EntryContext } from '@remix-run/node';
import { injectStylesIntoStaticMarkup } from '@mantine/ssr';

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const markup = renderToString(<RemixServer context={remixContext} url={request.url} />);
  responseHeaders.set('Content-Type', 'text/html');

  return new Response(\`<!DOCTYPE html>\${injectStylesIntoStaticMarkup(markup)}\`, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
`;

function RemixGuide({ dependencies }: GuideProps) {
  return (
    <Guide
      dependencies={`${dependencies} @mantine/ssr`}
      initScript="npx create-remix@latest"
      action="View example setup"
      actionLink="https://github.com/remix-run/remix/tree/main/examples/mantine"
      withDone
    >
      <Text weight={500} mt={30} mb={5} size="lg">
        Replace your entry.server.tsx file with
      </Text>
      <Prism language="tsx">{remixCode}</Prism>
    </Guide>
  );
}

export const guides = {
  cra: CraGuide,
  next: NextGuide,
  vite: ViteGuide,
  gatsby: GatsbyGuide,
  remix: RemixGuide,
};
