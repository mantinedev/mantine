import React from 'react';
import { NumberInput, useMantineTheme } from '../../../index';

const code = `
<NumberInput label="By default controls are visible" />

<NumberInput
  hideControls
  label="Disable them with hideControls prop"
/>

<NumberInput
  label="Disabled"
  disabled
  label="Controls also not rendered when input is disabled"
/>
`;

function Demo() {
  const theme = useMantineTheme();
  const variant = theme.colorScheme === 'dark' ? 'filled' : 'default';

  return (
    <div style={{ maxWidth: 420, margin: 'auto' }}>
      <NumberInput label="By default controls are visible" variant={variant} />

      <NumberInput
        style={{ marginTop: 15 }}
        hideControls
        label="Disable them with hideControls prop"
        variant={variant}
      />
      <NumberInput
        style={{ marginTop: 15 }}
        disabled
        label="Controls also not rendered when input is disabled"
        variant={variant}
      />
    </div>
  );
}

export const controls: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
