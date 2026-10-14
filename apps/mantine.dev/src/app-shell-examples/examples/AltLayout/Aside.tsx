import { Avatar, Group, Stack, Text, Title } from '@mantine/core';

const activity = [
  { avatar: 1, text: 'Olivia Martin paid invoice #4821', time: '2 minutes ago' },
  { avatar: 2, text: 'Jackson Lee placed order #4820', time: '15 minutes ago' },
  { avatar: 3, text: 'Isabella Nguyen left a 5-star review', time: '1 hour ago' },
  { avatar: 4, text: 'William Kim updated shipping address', time: '3 hours ago' },
  { avatar: 5, text: 'Sofia Davis requested a refund for #4817', time: 'Yesterday' },
  { avatar: 6, text: 'Liam Brown created an account', time: 'Yesterday' },
];

export function Aside() {
  const items = activity.map((item) => (
    <Group key={item.text} wrap="nowrap" align="flex-start">
      <Avatar
        src={`https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-${item.avatar}.png`}
        size="sm"
        radius="xl"
      />
      <div>
        <Text size="sm">{item.text}</Text>
        <Text size="xs">{item.time}</Text>
      </div>
    </Group>
  ));

  return (
    <Stack>
      <Title order={3} fz="md" c="var(--mantine-color-bright)">
        Activity
      </Title>
      {items}
    </Stack>
  );
}
