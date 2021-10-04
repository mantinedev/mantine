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
    <>
      <Text weight={500} mb={5} size="lg">
        Init application
      </Text>

      <Prism language="bash">npx preact-cli create default your-app</Prism>

      <Installation dependencies={dependencies} />

      <Done />
    </>
  );
}
