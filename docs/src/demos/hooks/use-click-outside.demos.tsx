import React, { useState } from 'react';
import { Paper, Button, ElementsGroup } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import CodeDemo from '../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { Paper, Button } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';

export function UseClickOutsideDemo() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>

      {opened && (
        <Paper ref={ref} shadow="md">
          <span>Click outside to close</span>
        </Paper>
      )}
    </>
  );
}`;

export function UseClickOutsideDemo() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  return (
    <CodeDemo code={code} language="tsx" title="Demo">
      <div style={{ position: 'relative' }}>
        <ElementsGroup position="center">
          <Button onClick={() => setOpened(true)}>Open dropdown</Button>
        </ElementsGroup>

        {opened && (
          <Paper
            ref={ref}
            shadow="md"
            style={{
              width: 300,
              height: 60,
              position: 'absolute',
              top: 0,
              left: 'calc(50% - 150px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span>Click outside to close</span>
          </Paper>
        )}
      </div>
    </CodeDemo>
  );
}
