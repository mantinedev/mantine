import { Button, Group, Text } from '@mantine/core';
import { Notifications } from './Notifications';
import {
  createNotificationsStore,
  notifications,
  PromiseNotificationOptions,
  promiseNotification,
  showNotification,
} from './notifications.store';

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

const progressStore = createNotificationsStore();

export function AutoCloseProgress() {
  return (
    <div style={{ padding: 40 }}>
      <Notifications store={progressStore} autoClose={5000} withAutoCloseProgress />
      <Group>
        <Button
          onClick={() =>
            showNotification({ title: 'Default 5s', message: 'Closes in 5 seconds' }, progressStore)
          }
        >
          Show (5s)
        </Button>
        <Button
          onClick={() =>
            showNotification(
              { title: 'Per notification 10s', message: 'Closes in 10 seconds', autoClose: 10000 },
              progressStore
            )
          }
        >
          Show (10s)
        </Button>
        <Button
          color="red"
          onClick={() =>
            showNotification(
              { title: 'Red', message: 'Progress uses notification color', color: 'red' },
              progressStore
            )
          }
        >
          Red
        </Button>
        <Button
          variant="default"
          onClick={() =>
            showNotification(
              {
                title: 'Without progress',
                message: 'withAutoCloseProgress: false overrides the Notifications prop',
                withAutoCloseProgress: false,
              },
              progressStore
            )
          }
        >
          Without progress
        </Button>
        <Button
          variant="default"
          onClick={() =>
            showNotification(
              {
                title: 'Never closes',
                message: 'No progress for autoClose: false',
                autoClose: false,
              },
              progressStore
            )
          }
        >
          Never closes
        </Button>
        <Button
          variant="default"
          onClick={() =>
            showNotification(
              {
                title: 'With title and icon',
                message:
                  'Long message that wraps to multiple lines to check that the progress line stays at the bottom of the notification regardless of its height',
                icon: '✓',
                color: 'teal',
              },
              progressStore
            )
          }
        >
          Tall notification
        </Button>
      </Group>
    </div>
  );
}

const stackedProgressStore = createNotificationsStore();

export function AutoCloseProgressStacked() {
  return (
    <div style={{ padding: 40 }}>
      <Notifications
        store={stackedProgressStore}
        autoClose={6000}
        layout="stacked"
        position="top-right"
        withAutoCloseProgress
      />
      <Group>
        <Button
          onClick={() =>
            showNotification(
              { title: 'Stacked', message: `Notification ${Date.now()}` },
              stackedProgressStore
            )
          }
        >
          Add stacked notification
        </Button>
      </Group>
    </div>
  );
}

export function AutoCloseProgressRtl() {
  return (
    <div style={{ padding: 40 }} dir="rtl">
      <Notifications store={progressStore} autoClose={5000} withAutoCloseProgress />
      <Button
        onClick={() =>
          showNotification(
            { title: 'RTL', message: 'Progress fills from the right' },
            progressStore
          )
        }
      >
        Show RTL notification
      </Button>
    </div>
  );
}

const promiseStore = createNotificationsStore();

function fakeRequest(shouldFail: boolean, delay = 2000) {
  return new Promise<{ name: string }>((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('Network error'));
      } else {
        resolve({ name: 'report.pdf' });
      }
    }, delay);
  });
}

export function PromiseNotification() {
  const run = (
    shouldFail: boolean,
    extra?: Partial<PromiseNotificationOptions<{ name: string }>>
  ) =>
    promiseNotification(
      fakeRequest(shouldFail),
      {
        loading: { title: 'Saving document', message: 'Please wait' },
        success: (value) => ({ title: 'Saved', message: `${value.name} was saved` }),
        error: (error) => ({ title: 'Failed', message: (error as Error).message }),
        ...extra,
      },
      promiseStore
    );

  return (
    <div style={{ padding: 40 }}>
      <Notifications store={promiseStore} withAutoCloseProgress />
      <Group>
        <Button onClick={() => run(false)}>Resolve</Button>
        <Button color="red" onClick={() => run(true)}>
          Reject
        </Button>
        <Button variant="default" onClick={() => run(false, { id: 'same-id' })}>
          Resolve (fixed id, click twice)
        </Button>
        <Button
          variant="default"
          onClick={() =>
            run(false, {
              success: { message: 'Custom color, no title', color: 'grape', autoClose: 1000 },
            })
          }
        >
          Resolve (overrides)
        </Button>
        <Button
          variant="default"
          onClick={() => {
            run(true);
            setTimeout(() => notifications.clean(promiseStore), 500);
          }}
        >
          Reject after loading was closed
        </Button>
      </Group>
    </div>
  );
}
