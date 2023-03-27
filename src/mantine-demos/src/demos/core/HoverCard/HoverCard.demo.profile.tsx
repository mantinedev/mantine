import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { HoverCard, Avatar, Text, Group, Anchor, Stack } from '@mantine/core';

const code = `
import { HoverCard, Avatar, Text, Group, Anchor, Stack } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <HoverCard width={320} shadow="md" withArrow openDelay={200} closeDelay={400}>
        <HoverCard.Target>
          <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Group>
            <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
            <Stack spacing={5}>
              <Text size="sm" weight={700} sx={{ lineHeight: 1 }}>
                Mantine
              </Text>
              <Anchor
                href="https://twitter.com/mantinedev"
                color="dimmed"
                size="xs"
                sx={{ lineHeight: 1 }}
              >
                @mantinedev
              </Anchor>
            </Stack>
          </Group>

          <Text size="sm" mt="md">
            Customizable React components and hooks library with focus on usability, accessibility
            and developer experience
          </Text>

          <Group mt="md" spacing="xl">
            <Text size="sm">
              <b>0</b> Following
            </Text>
            <Text size="sm">
              <b>1,174</b> Followers
            </Text>
          </Group>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}
`;

export function HoverCardHomePageDemo({ children }: { children: React.ReactNode }) {
  return (
    <HoverCard width={320} shadow="md" withArrow openDelay={200} closeDelay={400}>
      <HoverCard.Target>{children}</HoverCard.Target>
      <HoverCard.Dropdown>
        <Group>
          <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
          <Stack spacing={5}>
            <Text size="sm" weight={700} sx={{ lineHeight: 1 }}>
              Mantine
            </Text>
            <Anchor
              href="https://twitter.com/mantinedev"
              color="dimmed"
              size="xs"
              sx={{ lineHeight: 1 }}
            >
              @mantinedev
            </Anchor>
          </Stack>
        </Group>

        <Text size="sm" mt="md">
          Customizable React components and hooks library with focus on usability, accessibility and
          developer experience
        </Text>

        <Group mt="md" spacing="xl">
          <Text size="sm">
            <b>0</b> Following
          </Text>
          <Text size="sm">
            <b>1,174</b> Followers
          </Text>
        </Group>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}

function Demo() {
  return (
    <Group position="center">
      <HoverCardHomePageDemo>
        <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
      </HoverCardHomePageDemo>
    </Group>
  );
}

export const profile: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
