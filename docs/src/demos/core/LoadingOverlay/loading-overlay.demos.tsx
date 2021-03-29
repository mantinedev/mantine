import React, { useState } from 'react';
import { LoadingOverlay, Button, ElementsGroup } from '@mantine/core';
import { AuthenticationForm } from '@mantine/demos';
import { DEFAULT_THEME } from '@mantine/theme';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { LoadingOverlay, Button, ElementsGroup } from '@mantine/core';

export function LoadingOverlayDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div style={{ width: 400, position: 'relative' }}>
        <LoadingOverlay visible={visible} />
        <AuthenticationForm />
      </div>

      <ElementsGroup position="center">
        <Button onClick={() => setVisible((v) => !v)}>Toggle overlay</Button>
      </ElementsGroup>
    </>
  );
}`;

export function LoadingOverlayBaseDemo() {
  const [visible, setVisible] = useState(false);
  return (
    <CodeDemo code={code} language="tsx" demoBackground={DEFAULT_THEME.colors.gray[0]}>
      <div
        style={{
          width: 400,
          borderRadius: 4,
          overflow: 'hidden',
          position: 'relative',
          margin: 'auto',
        }}
      >
        <LoadingOverlay visible={visible} />
        <AuthenticationForm noSubmit />
      </div>

      <ElementsGroup position="center" style={{ marginTop: 20 }}>
        <Button onClick={() => setVisible((v) => !v)}>Toggle overlay</Button>
      </ElementsGroup>
    </CodeDemo>
  );
}
