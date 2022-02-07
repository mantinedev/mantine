import React, { useState } from 'react';
import { Text, Group, Button, Modal, Drawer, Divider, CloseButton, Paper } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { AuthenticationForm, PopoverDemos } from '@mantine/demos';

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
  const PopoverDemo = PopoverDemos.form.component;

  return (
    <Paper shadow="md" radius="md" padding={30}>
      <Modal title="Register" opened={modalOpened} onClose={() => setModalOpened(false)}>
        <AuthenticationForm noShadow noPadding />
      </Modal>

      <Drawer
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
        padding="xl"
        size={440}
        hideCloseButton
      >
        <Group position="apart">
          <Text size="lg">Register</Text>
          <CloseButton
            style={{ marginRight: -1 }}
            iconSize={18}
            onClick={() => setDrawerOpened(false)}
          />
        </Group>
        <Divider my="md" />
        <AuthenticationForm noShadow noPadding />
      </Drawer>

      <Group align="flex-start" spacing={30}>
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
          <div style={{ display: 'inline-block', position: 'relative', zIndex: 1 }}>
            <PopoverDemo />
          </div>
        </div>
      </Group>

      <Text size="lg" style={{ marginTop: 30, marginBottom: 10 }}>
        Clean and easy API
      </Text>

      <Prism language="tsx" noCopy>
        {code}
      </Prism>
    </Paper>
  );
}
