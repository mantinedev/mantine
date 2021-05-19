import React from 'react';
import { NumberInput, useMantineTheme } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="With controls"
        placeholder="By default controls are visible"
      />

      <NumberInput
        style={{ marginTop: 15 }}
        hideControls
        label="Without controls"
        placeholder="Disable them with hideControls prop"
      />

      <NumberInput
        style={{ marginTop: 15 }}
        label="Disabled"
        disabled
        placeholder="Controls also not rendered when input is disabled"
      />
    </>
  );
}`;

export function NumberInputControls() {
  const theme = useMantineTheme();
  const variant = theme.colorScheme === 'dark' ? 'filled' : 'default';

  return (
    <CodeDemo
      code={code}
      language="tsx"
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}
    >
      <div style={{ maxWidth: 420, margin: 'auto' }}>
        <NumberInput
          label="With controls"
          placeholder="By default controls are visible"
          variant={variant}
        />

        <NumberInput
          style={{ marginTop: 15 }}
          hideControls
          label="Without controls"
          placeholder="Disable them with hideControls prop"
          variant={variant}
        />
        <NumberInput
          style={{ marginTop: 15 }}
          label="Disabled"
          disabled
          placeholder="Controls also not rendered when input is disabled"
          variant={variant}
        />
      </div>
    </CodeDemo>
  );
}
