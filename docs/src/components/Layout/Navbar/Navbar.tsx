import React from 'react';
import { ScrollArea } from '@mantine/core';
import { useSpotlight } from '@mantine/spotlight';
import { IconSearch } from '@tabler/icons';
import NavbarMainLink from './NavbarMainLink/NavbarMainLink';
import NavbarDocsCategory from './NavbarDocsCategory/NavbarDocsCategory';
import { getDocsData } from '../get-docs-data';
import mainLinks from './main-links';
import useStyles from './Navbar.styles';

interface NavbarProps {
  data: ReturnType<typeof getDocsData>;
  opened: boolean;
  onClose(): void;
}

export default function Navbar({ data, opened, onClose }: NavbarProps) {
  const { classes, cx, theme } = useStyles();
  const spotlight = useSpotlight();

  const main = mainLinks.map((item) => (
    <NavbarMainLink
      key={item.to}
      to={item.to}
      color={item.color}
      icon={<item.icon size={item.rawIcon ? 30 : 18} stroke={2.2} />}
      onClick={onClose}
      rawIcon={item.rawIcon}
    >
      {item.label}
    </NavbarMainLink>
  ));

  const search = (
    <NavbarMainLink
      to="."
      className={classes.search}
      color={theme.colors.yellow[5]}
      icon={<IconSearch size={18} stroke={2.2} />}
      onClick={spotlight.openSpotlight}
    >
      Search
    </NavbarMainLink>
  );

  const docs = data.map((group) => (
    <NavbarDocsCategory group={group} key={group.group} onLinkClick={onClose} />
  ));

  return (
    <nav className={cx(classes.navbar, { [classes.opened]: opened })}>
      <ScrollArea style={{ height: '100vh' }} type="scroll">
        <div className={classes.body}>
          {search}
          {main}
          <div className={classes.docs}>{docs}</div>
        </div>
      </ScrollArea>
    </nav>
  );
}
