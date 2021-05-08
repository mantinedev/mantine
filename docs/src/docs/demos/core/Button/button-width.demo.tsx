import React from 'react';
import { Button } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const fullWidth = `import React from 'react';
import { Button } from '@mantine/core';

function Demo() {
  return (
    <>
      <div style={{ width: 250 }}>
        <Button fullWidth>Full width button</Button>
      </div>

      <div style={{ width: 180, marginTop: 20 }}>
        <Button fullWidth>Button with overflow</Button>
      </div>
    </>
  );
}`;

export function ButtonFullWidthDemo() {
  return (
    <CodeDemo code={fullWidth} language="tsx">
      <div style={{ width: 250 }}>
        <Button fullWidth>Full width button</Button>
      </div>

      <div style={{ width: 180, marginTop: 20 }}>
        <Button fullWidth>Button with overflow</Button>
      </div>
    </CodeDemo>
  );
}
