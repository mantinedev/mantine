import { Button, Group } from '@mantine/core';
import { createNotificationsStore, notifications, Notifications } from '@mantine/notifications';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Group } from '@mantine/core';
import { createNotificationsStore, notifications, Notifications } from '@mantine/notifications';

// Dedicated store with limit={1} so the priority behavior is easy to see
const store = createNotificationsStore();

function Demo() {
  return (
    <>
      <Notifications store={store} limit={1} position="top-center" />

      <Group justify="center">
        <Button
          color="gray"
          onClick={() =>
            notifications.show(
              {
                title: 'Low priority',
                message: 'I am pushed to the queue when an urgent notification arrives',
                autoClose: false,
                priority: 0,
              },
              store
            )
          }
        >
          Show low priority
        </Button>

        <Button
          color="red"
          onClick={() =>
            notifications.show(
              {
                title: 'High priority',
                message: 'I take the visible slot even when the limit is reached',
                color: 'red',
                autoClose: false,
                priority: 10,
              },
              store
            )
          }
        >
          Show high priority
        </Button>
      </Group>
    </>
  );
}`;

const store = createNotificationsStore();

function Demo() {
  return (
    <>
      <Notifications store={store} limit={1} position="top-center" />

      <Group justify="center">
        <Button
          color="gray"
          onClick={() =>
            notifications.show(
              {
                title: 'Low priority',
                message: 'I am pushed to the queue when an urgent notification arrives',
                autoClose: false,
                priority: 0,
              },
              store
            )
          }
        >
          Show low priority
        </Button>

        <Button
          color="red"
          onClick={() =>
            notifications.show(
              {
                title: 'High priority',
                message: 'I take the visible slot even when the limit is reached',
                color: 'red',
                autoClose: false,
                priority: 10,
              },
              store
            )
          }
        >
          Show high priority
        </Button>
      </Group>
    </>
  );
}

export const priority: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
