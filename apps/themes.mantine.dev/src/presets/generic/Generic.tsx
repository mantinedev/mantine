'use client';

import { useState } from 'react';
import { IconDownload, IconPlus } from '@tabler/icons-react';
import {
  AppShell,
  Anchor,
  Breadcrumbs,
  Button,
  Grid,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { PresetFrame } from '@/components/PresetFrame';
import { PresetProvider } from '@/components/PresetProvider';
import { ActivityCard } from './ActivityCard';
import { AppHeader } from './AppHeader';
import { AppNavbar } from './AppNavbar';
import { GettingStartedCard } from './GettingStartedCard';
import { NewTaskModal } from './NewTaskModal';
import { SettingsCard } from './SettingsCard';
import { StatsGrid } from './StatsGrid';
import { TasksCard } from './TasksCard';
import { TeamCard } from './TeamCard';
import { ThroughputCard } from './ThroughputCard';

function Workspace() {
  const [navbarOpened, navbar] = useDisclosure();
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <AppShell
      mode="static"
      header={{ height: 60 }}
      navbar={{ width: 240, breakpoint: 'sm', collapsed: { mobile: !navbarOpened } }}
      padding="lg"
    >
      <AppShell.Header>
        <AppHeader navbarOpened={navbarOpened} onNavbarToggle={navbar.toggle} />
      </AppShell.Header>

      <AppShell.Navbar>
        <AppNavbar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Stack gap="lg">
          <Group justify="space-between" align="flex-end">
            <div>
              <Breadcrumbs mb="xs">
                <Anchor href="#" size="sm" onClick={(event) => event.preventDefault()}>
                  Workspace
                </Anchor>
                <Text size="sm">Overview</Text>
              </Breadcrumbs>
              <Title order={1} size="h2">
                Overview
              </Title>
              <Text size="sm">Sprint 14, October 21 – November 3</Text>
            </div>
            <Group gap="xs">
              <Button variant="default" leftSection={<IconDownload size={16} />}>
                Export
              </Button>
              <Button leftSection={<IconPlus size={16} />} onClick={() => setModalOpened(true)}>
                New task
              </Button>
            </Group>
          </Group>

          <StatsGrid />

          <Grid>
            <Grid.Col span={{ base: 12, md: 8 }}>
              <ThroughputCard />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <TeamCard />
            </Grid.Col>
          </Grid>

          <TasksCard />

          <Grid>
            <Grid.Col span={{ base: 12, md: 7 }}>
              <SettingsCard />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Stack gap="md">
                <ActivityCard />
                <GettingStartedCard />
              </Stack>
            </Grid.Col>
          </Grid>
        </Stack>
      </AppShell.Main>

      <NewTaskModal opened={modalOpened} onClose={() => setModalOpened(false)} />
    </AppShell>
  );
}

export function Generic() {
  return (
    <PresetProvider>
      <PresetFrame>
        <Workspace />
      </PresetFrame>
    </PresetProvider>
  );
}
