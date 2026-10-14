import { useState } from 'react';
import { AppShell, Badge, NavLink, ScrollArea, Tooltip } from '@mantine/core';
import { footerLinks, mainLinks } from './data';
import classes from './Navbar.module.css';

interface NavbarProps {
  collapsed: boolean;
}

export function Navbar({ collapsed }: NavbarProps) {
  const [active, setActive] = useState('Dashboard');

  const renderLinks = (links: typeof mainLinks) =>
    links.map((link) => (
      <Tooltip
        key={link.label}
        label={link.label}
        position="right"
        offset={22}
        disabled={!collapsed}
      >
        <NavLink
          href="#"
          variant="rail"
          label={link.label}
          aria-label={collapsed ? link.label : undefined}
          leftSection={<link.icon size={18} />}
          rightSection={link.badge && <Badge variant="default">{link.badge}</Badge>}
          active={link.label === active}
          className={classes.link}
          data-collapsed={collapsed || undefined}
          onClick={(event) => {
            event.preventDefault();
            setActive(link.label);
          }}
        />
      </Tooltip>
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
