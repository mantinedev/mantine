import React from 'react';
import { PasswordInput } from '../../PasswordInput/PasswordInput';

function Demo() {
  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <PasswordInput placeholder="Password" />
    </div>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
};
