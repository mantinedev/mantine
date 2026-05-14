import { useState } from 'react';
import { Button, Group, Paper, Text } from '@mantine/core';
import { useDrag } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Group, Paper, Text } from '@mantine/core';
import { useDrag } from '@mantine/hooks';

interface NotificationItem {
  id: number;
  text: string;
}

function SwipeNotification({
  notification,
  onDismiss,
}: {
  notification: NotificationItem;
  onDismiss: (id: number) => void;
}) {
  const [offset, setOffset] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  const { ref, active } = useDrag(
    (state) => {
      if (state.last) {
        const shouldDismiss =
          Math.abs(state.movement[0]) > 120 || state.velocity[0] > 0.5;
        if (shouldDismiss) {
          setDismissed(true);
          setTimeout(() => onDismiss(notification.id), 300);
        } else {
          setOffset(0);
        }
      } else {
        setOffset(state.movement[0]);
      }
    },
    { axis: 'x', threshold: 5, filterTaps: true }
  );

  return (
    <Paper
      ref={ref}
      p="sm"
      mb="xs"
      withBorder
      radius="md"
      style={{
        transform: dismissed
          ? \`translateX(\${offset > 0 ? 400 : -400}px)\`
          : \`translateX(\${offset}px)\`,
        opacity: dismissed ? 0 : 1 - Math.min(Math.abs(offset) / 200, 1) * 0.6,
        transition: active ? 'none' : 'transform 300ms ease, opacity 300ms ease',
        cursor: active ? 'grabbing' : 'grab',
        touchAction: 'pan-y',
        userSelect: 'none',
      }}
    >
      {notification.text}
    </Paper>
  );
}

const initialItems: NotificationItem[] = [
  { id: 1, text: 'New message from Alice' },
  { id: 2, text: 'Build succeeded' },
  { id: 3, text: 'Deployment complete' },
  { id: 4, text: 'Review requested' },
];

function Demo() {
  const [notifications, setNotifications] = useState(initialItems);

  return (
    <div style={{ height: 300 }}>
      {notifications.map((n) => (
        <SwipeNotification
          key={n.id}
          notification={n}
          onDismiss={(id) =>
            setNotifications((items) => items.filter((item) => item.id !== id))
          }
        />
      ))}

      {notifications.length === 0 && (
        <Text ta="center" c="dimmed" py="md">All cleared!</Text>
      )}

      <Group justify="center" mt="md">
        <Button onClick={() => setNotifications(initialItems)}>
          Reset
        </Button>
      </Group>
    </div>
  );
}
`;

interface NotificationItem {
  id: number;
  text: string;
}

function SwipeNotification({
  notification,
  onDismiss,
}: {
  notification: NotificationItem;
  onDismiss: (id: number) => void;
}) {
  const [offset, setOffset] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  const { ref, active } = useDrag(
    (state) => {
      if (state.last) {
        const shouldDismiss = Math.abs(state.movement[0]) > 120 || state.velocity[0] > 0.5;
        if (shouldDismiss) {
          setDismissed(true);
          setTimeout(() => onDismiss(notification.id), 300);
        } else {
          setOffset(0);
        }
      } else {
        setOffset(state.movement[0]);
      }
    },
    { axis: 'x', threshold: 5, filterTaps: true }
  );

  return (
    <Paper
      ref={ref}
      p="sm"
      mb="xs"
      radius="md"
      withBorder
      style={{
        transform: dismissed
          ? `translateX(${offset > 0 ? 400 : -400}px)`
          : `translateX(${offset}px)`,
        opacity: dismissed ? 0 : 1 - Math.min(Math.abs(offset) / 200, 1) * 0.6,
        transition: active ? 'none' : 'transform 300ms ease, opacity 300ms ease',
        cursor: active ? 'grabbing' : 'grab',
        touchAction: 'pan-y',
        userSelect: 'none',
      }}
    >
      {notification.text}
    </Paper>
  );
}

const initialItems: NotificationItem[] = [
  { id: 1, text: 'New message from Alice' },
  { id: 2, text: 'Build succeeded' },
  { id: 3, text: 'Deployment complete' },
  { id: 4, text: 'Review requested' },
];

function Demo() {
  const [notifications, setNotifications] = useState(initialItems);

  return (
    <div style={{ height: 300 }}>
      {notifications.map((n) => (
        <SwipeNotification
          key={n.id}
          notification={n}
          onDismiss={(id) => setNotifications((items) => items.filter((item) => item.id !== id))}
        />
      ))}

      {notifications.length === 0 && (
        <Text ta="center" c="dimmed" py="md">
          All cleared!
        </Text>
      )}

      <Group justify="center" mt="md">
        <Button onClick={() => setNotifications(initialItems)}>Reset</Button>
      </Group>
    </div>
  );
}

export const swipe: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
  maxWidth: 400,
};
