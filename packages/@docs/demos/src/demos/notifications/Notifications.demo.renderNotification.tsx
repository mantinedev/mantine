import { Avatar, Button, Group, rem, Text } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Avatar, Button, Group, rem, Text } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Group justify="center">
      <Button
        onClick={() =>
          notifications.show({
            autoClose: false,
            renderNotification: (notification) => (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: rem(12),
                  padding: rem(16),
                  borderRadius: rem(8),
                  backgroundColor: 'var(--mantine-color-body)',
                  border: '1px solid var(--mantine-color-default-border)',
                  boxShadow: 'var(--mantine-shadow-lg)',
                  userSelect: 'none',
                }}
              >
                <Avatar src={null} radius="xl" color="blue">
                  DM
                </Avatar>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <Text size="sm" fw={600}>
                    Dan sent you a message
                  </Text>
                  <Text size="xs" c="dimmed" lineClamp={1}>
                    Hey, are you free for a quick call?
                  </Text>
                  <Group gap="xs" mt={8}>
                    <Button
                      size="compact-xs"
                      variant="filled"
                      onClick={() =>
                        notifications.hide(notification.id!)
                      }
                    >
                      Reply
                    </Button>
                    <Button
                      size="compact-xs"
                      variant="default"
                      onClick={() =>
                        notifications.hide(notification.id!)
                      }
                    >
                      Dismiss
                    </Button>
                  </Group>
                </div>
              </div>
            ),
            message: '',
          })
        }
      >
        Show custom notification
      </Button>
    </Group>
  );
}`;

function Demo() {
  return (
    <Group justify="center">
      <Button
        onClick={() =>
          notifications.show({
            autoClose: false,
            renderNotification: (notification) => (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: rem(12),
                  padding: rem(16),
                  borderRadius: rem(8),
                  backgroundColor: 'var(--mantine-color-body)',
                  border: '1px solid var(--mantine-color-default-border)',
                  boxShadow: 'var(--mantine-shadow-lg)',
                  userSelect: 'none',
                }}
              >
                <Avatar src={null} radius="xl" color="blue">
                  DM
                </Avatar>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <Text size="sm" fw={600}>
                    Dan sent you a message
                  </Text>
                  <Text size="xs" c="dimmed" lineClamp={1}>
                    Hey, are you free for a quick call?
                  </Text>
                  <Group gap="xs" mt={8}>
                    <Button
                      size="compact-xs"
                      variant="filled"
                      onClick={() => notifications.hide(notification.id!)}
                    >
                      Reply
                    </Button>
                    <Button
                      size="compact-xs"
                      variant="default"
                      onClick={() => notifications.hide(notification.id!)}
                    >
                      Dismiss
                    </Button>
                  </Group>
                </div>
              </div>
            ),
            message: '',
          })
        }
      >
        Show custom notification
      </Button>
    </Group>
  );
}

export const renderNotification: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
