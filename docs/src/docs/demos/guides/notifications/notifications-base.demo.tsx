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
        onClick={() =>
          notifications.showNotification({
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
          })
        }
      >
        Show notification
      </Button>
    </ElementsGroup>
  );
}`;

export function NotificationsBaseDemo() {
  const notifications = useNotifications();

  return (
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="center">
        <Button
          variant="outline"
          onClick={() =>
            notifications.showNotification({
              title: 'Default notification',
              message: 'Hey there, your code is awesome! 🤥',
            })
          }
        >
          Show notification
        </Button>
      </ElementsGroup>
    </CodeDemo>
  );
}
