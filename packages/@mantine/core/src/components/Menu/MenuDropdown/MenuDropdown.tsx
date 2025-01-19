import { useRef } from 'react';
import { useMergedRef } from '@mantine/hooks';
import {
  BoxProps,
  CompoundStylesApiProps,
  createEventHandler,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../../core';
import { Popover } from '../../Popover';
import { useMenuContext } from '../Menu.context';
import classes from '../Menu.module.css';

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
    onKeyDown,
    children,
    ...others
  } = useProps('MenuDropdown', defaultProps, props);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const ctx = useMenuContext();

  const handleKeyDown = createEventHandler<any>(onKeyDown, (event) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
      wrapperRef.current
        ?.querySelectorAll<HTMLButtonElement>('[data-menu-item]:not(:disabled)')[0]
        ?.focus();
    }
  });

  const handleMouseEnter = createEventHandler<any>(
    onMouseEnter,
    () => (ctx.trigger === 'hover' || ctx.trigger === 'click-hover') && ctx.openDropdown()
  );

  const handleMouseLeave = createEventHandler<any>(
    onMouseLeave,
    () => (ctx.trigger === 'hover' || ctx.trigger === 'click-hover') && ctx.closeDropdown()
  );

  return (
    <Popover.Dropdown
      {...others}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="menu"
      aria-orientation="vertical"
      ref={useMergedRef(ref, wrapperRef)}
      {...ctx.getStyles('dropdown', {
        className,
        style,
        styles,
        classNames,
        withStaticClass: false,
      })}
      tabIndex={-1}
      data-menu-dropdown
      onKeyDown={handleKeyDown}
    >
      {ctx.withInitialFocusPlaceholder && (
        <div tabIndex={-1} data-autofocus data-mantine-stop-propagation style={{ outline: 0 }} />
      )}
      {children}
    </Popover.Dropdown>
  );
});

MenuDropdown.classes = classes;
MenuDropdown.displayName = '@mantine/core/MenuDropdown';
