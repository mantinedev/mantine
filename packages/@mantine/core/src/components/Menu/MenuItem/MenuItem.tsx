import { useRef } from 'react';
import { useMergedRef } from '@mantine/hooks';
import {
  BoxProps,
  CompoundStylesApiProps,
  createEventHandler,
  createScopedKeydownHandler,
  MantineColor,
  parseThemeColor,
  polymorphicFactory,
  PolymorphicFactory,
  useDirection,
  useMantineTheme,
  useProps,
} from '../../../core';
import { UnstyledButton } from '../../UnstyledButton';
import { useMenuContext } from '../Menu.context';
import classes from '../Menu.module.css';

export type MenuItemStylesNames = 'item' | 'itemLabel' | 'itemSection';

export interface MenuItemProps extends BoxProps, CompoundStylesApiProps<MenuItemFactory> {
  'data-disabled'?: boolean;

  /** Item label */
  children?: React.ReactNode;

  /** Key of `theme.colors` or any valid CSS color */
  color?: MantineColor;

  /** Determines whether the menu should be closed when the item is clicked, overrides `closeOnItemClick` prop on the `Menu` component */
  closeMenuOnClick?: boolean;

  /** Section displayed on the left side of the label */
  leftSection?: React.ReactNode;

  /** Section displayed on the right side of the label */
  rightSection?: React.ReactNode;

  /** Disables item */
  disabled?: boolean;
}

export type MenuItemFactory = PolymorphicFactory<{
  props: MenuItemProps;
  defaultRef: HTMLButtonElement;
  defaultComponent: 'button';
  stylesNames: MenuItemStylesNames;
  compound: true;
}>;

const defaultProps: Partial<MenuItemProps> = {};

export const MenuItem = polymorphicFactory<MenuItemFactory>((props, ref) => {
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
    disabled,
    'data-disabled': dataDisabled,
    ...others
  } = useProps('MenuItem', defaultProps, props);

  const ctx = useMenuContext();
  const theme = useMantineTheme();
  const { dir } = useDirection();
  const itemRef = useRef<HTMLButtonElement>(null);
  const itemIndex = ctx.getItemIndex(itemRef.current!);
  const _others: any = others;

  const handleMouseLeave = createEventHandler(_others.onMouseLeave, () => ctx.setHovered(-1));
  const handleMouseEnter = createEventHandler(_others.onMouseEnter, () =>
    ctx.setHovered(ctx.getItemIndex(itemRef.current!))
  );

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

  const handleFocus = createEventHandler(_others.onFocus, () =>
    ctx.setHovered(ctx.getItemIndex(itemRef.current!))
  );

  const colors = color ? theme.variantColorResolver({ color, theme, variant: 'light' }) : undefined;
  const parsedThemeColor = color ? parseThemeColor({ color, theme }) : null;

  return (
    <UnstyledButton
      {...others}
      unstyled={ctx.unstyled}
      tabIndex={ctx.menuItemTabIndex}
      onFocus={handleFocus}
      {...ctx.getStyles('item', { className, style, styles, classNames })}
      ref={useMergedRef(itemRef, ref)}
      role="menuitem"
      disabled={disabled}
      data-menu-item
      data-disabled={disabled || dataDisabled || undefined}
      data-hovered={ctx.hovered === itemIndex ? true : undefined}
      data-mantine-stop-propagation
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onKeyDown={createScopedKeydownHandler({
        siblingSelector: '[data-menu-item]:not([data-disabled])',
        parentSelector: '[data-menu-dropdown]',
        activateOnFocus: false,
        loop: ctx.loop,
        dir,
        orientation: 'vertical',
        onKeyDown: _others.onKeyDown,
      })}
      __vars={{
        '--menu-item-color':
          parsedThemeColor?.isThemeColor && parsedThemeColor?.shade === undefined
            ? `var(--mantine-color-${parsedThemeColor.color}-6)`
            : colors?.color,
        '--menu-item-hover': colors?.hover,
      }}
    >
      {leftSection && (
        <div {...ctx.getStyles('itemSection', { styles, classNames })} data-position="left">
          {leftSection}
        </div>
      )}
      {children && <div {...ctx.getStyles('itemLabel', { styles, classNames })}>{children}</div>}
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
