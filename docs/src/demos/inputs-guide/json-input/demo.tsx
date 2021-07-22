import React, { useState } from 'react';
import { JsonInput } from './JsonInput';
import CodeDemo from '../../../components/Demo/CodeDemo/CodeDemo';

// @ts-ignore
// eslint-disable-next-line
import code from '!!raw-loader!./JsonInput.tsx';

export function JsonInputDemo() {
  const [value, setValue] = useState('');

  return (
    <CodeDemo code={code} language="tsx">
      <div style={{ maxWidth: 359, margin: 'auto' }}>
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
