import React from 'react';
import { DEFAULT_THEME } from '@mantine/tss';
import { ColorInput } from '../ColorInput';

const code = `
<ColorInput
  placeholder="Pick color"
  label="Your favorite color"
  disallowInput
  withPicker={false}
  swatches={[
    ...DEFAULT_THEME.colors.red,
    ...DEFAULT_THEME.colors.green,
    ...DEFAULT_THEME.colors.blue,
  ]}
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <ColorInput
        placeholder="Pick color"
        label="Your favorite color"
        disallowInput
        withPicker={false}
        swatches={[
          ...DEFAULT_THEME.colors.red,
          ...DEFAULT_THEME.colors.green,
          ...DEFAULT_THEME.colors.blue,
        ]}
      />
    </div>
  );
}

export const swatchesOnly: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
