import React, { useState } from 'react';
import { DotsHorizontalIcon } from '@modulz/radix-icons';
import { Menu, ActionIcon } from '@mantine/core';

export default function MenuWrapper(
  props: Omit<React.ComponentPropsWithoutRef<typeof Menu>, 'opened' | 'onClose'>
) {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <Menu opened={opened} onClose={() => setOpened(false)} {...props} />
      <ActionIcon onClick={() => setOpened(true)} aria-haspopup aria-expanded={opened}>
        <DotsHorizontalIcon />
      </ActionIcon>
    </div>
  );
}
