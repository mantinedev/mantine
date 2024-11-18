import { useState } from 'react';
import { IconAdjustments } from '@tabler/icons-react';
import {
  Anchor,
  Avatar,
  Badge,
  Box,
  Button,
  Checkbox,
  Drawer,
  Group,
  HoverCard,
  Input,
  Modal,
  Popover,
  Radio,
  SegmentedControl,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { AuthenticationForm } from '@docs/demos';
import classes from './HomePageOverlaysDemo.module.css';

export function HomePageOverlaysDemo() {
  const [modalOpened, modalHandlers] = useDisclosure(false);
  const [drawerOpened, drawerHandlers] = useDisclosure(false);

  return (
    <>
      <Modal opened={modalOpened} onClose={modalHandlers.close} title="Authenticate" radius="md">
        <AuthenticationForm noShadow noPadding />
      </Modal>

      <Drawer
        opened={drawerOpened}
        onClose={drawerHandlers.close}
        title="Authenticate"
        radius="md"
        offset={5}
      >
        <AuthenticationForm noShadow noPadding />
      </Drawer>

      <SimpleGrid cols={{ md: 2 }} spacing="xl">
        <SimpleGrid cols={2}>
          <div>
            <Input.Label size="lg" mb="sm" display="block">
              Popover
            </Input.Label>

            <Popover radius="md" position="bottom-start" shadow="md">
              <Popover.Target>
                <Button
                  miw={200}
                  size="lg"
                  variant="default"
                  radius="md"
                  rightSection={<IconAdjustments size={22} stroke={1.5} />}
                  justify="space-between"
                >
                  Filters
                </Button>
              </Popover.Target>

              <Popover.Dropdown className={classes.popoverDropdown}>
                <Input.Label
                  display="block"
                  labelElement="div"
                  mb={3}
                  size="md"
                  className={classes.label}
                >
                  Order status
                </Input.Label>
                <SegmentedControl data={['In progress', 'Delivered']} radius="md" size="md" />

                <Input.Label
                  display="block"
                  labelElement="div"
                  mb={5}
                  mt="md"
                  size="md"
                  className={classes.label}
                >
                  Brand
                </Input.Label>

                <Checkbox label="Cannon" size="md" defaultChecked />
                <Checkbox label="Nikon" mt={8} size="md" defaultChecked />
                <Checkbox label="Sony" mt={8} size="md" />
                <Checkbox label="Fuji" mt={8} size="md" />
                <Checkbox label="Leica" mt={8} size="md" />

                <Input.Label
                  display="block"
                  labelElement="div"
                  mb={5}
                  mt={24}
                  size="md"
                  className={classes.label}
                >
                  Price range
                </Input.Label>

                <Radio.Group defaultValue="200">
                  <Stack gap={8}>
                    <Radio label="Less than $100" value="100" size="md" />
                    <Radio label="$100 - $200" value="200" size="md" />
                    <Radio label="$200 - $500" value="500" size="md" />
                    <Radio label="$500 - $1000" value="1000" size="md" />
                    <Radio label="More than $1000" value="1001" size="md" />
                  </Stack>
                </Radio.Group>
              </Popover.Dropdown>
            </Popover>
          </div>

          <div>
            <Input.Label size="lg" mb="sm">
              Hover card
            </Input.Label>
            <HoverCard
              width={320}
              shadow="md"
              withArrow
              openDelay={200}
              closeDelay={400}
              position="bottom-start"
              arrowOffset={15}
              radius="md"
            >
              <HoverCard.Target>
                <Group w="max-content">
                  <Avatar
                    src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4"
                    radius="xl"
                  />
                  <Stack gap={5}>
                    <Text size="sm" fw={700} lh={1} c="bright">
                      Mantine
                    </Text>
                    <Anchor href="https://twitter.com/mantinedev" c="dimmed" size="xs" lh={1}>
                      @mantinedev
                    </Anchor>
                  </Stack>
                </Group>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Group>
                  <Avatar
                    src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4"
                    radius="xl"
                  />
                  <Stack gap={5}>
                    <Text size="sm" fw={700} lh={1} c="bright">
                      Mantine
                    </Text>
                    <Anchor href="https://twitter.com/mantinedev" c="dimmed" size="xs" lh={1}>
                      @mantinedev
                    </Anchor>
                  </Stack>
                </Group>

                <Text size="sm" mt="md">
                  Customizable React components and hooks library with focus on usability,
                  accessibility and developer experience
                </Text>

                <Group mt="md" gap="xl">
                  <Text size="sm">
                    <Box component="b" c="bright">
                      0
                    </Box>{' '}
                    Following
                  </Text>
                  <Text size="sm">
                    <Box component="b" c="bright">
                      1,174
                    </Box>{' '}
                    Followers
                  </Text>
                </Group>
              </HoverCard.Dropdown>
            </HoverCard>
          </div>

          <div>
            <Input.Label size="lg" mb="sm" display="block">
              Tooltip
            </Input.Label>
            <Tooltip label="Tooltip" withArrow>
              <Badge className={classes.tooltip} size="lg" variant="dot" color="yellow">
                Hover me to see a tooltip
              </Badge>
            </Tooltip>
          </div>
          <div>
            <Input.Label size="lg" mb="sm" display="block">
              Modal and Drawer
            </Input.Label>
            <Group>
              <Button variant="default" radius="md" onClick={modalHandlers.open}>
                Open modal
              </Button>
              <Button variant="default" radius="md" onClick={drawerHandlers.open}>
                Open drawer
              </Button>
            </Group>
          </div>
        </SimpleGrid>

        <div>
          <Input.Label size="lg">Floating tooltip</Input.Label>
          <Tooltip.Floating label="Floating tooltip" withinPortal={false}>
            <div className={classes.floating}>
              Hover me to see a tooltip that follows mouse cursor
            </div>
          </Tooltip.Floating>
        </div>
      </SimpleGrid>
    </>
  );
}
