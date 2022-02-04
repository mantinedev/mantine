import React from 'react';
import { LockIcon } from '@primer/octicons-react';
import { PasswordInput } from '@mantine/core';

const code = `
<PasswordInput icon={<LockIcon />} />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <PasswordInput label="Your password" placeholder="Your password" icon={<LockIcon />} />
    </div>
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
