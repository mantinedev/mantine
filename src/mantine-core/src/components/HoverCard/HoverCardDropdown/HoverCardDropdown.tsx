import React from 'react';
import { Popover, PopoverDropdownProps } from '../../Popover';
import { useHoverCardContext } from '../HoverCard.context';

export interface HoverCardDropdownProps extends PopoverDropdownProps {
  /** Dropdown content */
  children?: React.ReactNode;
}

export function HoverCardDropdown({
  children,
  onMouseEnter,
  onMouseLeave,
  ...others
}: HoverCardDropdownProps) {
  const ctx = useHoverCardContext();

  const handleMouseEnter = (event: React.MouseEvent<any>) => {
    onMouseEnter?.(event);
    ctx.openDropdown();
  };

  const handleMouseLeave = (event: React.MouseEvent<any>) => {
    onMouseLeave?.(event);
    ctx.closeDropdown();
  };

  return (
    <Popover.Dropdown onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} {...others}>
      {children}
    </Popover.Dropdown>
  );
}

HoverCardDropdown.displayName = '@mantine/core/HoverCardDropdown';
