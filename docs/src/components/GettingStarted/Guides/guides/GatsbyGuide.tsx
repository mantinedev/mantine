import React from 'react';
import { Text } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { Installation } from './Installation';

interface CraGuideProps {
  dependencies: string;
}

export function GatsbyGuide({ dependencies }: CraGuideProps) {
  return (
    <div>
      <Text weight={700} style={{ marginBottom: 15 }}>
        Init application
      </Text>
      <Prism language="bash">npx create-react-app my-app --template typescript</Prism>
      <Text weight={700} style={{ marginTop: 30 }}>
        Install dependencies
      </Text>
      <Installation dependencies={dependencies} />
    </div>
  );
}
