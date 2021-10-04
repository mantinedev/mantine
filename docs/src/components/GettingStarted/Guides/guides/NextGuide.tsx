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
    <>
      <Button
        component="a"
        href="https://github.com/mantinedev/mantine-next-template"
        target="_blank"
        size="xl"
        fullWidth
        variant="default"
        mb={30}
      >
        Get stared with Next.js Github template
      </Button>

      <Text weight={500} mb={5} size="lg">
        Or init new application
      </Text>

      <Prism language="bash">npx create-next-app --ts</Prism>

      <Installation dependencies={dependencies} />

      <Text weight={500} mt={30} mb={5} size="lg">
        And follow Next.js guide
      </Text>

      <GatsbyLink to="/theming/next/">Follow Next.js getting started guide</GatsbyLink>
    </>
  );
}
