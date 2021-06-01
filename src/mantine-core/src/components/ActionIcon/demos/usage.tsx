import React from 'react';
import { PasswordInput } from '../../PasswordInput/PasswordInput';
import { useMantineTheme } from '../../../theme';

function Demo() {
  const theme = useMantineTheme();
  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <PasswordInput
        placeholder="Password"
        hidePasswordLabel="Hide password"
        showPasswordLabel="Show password"
        variant={theme.colorScheme === 'dark' ? 'filled' : 'default'}
      />
    </div>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
};
