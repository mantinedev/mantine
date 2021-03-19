import React from 'react';
import { Link } from 'gatsby';
import { GitHubLogoIcon, ChatBubbleIcon, ExclamationTriangleIcon } from '@modulz/radix-icons';
import logo from '../../../images/logo.svg';
import getDocsData from '../get-docs-data';
import Search from './Search/Search';
import useStyles from './Header.styles';

interface HeaderProps {
  data: ReturnType<typeof getDocsData>;
}

export default function Header({ data }: HeaderProps) {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div>
        <Link to="/" className={classes.logo}>
          <img className={classes.image} src={logo} alt="" />
        </Link>
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
