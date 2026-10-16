import { Button, Popover, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Popover, Stack, Text } from '@mantine/core';

const notifications = [
  { title: 'Deployment finished', time: '2 min ago' },
  { title: 'New comment on "Q3 roadmap"', time: '15 min ago' },
  { title: 'Invoice #1042 was paid', time: '1 hour ago' },
  { title: 'Alex joined the Design team', time: '2 hours ago' },
  { title: 'Backup completed', time: '3 hours ago' },
  { title: 'Password changed', time: 'Yesterday' },
  { title: 'Weekly report is ready', time: 'Yesterday' },
  { title: 'Storage is 80% full', time: '2 days ago' },
  { title: 'New sign-in from Chrome on macOS', time: '3 days ago' },
  { title: 'Subscription renewed', time: 'Last week' },
];

function Demo() {
  return (
    <Popover width={300} position="bottom" shadow="md">
      <Popover.Target>
        <Button>Notifications</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Popover.ScrollArea mah={240}>
          <Stack gap="sm">
            {notifications.map((notification) => (
              <div key={notification.title}>
                <Text size="sm" fw={500}>
                  {notification.title}
                </Text>
                <Text size="xs">{notification.time}</Text>
              </div>
            ))}
          </Stack>
        </Popover.ScrollArea>
      </Popover.Dropdown>
    </Popover>
  );
}
`;

const notifications = [
  { title: 'Deployment finished', time: '2 min ago' },
  { title: 'New comment on "Q3 roadmap"', time: '15 min ago' },
  { title: 'Invoice #1042 was paid', time: '1 hour ago' },
  { title: 'Alex joined the Design team', time: '2 hours ago' },
  { title: 'Backup completed', time: '3 hours ago' },
  { title: 'Password changed', time: 'Yesterday' },
  { title: 'Weekly report is ready', time: 'Yesterday' },
  { title: 'Storage is 80% full', time: '2 days ago' },
  { title: 'New sign-in from Chrome on macOS', time: '3 days ago' },
  { title: 'Subscription renewed', time: 'Last week' },
];

function Demo() {
  return (
    <Popover width={300} position="bottom" shadow="md">
      <Popover.Target>
        <Button>Notifications</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Popover.ScrollArea mah={240}>
          <Stack gap="sm">
            {notifications.map((notification) => (
              <div key={notification.title}>
                <Text size="sm" fw={500}>
                  {notification.title}
                </Text>
                <Text size="xs">{notification.time}</Text>
              </div>
            ))}
          </Stack>
        </Popover.ScrollArea>
      </Popover.Dropdown>
    </Popover>
  );
}

export const scrollArea: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
