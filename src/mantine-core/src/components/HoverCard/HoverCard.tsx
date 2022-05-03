import React, { useRef, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Popover, PopoverBaseProps } from '../Popover';
import { HoverCardContextProvider } from './HoverCard.context';
import { HoverCardDropdown } from './HoverCardDropdown/HoverCardDropdown';
import { HoverCardTarget } from './HoverCardTarget/HoverCardTarget';

export interface HoverCardProps extends PopoverBaseProps {
  /** HoverCard.Target and HoverCard.Dropdown components */
  children?: React.ReactNode;

  /** Initial opened state */
  initiallyOpened?: boolean;

  /** Called when dropdown is opened */
  onOpen?(): void;

  /** Called when dropdown is closed */
  onClose?(): void;

  /** Open delay in ms */
  openDelay?: number;

  /** Close delay in ms */
  closeDelay?: number;
}

export function HoverCard({
  children,
  onOpen,
  onClose,
  openDelay = 0,
  closeDelay = 150,
  initiallyOpened = false,
  ...others
}: HoverCardProps) {
  const openTimeout = useRef(-1);
  const closeTimeout = useRef(-1);
  const [opened, { open, close }] = useDisclosure(initiallyOpened, { onClose, onOpen });

  const clearTimeouts = () => {
    window.clearTimeout(openTimeout.current);
    window.clearTimeout(closeTimeout.current);
  };

  const openDropdown = () => {
    clearTimeouts();

    if (openDelay === 0) {
      open();
    } else {
      openTimeout.current = window.setTimeout(open, openDelay);
    }
  };

  const closeDropdown = () => {
    clearTimeouts();

    if (closeDelay === 0) {
      close();
    } else {
      closeTimeout.current = window.setTimeout(close, closeDelay);
    }
  };

  useEffect(() => clearTimeouts, []);

  return (
    <HoverCardContextProvider value={{ openDropdown, closeDropdown }}>
      <Popover opened={opened} {...others}>
        {children}
      </Popover>
    </HoverCardContextProvider>
  );
}

HoverCard.displayName = '@mantine/core/HoverCard';
HoverCard.Target = HoverCardTarget;
HoverCard.Dropdown = HoverCardDropdown;
