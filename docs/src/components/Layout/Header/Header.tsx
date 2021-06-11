import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Burger, Code, ActionIcon, Tooltip } from '@mantine/core';
import {
  GitHubLogoIcon,
  ChatBubbleIcon,
  ExclamationTriangleIcon,
  SunIcon,
  MoonIcon,
} from '@modulz/radix-icons';
import corePackageJson from '../../../../package.json';
import { getDocsData } from '../get-docs-data';
import { ColorSchemeContext } from '../ColorScheme.context';
import Search from './Search/Search';
import { Logo } from './Logo';
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
          <Link to="/" className={classes.logo} aria-label="Getting started">
            <Logo className={classes.image} />
          </Link>
          <a href="https://github.com/mantinedev/mantine/releases" className={classes.version}>
            <Code>v{corePackageJson.version}</Code>
          </a>
        </div>
        <div />
      </div>

      <div className={classes.links}>
        <Search data={data} isMacOS={isMacOS} />

        <a className={classes.link} href="https://github.com/mantinedev/mantine">
          <GitHubLogoIcon />
          <span className={classes.linkLabel}>Source code</span>
        </a>

        <a className={classes.link} href="https://github.com/mantinedev/mantine/discussions">
          <ChatBubbleIcon />
          <span className={classes.linkLabel}>Discuss</span>
        </a>

        <a className={classes.link} href="https://github.com/mantinedev/mantine/issues/new">
          <ExclamationTriangleIcon />
          <span className={classes.linkLabel}>Report issue</span>
        </a>

        <Tooltip
          label={`${isMacOS ? '⌘' : 'Ctrl'} + J`}
          position="left"
          placement="center"
          transition="fade"
          withArrow
          arrowSize={4}
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
