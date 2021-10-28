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
`.trim();

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

function PreactGuide({ dependencies }: GuideProps) {
  return (
    <Guide
      dependencies={dependencies}
      initScript="npx preact-cli create default your-app"
      withDone
    />
  );
}

function NextGuide({ dependencies }: GuideProps) {
  return (
    <Guide
      dependencies={dependencies}
      initScript="npx create-next-app --ts"
      action="Get stared with Next.js Github template"
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
      action="Get stared with Gatsby.js Github template"
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

export const guides = {
  cra: CraGuide,
  next: NextGuide,
  vite: ViteGuide,
  gatsby: GatsbyGuide,
  preact: PreactGuide,
};
