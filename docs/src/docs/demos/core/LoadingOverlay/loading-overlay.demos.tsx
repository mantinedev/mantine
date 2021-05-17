import React, { useState } from 'react';
import { LoadingOverlay, Button, Group, useMantineTheme } from '@mantine/core';
import { AuthenticationForm } from '@mantine/demos';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { LoadingOverlay, Button, Group } from '@mantine/core';

function Demo() {
  const [visible, setVisible] = useState(false);

  // Note that position: relative is required
  return (
    <>
      <div style={{ width: 400, position: 'relative' }}>
        <LoadingOverlay visible={visible} />
        <AuthenticationForm />
      </div>

      <Group position="center">
        <Button onClick={() => setVisible((v) => !v)}>Toggle overlay</Button>
      </Group>
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
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]}
    >
      <div style={{ maxWidth: 400, margin: 'auto', overflow: 'visible' }}>
        <div
          style={{
            borderRadius: 4,
            position: 'relative',
            margin: 'auto',
          }}
        >
          <LoadingOverlay visible={visible} zIndex={1000} style={{ borderRadius: 4 }} />
          <AuthenticationForm noSubmit noShadow={theme.colorScheme === 'dark'} />
        </div>
      </div>

      <Group position="center" style={{ marginTop: 20 }}>
        <Button onClick={() => setVisible((v) => !v)}>Toggle overlay</Button>
      </Group>
    </CodeDemo>
  );
}
