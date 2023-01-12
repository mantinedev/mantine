import React from 'react';
import { ScrollArea, rem } from '@mantine/core';
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
  const { classes, cx } = useStyles();

  const main = mainLinks.map((item) => (
    <NavbarMainLink
      key={item.to}
      to={item.to}
      color={item.color}
      icon={<item.icon size={rem(item.rawIcon ? 30 : 18)} stroke={2.2} />}
      onClick={onClose}
      rawIcon={item.rawIcon}
    >
      {item.label}
    </NavbarMainLink>
  ));

  const docs = data.map((group) => (
    <NavbarDocsCategory group={group} key={group.group} onLinkClick={onClose} />
  ));

  return (
    <nav className={cx(classes.navbar, { [classes.opened]: opened })}>
      <ScrollArea h="100vh" type="scroll">
        <div className={classes.body}>
          {main}
          <div className={classes.docs}>{docs}</div>
        </div>
      </ScrollArea>
    </nav>
  );
}
