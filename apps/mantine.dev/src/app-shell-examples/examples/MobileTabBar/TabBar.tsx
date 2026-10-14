import { Group, Text, UnstyledButton } from '@mantine/core';
import { mainLinks } from './data';
import classes from './TabBar.module.css';

const tabs = mainLinks.slice(0, 4);

interface TabBarProps {
  active: string;
  onChange: (label: string) => void;
}

export function TabBar({ active, onChange }: TabBarProps) {
  const items = tabs.map((tab) => (
    <UnstyledButton
      key={tab.label}
      className={classes.tab}
      data-active={tab.label === active || undefined}
      aria-current={tab.label === active ? 'page' : undefined}
      onClick={() => onChange(tab.label)}
    >
      <tab.icon size={22} />
      <Text size="sm">{tab.label}</Text>
    </UnstyledButton>
  ));

  return (
    <Group h="100%" gap={0} grow>
      {items}
    </Group>
  );
}
