import React, { useState } from 'react';
import { useMantineTheme } from '@mantine/core';
import { ColorInput } from './ColorInput';
import CodeDemo from '../../../components/Demo/CodeDemo/CodeDemo';

// @ts-ignore
// eslint-disable-next-line
import code from '!!raw-loader!./ColorInput';

export function ColorInputDemo() {
  const theme = useMantineTheme();
  const [value, setValue] = useState('');
  const colors = Object.keys(theme.colors).map((color) => theme.colors[color][7]);

  return (
    <CodeDemo code={code} language="tsx">
      <div style={{ maxWidth: 359, margin: 'auto' }}>
        <ColorInput
          data={colors}
          label="Pick color"
          placeholder="Pick color"
          value={value}
          onChange={setValue}
        />
      </div>
    </CodeDemo>
  );
}
