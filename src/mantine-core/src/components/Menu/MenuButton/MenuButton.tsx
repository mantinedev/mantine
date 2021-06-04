import React from 'react';
import cx from 'clsx';
import { ComponentPassThrough } from '../../../types';
import { DefaultProps, mergeStyles, useMantineTheme } from '../../../theme';
import { MenuItemProps } from '../MenuItem/MenuItem';
import useStyles from './MenuButton.styles';

export type MenuButtonStylesNames = keyof ReturnType<typeof useStyles>;

export interface MenuButtonProps extends DefaultProps<MenuButtonStylesNames>, MenuItemProps {
  children: React.ReactNode;
  hovered: boolean;
  onHover(): void;
  elementRef(node: HTMLButtonElement): void;
  component?: any;
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
  ...others
}: ComponentPassThrough<T, MenuButtonProps>) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ color, theme }, classNames);
  const _styles = mergeStyles(classes, styles);

  return (
    <Element
      type="button"
      role="menuitem"
      className={cx(classes.root, { [classes.hovered]: hovered }, className)}
      onMouseEnter={() => !disabled && onHover()}
      ref={elementRef}
      disabled={disabled}
      style={{ ...styles, ..._styles.root, ...(hovered ? _styles.hovered : null) }}
      {...others}
    >
      <div className={classes.inner} style={_styles.inner}>
        {icon && (
          <div data-mantine-icon className={classes.icon} style={_styles.icon}>
            {icon}
          </div>
        )}

        <div className={classes.body} style={_styles.body}>
          <div className={classes.label} style={_styles.label}>
            {children}
          </div>
          {rightSection}
        </div>
      </div>
    </Element>
  );
}

MenuButton.displayName = '@mantine/core/MenuButton';
