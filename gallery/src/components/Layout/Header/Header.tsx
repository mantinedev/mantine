import React from 'react';
import useStyles from './Header.styles';

export function Header() {
  const { classes } = useStyles();
  return <div className={classes.header}>Header</div>;
}
