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
import useStyles from './Navbar.styles';

export default function Navbar({ className }: { className: string }) {
  const classes = useStyles({ theme: useMantineTheme() });

  return (
    <nav className={cx(classes.navbar, className)}>
      <NavbarMainLink to="/getting-started/" color="pink" icon={<RocketIcon />}>
        Getting started
      </NavbarMainLink>

      <NavbarMainLink to="/theming/" color="indigo" icon={<BlendingModeIcon />}>
        Theming
      </NavbarMainLink>

      <NavbarMainLink to="/integrations/" color="blue" icon={<LayersIcon />}>
        Integrations
      </NavbarMainLink>

      <NavbarMainLink to="/ssr/" color="lime" icon={<LightningBoltIcon />}>
        Server side rendering
      </NavbarMainLink>

      <NavbarMainLink to="/examples/" color="orange" icon={<StarIcon />}>
        Examples
      </NavbarMainLink>

      <NavbarMainLink to="/source/" color="gray" icon={<GitHubLogoIcon />}>
        Source code
      </NavbarMainLink>
    </nav>
  );
}
