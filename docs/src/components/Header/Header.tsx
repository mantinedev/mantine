import React from 'react';
import { Link } from 'gatsby';
import { GitHubLogoIcon, ChatBubbleIcon, ExclamationTriangleIcon } from '@modulz/radix-icons';
import logo from '../../images/logo.svg';
import useStyles from './Header.styles';

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div>
        <Link to="/" className={classes.logo}>
          <img className={classes.image} src={logo} alt="" />
        </Link>
      </div>

      <div className={classes.links}>
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
