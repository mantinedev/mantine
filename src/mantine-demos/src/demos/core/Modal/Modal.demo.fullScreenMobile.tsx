import React from 'react';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal, Group, Button, em } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';

const code = `
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: ${em(800)})");

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        fullScreen={isMobile}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        The Modal will be full screen only on mobile
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open Modal</Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery(`(max-width: ${em(800)})`);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        fullScreen={isMobile}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        The Modal will be full screen only on mobile
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open Modal</Button>
      </Group>
    </>
  );
}

export const fullScreenMobile: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
