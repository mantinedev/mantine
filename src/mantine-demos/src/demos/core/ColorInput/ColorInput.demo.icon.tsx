import React from 'react';
import { Paint } from 'tabler-icons-react';
import { ColorInput } from '@mantine/core';

const code = `
import { Paint } from 'tabler-icons-react';
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
        icon={<Paint size={16} />}
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

      <ColorInput mt="md" icon={<Paint size={16} />} label="With icon" placeholder="With icon" />
    </div>
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
