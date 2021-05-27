import React from 'react';
import { PasswordInput } from '../PasswordInput';
import { useMantineTheme } from '../../../index';

const code = `
<PasswordInput
  label="Focus will be on button"
  placeholder="Focus will be on button"
/>

<PasswordInput
  focusInputOnToggle
  label="Focus will move to input"
  placeholder="Focus will move to input"
/>
`;

function Demo() {
  const theme = useMantineTheme();

  return (
    <div style={{ maxWidth: 360, margin: 'auto' }}>
      <PasswordInput
        label="Focus will be on button"
        placeholder="Focus will be on button"
        variant={theme.colorScheme === 'dark' ? 'filled' : 'default'}
      />

      <PasswordInput
        focusInputOnToggle
        label="Focus will move to input"
        placeholder="Focus will move to input"
        style={{ marginTop: 15 }}
        variant={theme.colorScheme === 'dark' ? 'filled' : 'default'}
      />
    </div>
  );
}

export const focus: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
