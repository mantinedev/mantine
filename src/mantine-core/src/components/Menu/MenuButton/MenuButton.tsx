import React, { forwardRef } from 'react';
import {
  mergeStyles,
  MantineNumberSize,
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
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
      style,
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
      ...others
    }: MenuButtonProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({ color, radius }, classNames, 'menu');
    const _styles = mergeStyles(classes, styles);
    const Element = component || 'button';

    return (
      <Element
        type="button"
        role="menuitem"
        className={cx(classes.item, { [classes.itemHovered]: hovered }, className)}
        onMouseEnter={() => !disabled && onHover()}
        ref={ref}
        disabled={disabled}
        style={{ ...style, ..._styles.item, ...(hovered ? _styles.itemHovered : null) }}
        {...others}
      >
        <div className={classes.itemInner} style={_styles.itemInner}>
          {icon && (
            <div className={classes.itemIcon} style={_styles.itemIcon}>
              {icon}
            </div>
          )}

          <div className={classes.itemBody} style={_styles.itemBody}>
            <div className={classes.itemLabel} style={_styles.itemLabel}>
              {children}
            </div>
            {rightSection}
          </div>
        </div>
      </Element>
    );
  }
);

MenuButton.displayName = '@mantine/core/MenuButton';
