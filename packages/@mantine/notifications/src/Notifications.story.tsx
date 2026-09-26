import { Button, Group, Text } from '@mantine/core';
import { Notifications } from './Notifications';
import { createNotificationsStore, showNotification } from './notifications.store';

export default { title: 'Notifications' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Group>
        <Button
          onClick={() =>
            showNotification({ message: 'Test', title: 'Test', position: 'bottom-right' })
          }
        >
          bottom-right
        </Button>
        <Button
          onClick={() =>
            showNotification({ message: 'Test', title: 'Test', position: 'bottom-left' })
          }
        >
          bottom-left
        </Button>
        <Button
          onClick={() => showNotification({ message: 'Test', title: 'Test', position: 'top-left' })}
        >
          top-left
        </Button>
        <Button
          onClick={() =>
            showNotification({ message: 'Test', title: 'Test', position: 'top-right' })
          }
        >
          top-right
        </Button>
      </Group>
    </div>
  );
}

const renderStore = createNotificationsStore();

export function RenderNotification() {
  return (
    <div style={{ padding: 40 }}>
      <Notifications
        store={renderStore}
        autoClose={false}
        renderNotification={(notification) => (
          <div
            style={{
              padding: 16,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: 8,
              color: 'white',
            }}
          >
            <Text fw={700} c="white">
              {notification.title as string}
            </Text>
            <Text size="sm" c="white" opacity={0.9}>
              {notification.message}
            </Text>
          </div>
        )}
      />
      <Group>
        <Button
          onClick={() =>
            showNotification(
              { message: 'Custom rendered notification!', title: 'Custom Render' },
              renderStore
            )
          }
        >
          Show custom notification
        </Button>
        <Button
          onClick={() =>
            showNotification(
              {
                message: 'This one uses default rendering',
                title: 'Default Override',
                renderNotification: null,
              },
              renderStore
            )
          }
        >
          Show default (per-notification override)
        </Button>
      </Group>
    </div>
  );
}

const stackedStore = createNotificationsStore();

export function StackedLayout() {
  return (
    <div style={{ padding: 40 }}>
      <Notifications store={stackedStore} autoClose={4000} layout="stacked" position="top-right" />
      <Group>
        <Button
          onClick={() => {
            showNotification(
              { message: `Notification ${Date.now()}`, title: 'Stacked' },
              stackedStore
            );
          }}
        >
          Add stacked notification
        </Button>
      </Group>
    </div>
  );
}

const stackedBottomStore = createNotificationsStore();

export function StackedLayoutBottom() {
  return (
    <div style={{ padding: 40 }}>
      <Notifications
        store={stackedBottomStore}
        autoClose={4000}
        layout="stacked"
        position="bottom-right"
      />
      <Group>
        <Button
          onClick={() => {
            showNotification(
              { message: `Notification ${Date.now()}`, title: 'Bottom Stacked' },
              stackedBottomStore
            );
          }}
        >
          Add bottom stacked notification
        </Button>
      </Group>
    </div>
  );
}
