import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Text } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        fullScreen
        radius={0}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open Modal</Button>
    </>
  );
}
`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        fullScreen
        radius={0}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        <Text mb="xl">
          It takes the entire screen and does not not have overlay and border-radius, you can use it
          small screens to save up some space. It also has fade transition by default, but you can
          change that with transition prop. Now here is an authentication form used in previous
          examples to see the difference.
        </Text>
        <AuthenticationForm noPadding noShadow />
      </Modal>

      <Button onClick={open}>Open Modal</Button>
    </>
  );
}

export const fullScreen: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
