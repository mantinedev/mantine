import React, { useState } from 'react';
import { Modal, Button, Group, useMantineTheme } from '@mantine/core';
import { AuthenticationForm } from '@mantine/demos';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { Modal, Button, Group, useMantineTheme } from '@mantine/core';

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
        <AuthenticationForm />
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </>
  );
}`;

export function ModalOverlayDemo() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <CodeDemo code={code} language="tsx">
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.95}
      >
        <AuthenticationForm noShadow noPadding />
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </CodeDemo>
  );
}
