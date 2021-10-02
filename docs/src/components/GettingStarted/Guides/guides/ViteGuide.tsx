import React from 'react';
import { Text } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { Installation } from './Installation';
import { Done } from './Done';

interface CraGuideProps {
  dependencies: string;
}

export function ViteGuide({ dependencies }: CraGuideProps) {
  return (
    <div>
      <Text weight={700} mb={15}>
        Init application
      </Text>
      <Prism language="bash">yarn create @vitejs/app mantine-vite --template react-ts</Prism>
      <Text weight={700} mt={30}>
        Install dependencies
      </Text>
      <Installation dependencies={dependencies} />
      <Done />
    </div>
  );
}
