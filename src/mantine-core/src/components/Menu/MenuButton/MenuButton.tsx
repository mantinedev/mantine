import React from 'react';
import cx from 'clsx';
import { ComponentPassThrough } from '../../../types';
import { DefaultProps, MantineNumberSize, mergeStyles, useMantineTheme } from '../../../theme';
import { MenuItemProps } from '../MenuItem/MenuItem';
import useStyles from './MenuButton.styles';

export type MenuButtonStylesNames = keyof ReturnType<typeof useStyles>;

export interface MenuButtonProps extends DefaultProps<MenuButtonStylesNames>, MenuItemProps {
  children: React.ReactNode;
  hovered: boolean;
  onHover(): void;
  elementRef(node: HTMLButtonElement): void;
  component?: any;
  radius?: MantineNumberSize;
}

export function MenuButton<T extends React.ElementType = 'button'>({
  className,
  style,
  children,
  onHover,
  hovered,
  themeOverride,
  elementRef,
  icon,
  color,
  disabled,
  rightSection,
  component: Element = 'button',
  classNames,
  styles,
  radius,
  ...others
}: ComponentPassThrough<T, MenuButtonProps>) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ color, theme, radius }, classNames, 'menu');
  const _styles = mergeStyles(classes, styles);

  return (
    <Element
      type="button"
      role="menuitem"
      className={cx(classes.item, { [classes.itemHovered]: hovered }, className)}
      onMouseEnter={() => !disabled && onHover()}
      ref={elementRef}
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
