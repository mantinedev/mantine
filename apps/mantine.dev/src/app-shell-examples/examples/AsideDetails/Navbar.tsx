import { useState } from 'react';
import { AppShell, Badge, NavLink, ScrollArea } from '@mantine/core';
import { footerLinks, mainLinks } from './data';

export function Navbar() {
  const [active, setActive] = useState('Dashboard');

  const renderLinks = (links: typeof mainLinks) =>
    links.map((link) => (
      <NavLink
        key={link.label}
        href="#"
        variant="rail"
        label={link.label}
        leftSection={<link.icon size={18} />}
        rightSection={link.badge && <Badge variant="default">{link.badge}</Badge>}
        active={link.label === active}
        onClick={(event) => {
          event.preventDefault();
          setActive(link.label);
        }}
      />
    ));

  return (
    <>
      <AppShell.Section grow component={ScrollArea} p="md">
        {renderLinks(mainLinks)}
      </AppShell.Section>
      <AppShell.Section p="md">{renderLinks(footerLinks)}</AppShell.Section>
    </>
  );
}
