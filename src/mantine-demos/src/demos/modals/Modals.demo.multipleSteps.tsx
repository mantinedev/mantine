import React from 'react';
import { Group, Button, Text } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { modals } from '@mantine/modals';

const code = `
import { Group, Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  return (
    <Group position="center">
      <Button
        onClick={() =>
          modals.openConfirmModal({
            title: 'Please confirm your action',
            closeOnConfirm: false,
            labels: { confirm: 'Next modal', cancel: 'Close modal' },
            children: (
              <Text size="sm">
                This action is so important that you are required to confirm it with a modal. Please
                click one of these buttons to proceed.
              </Text>
            ),
            onConfirm: () =>
              modals.openConfirmModal({
                title: 'This is modal at second layer',
                labels: { confirm: 'Close modal', cancel: 'Back' },
                closeOnConfirm: false,
                children: (
                  <Text size="sm">
                    When this modal is closed modals state will revert to first modal
                  </Text>
                ),
                onConfirm: modals.closeAll,
              }),
          })
        }
      >
        Open multiple steps modal
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
          modals.openConfirmModal({
            title: 'Please confirm your action',
            closeOnConfirm: false,
            labels: { confirm: 'Next modal', cancel: 'Close modal' },
            children: (
              <Text size="sm">
                This action is so important that you are required to confirm it with a modal. Please
                click one of these buttons to proceed.
              </Text>
            ),
            onConfirm: () =>
              modals.openConfirmModal({
                title: 'This is modal at second layer',
                labels: { confirm: 'Close modal', cancel: 'Back' },
                closeOnConfirm: false,
                children: (
                  <Text size="sm">
                    When this modal is closed modals state will revert to first modal
                  </Text>
                ),
                onConfirm: modals.closeAll,
              }),
          })
        }
      >
        Open multiple steps modal
      </Button>
    </Group>
  );
}

export const multipleSteps: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
