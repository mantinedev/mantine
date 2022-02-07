import React, { useState, useEffect } from 'react';
import { Burger, Code, Group } from '@mantine/core';
import corePackageJson from '../../../../../package.json';
import { getDocsData } from '../get-docs-data';
import Search from './Search/Search';
import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle';
import { SourceCode } from './SourceCode/SourceCode';
import { Discord } from './Discord/Discord';
import { Logo } from '../../Logo/Logo';
import useStyles from './Header.styles';

interface HeaderProps {
  data: ReturnType<typeof getDocsData>;
  navbarOpened: boolean;
  toggleNavbar(): void;
}

function isMac() {
  if ('navigator' in window) {
    return window.navigator.platform.includes('Mac');
  }

  return false;
}

export default function Header({ data, navbarOpened, toggleNavbar }: HeaderProps) {
  const { classes } = useStyles();
  const [isMacOS, setIsMacOS] = useState(true);
  const burgerTitle = navbarOpened ? 'Open navigation' : 'Hide navigation';

  useEffect(() => {
    setIsMacOS(isMac());
  }, []);

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
        <Search data={data.filter((group) => group.group !== 'changelog')} isMacOS={isMacOS} />
        <Discord />
        <SourceCode />
        <ColorSchemeToggle />
      </Group>
    </div>
  );
}
