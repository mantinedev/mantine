import React from 'react';
import { TextInput, Loader } from '@mantine/core';

const code = `
<TextInput label="Your email" placeholder="Your email" rightSection={<Loader size="xs" />} />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TextInput label="Your email" placeholder="Your email" rightSection={<Loader size="xs" />} />
    </div>
  );
}

export const rightSection: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
