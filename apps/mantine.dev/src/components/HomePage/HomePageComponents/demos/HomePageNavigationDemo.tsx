import { useState } from 'react';
import {
  ArrowsClockwiseIcon,
  CaretRightIcon,
  ChatCircleIcon,
  DotsThreeIcon,
  GearSixIcon,
  HeartIcon,
  ImageIcon,
  PauseIcon,
  SignOutIcon,
  StarIcon,
  TrashIcon,
} from '@phosphor-icons/react';
import {
  Avatar,
  Button,
  Group,
  Input,
  Menu,
  Pagination,
  SimpleGrid,
  Stepper,
  Tabs,
  Text,
  useMantineTheme,
} from '@mantine/core';

function MenuDemo() {
  const theme = useMantineTheme();
  return (
    <Menu
      width={300}
      position="bottom-start"
      transitionProps={{ transition: 'pop' }}
      styles={{ item: { fontSize: 16 }, label: { fontSize: 14 } }}
      radius="md"
    >
      <Menu.Target>
        <Button
          variant="default"
          rightSection={<DotsThreeIcon size={24} />}
          miw={200}
          size="lg"
          radius="md"
          justify="space-between"
        >
          User Menu
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item rightSection={<CaretRightIcon size={18} />}>
          <Group>
            <Avatar
              radius="xl"
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
            />

            <div>
              <Text fw={500}>Nancy Horsekisser</Text>
              <Text size="xs" c="dimmed">
                nhorsekisser@mantine.dev
              </Text>
            </div>
          </Group>
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item leftSection={<HeartIcon weight="fill" size={18} color={theme.colors.red[6]} />}>
          Liked posts
        </Menu.Item>
        <Menu.Item
          leftSection={<StarIcon weight="fill" size={18} color={theme.colors.yellow[6]} />}
        >
          Saved posts
        </Menu.Item>
        <Menu.Item
          leftSection={<ChatCircleIcon weight="fill" size={18} color={theme.colors.blue[6]} />}
        >
          Your comments
        </Menu.Item>

        <Menu.Label>Settings</Menu.Label>
        <Menu.Item leftSection={<GearSixIcon size={18} />}>Account settings</Menu.Item>
        <Menu.Item leftSection={<ArrowsClockwiseIcon size={18} />}>Change account</Menu.Item>
        <Menu.Item leftSection={<SignOutIcon size={18} />}>Logout</Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item leftSection={<PauseIcon size={18} />}>PauseIcon subscription</Menu.Item>
        <Menu.Item color="red" leftSection={<TrashIcon size={18} />}>
          Delete account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

function StepperDemo() {
  const [active, setActive] = useState(1);

  return (
    <>
      <Stepper active={active} onStepClick={setActive} visibleFrom="sm">
        <Stepper.Step label="First step" description="Create an account" />
        <Stepper.Step label="Second step" description="Verify email" />
        <Stepper.Step label="Final step" description="Get full access" />
        <Stepper.Completed>Completed, click back button to get to previous step</Stepper.Completed>
      </Stepper>

      <Stepper active={active} onStepClick={setActive} hiddenFrom="sm" orientation="vertical">
        <Stepper.Step label="First step" description="Create an account" />
        <Stepper.Step label="Second step" description="Verify email" />
        <Stepper.Step label="Final step" description="Get full access" />
        <Stepper.Completed>Completed, click back button to get to previous step</Stepper.Completed>
      </Stepper>
    </>
  );
}

function TabsDemo() {
  return (
    <Tabs
      defaultValue="gallery"
      styles={{ tab: { fontSize: 'var(--mantine-font-size-md)', gap: 3, paddingInlineStart: 10 } }}
      radius="md"
    >
      <Tabs.List>
        <Tabs.Tab
          value="gallery"
          leftSection={<ImageIcon size={18} color="var(--mantine-color-dimmed)" />}
        >
          Gallery
        </Tabs.Tab>
        <Tabs.Tab
          value="messages"
          leftSection={<ChatCircleIcon size={18} color="var(--mantine-color-dimmed)" />}
        >
          Messages
        </Tabs.Tab>
        <Tabs.Tab
          value="settings"
          leftSection={<GearSixIcon size={18} color="var(--mantine-color-dimmed)" />}
        >
          Settings
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}

export function HomePageNavigationDemo() {
  return (
    <SimpleGrid cols={{ md: 2 }} spacing={50}>
      <div>
        <Input.Label labelElement="div" size="lg" mb="sm" display="block">
          Stepper
        </Input.Label>
        <StepperDemo />
      </div>

      <div>
        <Input.Label labelElement="div" size="lg" mb="sm" display="block">
          Tabs
        </Input.Label>
        <TabsDemo />
      </div>

      <div>
        <Input.Label labelElement="div" size="lg" mb="sm" display="block">
          Pagination
        </Input.Label>
        <Pagination total={56} size="lg" radius="md" />
      </div>

      <div>
        <Input.Label labelElement="div" size="lg" mb="sm" display="block">
          Menu
        </Input.Label>
        <MenuDemo />
      </div>
    </SimpleGrid>
  );
}
