import React from 'react';
import { Text } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { Installation } from './Installation';
import { Done } from './Done';

interface CraGuideProps {
  dependencies: string;
}

export function GatsbyGuide({ dependencies }: CraGuideProps) {
  return (
    <div>
      <Text weight={700} style={{ marginBottom: 15 }}>
        Init application
      </Text>
      <Prism language="bash">gatsby new</Prism>
      <Text weight={700} style={{ marginTop: 30 }}>
        Install dependencies
      </Text>
      <Installation dependencies={`${dependencies} gatsby-plugin-jss`} />
      <Text weight={700} style={{ marginTop: 30, marginBottom: 10 }}>
        Add gatsby-plugin-jss in your gatsby.config.js file:
      </Text>
      <Prism language="tsx">plugins: [`gatsby-plugin-jss`]</Prism>
      <Done />
    </div>
  );
}
