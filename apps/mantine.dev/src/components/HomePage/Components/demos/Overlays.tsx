import { useState } from 'react';
import { IconMessageCircle, IconPhoto, IconSettings } from '@tabler/icons-react';
import {
  Box,
  Button,
  CloseButton,
  Divider,
  Drawer,
  Group,
  Modal,
  Pagination,
  Popover,
  SimpleGrid,
  Stepper,
  Tabs,
  Text,
} from '@mantine/core';
import { AuthenticationForm, HoverCardHomePageDemo } from '@docs/demos';

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
    <Tabs defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto stroke={1.5} size={14} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<IconMessageCircle stroke={1.5} size={14} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<IconSettings stroke={1.5} size={14} />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}

function PopoverDemo() {
  return (
    <Popover width={220}>
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        This is popover, it will show a dropdown relative to target element
      </Popover.Dropdown>
    </Popover>
  );
}

export function Overlays() {
  const [modalOpened, setModalOpened] = useState(false);
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <div>
      <Modal title="Register" opened={modalOpened} onClose={() => setModalOpened(false)}>
        <AuthenticationForm noShadow noPadding />
      </Modal>

      <Drawer
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
        padding="md"
        size={440}
        withCloseButton={false}
      >
        <Group justify="space-between">
          <Text size="lg">Register</Text>
          <CloseButton mr={-1} iconSize={18} onClick={() => setDrawerOpened(false)} />
        </Group>
        <Divider my="md" />
        <AuthenticationForm noShadow noPadding />
      </Drawer>

      <Text mb="xs" size="lg" fw={700} style={{ fontFamily: 'var(--docs-font-primary)' }}>
        Overlays
      </Text>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <Group>
          <Button variant="outline" onClick={() => setModalOpened(true)}>
            Open Modal
          </Button>
          <Button variant="outline" onClick={() => setDrawerOpened(true)}>
            Open Drawer
          </Button>
        </Group>

        <Group>
          <PopoverDemo />
          <HoverCardHomePageDemo>
            <Button>Reveal on hover</Button>
          </HoverCardHomePageDemo>
        </Group>
      </SimpleGrid>

      <Text mt={40} mb={5} size="lg" fw={700} style={{ fontFamily: 'var(--docs-font-primary)' }}>
        Tabs component
      </Text>

      <TabsDemo />

      <Text mb="sm" mt={40} size="lg" fw={700} style={{ fontFamily: 'var(--docs-font-primary)' }}>
        Stepper component
      </Text>

      <StepperDemo />

      <Box visibleFrom="sm">
        <Text mb="sm" mt={40} size="lg" fw={700} style={{ fontFamily: 'var(--docs-font-primary)' }}>
          Pagination component
        </Text>

        <Pagination total={20} withEdges />
      </Box>
    </div>
  );
}
