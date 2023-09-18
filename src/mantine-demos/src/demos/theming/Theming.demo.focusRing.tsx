import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Text, Group, Button, Code, MantineThemeProvider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text>
        Focus ring: <Code>auto</Code>
      </Text>

      <Group mt="xs">
        <Button size="xs">Button 1</Button>
        <Button size="xs">Button 2</Button>
      </Group>

      <MantineThemeProvider inherit theme={{ focusRing: 'always' }}>
        <Text mt="lg">
          Focus ring: <Code>always</Code>
        </Text>

        <Group mt="xs">
          <Button size="xs">Button 1</Button>
          <Button size="xs">Button 2</Button>
        </Group>
      </MantineThemeProvider>

      <MantineThemeProvider inherit theme={{ focusRing: 'never' }}>
        <Text mt="lg">
          Focus ring: <Code>never</Code>
        </Text>

        <Group mt="xs">
          <Button size="xs">Button 1</Button>
          <Button size="xs">Button 2</Button>
        </Group>
      </MantineThemeProvider>
    </>
  );
}

export const focusRing: MantineDemo = {
  type: 'code',
  component: Demo,
};
