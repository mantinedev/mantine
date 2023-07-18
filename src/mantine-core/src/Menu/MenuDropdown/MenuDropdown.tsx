/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef } from 'react';
import { DefaultProps, useComponentDefaultProps } from '@mantine/styles';
import { createEventHandler } from '@mantine/utils';
import { Popover } from '../../Popover';
import { useMenuContext } from '../Menu.context';

export interface MenuDropdownProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Item label */
  children?: React.ReactNode;
}

const defaultProps: Partial<MenuDropdownProps> = {};

export function MenuDropdown(props: MenuDropdownProps) {
  const { children, onMouseEnter, onMouseLeave, ...others } = useComponentDefaultProps(
    'MenuDropdown',
    defaultProps,
    props
  );

  const wrapperRef = useRef<HTMLDivElement>();
  const ctx = useMenuContext();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
      wrapperRef.current
        .querySelectorAll<HTMLButtonElement>('[data-menu-item]:not(:disabled)')[0]
        ?.focus();
    }
  };

  const handleMouseEnter = createEventHandler(
    onMouseEnter,
    () => ctx.trigger === 'hover' && ctx.openDropdown()
  );

  const handleMouseLeave = createEventHandler(
    onMouseLeave,
    () => ctx.trigger === 'hover' && ctx.closeDropdown()
  );

  return (
    <Popover.Dropdown
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="menu"
      aria-orientation="vertical"
      {...others}
    >
      <div
        tabIndex={-1}
        data-menu-dropdown
        data-autofocus
        onKeyDown={handleKeyDown}
        ref={wrapperRef}
        style={{ outline: 0 }}
      >
        {children}
      </div>
    </Popover.Dropdown>
  );
}

MenuDropdown.displayName = '@mantine/core/MenuDropdown';
