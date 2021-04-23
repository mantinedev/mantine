import React from 'react';
import { ElementsGroup, Button } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { ElementsGroup, Button } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';

function Demo() {
  const notifications = useNotifications();
  
  return (
    <ElementsGroup position="center">
      <Button
        variant="outline"
        onClick={() => {
          Array(10)
            .fill(0)
            .forEach((_, index) => {
              notifications.showNotification({
                title: \`Notification \${index + 1}\`,
                message: 'Most notifications are added to queue',
                autoClose: false,
              });
            });
        }}
      >
        Show 10 notifications
      </Button>

      <Button variant="outline" color="gray" onClick={() => notifications.cleanQueue()}>
        Clean queue
      </Button>

      <Button variant="outline" color="red" onClick={() => notifications.clean()}>
        Clean all
      </Button>
    </ElementsGroup>
  );
}`;

export function NotificationsCleanDemo({ noCode = false }: { noCode: boolean }) {
  const notifications = useNotifications();

  return (
    <CodeDemo code={!noCode ? code : null} language="tsx">
      <ElementsGroup position="center">
        <Button
          variant="outline"
          onClick={() => {
            Array(10)
              .fill(0)
              .forEach((_, index) => {
                notifications.showNotification({
                  title: `Notification ${index + 1}`,
                  message: 'Most notifications are added to queue',
                  autoClose: false,
                });
              });
          }}
        >
          Show 10 notifications
        </Button>

        <Button variant="outline" color="gray" onClick={() => notifications.cleanQueue()}>
          Clean queue
        </Button>

        <Button variant="outline" color="red" onClick={() => notifications.clean()}>
          Clean all
        </Button>
      </ElementsGroup>
    </CodeDemo>
  );
}
