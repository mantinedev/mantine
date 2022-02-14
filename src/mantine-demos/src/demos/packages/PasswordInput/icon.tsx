import React from 'react';
import { Lock } from 'tabler-icons-react';
import { PasswordInput } from '@mantine/core';

const code = `
import { PasswordInput } from '@mantine/core';
import { Lock } from 'tabler-icons-react';

function Demo() {
  return <PasswordInput label="Your password" placeholder="Your password" icon={<Lock size={16} />} />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <PasswordInput label="Your password" placeholder="Your password" icon={<Lock size={16} />} />
    </div>
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
