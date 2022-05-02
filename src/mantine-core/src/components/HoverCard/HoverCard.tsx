import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Popover } from '../Popover';
import { HoverCardContextProvider } from './HoverCard.context';
import { HoverCardDropdown } from './HoverCardDropdown/HoverCardDropdown';
import { HoverCardTarget } from './HoverCardTarget/HoverCardTarget';

export interface HoverCardProps {
  /** HoverCard.Target and HoverCard.Dropdown components */
  children?: React.ReactNode;

  /** Called when dropdown is opened */
  onOpen?(): void;

  /** Called when dropdown is closed */
  onClose?(): void;
}

export function HoverCard({ children, onOpen, onClose }: HoverCardProps) {
  const [opened, { open, close }] = useDisclosure(false, { onClose, onOpen });

  return (
    <HoverCardContextProvider value={{ openDropdown: open, closeDropdown: close }}>
      <Popover opened={opened}>{children}</Popover>
    </HoverCardContextProvider>
  );
}

HoverCard.displayName = '@mantine/core/HoverCard';
HoverCard.Target = HoverCardTarget;
HoverCard.Dropdown = HoverCardDropdown;
