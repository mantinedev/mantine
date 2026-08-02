import { Button, Group } from '@mantine/core';
import { createNotificationsStore, notifications, Notifications } from '@mantine/notifications';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Group } from '@mantine/core';
import { createNotificationsStore, notifications, Notifications } from '@mantine/notifications';

const store = createNotificationsStore();

function Demo() {
  return (
    <>
      <Notifications store={store} position="top-right" stacked autoClose={false} />

      <Group justify="center">
        <Button
          onClick={() => {
            Array(8)
              .fill(0)
              .forEach((_, index) => {
                setTimeout(() => {
                  notifications.show(
                    {
                      title: \`Notification \${index + 1}\`,
                      message: 'Hover the stack to expand notifications',
                    },
                    store
                  );
                }, index * 150);
              });
          }}
        >
          Show stacked notifications
        </Button>
      </Group>
    </>
  );
}`;

const store = createNotificationsStore();

function Demo() {
  return (
    <>
      <Notifications store={store} position="top-right" stacked autoClose={false} />

      <Group justify="center">
        <Button
          onClick={() => {
            Array(8)
              .fill(0)
              .forEach((_, index) => {
                setTimeout(() => {
                  notifications.show(
                    {
                      title: `Notification ${index + 1}`,
                      message: 'Hover the stack to expand notifications',
                    },
                    store
                  );
                }, index * 150);
              });
          }}
        >
          Show stacked notifications
        </Button>
      </Group>
    </>
  );
}

export const stacked: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
