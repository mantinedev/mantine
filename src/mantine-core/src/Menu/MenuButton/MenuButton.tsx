import React from 'react';
import cx from 'clsx';
import { ComponentPassThrough } from '../../types';
import { DefaultProps, useMantineTheme } from '../../theme';
import { MenuItemProps } from '../MenuItem/MenuItem';
import useStyles from './MenuButton.styles';

export interface MenuButtonProps extends DefaultProps, MenuItemProps {
  children: React.ReactNode;
  hovered: boolean;
  onHover(): void;
  elementRef(node: HTMLButtonElement): void;
  component?: any;
}

export function MenuButton<T extends React.ElementType = 'button'>({
  children,
  onHover,
  hovered,
  themeOverride,
  elementRef,
  icon,
  color,
  disabled,
  rightSection,
  className,
  component: Element = 'button',
  ...others
}: ComponentPassThrough<T, MenuButtonProps>) {
  const classes = useStyles({ color, theme: useMantineTheme(themeOverride) });

  return (
    <Element
      type="button"
      role="menuitem"
      className={cx(classes.item, { [classes.hovered]: hovered }, className)}
      onMouseEnter={() => !disabled && onHover()}
      ref={elementRef}
      disabled={disabled}
      {...others}
    >
      <div className={classes.inner}>
        {icon && (
          <div data-mantine-icon className={classes.icon}>
            {icon}
          </div>
        )}

        <div className={classes.body}>
          <div className={classes.label}>{children}</div>
          {rightSection}
        </div>
      </div>
    </Element>
  );
}

MenuButton.displayName = '@mantine/core/MenuButton';
