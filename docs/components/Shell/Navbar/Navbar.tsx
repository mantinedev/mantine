import React from 'react';
import {
  IconBrandMantine,
  IconCompass,
  IconApi,
  IconHeartHandshake,
  IconPalette,
} from '@tabler/icons-react';
import { Box, ScrollArea, rem } from '@mantine/core';
import { MDX_PAGES_GROUPS } from '@/mdx';
import { NavbarMainLink } from './NavbarMainLink/NavbarMainLink';
import { NavbarLinksGroup } from './NavbarLinksGroup/NavbarLinksGroup';
import classes from './Navbar.module.css';

interface NavbarProps {
  navbarOpened: boolean;
  mobileNavbarOnly: boolean | undefined;
  onNavbarClose(): void;
}

export function Navbar({ navbarOpened, onNavbarClose, mobileNavbarOnly }: NavbarProps) {
  const groups = MDX_PAGES_GROUPS.map((group) => (
    <NavbarLinksGroup data={group} onNavbarClose={onNavbarClose} key={group.group} />
  ));

  return (
    <Box
      component="nav"
      className={classes.navbar}
      mod={{ hidden: !navbarOpened, 'mobile-only': mobileNavbarOnly }}
    >
      <ScrollArea className={classes.scrollarea} type="never" offsetScrollbars={false}>
        <div className={classes.body}>
          <NavbarMainLink
            icon={<IconCompass style={{ width: rem(25), height: rem(25) }} stroke={1.5} />}
            href="/getting-started"
            onNavbarClose={onNavbarClose}
          >
            Getting started
          </NavbarMainLink>
          <NavbarMainLink
            icon={<IconBrandMantine style={{ width: rem(25), height: rem(25) }} stroke={1.5} />}
            href="/about"
            onNavbarClose={onNavbarClose}
          >
            About Mantine
          </NavbarMainLink>
          <NavbarMainLink
            icon={<IconApi style={{ width: rem(25), height: rem(25) }} stroke={1.5} />}
            href="/overview"
            onNavbarClose={onNavbarClose}
          >
            API Overview
          </NavbarMainLink>
          <NavbarMainLink
            icon={<IconHeartHandshake style={{ width: rem(25), height: rem(25) }} stroke={1.5} />}
            href="/contribute"
            onNavbarClose={onNavbarClose}
          >
            Contribute
          </NavbarMainLink>
          <NavbarMainLink
            icon={<IconPalette style={{ width: rem(22), height: rem(22) }} stroke={1.5} />}
            href="/colors-generator"
            onNavbarClose={onNavbarClose}
          >
            Colors generator
          </NavbarMainLink>
          <NavbarMainLink
            external
            icon={<IconBrandMantine style={{ width: rem(22), height: rem(22) }} stroke={1.5} />}
            href="https://ui.mantine.dev"
            onNavbarClose={onNavbarClose}
          >
            Mantine UI
          </NavbarMainLink>
          <div className={classes.groups}>{groups}</div>
        </div>
      </ScrollArea>
    </Box>
  );
}
