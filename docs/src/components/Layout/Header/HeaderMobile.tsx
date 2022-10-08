/* eslint-disable import/no-relative-packages */
import React from 'react';
import { Burger } from '@mantine/core';
import { ColorSchemeControl } from '@mantine/ds';
import { Logo } from '../../Logo/Logo';
import useStyles from './HeaderMobile.styles';

interface HeaderProps {
  navbarOpened: boolean;
  toggleNavbar(): void;
}

export function HeaderMobile({ navbarOpened, toggleNavbar }: HeaderProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.inner}>
        <Burger opened={navbarOpened} size="sm" onClick={toggleNavbar} aria-label="Toggle navbar" />
        <div className={classes.logo}>
          <Logo size={26} />
        </div>
        <ColorSchemeControl />
      </div>
    </div>
  );
}
