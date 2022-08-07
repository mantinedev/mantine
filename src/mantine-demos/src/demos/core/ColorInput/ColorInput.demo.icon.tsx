import React from 'react';
import { IconPaint } from '@tabler/icons';
import { ColorInput } from '@mantine/core';

const code = `
import { IconPaint } from '@tabler/icons';
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* Remove color preview */}
      <ColorInput
        label="Without preview"
        placeholder="No color preview"
        withPreview={false}
      />

      {/* Replace color preview with any React node */}
      <ColorInput
        icon={<IconPaint size={16} />}
        label="With icon"
        placeholder="With icon"
      />
    </>
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <ColorInput label="Without preview" placeholder="No color preview" withPreview={false} />

      <ColorInput
        mt="md"
        icon={<IconPaint size={16} />}
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
