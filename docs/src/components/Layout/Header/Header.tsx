import React from 'react';
import { Link } from 'gatsby';
import { Burger, Code } from '@mantine/core';
import { GitHubLogoIcon, ChatBubbleIcon, ExclamationTriangleIcon } from '@modulz/radix-icons';
import corePackageJson from '../../../../package.json';
import logo from '../../../images/logo.svg';
import { DocsData } from '../get-docs-data';
import Search from './Search/Search';
import useStyles from './Header.styles';

interface HeaderProps {
  data: DocsData;
  navbarOpened: boolean;
  toggleNavbar(): void;
}

export default function Header({ data, navbarOpened, toggleNavbar }: HeaderProps) {
  const classes = useStyles();
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
          <Link to="/" className={classes.logo}>
            <img className={classes.image} src={logo} alt="" />
          </Link>
          <a href="https://github.com/mantinedev/mantine/releases" className={classes.version}>
            <Code>v{corePackageJson.version}</Code>
          </a>
        </div>
        <div />
      </div>

      <div className={classes.links}>
        <Search data={data} />
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
      </div>
    </div>
  );
}
