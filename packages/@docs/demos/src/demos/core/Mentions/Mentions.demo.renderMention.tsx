import { Avatar, Group, HoverCard, Mentions, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Avatar, Group, HoverCard, Mentions, Stack, Text } from '@mantine/core';

const usersData: Record<string, { display: string; role: string; email: string }> = {
  walter: { display: 'Walter White', role: 'Chemistry teacher', email: 'walter@example.com' },
  jesse: { display: 'Jesse Pinkman', role: 'Associate', email: 'jesse@example.com' },
  saul: { display: 'Saul Goodman', role: 'Attorney', email: 'saul@example.com' },
};

const users = Object.entries(usersData).map(([id, user]) => ({ id, display: user.display }));

function Demo() {
  return (
    <Mentions
      label="Hover a mention to see user details"
      defaultValue="Ping @[Walter White](walter) and @[Jesse Pinkman](jesse)"
      minRows={3}
      renderMention={({ id, display }) => {
        const user = usersData[id];
        return (
          <HoverCard withArrow shadow="md" openDelay={200} position="top" width={220}>
            <HoverCard.Target>
              <span>{display}</span>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Group gap="sm" wrap="nowrap">
                <Avatar radius="xl" name={user?.display} color="initials" />
                <Stack gap={0}>
                  <Text fw={500}>{user?.display}</Text>
                  <Text size="xs" c="dimmed">{user?.role}</Text>
                  <Text size="xs">{user?.email}</Text>
                </Stack>
              </Group>
            </HoverCard.Dropdown>
          </HoverCard>
        );
      }}
    >
      <Mentions.Mention trigger="@" data={users} />
    </Mentions>
  );
}
`;

const usersData: Record<string, { display: string; role: string; email: string }> = {
  walter: { display: 'Walter White', role: 'Chemistry teacher', email: 'walter@example.com' },
  jesse: { display: 'Jesse Pinkman', role: 'Associate', email: 'jesse@example.com' },
  saul: { display: 'Saul Goodman', role: 'Attorney', email: 'saul@example.com' },
};

const users = Object.entries(usersData).map(([id, user]) => ({ id, display: user.display }));

function Demo() {
  return (
    <Mentions
      label="Hover a mention to see user details"
      defaultValue="Ping @[Walter White](walter) and @[Jesse Pinkman](jesse)"
      minRows={3}
      renderMention={({ id, display }) => {
        const user = usersData[id];
        return (
          <HoverCard withArrow shadow="md" openDelay={200} position="top" width={220}>
            <HoverCard.Target>
              <span>{display}</span>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Group gap="sm" wrap="nowrap">
                <Avatar radius="xl" name={user?.display} color="initials" />
                <Stack gap={0}>
                  <Text fw={500}>{user?.display}</Text>
                  <Text size="xs" c="dimmed">
                    {user?.role}
                  </Text>
                  <Text size="xs">{user?.email}</Text>
                </Stack>
              </Group>
            </HoverCard.Dropdown>
          </HoverCard>
        );
      }}
    >
      <Mentions.Mention trigger="@" data={users} />
    </Mentions>
  );
}

export const renderMention: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 420,
  centered: true,
};
