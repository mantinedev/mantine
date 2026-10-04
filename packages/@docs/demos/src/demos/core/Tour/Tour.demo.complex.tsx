import { useState } from 'react';
import { Bell, GearSix, MagnifyingGlass } from '@phosphor-icons/react';
import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Group,
  Indicator,
  ScrollArea,
  Stack,
  Switch,
  Table,
  Tabs,
  Text,
  TextInput,
  Tour,
} from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Group,
  Indicator,
  ScrollArea,
  Stack,
  Switch,
  Table,
  Tabs,
  Text,
  TextInput,
  Tour,
} from '@mantine/core';
import { Bell, GearSix, MagnifyingGlass } from '@phosphor-icons/react';

function Demo() {
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <>
      <Card withBorder>
        <Group justify="space-between" mb="md">
          <Group>
            <Avatar id="complex-avatar" color="blue" radius="xl">
              JD
            </Avatar>
            <div>
              <Text size="sm" fw={500}>
                John Doe
              </Text>
              <Text size="xs" c="dimmed">
                Admin
              </Text>
            </div>
          </Group>

          <Group gap="xs">
            <TextInput
              id="complex-search"
              placeholder="Search..."
              size="xs"
              leftSection={<MagnifyingGlass size={14} />}
              w={200}
            />
            <Indicator id="complex-notifications" processing>
              <ActionIcon variant="default" size="lg">
                <Bell size={18} />
              </ActionIcon>
            </Indicator>
            <ActionIcon id="complex-settings" variant="default" size="lg">
              <GearSix size={18} />
            </ActionIcon>
          </Group>
        </Group>

        <Tabs id="complex-tabs" defaultValue="overview" mb="md">
          <Tabs.List>
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="analytics">Analytics</Tabs.Tab>
            <Tabs.Tab value="reports">Reports</Tabs.Tab>
            <Tabs.Tab value="settings">Settings</Tabs.Tab>
          </Tabs.List>
        </Tabs>

        <ScrollArea h={200} type="always">
          <Stack gap="md">
            <Group justify="space-between">
              <Text fw={500}>Recent activity</Text>
              <Badge id="complex-badge" variant="light" color="green">
                12 new
              </Badge>
            </Group>

            <Table id="complex-table">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>User</Table.Th>
                  <Table.Th>Action</Table.Th>
                  <Table.Th>Status</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td>Alice</Table.Td>
                  <Table.Td>Created project</Table.Td>
                  <Table.Td>
                    <Badge color="green" variant="light" size="sm">
                      Complete
                    </Badge>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>Bob</Table.Td>
                  <Table.Td>Updated settings</Table.Td>
                  <Table.Td>
                    <Badge color="blue" variant="light" size="sm">
                      In progress
                    </Badge>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>Carol</Table.Td>
                  <Table.Td>Deleted file</Table.Td>
                  <Table.Td>
                    <Badge color="red" variant="light" size="sm">
                      Failed
                    </Badge>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>Dave</Table.Td>
                  <Table.Td>Uploaded report</Table.Td>
                  <Table.Td>
                    <Badge color="green" variant="light" size="sm">
                      Complete
                    </Badge>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>Eve</Table.Td>
                  <Table.Td>Reviewed PR</Table.Td>
                  <Table.Td>
                    <Badge color="yellow" variant="light" size="sm">
                      Pending
                    </Badge>
                  </Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table>

            <Box
              id="complex-preferences"
              p="md"
              style={{
                border: '1px solid var(--mantine-color-default-border)',
                borderRadius: 'var(--mantine-radius-default)',
              }}
            >
              <Text fw={500} mb="xs">
                Preferences
              </Text>
              <Stack gap="xs">
                <Switch label="Email notifications" defaultChecked />
                <Switch label="Push notifications" />
                <Switch label="Weekly digest" defaultChecked />
              </Stack>
            </Box>
          </Stack>
        </ScrollArea>
      </Card>

      <Button mt="md" onClick={() => { setStep(0); setActive(true); }}>
        Start tour
      </Button>

      <Tour
        active={active}
        step={step}
        onStepChange={setStep}
        onClose={() => setActive(false)}
        closeOnOverlayClick
      >
        <Tour.Step title="Welcome to the dashboard">
          Let us show you around! This tour will walk you through the main features
          of your new dashboard.
        </Tour.Step>

        <Tour.Step target="#complex-avatar" title="Your profile" position="bottom-start">
          This is your profile section. Click on your avatar to manage account settings,
          change your role, or sign out.
        </Tour.Step>

        <Tour.Step target="#complex-search" title="Search" position="bottom">
          Use the search bar to quickly find projects, users, reports, and settings
          across the entire application.
        </Tour.Step>

        <Tour.Step target="#complex-notifications" title="Notifications" position="bottom-end">
          The notification bell shows real-time alerts. The pulsing indicator means
          you have unread notifications.
        </Tour.Step>

        <Tour.Step target="#complex-tabs" title="Navigation tabs" position="bottom">
          Switch between different sections of your dashboard using these tabs.
          Each tab provides a different view of your data.
        </Tour.Step>

        <Tour.Step
          target="#complex-table"
          title="Activity feed"
          position="top"
          spotlightPadding={16}
        >
          The activity table shows recent actions by your team members.
          Each row displays the user, their action, and the current status.
          This element is inside a scroll area – the tour scrolls it into view automatically.
        </Tour.Step>

        <Tour.Step
          target="#complex-preferences"
          title="Preferences"
          position="top"
          spotlightPadding={0}
        >
          Scroll down to find your notification preferences. Customize
          which alerts you receive and how often. You are all set!
        </Tour.Step>
      </Tour>
    </>
  );
}
`;

function Demo() {
  const [active, setActive] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <>
      <Card withBorder>
        <Group justify="space-between" mb="md">
          <Group>
            <Avatar id="complex-avatar" color="blue" radius="xl">
              JD
            </Avatar>
            <div>
              <Text size="sm" fw={500}>
                John Doe
              </Text>
              <Text size="xs" c="dimmed">
                Admin
              </Text>
            </div>
          </Group>

          <Group gap="xs">
            <TextInput
              id="complex-search"
              placeholder="Search..."
              size="xs"
              leftSection={<MagnifyingGlass size={14} />}
              w={200}
            />
            <Indicator id="complex-notifications" processing>
              <ActionIcon variant="default" size="lg">
                <Bell size={18} />
              </ActionIcon>
            </Indicator>
            <ActionIcon id="complex-settings" variant="default" size="lg">
              <GearSix size={18} />
            </ActionIcon>
          </Group>
        </Group>

        <Tabs id="complex-tabs" defaultValue="overview" mb="md">
          <Tabs.List>
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="analytics">Analytics</Tabs.Tab>
            <Tabs.Tab value="reports">Reports</Tabs.Tab>
            <Tabs.Tab value="settings">Settings</Tabs.Tab>
          </Tabs.List>
        </Tabs>

        <ScrollArea h={200} type="always">
          <Stack gap="md">
            <Group justify="space-between">
              <Text fw={500}>Recent activity</Text>
              <Badge id="complex-badge" variant="light" color="green">
                12 new
              </Badge>
            </Group>

            <Table id="complex-table">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>User</Table.Th>
                  <Table.Th>Action</Table.Th>
                  <Table.Th>Status</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td>Alice</Table.Td>
                  <Table.Td>Created project</Table.Td>
                  <Table.Td>
                    <Badge color="green" variant="light" size="sm">
                      Complete
                    </Badge>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>Bob</Table.Td>
                  <Table.Td>Updated settings</Table.Td>
                  <Table.Td>
                    <Badge color="blue" variant="light" size="sm">
                      In progress
                    </Badge>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>Carol</Table.Td>
                  <Table.Td>Deleted file</Table.Td>
                  <Table.Td>
                    <Badge color="red" variant="light" size="sm">
                      Failed
                    </Badge>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>Dave</Table.Td>
                  <Table.Td>Uploaded report</Table.Td>
                  <Table.Td>
                    <Badge color="green" variant="light" size="sm">
                      Complete
                    </Badge>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>Eve</Table.Td>
                  <Table.Td>Reviewed PR</Table.Td>
                  <Table.Td>
                    <Badge color="yellow" variant="light" size="sm">
                      Pending
                    </Badge>
                  </Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table>

            <Box
              id="complex-preferences"
              p="md"
              style={{
                border: '1px solid var(--mantine-color-default-border)',
                borderRadius: 'var(--mantine-radius-default)',
              }}
            >
              <Text fw={500} mb="xs">
                Preferences
              </Text>
              <Stack gap="xs">
                <Switch label="Email notifications" defaultChecked />
                <Switch label="Push notifications" />
                <Switch label="Weekly digest" defaultChecked />
              </Stack>
            </Box>
          </Stack>
        </ScrollArea>
      </Card>

      <Button
        mt="md"
        onClick={() => {
          setStep(0);
          setActive(true);
        }}
      >
        Start tour
      </Button>

      <Tour
        active={active}
        step={step}
        onStepChange={setStep}
        onClose={() => setActive(false)}
        closeOnOverlayClick
      >
        <Tour.Step title="Welcome to the dashboard">
          Let us show you around! This tour will walk you through the main features of your new
          dashboard.
        </Tour.Step>

        <Tour.Step target="#complex-avatar" title="Your profile" position="bottom-start">
          This is your profile section. Click on your avatar to manage account settings, change your
          role, or sign out.
        </Tour.Step>

        <Tour.Step target="#complex-search" title="Search" position="bottom">
          Use the search bar to quickly find projects, users, reports, and settings across the
          entire application.
        </Tour.Step>

        <Tour.Step target="#complex-notifications" title="Notifications" position="bottom-end">
          The notification bell shows real-time alerts. The pulsing indicator means you have unread
          notifications.
        </Tour.Step>

        <Tour.Step target="#complex-tabs" title="Navigation tabs" position="bottom">
          Switch between different sections of your dashboard using these tabs. Each tab provides a
          different view of your data.
        </Tour.Step>

        <Tour.Step
          target="#complex-table"
          title="Activity feed"
          position="top"
          spotlightPadding={16}
        >
          The activity table shows recent actions by your team members. Each row displays the user,
          their action, and the current status. This element is inside a scroll area – the tour
          scrolls it into view automatically.
        </Tour.Step>

        <Tour.Step
          target="#complex-preferences"
          title="Preferences"
          position="top"
          spotlightPadding={0}
        >
          Scroll down to find your notification preferences. Customize which alerts you receive and
          how often. You are all set!
        </Tour.Step>
      </Tour>
    </>
  );
}

export const complex: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  defaultExpanded: false,
};
