import React from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';
import { Code } from '@mantine/core';
import corePackageJson from '../../../../../../package.json';
import { LogoImage } from './LogoImage';
import useStyles from './Logo.styles';

export function Logo({ className, ...others }: any) {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Link to="/" className={clsx(classes.logo, className)} aria-label="Mantine" {...others}>
        <LogoImage className={classes.image} />
      </Link>
      <a href="https://github.com/mantinedev/mantine/releases" className={classes.version}>
        <Code>v{corePackageJson.version}</Code>
      </a>
    </div>
  );
}
