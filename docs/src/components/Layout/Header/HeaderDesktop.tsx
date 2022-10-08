/* eslint-disable import/no-relative-packages */
import React from 'react';
import { Code } from '@mantine/core';
import { HeaderControls } from '@mantine/ds';
import { useSpotlight } from '@mantine/spotlight';
import corePackageJson from '../../../../../package.json';
import { Logo } from '../../Logo/Logo';
import { useDirectionContext } from '../DirectionContext';
import useStyles from './HeaderDesktop.styles';

export function HeaderDesktop() {
  const { classes } = useStyles();
  const { dir, toggleDirection } = useDirectionContext();
  const spotlight = useSpotlight();

  return (
    <div className={classes.header}>
      <div className={classes.mainSection}>
        <div className={classes.logoWrapper}>
          <div className={classes.logo}>
            <Logo />
          </div>

          <a href="https://github.com/mantinedev/mantine/releases" className={classes.version}>
            <Code>v{corePackageJson.version}</Code>
          </a>
        </div>
      </div>

      <HeaderControls
        pr="md"
        onSearch={spotlight.openSpotlight}
        githubLink="https://github.com/mantinedev/mantine"
        direction={dir}
        toggleDirection={toggleDirection}
      />
    </div>
  );
}
