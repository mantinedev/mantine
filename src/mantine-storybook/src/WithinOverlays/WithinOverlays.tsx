import React, { useState } from 'react';
import { Modal, Button, Popover, Group, Drawer } from '@mantine/core';

interface WithinOverlayProps {
  children: React.ReactNode;
}

function WithinPopover({ children }: WithinOverlayProps) {
  return (
    <Group position="center" mt="xl">
      <Popover position="bottom" withArrow>
        <Popover.Target>
          <Button>Within popover</Button>
        </Popover.Target>
        <Popover.Dropdown>{children}</Popover.Dropdown>
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
