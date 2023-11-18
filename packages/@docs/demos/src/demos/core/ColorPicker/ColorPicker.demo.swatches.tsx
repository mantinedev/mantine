import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { DEFAULT_THEME, Stack, ColorPicker } from '@mantine/core';

const code = `
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker
      format="hex"
      swatches={[${Object.keys(DEFAULT_THEME.colors)
        .map((color) => `'${DEFAULT_THEME.colors[color][6]}'`)
        .join(', ')}]}
    />
  );
}
`;

function Demo() {
  return (
    <Stack align="center">
      <ColorPicker
        format="hex"
        defaultValue="rgba(50, 151, 194, 1)"
        swatches={Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6])}
      />
    </Stack>
  );
}

export const swatches: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
