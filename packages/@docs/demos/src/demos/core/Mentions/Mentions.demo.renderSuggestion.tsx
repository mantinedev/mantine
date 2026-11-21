import { Avatar, Group, Mentions, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Avatar, Group, Mentions, Text } from '@mantine/core';

const users = [
  { id: 'walter', display: 'Walter White', email: 'walter@example.com' },
  { id: 'jesse', display: 'Jesse Pinkman', email: 'jesse@example.com' },
  { id: 'saul', display: 'Saul Goodman', email: 'saul@example.com' },
  { id: 'gus', display: 'Gustavo Fring', email: 'gus@example.com' },
];

function Demo() {
  return (
    <Mentions label="Custom suggestions" placeholder="Type @ to mention someone" minRows={3}>
      <Mentions.Mention
        trigger="@"
        data={users}
        renderSuggestion={({ item }) => (
          <Group gap="sm" wrap="nowrap">
            <Avatar size="sm" radius="xl" name={item.display} color="initials" />
            <div>
              <Text size="sm">{item.display}</Text>
              <Text size="xs" c="dimmed">
                {item.email}
              </Text>
            </div>
          </Group>
        )}
      />
    </Mentions>
  );
}
`;

const users = [
  { id: 'walter', display: 'Walter White', email: 'walter@example.com' },
  { id: 'jesse', display: 'Jesse Pinkman', email: 'jesse@example.com' },
  { id: 'saul', display: 'Saul Goodman', email: 'saul@example.com' },
  { id: 'gus', display: 'Gustavo Fring', email: 'gus@example.com' },
];

function Demo() {
  return (
    <Mentions label="Custom suggestions" placeholder="Type @ to mention someone" minRows={3}>
      <Mentions.Mention
        trigger="@"
        data={users}
        renderSuggestion={({ item }) => (
          <Group gap="sm" wrap="nowrap">
            <Avatar size="sm" radius="xl" name={item.display} color="initials" />
            <div>
              <Text size="sm">{item.display}</Text>
              <Text size="xs" c="dimmed">
                {item.email}
              </Text>
            </div>
          </Group>
        )}
      />
    </Mentions>
  );
}

export const renderSuggestion: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 400,
  centered: true,
};
