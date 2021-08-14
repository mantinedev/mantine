import React, { useState, useEffect } from 'react';
import { Burger, Code, Group } from '@mantine/core';
import corePackageJson from '../../../../package.json';
import { getDocsData } from '../get-docs-data';
import Search from './Search/Search';
import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle';
import { Logo } from '../../Logo/Logo';
import { SocialButton } from '../../SocialButton/SocialButton';
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
  const classes = useStyles();
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

      <div className={classes.links}>
        <Search data={data} isMacOS={isMacOS} />

        <Group spacing="xs">
          <SocialButton type="small" service="github" />
          <SocialButton type="small" service="discord" />
          <SocialButton type="small" service="twitter" />
          <SocialButton type="small" service="email" />
        </Group>

        <ColorSchemeToggle />
      </div>
    </div>
  );
}
