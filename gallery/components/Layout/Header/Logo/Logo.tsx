import React from 'react';
import Link from 'next/link';
import { Code } from '@mantine/core';
import corePackageJson from '../../../../../package.json';
import { LogoImage } from './LogoImage';
import useStyles from './Logo.styles';

export function Logo({ className, ...others }: any) {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Link href="/" {...others}>
        <a href="/" className={cx(classes.logo, className)} aria-label="Mantine">
          <LogoImage className={classes.image} />
        </a>
      </Link>
      <a href="https://github.com/mantinedev/mantine/releases" className={classes.version}>
        <Code>v{corePackageJson.version}</Code>
      </a>
    </div>
  );
}
