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
    <div>
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
      <Text weight={700} style={{ marginBottom: 15 }}>
        Init application
      </Text>
      <Prism language="bash">gatsby new</Prism>
      <Text weight={700} style={{ marginTop: 30 }}>
        Install dependencies
      </Text>
      <Installation dependencies={`${dependencies} gatsby-plugin-mantine`} />
      <Text weight={700} style={{ marginTop: 30, marginBottom: 10 }}>
        Add gatsby-plugin-mantine in your gatsby.config.js file:
      </Text>
      <Prism language="tsx">plugins: [`gatsby-plugin-mantine`]</Prism>
      <Done />
    </div>
  );
}
