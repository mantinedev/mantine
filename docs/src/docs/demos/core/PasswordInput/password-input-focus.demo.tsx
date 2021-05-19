import React from 'react';
import { PasswordInput, useMantineTheme } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `<PasswordInput
  label="Focus will be on button"
  placeholder="Focus will be on button"
  />

  <PasswordInput
  focusInputOnToggle
  label="Focus will move to input"
  placeholder="Focus will move to input"
/>`;

export function PasswordFocusDemo() {
  const theme = useMantineTheme();
  return (
    <CodeDemo code={code} language="tsx">
      <div style={{ maxWidth: 360, margin: 'auto' }}>
        <div style={{ width: '100%' }}>
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
      </div>
    </CodeDemo>
  );
}
