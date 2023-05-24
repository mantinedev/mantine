import React, { useState } from 'react';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import {
  Text,
  Group,
  Button,
  Modal,
  Drawer,
  Divider,
  CloseButton,
  Popover,
  SimpleGrid,
  Tabs,
  Stepper,
  Pagination,
  Box,
} from '@mantine/core';
import { AuthenticationForm, HoverCardHomePageDemo } from '@mantine/demos';

function StepperDemo() {
  const [active, setActive] = useState(1);

  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
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
        <Tabs.Tab value="gallery" icon={<IconPhoto stroke={1.5} size={14} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" icon={<IconMessageCircle stroke={1.5} size={14} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" icon={<IconSettings stroke={1.5} size={14} />}>
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
        padding="xl"
        size={440}
        withCloseButton={false}
      >
        <Group position="apart">
          <Text size="lg">Register</Text>
          <CloseButton mr={-1} iconSize={18} onClick={() => setDrawerOpened(false)} />
        </Group>
        <Divider my="md" />
        <AuthenticationForm noShadow noPadding />
      </Drawer>

      <Text
        mb="xs"
        size="lg"
        weight={700}
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
      >
        Overlays
      </Text>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
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

      <Text
        mt={40}
        mb={5}
        size="lg"
        weight={700}
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
      >
        Tabs component
      </Text>

      <TabsDemo />

      <Text
        mb="sm"
        mt={40}
        size="lg"
        weight={700}
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
      >
        Stepper component
      </Text>

      <StepperDemo />

      <Box
        sx={(theme) => ({
          [theme.fn.smallerThan('sm')]: {
            display: 'none',
          },
        })}
      >
        <Text
          mb="sm"
          mt={40}
          size="lg"
          weight={700}
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
        >
          Pagination component
        </Text>

        <Pagination total={20} withEdges />
      </Box>
    </div>
  );
}
