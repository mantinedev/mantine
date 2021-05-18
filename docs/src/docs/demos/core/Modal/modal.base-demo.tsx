import React, { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import { AuthenticationForm } from '@mantine/demos';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        <AuthenticationForm />
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </>
  );
}`;

export function ModalBaseDemo({ hideCode = false }: { hideCode: boolean }) {
  const [opened, setOpened] = useState(false);

  return (
    <CodeDemo code={!hideCode ? code : null} language="tsx">
      <Modal opened={opened} onClose={() => setOpened(false)} title="Introduce yourself!">
        <AuthenticationForm noShadow noPadding />
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </CodeDemo>
  );
}
