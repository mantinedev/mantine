import React from 'react';
import { BlendingModeIcon } from '@modulz/radix-icons';
import { ColorInput } from '@mantine/core';

const code = `
// Remove color preview
<ColorInput
  label="Without preview"
  placeholder="No color preview"
  withPreview={false}
/>

// Replace color preview with any React node
<ColorInput
  icon={<BlendingModeIcon />}
  label="With icon"
  placeholder="With icon"
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <ColorInput label="Without preview" placeholder="No color preview" withPreview={false} />

      <ColorInput
        style={{ marginTop: 15 }}
        icon={<BlendingModeIcon />}
        label="With icon"
        placeholder="With icon"
      />
    </div>
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
