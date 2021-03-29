import React, { useState } from 'react';
import { Button, ElementsGroup, Overlay, Text } from '@mantine/core';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { Overlay } from '@mantine/core';

export function OverlayDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div style={{ width: 400, height: 100, position: 'relative' }}>
        {visible && <Overlay opacity={0.6} color="#000" />}
        <Text>I will be overlaid</Text>
      </div>

      <ElementsGroup position="center">
        <Button onClick={() => setVisible((v) => !v)}>Toggle overlay</Button>
      </ElementsGroup>
    </>
  );
}`;

export function OverlayBaseDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <CodeDemo code={code} language="tsx">
      <div
        style={{
          width: 400,
          margin: 'auto',
          position: 'relative',
          height: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {visible && <Overlay opacity={0.6} color="#000" />}
        <Text>I will be overlaid</Text>
      </div>

      <ElementsGroup position="center" style={{ marginTop: 20 }}>
        <Button onClick={() => setVisible((v) => !v)}>Toggle overlay</Button>
      </ElementsGroup>
    </CodeDemo>
  );
}
