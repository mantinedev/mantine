import React, { useState } from 'react';
import { useMantineTheme } from '@mantine/core';
import { JsonInput } from './JsonInput';
import CodeDemo from '../../../components/Demo/CodeDemo/CodeDemo';

// @ts-ignore
// eslint-disable-next-line
import code from '!!raw-loader!./JsonInput.tsx';

export function JsonInputDemo() {
  const theme = useMantineTheme();
  const [value, setValue] = useState('');

  return (
    <CodeDemo code={code} language="tsx">
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
