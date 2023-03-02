import React from 'react';
import { Link } from 'gatsby';
import { rem } from '@mantine/core';
import { MantineLogo, MantineLogoProps } from '@mantine/ds';
import useStyles from './Logo.styles';

export function Logo(props: MantineLogoProps) {
  const { classes } = useStyles();

  return (
    <Link to="/" className={classes.logo} aria-label="Mantine">
      <MantineLogo size={rem(30)} {...props} />
    </Link>
  );
}
