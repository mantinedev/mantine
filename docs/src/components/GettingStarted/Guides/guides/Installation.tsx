import React from 'react';
import { Text } from '@mantine/core';
import { Prism } from '@mantine/prism';

interface InstallationProps {
  dependencies: string;
}

export function Installation({ dependencies }: InstallationProps) {
  return (
    <>
      <div style={{ marginTop: 15 }}>
        <Text style={{ marginBottom: 5 }}>Install with yarn</Text>
        <Prism language="bash">
          {`yarn add ${dependencies || '@mantine/core @mantine/hooks'}`}
        </Prism>
      </div>

      <div style={{ marginTop: 15 }}>
        <Text style={{ marginBottom: 5 }}>Install with npm</Text>
        <Prism language="bash">
          {`npm install ${dependencies || '@mantine/core @mantine/hooks'}`}
        </Prism>
      </div>
    </>
  );
}
