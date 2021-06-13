import React, { useState } from 'react';
import { Text, Group, Button, Modal, Drawer, Divider, CloseButton } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { form as FormPopoverDemo } from '@mantine/core/src/components/Popover/demos/form';
import { AuthenticationForm } from '@mantine/core/demos/AuthenticationForm/AuthenticationForm';

const code = `
import { useState } from 'react';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button onClick={()=> setOpened(true)}>Open Modal</Button>
      <Modal title="My modal" onClose={() => setOpened(false)}>
        My modal
      </Modal>
    </>
  );
}
`.trim();

export function OverlaysDemos() {
  const [modalOpened, setModalOpened] = useState(false);
  const [drawerOpened, setDrawerOpened] = useState(false);
  const PopoverDemo = FormPopoverDemo.component;

  return (
    <>
      <Modal title="Register" opened={modalOpened} onClose={() => setModalOpened(false)}>
        <AuthenticationForm noShadow noPadding />
      </Modal>

      <Drawer opened={drawerOpened} onClose={() => setDrawerOpened(false)} padding="xl" size={440}>
        <Group position="apart">
          <Text size="lg">Register</Text>
          <CloseButton style={{ marginRight: -1 }} iconSize={18} />
        </Group>
        <Divider margins="md" />
        <AuthenticationForm noShadow noPadding />
      </Drawer>

      <Group grow align="flex-start">
        <div>
          <Text size="lg" style={{ marginBottom: 15 }}>
            Modal and Drawer
          </Text>

          <Group>
            <Button variant="outline" onClick={() => setModalOpened(true)}>
              Open Modal
            </Button>
            <Button variant="outline" onClick={() => setDrawerOpened(true)}>
              Open Drawer
            </Button>
          </Group>
        </div>
        <div>
          <Text size="lg" style={{ marginBottom: 15 }}>
            Popover
          </Text>
          <div style={{ display: 'inline-block' }}>
            <PopoverDemo />
          </div>
        </div>
      </Group>

      <Text size="lg" style={{ marginTop: 15, marginBottom: 10 }}>
        Clean and easy API
      </Text>

      <Prism language="tsx" noCopy>
        {code}
      </Prism>
    </>
  );
}
