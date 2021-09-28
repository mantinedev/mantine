import React from 'react';
import { Text, Button } from '@mantine/core';
import { Prism } from '@mantine/prism';
import GatsbyLink from 'docs/src/components/MdxPage/MdxProvider/GatsbyLink/GatsbyLink';
import { Installation } from './Installation';

interface CraGuideProps {
  dependencies: string;
}

export function NextGuide({ dependencies }: CraGuideProps) {
  return (
    <div>
      <Button
        component="a"
        href="https://github.com/mantinedev/mantine-next-template"
        target="_blank"
        size="xl"
        fullWidth
        variant="default"
        mb={25}
      >
        Get stared with Next.js Github template
      </Button>

      <Text weight={700} style={{ marginBottom: 15 }}>
        Or init new application
      </Text>

      <Prism language="bash">npx create-next-app --ts</Prism>

      <Text weight={700} style={{ marginTop: 30 }}>
        Install dependencies
      </Text>

      <Installation dependencies={dependencies} />

      <Text weight={700} style={{ marginTop: 30, marginBottom: 5 }}>
        Next steps
      </Text>

      <GatsbyLink to="/theming/next/">Follow Next.js getting started guide</GatsbyLink>
    </div>
  );
}
