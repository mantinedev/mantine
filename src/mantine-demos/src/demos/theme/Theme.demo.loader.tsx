import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { MantineProvider, Loader, Text, Code } from '@mantine/core';

function Demo() {
  return (
    <div>
      <Text>
        Loader: <Code>oval</Code>
      </Text>

      <Loader />

      <MantineProvider inherit theme={{ loader: 'bars' }}>
        <Text mt="lg">
          Loader: <Code>bars</Code>
        </Text>

        <Loader />
      </MantineProvider>

      <MantineProvider inherit theme={{ loader: 'dots' }}>
        <Text mt="lg">
          Loader: <Code>dots</Code>
        </Text>

        <Loader />
      </MantineProvider>
    </div>
  );
}

export const loader: MantineDemo = {
  type: 'demo',
  component: Demo,
};
