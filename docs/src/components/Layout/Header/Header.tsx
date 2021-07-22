import React, { useContext, useState, useEffect } from 'react';
import { Burger, Code, ActionIcon, Tooltip, Group } from '@mantine/core';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';
import corePackageJson from '../../../../package.json';
import { getDocsData } from '../get-docs-data';
import { ColorSchemeContext } from '../ColorScheme.context';
import Search from './Search/Search';
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
  const colorSchemeContext = useContext(ColorSchemeContext);
  const dark = colorSchemeContext.colorScheme === 'dark';
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

        <Tooltip
          label={`Toggle color scheme: ${isMacOS ? '⌘' : 'Ctrl'} + J`}
          transition="fade"
          withArrow
          position="bottom"
          placement="end"
          style={{ marginLeft: 20 }}
        >
          <ActionIcon
            aria-label="Toggle theme"
            className={classes.themeToggle}
            variant="outline"
            color={dark ? 'yellow' : 'blue'}
            onClick={() => colorSchemeContext.onChange(dark ? 'light' : 'dark')}
          >
            {dark ? (
              <SunIcon style={{ width: 18, height: 18 }} />
            ) : (
              <MoonIcon style={{ width: 18, height: 18 }} />
            )}
          </ActionIcon>
        </Tooltip>
      </div>
    </div>
  );
}
