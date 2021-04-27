import React from 'react';
import { NumberInput, useMantineTheme } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="Your age"
        placeholder="Your age"
        max={120}
        min={0}
      />
      
      <NumberInput
        label="Your weight in kg"
        description="From 0 to Infinity, step is 5"
        defaultValue={80}
        step={5}
        min={0}
      />
    </>
  );
}`;

export function NumberInputBoundariesDemo() {
  const theme = useMantineTheme();

  return (
    <CodeDemo
      code={code}
      language="tsx"
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}
    >
      <div style={{ maxWidth: 420, margin: 'auto' }}>
        <NumberInput
          label="Your age"
          description="From 0 to 120, step is 1"
          placeholder="Your age"
          max={120}
          min={0}
        />
        <NumberInput
          style={{ marginTop: 15 }}
          label="Your weight in kg"
          description="From 0 to Infinity, step is 5"
          defaultValue={80}
          step={5}
          min={0}
        />
      </div>
    </CodeDemo>
  );
}
