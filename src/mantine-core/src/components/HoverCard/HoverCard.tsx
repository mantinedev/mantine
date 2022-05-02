import React from 'react';
import { Popover } from '../Popover';
import { HoverCardDropdown } from './HoverCardDropdown/HoverCardDropdown';
import { HoverCardTarget } from './HoverCardTarget/HoverCardTarget';

export interface HoverCardProps {
  /** HoverCard.Target and HoverCard.Dropdown components */
  children?: React.ReactNode;
}

export function HoverCard({ children }: HoverCardProps) {
  return <Popover>{children}</Popover>;
}

HoverCard.displayName = '@mantine/core/HoverCard';
HoverCard.Target = HoverCardTarget;
HoverCard.Dropdown = HoverCardDropdown;
