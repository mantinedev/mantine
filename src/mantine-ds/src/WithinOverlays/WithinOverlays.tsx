import React, { useState } from 'react';
import { Modal, Button, Popover, Group, Drawer } from '@mantine/core';

interface WithinOverlayProps {
  children: React.ReactNode;
}

function WithinPopover({ children }: WithinOverlayProps) {
  const [opened, setOpened] = useState(false);
  return (
    <Group position="center" mt="xl">
      <Popover
        opened={opened}
        onClose={() => setOpened(false)}
        target={<Button onClick={() => setOpened((o) => !o)}>Within popover</Button>}
        position="bottom"
        placement="start"
        withArrow
        withCloseButton
        styles={{ body: { width: 300 } }}
      >
        {children}
      </Popover>
    </Group>
  );
}

function WithinModal({ children }: WithinOverlayProps) {
  const [opened, setOpened] = useState(false);

  return (
    <Group position="center" mt="xl">
      <Button onClick={() => setOpened(true)}>Within Modal</Button>
      <Modal opened={opened} onClose={() => setOpened(false)} title="Within modal">
        {children}
      </Modal>
    </Group>
  );
}

function WithinDrawer({ children }: WithinOverlayProps) {
  const [opened, setOpened] = useState(false);

  return (
    <Group position="center" mt="xl">
      <Button onClick={() => setOpened(true)}>Within Drawer</Button>
      <Drawer opened={opened} onClose={() => setOpened(false)} title="Within drawer" padding="xl">
        {children}
      </Drawer>
    </Group>
  );
}

export function WithinOverlays({ children }: WithinOverlayProps) {
  return (
    <>
      <WithinModal>{children}</WithinModal>
      <WithinDrawer>{children}</WithinDrawer>
      <WithinPopover>{children}</WithinPopover>
    </>
  );
}
