import React from 'react';
import { IconEyeCheck, IconEyeOff } from '@tabler/icons';
import { PasswordInput } from '@mantine/core';

const code = `
import { PasswordInput } from '@mantine/core';
import { IconEyeCheck, IconEyeOff } from '@tabler/icons';

function Demo() {
  return (
    <PasswordInput
      label="Change visibility toggle icon"
      placeholder="Change visibility toggle icon"
      defaultValue="secret"
      visibilityToggleIcon={({ reveal, size }) =>
        reveal ? <IconEyeOff size={size} /> : <IconEyeCheck size={size} />
      }
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <PasswordInput
        label="Change visibility toggle icon"
        placeholder="Change visibility toggle icon"
        defaultValue="secret"
        visibilityToggleIcon={({ reveal, size }) =>
          reveal ? <IconEyeOff size={size} /> : <IconEyeCheck size={size} />
        }
      />
    </div>
  );
}

export const visibilityIcon: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
