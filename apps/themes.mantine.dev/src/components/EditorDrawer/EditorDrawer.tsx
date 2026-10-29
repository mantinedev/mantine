'use client';

import { Drawer, Group, ScrollArea } from '@mantine/core';
import classes from './EditorDrawer.module.css';

interface EditorDrawerProps {
  opened: boolean;
  title: string;
  onClose: () => void;
  onExitTransitionEnd: () => void;
  children: React.ReactNode;
}

export function EditorDrawer({
  opened,
  title,
  onClose,
  onExitTransitionEnd,
  children,
}: EditorDrawerProps) {
  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      onExitTransitionEnd={onExitTransitionEnd}
      title={title}
      position="left"
      size={360}
      withOverlay={false}
      lockScroll={false}
      trapFocus={false}
      closeOnClickOutside={false}
      scrollAreaComponent={ScrollArea.Autosize}
      classNames={{ content: classes.drawer }}
    >
      {children}
    </Drawer>
  );
}

export function EditorDrawerFooter({ children }: { children: React.ReactNode }) {
  return (
    <Group justify="flex-end" gap="xs" className={classes.footer}>
      {children}
    </Group>
  );
}
