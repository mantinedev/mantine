import React from 'react';
import { Group, Button } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Group, Button } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';

function Demo() {
  const notifications = useNotifications();

  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() => {
          Array(10).fill(0).forEach((_, index) => {
            setTimeout(() => {
              notifications.showNotification({
                title: \`Notification \${index + 1}\`,
                message: 'Most notifications are added to queue',
              });
            }, 200 * index);
          });
        }}
      >
        Show 10 notifications
      </Button>
    </Group>
  );
}`;

export function NotificationsLimitDemo() {
  const notifications = useNotifications();

  return (
    <CodeDemo code={code} language="tsx">
      <Group position="center">
        <Button
          variant="outline"
          onClick={() => {
            Array(10)
              .fill(0)
              .forEach((_, index) => {
                setTimeout(() => {
                  notifications.showNotification({
                    title: `Notification ${index + 1}`,
                    message: 'Most notifications are added to queue',
                  });
                }, 200 * index);
              });
          }}
        >
          Show 10 notifications
        </Button>
      </Group>
    </CodeDemo>
  );
}
