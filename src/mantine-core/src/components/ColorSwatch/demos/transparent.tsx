import React from 'react';
import { useMantineTheme, hexToRgba } from '../../../theme';
import { ColorSwatch } from '../ColorSwatch';
import { Group } from '../../Group/Group';

const code = `
import { ColorSwatch, Group, useMantineTheme, hexToRgba } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();
  const swatches = Object.keys(theme.colors).map((color) => (
    <ColorSwatch key={color} color={hexToRgba(theme.colors[color][6], 0.5)} />
  ));

  return (
    <Group position="center" spacing="xs">
      {swatches}
    </Group>
  );
}
`;

function Demo() {
  const theme = useMantineTheme();
  const swatches = Object.keys(theme.colors).map((color) => (
    <ColorSwatch key={color} color={hexToRgba(theme.colors[color][6], 0.5)} />
  ));

  return (
    <Group position="center" spacing="xs">
      {swatches}
    </Group>
  );
}

export const transparent: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
