import React, { useState } from 'react';
import { Paper, Button, Group, useMantineTheme } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import { CodeDemo } from '../../components/Demo/Demo';

const getCode = (events?: string) => `import { useState } from 'react';
import { Paper, Button } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';

export function Demo() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false)${events});

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
}`;

export function UseClickOutsideDemo({ events }: { events?: string[] }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false), events || undefined);

  return (
    <CodeDemo
      code={getCode(events ? `, [${events.map((event) => `'${event}'`).join(', ')}]` : '')}
      language="tsx"
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0]}
    >
      <div style={{ position: 'relative' }}>
        <Group position="center">
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
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
            }}
          >
            <span>Click outside to close</span>
          </Paper>
        )}
      </div>
    </CodeDemo>
  );
}
