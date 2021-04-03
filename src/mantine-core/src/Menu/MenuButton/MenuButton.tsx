import cx from 'clsx';
import React from 'react';
import useStyles from './MenuButton.styles';

interface MenuButtonProps {
  children: React.ReactNode;
}

export function MenuButton({ children }: MenuButtonProps) {
  const classes = useStyles();
  return (
    <button type="button" className={cx(classes.item)}>
      {children}
    </button>
  );
}

MenuButton.displayName = '@mantine/core/MenuButton';
