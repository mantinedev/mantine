import React from 'react';
import { PasswordInput } from '@mantine/core';

const code = `
<PasswordInput
  label="Toggle button is not focusable"
  placeholder="Toggle button is not focusable"
/>

<PasswordInput
  label="Toggle button is focusable"
  placeholder="Toggle button is focusable"
  toggleTabIndex={0}
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 360, margin: 'auto' }}>
      <PasswordInput
        label="Toggle button is not focusable"
        placeholder="Toggle button is not focusable"
        toggleTabIndex={-1}
      />

      <PasswordInput
        label="Toggle button is focusable"
        placeholder="Toggle button is focusable"
        toggleTabIndex={0}
        style={{ marginTop: 15 }}
      />
    </div>
  );
}

export const focus: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
