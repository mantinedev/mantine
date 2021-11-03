import React from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';
import { LogoImage } from './LogoImage';
import useStyles from './Logo.styles';

export function Logo({ className, ...others }: any) {
  const { classes } = useStyles();

  return (
    <Link to="/" className={clsx(classes.logo, className)} aria-label="Mantine" {...others}>
      <LogoImage className={classes.image} />
    </Link>
  );
}
