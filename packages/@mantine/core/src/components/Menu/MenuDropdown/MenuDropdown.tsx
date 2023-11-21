/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef } from 'react';
import {
  BoxProps,
  CompoundStylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
  createEventHandler,
} from '../../../core';
import { Popover } from '../../Popover';
import classes from '../Menu.module.css';
import { useMenuContext } from '../Menu.context';

export type MenuDropdownStylesNames = 'dropdown';

export interface MenuDropdownProps
  extends BoxProps,
    CompoundStylesApiProps<MenuDropdownFactory>,
    ElementProps<'div'> {}

export type MenuDropdownFactory = Factory<{
  props: MenuDropdownProps;
  ref: HTMLDivElement;
  stylesNames: MenuDropdownStylesNames;
  compound: true;
}>;

const defaultProps: Partial<MenuDropdownProps> = {};

export const MenuDropdown = factory<MenuDropdownFactory>((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    onMouseEnter,
    onMouseLeave,
    children,
    ...others
  } = useProps('MenuDropdown', defaultProps, props);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const ctx = useMenuContext();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
      wrapperRef.current
        ?.querySelectorAll<HTMLButtonElement>('[data-menu-item]:not(:disabled)')[0]
        ?.focus();
    }
  };

  const handleMouseEnter = createEventHandler<any>(
    onMouseEnter,
    () => ctx.trigger === 'hover' && ctx.openDropdown()
  );

  const handleMouseLeave = createEventHandler<any>(
    onMouseLeave,
    () => ctx.trigger === 'hover' && ctx.closeDropdown()
  );

  return (
    <Popover.Dropdown
      {...others}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="menu"
      aria-orientation="vertical"
      ref={ref}
      {...ctx.getStyles('dropdown', { className, style, styles, classNames })}
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
});

MenuDropdown.classes = classes;
MenuDropdown.displayName = '@mantine/core/MenuDropdown';
