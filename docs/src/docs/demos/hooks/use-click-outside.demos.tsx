import React, { useState } from 'react';
import { Paper, Button, ElementsGroup } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/theme';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

const getCode = (events?: string) => `import React, { useState } from 'react';
import { Paper, Button } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';

export function UseClickOutsideDemo() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false)${events});

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>

      {opened && (
        <Paper elementRef={ref} shadow="sm">
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
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0]}
    >
      <div style={{ position: 'relative' }}>
        <ElementsGroup position="center">
          <Button onClick={() => setOpened(true)}>Open dropdown</Button>
        </ElementsGroup>

        {opened && (
          <Paper
            elementRef={ref}
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
            }}
          >
            <span>Click outside to close</span>
          </Paper>
        )}
      </div>
    </CodeDemo>
  );
}
