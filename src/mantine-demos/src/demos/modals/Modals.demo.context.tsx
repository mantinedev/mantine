import React from 'react';
import { Group, Button } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { modals } from '@mantine/modals';

const code = `
import { Button, Group } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  return (
    <Group position="center">
      <Button
        onClick={() =>
          modals.openContextModal({
            modal: 'demonstration',
            title: 'Test modal from context',
            innerProps: {
              modalBody:
                'This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook',
            },
          })
        }
      >
        Open demonstration context modal
      </Button>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Button
        onClick={() =>
          modals.openContextModal({
            modal: 'demonstration',
            title: 'Test modal from context',
            innerProps: {
              modalBody:
                'This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook',
            },
          })
        }
      >
        Open demonstration context modal
      </Button>
    </Group>
  );
}

export const context: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
