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
import { useSubMenuContext } from '../MenuSub/MenuSub.context';
import classes from '../Menu.module.css';

export type MenuSubDropdownStylesNames = 'dropdown';

export interface MenuSubDropdownProps
  extends BoxProps,
    CompoundStylesApiProps<MenuSubDropdownFactory>,
    ElementProps<'div'> {}

export type MenuSubDropdownFactory = Factory<{
  props: MenuSubDropdownProps;
  ref: HTMLDivElement;
  stylesNames: MenuSubDropdownStylesNames;
  compound: true;
}>;

const defaultProps: Partial<MenuSubDropdownProps> = {};

export const MenuSubDropdown = factory<MenuSubDropdownFactory>((props, ref) => {
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
  } = useProps('MenuSubDropdown', defaultProps, props);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const ctx = useMenuContext();
  const subCtx = useSubMenuContext();

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
