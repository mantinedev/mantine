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
    <div>
      <Text weight={700} mt={15}>
        Init application
      </Text>
      <Prism language="bash">npx create-react-app my-app --template typescript</Prism>
      <Text weight={700} mt={30}>
        Install dependencies
      </Text>
      <Installation dependencies={dependencies} />
      <Done />
    </div>
  );
}
