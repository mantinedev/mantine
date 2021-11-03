import React, { forwardRef } from 'react';
import {
  MantineNumberSize,
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
  useSx,
} from '@mantine/styles';
import { SharedMenuItemProps } from '../MenuItem/MenuItem';
import useStyles from './MenuButton.styles';

export type MenuButtonStylesNames = ClassNames<typeof useStyles>;

interface _MenuButtonProps extends SharedMenuItemProps {
  /** Menu item label */
  children: React.ReactNode;

  /** Is item hovered */
  hovered: boolean;

  /** Called when item is hovered */
  onHover(): void;

  /** Border radius */
  radius?: MantineNumberSize;
}

export type MenuButtonProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  _MenuButtonProps
>;

type MenuButtonComponent = <C extends React.ElementType = 'button'>(
  props: MenuButtonProps<C>
) => React.ReactElement;

export const MenuButton: MenuButtonComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'button'>(
    {
      className,
      children,
      onHover,
      hovered,
      icon,
      color,
      disabled,
      rightSection,
      component,
      classNames,
      styles,
      radius,
      sx,
      ...others
    }: MenuButtonProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { sxClassName } = useSx({ sx });
    const { classes, cx } = useStyles({ color, radius }, { classNames, styles, name: 'Menu' });
    const Element = component || 'button';

    return (
      <Element
        type="button"
        role="menuitem"
        className={cx(classes.item, { [classes.itemHovered]: hovered }, sxClassName, className)}
        onMouseEnter={() => !disabled && onHover()}
        ref={ref}
        disabled={disabled}
        {...others}
      >
        <div className={classes.itemInner}>
          {icon && <div className={classes.itemIcon}>{icon}</div>}

          <div className={classes.itemBody}>
            <div className={classes.itemLabel}>{children}</div>
            {rightSection}
          </div>
        </div>
      </Element>
    );
  }
);

MenuButton.displayName = '@mantine/core/MenuButton';
