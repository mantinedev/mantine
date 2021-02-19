import React from 'react';
import cx from 'clsx';
import {
  RocketIcon,
  BlendingModeIcon,
  GitHubLogoIcon,
  LayersIcon,
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
          icon={<LayersIcon style={{ height: 18, width: 18 }} />}
        >
          Integrations
        </NavbarMainLink>

        <NavbarMainLink
          to="/ssr/"
          color="yellow"
          icon={<LightningBoltIcon style={{ height: 18, width: 18 }} />}
        >
          Server side rendering
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
          Source code
        </NavbarMainLink>
      </div>
    </nav>
  );
}
