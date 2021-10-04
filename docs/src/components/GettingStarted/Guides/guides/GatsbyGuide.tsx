import React from 'react';
import { Text, Button } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { Installation } from './Installation';
import { Done } from './Done';

interface CraGuideProps {
  dependencies: string;
}

export function GatsbyGuide({ dependencies }: CraGuideProps) {
  return (
    <>
      <Button
        component="a"
        href="https://github.com/mantinedev/mantine-gatsby-template"
        target="_blank"
        size="xl"
        fullWidth
        variant="default"
        mb={25}
      >
        Get stared with Gatsby Github template
      </Button>

      <Text weight={500} mb={5} size="lg">
        Init application
      </Text>

      <Prism language="bash">gatsby new</Prism>

      <Installation dependencies={`${dependencies} gatsby-plugin-mantine`} />

      <Text weight={500} mt={30} mb={5} size="lg">
        Add gatsby-plugin-mantine in your gatsby.config.js file:
      </Text>
      <Prism language="tsx">plugins: [&apos;gatsby-plugin-mantine&apos;]</Prism>
      <Done />
    </>
  );
}
