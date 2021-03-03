import React, { useState } from 'react';
import { Paper, Button, ElementsGroup } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import Demo from '../../components/Demo/Demo';

export function UseClickOutsideDemo() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false));

  return (
    <Demo>
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
    </Demo>
  );
}
