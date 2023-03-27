import React from 'react';
import { TextInput, Button, Group } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { modals } from '@mantine/modals';

const code = `
import { TextInput, Button, Group } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  return (
    <Group position="center">
      <Button
        onClick={() => {
          modals.open({
            title: 'Subscribe to newsletter',
            children: (
              <>
                <TextInput label="Your email" placeholder="Your email" data-autofocus />
                <Button fullWidth onClick={modals.closeAll} mt="md">
                  Submit
                </Button>
              </>
            ),
          });
        }}
      >
        Open content modal
      </Button>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Button
        onClick={() => {
          modals.open({
            title: 'Subscribe to newsletter',
            children: (
              <>
                <TextInput label="Your email" placeholder="Your email" data-autofocus />
                <Button fullWidth onClick={modals.closeAll} mt="md">
                  Submit
                </Button>
              </>
            ),
          });
        }}
      >
        Open content modal
      </Button>
    </Group>
  );
}

export const content: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
