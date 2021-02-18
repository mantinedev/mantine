import React from 'react';
import cx from 'clsx';
import { useMantineTheme } from '@mantine/core';
import useStyles from './Navbar.styles';

export default function Navbar({ className }: { className: string }) {
  const classes = useStyles({ theme: useMantineTheme() });
  return <nav className={cx(classes.navbar, className)}>Navbar</nav>;
}
