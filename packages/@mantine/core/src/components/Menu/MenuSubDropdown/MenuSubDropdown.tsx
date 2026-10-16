import { use, useRef } from 'react';
import { useMergedRef } from '@mantine/hooks';
import {
  BoxProps,
  CompoundStylesApiProps,
  createEventHandler,
  ElementProps,
  factory,
  Factory,
  useDirection,
  useProps,
} from '../../../core';
import { Popover } from '../../Popover';
import { getMenuArrowKeys } from '../get-menu-arrow-keys';
import { useMenuContext } from '../Menu.context';
import { SubMenuContext } from '../MenuSub/MenuSub.context';
import { useMenuTypeAhead } from '../use-menu-type-ahead';
import classes from '../Menu.module.css';

export type MenuSubDropdownStylesNames = 'dropdown';

export interface MenuSubDropdownProps
  extends BoxProps, CompoundStylesApiProps<MenuSubDropdownFactory>, ElementProps<'div'> {}

export type MenuSubDropdownFactory = Factory<{
  props: MenuSubDropdownProps;
  ref: HTMLDivElement;
  stylesNames: MenuSubDropdownStylesNames;
  compound: true;
}>;

export const MenuSubDropdown = factory<MenuSubDropdownFactory>((props) => {
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    onMouseEnter,
    onMouseLeave,
    onPointerEnter,
    onPointerLeave,
    onKeyDown,
    children,
    ref,
    ...others
  } = useProps('MenuSubDropdown', null, props);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const ctx = useMenuContext();
  const subCtx = use(SubMenuContext);
  const { dir } = useDirection();

  const typeAhead = useMenuTypeAhead({
    enabled: !ctx.hasSearch,
    opened: subCtx?.opened ?? false,
    getDropdown: () => wrapperRef.current,
  });

  const handleDropdownNavigation = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.defaultPrevented) {
      return;
    }

    if (event.key === getMenuArrowKeys(dir).back) {
      event.preventDefault();
      event.stopPropagation();
      subCtx?.close();
      subCtx?.focusParentItem();
      return;
    }

    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    const dropdown = event.currentTarget;
    const items = Array.from(
      dropdown.querySelectorAll<HTMLButtonElement>('[data-menu-item]:not([data-disabled])')
    ).filter((item) => item.closest('[data-menu-dropdown]') === dropdown);
    const target =
      event.key === 'ArrowUp' || event.key === 'End' ? items[items.length - 1] : items[0];
    target?.focus();
  };

  const handleKeyDown = createEventHandler<any>(onKeyDown, (event) => {
    handleDropdownNavigation(event);
    typeAhead(event);
    if (
      !event.ctrlKey &&
      !event.metaKey &&
      !event.altKey &&
      event.key.length === 1 &&
      event.key !== ' '
    ) {
      event.stopPropagation();
    }
  });

  const floatingProps = subCtx?.getFloatingProps({
    onMouseEnter,
    onMouseLeave,
    onPointerEnter,
    onPointerLeave,
  });

  return (
    <Popover.Dropdown
      {...others}
      {...floatingProps}
      role="menu"
      aria-orientation="vertical"
      ref={useMergedRef(ref, wrapperRef, subCtx?.setFloating)}
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
      {children}
    </Popover.Dropdown>
  );
});

MenuSubDropdown.classes = classes;
MenuSubDropdown.displayName = '@mantine/core/MenuSubDropdown';
