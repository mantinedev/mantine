import { Button, Group } from '@mantine/core';
import {
  createNotificationsStore,
  Notifications,
  notifications as notificationsApi,
} from '@mantine/notifications';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Group } from '@mantine/core';
import { Notifications, notifications } from '@mantine/notifications';

function Demo() {
  return (
    <>
      {/* Replace your existing Notifications with layout="stacked" */}
      <Notifications layout="stacked" />
      <Group justify="center">
        <Button
          onClick={() => {
            notifications.show({
              title: 'New notification',
              message: 'This notification is part of a stacked layout',
            });
          }}
        >
          Show stacked notification
        </Button>
      </Group>
    </>
  );
}`;

const store = createNotificationsStore();

function Demo() {
  return (
    <>
      <Notifications store={store} layout="stacked" position="bottom-right" />
      <Group justify="center">
        <Button
          onClick={() => {
            notificationsApi.show(
              {
                title: 'New notification',
                message: 'This notification is part of a stacked layout',
              },
              store
            );
          }}
        >
          Show stacked notification
        </Button>
      </Group>
    </>
  );
}

export const stacked: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
