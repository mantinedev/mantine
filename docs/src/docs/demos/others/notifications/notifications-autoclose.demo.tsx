import React from 'react';
import { ElementsGroup, Button } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { ElementsGroup, Button } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
import { CheckIcon } from '@modulz/radix-icons';

function Demo() {
  const notifications = useNotifications();
  
  return (
    <ElementsGroup position="center">
      <Button variant="outline" onClick={() =>
        notifications.showNotification({ message: 'I will close in 4 seconds' })
      }>
        Notifications Provider timeout
      </Button>

      <Button variant="outline" onClick={() =>
        notifications.showNotification({ autoClose: 500, message: 'I will close in 500ms' })
      }>
        Closes in 500ms
      </Button>

      <Button variant="outline" onClick={() =>
        notifications.showNotification({
          color: 'blue',
          title: 'I will never close',
          message: 'unless you click X',
          autoClose: false,
        })
      }>
        Never closes automatically
      </Button>
    </ElementsGroup>
  );
}`;

export function NotificationsAutoCloseDemo() {
  const notifications = useNotifications();

  return (
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="center">
        <Button
          variant="outline"
          onClick={() => notifications.showNotification({ message: 'I will close in 4 seconds' })}
        >
          Notifications Provider timeout
        </Button>

        <Button
          variant="outline"
          onClick={() =>
            notifications.showNotification({
              message: 'I will close in 500ms',
              autoClose: 500,
            })
          }
        >
          Closes in 500ms
        </Button>

        <Button
          variant="outline"
          onClick={() =>
            notifications.showNotification({
              color: 'blue',
              title: 'I will never close',
              message: 'unless you click X',
              autoClose: false,
            })
          }
        >
          Never closes automatically
        </Button>
      </ElementsGroup>
    </CodeDemo>
  );
}
