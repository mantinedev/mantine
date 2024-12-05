import { useState } from 'react';
import { Button, Group, Paper } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Paper, Button } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';

function Demo() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>

      {opened && (
        <Paper ref={ref} shadow="sm">
          <span>Click outside to close</span>
        </Paper>
      )}
    </>
  );
}
`;

function Demo() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  return (
    <div style={{ position: 'relative' }}>
      <Group justify="center">
        <Button onClick={() => setOpened(true)}>Open dropdown</Button>
      </Group>

      {opened && (
        <Paper
          ref={ref}
          shadow="sm"
          style={{
            width: 300,
            height: 60,
            position: 'absolute',
            top: 0,
            left: 'calc(50% - 150px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <span>Click outside to close</span>
        </Paper>
      )}
    </div>
  );
}

export const useClickOutsideUsage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  dimmed: true,
};
