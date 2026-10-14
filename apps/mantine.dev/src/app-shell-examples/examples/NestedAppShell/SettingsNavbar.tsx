import { useState } from 'react';
import { CreditCardIcon, GearIcon, PlugsIcon, UsersIcon, WarningIcon } from '@phosphor-icons/react';
import { Burger, Group, NavLink, Text } from '@mantine/core';

const links = [
  { label: 'General', icon: GearIcon },
  { label: 'Members', icon: UsersIcon },
  { label: 'Billing', icon: CreditCardIcon },
  { label: 'Integrations', icon: PlugsIcon },
  { label: 'Danger zone', icon: WarningIcon },
];

interface SettingsNavbarProps {
  onClose: () => void;
}

export function SettingsNavbar({ onClose }: SettingsNavbarProps) {
  const [active, setActive] = useState('General');

  const items = links.map((link) => (
    <NavLink
      key={link.label}
      href="#"
      variant="rail"
      label={link.label}
      leftSection={<link.icon size={18} />}
      active={link.label === active}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.label);
        onClose();
      }}
    />
  ));

  return (
    <>
      <Group hiddenFrom="sm" px="md" h={50}>
        <Burger opened onClick={onClose} size="sm" aria-label="Close navigation" />
        <Text fw={500}>Settings</Text>
      </Group>
      {items}
    </>
  );
}
