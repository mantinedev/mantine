import React, { useState } from 'react';
import { AuthenticationForm } from '../../../../demos';
import { Modal, Group, Button, useMantineTheme } from '../../../index';

const code = `
const theme = useMantineTheme();

<Modal
  opened={opened}
  onClose={() => setOpened(false)}
  title="Introduce yourself!"
  overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
  overlayOpacity={0.95}
>
  <AuthenticationForm />
</Modal>
`;

function Demo() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.95}
      >
        <AuthenticationForm noPadding noShadow />
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </>
  );
}

export const overlay: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
