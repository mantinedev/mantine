import React from 'react';
import cx from 'clsx';
import {
  RocketIcon,
  BlendingModeIcon,
  GitHubLogoIcon,
  LightningBoltIcon,
  StarIcon,
} from '@modulz/radix-icons';
import { useMantineTheme } from '@mantine/core';
import NavbarMainLink from './NavbarMainLink/NavbarMainLink';
import NavbarLogo from './NavbarLogo/NavbarLogo';
import useStyles from './Navbar.styles';

export default function Navbar({ className }: { className: string }) {
  const classes = useStyles({ theme: useMantineTheme() });

  return (
    <nav className={cx(classes.navbar, className)}>
      <NavbarLogo />

      <div className={classes.body}>
        <NavbarMainLink
          to="/getting-started/"
          color="pink"
          icon={<RocketIcon style={{ height: 18, width: 18 }} />}
        >
          Getting started
        </NavbarMainLink>

        <NavbarMainLink
          to="/theming/"
          color="indigo"
          icon={<BlendingModeIcon style={{ height: 18, width: 18 }} />}
        >
          Theming
        </NavbarMainLink>

        <NavbarMainLink
          to="/integrations/"
          color="blue"
          icon={<LightningBoltIcon style={{ height: 18, width: 18 }} />}
        >
          Integrations and SSR
        </NavbarMainLink>

        <NavbarMainLink
          to="/examples/"
          color="orange"
          icon={<StarIcon style={{ height: 18, width: 18 }} />}
        >
          Examples
        </NavbarMainLink>

        <NavbarMainLink
          to="/source/"
          color="gray"
          icon={<GitHubLogoIcon style={{ height: 18, width: 18 }} />}
        >
          Contribute
        </NavbarMainLink>
      </div>
    </nav>
  );
}
