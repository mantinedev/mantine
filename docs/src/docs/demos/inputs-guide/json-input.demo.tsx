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
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]}
      githubLink="https://github.com/mantinedev/mantine/blob/master/src/mantine-demos/src/JsonInput/JsonInput.tsx"
    >
      <div style={{ maxWidth: 700, margin: 'auto' }}>
        <JsonInput
          label="Your package.json"
          placeholder="Your package.json"
          value={value}
          onChange={setValue}
        />
      </div>
    </CodeDemo>
  );
}
