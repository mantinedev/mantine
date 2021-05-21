import React, { useState } from 'react';
import { JsonInput } from '@mantine/demos';
import { useMantineTheme } from '@mantine/core';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import code from '!!raw-loader!../../../../../src/mantine-demos/src/JsonInput/JsonInput';

export function JsonInputDemo() {
  const theme = useMantineTheme();
  const [value, setValue] = useState('');

  return (
    <CodeDemo
      code={code}
      language="tsx"
      toggle
      githubLink="https://github.com/mantinedev/mantine/blob/master/src/mantine-demos/src/JsonInput/JsonInput.tsx"
    >
      <div style={{ maxWidth: 359, margin: 'auto' }}>
        <JsonInput
          label="Your package.json"
          placeholder="Your package.json"
          value={value}
          onChange={setValue}
          variant={theme.colorScheme === 'dark' ? 'filled' : 'default'}
        />
      </div>
    </CodeDemo>
  );
}
