import React, { useState } from 'react';
import { LoadingOverlay, Button, ElementsGroup, useMantineTheme } from '@mantine/core';
import { AuthenticationForm } from '@mantine/demos';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { LoadingOverlay, Button, ElementsGroup } from '@mantine/core';

function Demo() {
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
  const theme = useMantineTheme();

  return (
    <CodeDemo
      code={code}
      language="tsx"
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[0]}
    >
      <div style={{ maxWidth: 400 }}>
        <div
          style={{
            borderRadius: 4,
            overflow: 'hidden',
            position: 'relative',
            margin: 'auto',
          }}
        >
          <LoadingOverlay visible={visible} zIndex={1000} />
          <AuthenticationForm noSubmit />
        </div>
      </div>

      <ElementsGroup position="center" style={{ marginTop: 20 }}>
        <Button onClick={() => setVisible((v) => !v)}>Toggle overlay</Button>
      </ElementsGroup>
    </CodeDemo>
  );
}
