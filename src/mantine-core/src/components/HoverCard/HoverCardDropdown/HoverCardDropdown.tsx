import React from 'react';
import { Popover } from '../../Popover';

export interface HoverCardDropdownProps {
  /** Dropdown content */
  children?: React.ReactNode;
}

export function HoverCardDropdown({ children }: HoverCardDropdownProps) {
  return <Popover.Dropdown>{children}</Popover.Dropdown>;
}

HoverCardDropdown.displayName = '@mantine/core/HoverCardDropdown';
