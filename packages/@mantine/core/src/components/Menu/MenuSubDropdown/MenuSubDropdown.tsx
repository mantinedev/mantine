import { use, useRef } from 'react';
import { useMergedRef } from '@mantine/hooks';
import {
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../../core';
import { Popover } from '../../Popover';
import { useMenuContext } from '../Menu.context';
import { SubMenuContext } from '../MenuSub/MenuSub.context';
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
    >
      {children}
    </Popover.Dropdown>
  );
});

MenuSubDropdown.classes = classes;
MenuSubDropdown.displayName = '@mantine/core/MenuSubDropdown';
