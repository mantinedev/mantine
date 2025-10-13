import { use, useRef } from 'react';
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
import { SubMenuContext } from '../MenuSub/MenuSub.context';
import classes from '../Menu.module.css';

export type MenuItemStylesNames = 'item' | 'itemLabel' | 'itemSection';

export interface MenuItemProps extends BoxProps, CompoundStylesApiProps<MenuItemFactory> {
  'data-disabled'?: boolean;

  /** Item label */
  children?: React.ReactNode;

  /** Key of `theme.colors` or any valid CSS color */
  color?: MantineColor;

  /** If set, the menu is closed when the item is clicked. Overrides `closeOnItemClick` prop on the `Menu` component. */
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

  const colors = color ? theme.variantColorResolver({ color, theme, variant: 'light' }) : undefined;
  const parsedThemeColor = color ? parseThemeColor({ color, theme }) : null;

  const handleKeydown = createEventHandler<any>(_others.onKeyDown, (event) => {
    if (event.key === 'ArrowLeft' && subCtx) {
      subCtx.close();
      subCtx.focusParentItem();
    }
  });

  return (
    <UnstyledButton
      onMouseDown={(event) => event.preventDefault()}
      {...others}
      unstyled={ctx.unstyled}
      tabIndex={ctx.menuItemTabIndex}
      {...ctx.getStyles('item', { className, style, styles, classNames })}
      ref={useMergedRef(itemRef, ref)}
      role="menuitem"
      disabled={disabled}
      data-menu-item
      data-disabled={disabled || dataDisabled || undefined}
      data-mantine-stop-propagation
      onClick={handleClick}
      onKeyDown={createScopedKeydownHandler({
        siblingSelector: '[data-menu-item]:not([data-disabled])',
        parentSelector: '[data-menu-dropdown]',
        activateOnFocus: false,
        loop: ctx.loop,
        dir,
        orientation: 'vertical',
        onKeyDown: handleKeydown,
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
