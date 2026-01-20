import { use, useRef } from 'react';
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
import { SubMenuContext } from '../MenuSub/MenuSub.context';

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
    onKeyDown,
    children,
    ref,
    ...others
  } = useProps('MenuSubDropdown', null, props);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const ctx = useMenuContext();
  const subCtx = use(SubMenuContext);

  const handleMouseEnter = createEventHandler<any>(onMouseEnter, subCtx?.open);

  const handleMouseLeave = createEventHandler<any>(onMouseLeave, subCtx?.close);

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
    >
      {children}
    </Popover.Dropdown>
  );
});

MenuSubDropdown.classes = classes;
MenuSubDropdown.displayName = '@mantine/core/MenuSubDropdown';
