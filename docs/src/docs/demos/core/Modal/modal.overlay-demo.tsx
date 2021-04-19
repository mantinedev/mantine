import React, { useState } from 'react';
import { Modal, Button, ElementsGroup, Portal } from '@mantine/core';
import { AuthenticationForm } from '@mantine/demos';
import { useMantineTheme } from '@mantine/theme';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { Modal, Button, ElementsGroup } from '@mantine/core';
import { useMantineTheme } from '@mantine/theme';

export function ModalDemo() {
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

      <ElementsGroup position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </ElementsGroup>
    </>
  );
}`;

export function ModalOverlayDemo() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <CodeDemo code={code} language="tsx">
      <Portal zIndex={10}>
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Introduce yourself!"
          overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
          overlayOpacity={0.95}
        >
          <AuthenticationForm noShadow noPadding />
        </Modal>
      </Portal>

      <ElementsGroup position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </ElementsGroup>
    </CodeDemo>
  );
}
