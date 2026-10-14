import { useState } from 'react';
import { FolderIcon, PlusIcon } from '@phosphor-icons/react';
import { AppShell, Button, NavLink, ScrollArea, Text } from '@mantine/core';
import { footerLinks, projectNames } from './data';
import classes from './Navbar.module.css';

export function Navbar() {
  const [active, setActive] = useState(projectNames[0]);

  const projects = projectNames.map((name) => (
    <NavLink
      key={name}
      href="#"
      variant="rail"
      label={name}
      leftSection={<FolderIcon size={18} />}
      active={name === active}
      onClick={(event) => {
        event.preventDefault();
        setActive(name);
      }}
    />
  ));

  const links = footerLinks.map((link) => (
    <NavLink
      key={link.label}
      href="#"
      variant="rail"
      label={link.label}
      leftSection={<link.icon size={18} />}
      onClick={(event) => event.preventDefault()}
    />
  ));

  return (
    <>
      <AppShell.Section p="md">
        <Text className={classes.heading} mb="sm">
          Projects
        </Text>
        <Button variant="default" fullWidth leftSection={<PlusIcon size={16} />}>
          New project
        </Button>
      </AppShell.Section>
      <AppShell.Section grow component={ScrollArea}>
        {projects}
      </AppShell.Section>
      <AppShell.Section p="md">{links}</AppShell.Section>
    </>
  );
}
