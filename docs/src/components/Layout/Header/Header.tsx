import React from 'react';
import { Link } from 'gatsby';
import { Burger } from '@mantine/core';
import { GitHubLogoIcon, ChatBubbleIcon, ExclamationTriangleIcon } from '@modulz/radix-icons';
import logo from '../../../images/logo.svg';
import getDocsData from '../get-docs-data';
import Search from './Search/Search';
import useStyles from './Header.styles';

interface HeaderProps {
  data: ReturnType<typeof getDocsData>;
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
        <Link to="/" className={classes.logo}>
          <img className={classes.image} src={logo} alt="" />
        </Link>
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
