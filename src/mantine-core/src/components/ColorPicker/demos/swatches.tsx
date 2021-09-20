import React from 'react';
import { DEFAULT_THEME } from '@mantine/tss';
import { Group } from '../../Group/Group';
import { ColorPicker } from '../ColorPicker';

const code = `
<ColorPicker format="hex" swatches={[${Object.keys(DEFAULT_THEME.colors).map(
  (color) => `'${DEFAULT_THEME.colors[color][6]}'`
)}]} />
`;

function Demo() {
  return (
    <Group position="center" direction="column">
      <ColorPicker
        format="hex"
        defaultValue="rgba(50, 151, 194, 1)"
        swatches={Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6])}
      />
    </Group>
  );
}

export const swatches: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
