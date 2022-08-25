import React from 'react';
import { Group, Badge } from '@mantine/core';
import { useColorSchemeValue } from '@mantine/hooks';

const code = `
import { Badge } from '@mantine/core';
import { Group, Badge } from '@mantine/core';

function Demo() {
  return (
    <p>If System color scheme is Light it will be teal</p>
    <p>If System color scheme is Light it will be blu</p>
    <Badge color={useColorSchemeValue('teal', 'blue')} variant="filled">
      Your Badge color scheme is {useColorSchemeValue('teal', 'blue')}
    </Badge>
  );
}
`;

function Demo() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <p>If System color scheme is Light it color will be teal</p>
        <p>If System color scheme is Dark it color will be blue</p>
      </div>
      <Group position="center">
        <Badge color={useColorSchemeValue('teal', 'blue')} variant="filled">
          Your Badge color scheme is {useColorSchemeValue('teal', 'blue')}
        </Badge>
      </Group>
    </>
  );
}

export const useColorSchemeValueDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
