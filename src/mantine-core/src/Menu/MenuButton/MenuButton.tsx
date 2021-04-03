import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import useStyles from './MenuButton.styles';

interface MenuButtonProps extends DefaultProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  hovered: boolean;
  onHover(): void;
  elementRef(node: HTMLButtonElement): void;
}

export function MenuButton({
  children,
  onHover,
  hovered,
  themeOverride,
  elementRef,
  icon,
}: MenuButtonProps) {
  const classes = useStyles({ theme: useMantineTheme(themeOverride) });

  return (
    <button
      type="button"
      className={cx(classes.item, { [classes.hovered]: hovered })}
      onMouseEnter={onHover}
      ref={elementRef}
    >
      <div className={classes.inner}>
        <div className={classes.icon}>{icon}</div>
        <div className={classes.label}>{children}</div>
      </div>
    </button>
  );
}

MenuButton.displayName = '@mantine/core/MenuButton';
