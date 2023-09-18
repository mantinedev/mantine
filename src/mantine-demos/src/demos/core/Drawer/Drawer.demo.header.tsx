import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} withCloseButton={false}>
        Drawer without header, press escape or click on overlay to close
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
      <Drawer opened={opened} onClose={close} withCloseButton={false}>
        Drawer without header, press escape or click on overlay to close
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}

export const header: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
