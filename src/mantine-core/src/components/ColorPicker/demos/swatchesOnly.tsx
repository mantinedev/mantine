import React, { useState } from 'react';

import { DEFAULT_THEME } from '@mantine/styles';
import { Text } from '../../Text/Text';
import { ColorPicker } from '../ColorPicker';

const code = `
import { useState } from 'react';
import { DEFAULT_THEME, ColorPicker, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState(null);

  return (
    <div style={{ maxWidth: 200, marginLeft: 'auto', marginRight: 'auto' }}>
      <ColorPicker
        format="hex"
        value={value}
        onChange={onChange}
        withPicker={false}
        fullWidth
        swatches={[
          ...DEFAULT_THEME.colors.red,
          ...DEFAULT_THEME.colors.green,
          ...DEFAULT_THEME.colors.blue,
        ]}
      />
      <Text align="center" style={{ marginTop: 5 }}>
        {value}
      </Text>
    </div>
  );
}
`;

function Demo() {
  const [value, onChange] = useState(null);

  return (
    <div style={{ maxWidth: 200, marginLeft: 'auto', marginRight: 'auto' }}>
      <ColorPicker
        format="hex"
        value={value}
        onChange={onChange}
        withPicker={false}
        fullWidth
        swatches={[
          ...DEFAULT_THEME.colors.red,
          ...DEFAULT_THEME.colors.green,
          ...DEFAULT_THEME.colors.blue,
        ]}
      />
      <Text align="center" style={{ marginTop: 5 }}>
        {value}
      </Text>
    </div>
  );
}

export const swatchesOnly: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
