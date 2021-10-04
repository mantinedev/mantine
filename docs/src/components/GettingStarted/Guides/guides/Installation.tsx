import React from 'react';
import { Text } from '@mantine/core';
import { Prism } from '@mantine/prism';

interface InstallationProps {
  dependencies: string;
}

export function Installation({ dependencies }: InstallationProps) {
  return (
    <>
      <Text weight={500} size="lg" mt={30}>
        Install dependencies
      </Text>

      <Text mb={5} mt={5} size="sm">
        With yarn
      </Text>

      <Prism language="bash">{`yarn add ${dependencies || '@mantine/core @mantine/hooks'}`}</Prism>

      <Text mb={5} mt={15} size="sm">
        With npm
      </Text>

      <Prism language="bash">
        {`npm install ${dependencies || '@mantine/core @mantine/hooks'}`}
      </Prism>
    </>
  );
}
