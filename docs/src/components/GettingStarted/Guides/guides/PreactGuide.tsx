import React from 'react';
import { Text } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { Installation } from './Installation';
import { Done } from './Done';

interface CraGuideProps {
  dependencies: string;
}

export function PreactGuide({ dependencies }: CraGuideProps) {
  return (
    <div>
      <Text weight={700} style={{ marginBottom: 15 }}>
        Init application
      </Text>
      <Prism language="bash">npx preact-cli create default your-app</Prism>
      <Text weight={700} style={{ marginTop: 30 }}>
        Install dependencies
      </Text>
      <Installation dependencies={dependencies} />
      <Done />
    </div>
  );
}
