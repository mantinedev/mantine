import { use, useRef } from 'react';
import { useMergedRef } from '@mantine/hooks';
import {
  BoxProps,
  CompoundStylesApiProps,
  createEventHandler,
  createScopedKeydownHandler,
  MantineColor,
  polymorphicFactory,
  PolymorphicFactory,
  useDirection,
  useMantineTheme,
  useProps,
} from '../../../core';
import { UnstyledButton } from '../../UnstyledButton';
import { getMenuArrowKeys } from '../get-menu-arrow-keys';
import { getMenuItemVars } from '../get-menu-item-vars';
import { useMenuContext } from '../Menu.context';
import { SubMenuContext } from '../MenuSub/MenuSub.context';
import classes from '../Menu.module.css';

export type MenuItemStylesNames =
  | 'item'
  | 'itemLabel'
  | 'itemBody'
  | 'itemDescription'
  | 'itemSection'
  | 'itemIndicator';

export interface MenuItemProps extends BoxProps, CompoundStylesApiProps<MenuItemFactory> {
  'data-disabled'?: boolean;

  /** Item label */
  children?: React.ReactNode;

  /** Description displayed below the label */
  description?: React.ReactNode;

  /** Key of `theme.colors` or any valid CSS color */
  color?: MantineColor;

  /** Controls whether the menu closes when this item is clicked. When undefined, inherits from Menu's `closeOnItemClick` prop. When true or false, overrides the Menu-level setting */
  closeMenuOnClick?: boolean;

  /** Section displayed at the start of the label */
  leftSection?: React.ReactNode;

  /** Section displayed at the end of the label */
  rightSection?: React.ReactNode;

  /** Sets disabled attribute, applies disabled styles */
  disabled?: boolean;
}

export type MenuItemFactory = PolymorphicFactory<{
  props: MenuItemProps;
  defaultRef: HTMLButtonElement;
  defaultComponent: 'button';
  stylesNames: MenuItemStylesNames;
  compound: true;
}>;

export const MenuItem = polymorphicFactory<MenuItemFactory>((props) => {
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    color,
    closeMenuOnClick,
    leftSection,
    rightSection,
    children,
    description,
    disabled,
    'data-disabled': dataDisabled,
    ref,
    ...others
  } = useProps('MenuItem', null, props);

  const ctx = useMenuContext();
  const subCtx = use(SubMenuContext);
  const theme = useMantineTheme();
  const { dir } = useDirection();
  const itemRef = useRef<HTMLButtonElement>(null);
  const _others: any = others;

  const handleClick = createEventHandler(_others.onClick, () => {
    if (dataDisabled) {
      return;
    }
    if (typeof closeMenuOnClick === 'boolean') {
      closeMenuOnClick && ctx.closeDropdownImmediately();
    } else {
      ctx.closeOnItemClick && ctx.closeDropdownImmediately();
    }
  });

  const handleMouseMove = createEventHandler<any>(_others.onMouseMove, () => {
    if (!ctx.hasSearch) {
      return;
    }
    const dropdown = itemRef.current?.closest('[data-menu-dropdown]');
    if (!dropdown) {
      return;
    }
    dropdown.querySelectorAll<HTMLElement>('[data-menu-active]').forEach((node) => {
      if (node !== itemRef.current && node.closest('[data-menu-dropdown]') === dropdown) {
        node.removeAttribute('data-menu-active');
      }
    });
  });

  const handleKeydown = createEventHandler<any>(_others.onKeyDown, (event) => {
    if (event.key === getMenuArrowKeys(dir).back && subCtx) {
      event.preventDefault();
      subCtx.close();
      subCtx.focusParentItem();
    }
  });

  const label = (children || description) && (
    <div {...ctx.getStyles('itemLabel', { styles, classNames })} data-menu-item-label>
      {children}
    </div>
  );

  return (
    <UnstyledButton
      onMouseDown={(event) => event.preventDefault()}
      {...others}
      unstyled={ctx.unstyled}
      tabIndex={ctx.menuItemTabIndex}
      {...ctx.getStyles('item', { className, style, styles, classNames, variant: ctx.variant })}
      ref={useMergedRef(itemRef, ref)}
      role="menuitem"
      disabled={disabled}
      data-menu-item
      data-disabled={disabled || dataDisabled || undefined}
      data-mantine-stop-propagation
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onKeyDown={createScopedKeydownHandler({
        siblingSelector: '[data-menu-item]:not([data-disabled])',
        parentSelector: '[data-menu-dropdown]',
        activateOnFocus: false,
        loop: ctx.loop,
        dir,
        orientation: 'vertical',
        onKeyDown: handleKeydown,
      })}
      __vars={getMenuItemVars({ theme, color, variant: ctx.variant })}
    >
      {ctx.alignItemsLabels === 'all' && (
        <div {...ctx.getStyles('itemIndicator', { styles, classNames })} data-placeholder />
      )}
      {leftSection && (
        <div {...ctx.getStyles('itemSection', { styles, classNames })} data-position="left">
          {leftSection}
        </div>
      )}
      {description ? (
        <div {...ctx.getStyles('itemBody', { styles, classNames })}>
          {label}
          <div {...ctx.getStyles('itemDescription', { styles, classNames })}>{description}</div>
        </div>
      ) : (
        label
      )}
      {rightSection && (
        <div {...ctx.getStyles('itemSection', { styles, classNames })} data-position="right">
          {rightSection}
        </div>
      )}
    </UnstyledButton>
  );
});

MenuItem.classes = classes;
MenuItem.displayName = '@mantine/core/MenuItem';
