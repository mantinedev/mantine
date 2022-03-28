import React from 'react';
import { At } from 'tabler-icons-react';
import { TextInput } from '@mantine/core';

const code = `
import { TextInput } from '@mantine/core';
import { At } from 'tabler-icons-react';

function Demo() {
  return <TextInput label="Your email" placeholder="Your email" icon={<At size={14} />} />;
}
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
