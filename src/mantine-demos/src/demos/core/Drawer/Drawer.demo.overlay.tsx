import React from 'react';
import { Drawer, Button } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { useDisclosure } from '@mantine/hooks';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        {/* Drawer content */}
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        <AuthenticationForm noShadow noPadding />
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}

export const overlay: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
