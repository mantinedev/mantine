import React from 'react';
import cx from 'clsx';
import { mergeStyles } from '@mantine/tss';
import { MantineNumberSize } from '@mantine/theme';
import { SharedMenuItemProps } from '../MenuItem/MenuItem';
import useStyles from './MenuButton.styles';

export type MenuButtonStylesNames = keyof ReturnType<typeof useStyles>;

interface _MenuButtonProps<C extends React.ElementType, R extends HTMLElement>
  extends SharedMenuItemProps {
  /** Root element or custom component */
  component?: C;

  /** Get element ref */
  elementRef?: React.ForwardedRef<R>;

  /** Menu item label */
  children: React.ReactNode;

  /** Is item hovered */
  hovered: boolean;

  /** Called when item is hovered */
  onHover(): void;

  /** Border radius */
  radius?: MantineNumberSize;
}

export type MenuButtonProps<
  C extends React.ElementType = 'div',
  R extends HTMLElement = HTMLDivElement
> = _MenuButtonProps<C, R> & Omit<React.ComponentPropsWithoutRef<C>, keyof _MenuButtonProps<C, R>>;

export function MenuButton<
  C extends React.ElementType = 'button',
  R extends HTMLElement = HTMLButtonElement
>({
  className,
  style,
  children,
  onHover,
  hovered,
  elementRef,
  icon,
  color,
  disabled,
  rightSection,
  component,
  classNames,
  styles,
  radius,
  ...others
}: MenuButtonProps<C, R>) {
  const classes = useStyles({ color, radius }, classNames, 'menu');
  const _styles = mergeStyles(classes, styles);
  const Element = component || 'button';

  return (
    <Element
      type="button"
      role="menuitem"
      className={cx(classes.item, { [classes.itemHovered]: hovered }, className)}
      onMouseEnter={() => !disabled && onHover()}
      ref={elementRef as any}
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

MenuButton.displayName = '@mantine/core/MenuButton';
