import {
  IconCalendar,
  IconChartBar,
  IconFolder,
  IconHome,
  IconListCheck,
  IconSettings,
  IconUsers,
} from '@tabler/icons-react';
import { AppShell, Badge, Button, NavLink, Progress, Stack, Text } from '@mantine/core';

const LINKS = [
  { label: 'Overview', icon: IconHome, active: true },
  { label: 'Tasks', icon: IconListCheck, badge: 12 },
  { label: 'Calendar', icon: IconCalendar },
  { label: 'Reports', icon: IconChartBar },
  { label: 'Team', icon: IconUsers },
];

const PROJECTS = ['Billing', 'Auth', 'Reports', 'Growth'];

export function AppNavbar() {
  return (
    <>
      <AppShell.Section grow p="sm">
        <Stack gap={2}>
          {LINKS.map((link) => (
            <NavLink
              key={link.label}
              href="#"
              variant="rail"
              label={link.label}
              active={link.active}
              leftSection={<link.icon size={18} />}
              rightSection={
                link.badge ? (
                  <Badge size="sm" variant="default">
                    {link.badge}
                  </Badge>
                ) : null
              }
              onClick={(event) => event.preventDefault()}
            />
          ))}
          <NavLink
            href="#"
            variant="rail"
            label="Projects"
            leftSection={<IconFolder size={18} />}
            defaultOpened
            onClick={(event) => event.preventDefault()}
          >
            {PROJECTS.map((project) => (
              <NavLink
                key={project}
                href="#"
                variant="rail"
                label={project}
                onClick={(event) => event.preventDefault()}
              />
            ))}
          </NavLink>
          <NavLink
            href="#"
            variant="rail"
            label="Settings"
            leftSection={<IconSettings size={18} />}
            onClick={(event) => event.preventDefault()}
          />
        </Stack>
      </AppShell.Section>

      <AppShell.Section p="md">
        <Text size="sm" fw={500}>
          Storage
        </Text>
        <Text size="xs" mb="xs">
          7.4 GB of 10 GB used
        </Text>
        <Progress value={74} size="sm" mb="md" aria-label="Storage used" />
        <Button variant="default" fullWidth size="xs">
          Upgrade plan
        </Button>
      </AppShell.Section>
    </>
  );
}
