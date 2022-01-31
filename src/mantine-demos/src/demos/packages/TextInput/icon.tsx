import React from 'react';
import { At } from 'tabler-icons-react';
import { TextInput } from '@mantine/core';

const code = `
<TextInput icon={<At />} />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TextInput label="Your email" placeholder="Your email" icon={<At size={14} />} />
    </div>
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
