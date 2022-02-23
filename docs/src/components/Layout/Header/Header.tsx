import React from 'react';
import { Burger, Code, Group } from '@mantine/core';
import corePackageJson from '../../../../../package.json';
import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle';
import { DirToggle } from './DirToggle/DirToggle';
import { SourceCode } from './SourceCode/SourceCode';
import { Discord } from './Discord/Discord';
import { Logo } from '../../Logo/Logo';
import useStyles from './Header.styles';

interface HeaderProps {
  navbarOpened: boolean;
  toggleNavbar(): void;
}

export default function Header({ navbarOpened, toggleNavbar }: HeaderProps) {
  const { classes } = useStyles();
  const burgerTitle = navbarOpened ? 'Open navigation' : 'Hide navigation';

  return (
    <div className={classes.header}>
      <div className={classes.mainSection}>
        <Burger
          opened={navbarOpened}
          className={classes.burger}
          size="sm"
          onClick={toggleNavbar}
          title={burgerTitle}
          aria-label={burgerTitle}
        />
        <div className={classes.logoWrapper}>
          <div className={classes.logo}>
            <Logo />
          </div>

          <a href="https://github.com/mantinedev/mantine/releases" className={classes.version}>
            <Code>v{corePackageJson.version}</Code>
          </a>
        </div>
        <div />
      </div>

      <Group className={classes.links} spacing="xs">
        <Discord />
        <SourceCode />
        <DirToggle />
        <ColorSchemeToggle />
      </Group>
    </div>
  );
}
