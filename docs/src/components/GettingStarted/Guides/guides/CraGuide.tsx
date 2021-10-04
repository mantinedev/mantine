import React from 'react';
import { Text } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { Installation } from './Installation';
import { Done } from './Done';

interface CraGuideProps {
  dependencies: string;
}

export function CraGuide({ dependencies }: CraGuideProps) {
  return (
    <>
      <Text weight={500} size="lg" mb={5}>
        Init application
      </Text>

      <Prism language="bash">npx create-react-app my-app --template typescript</Prism>

      <Installation dependencies={dependencies} />

      <Done />
    </>
  );
}
