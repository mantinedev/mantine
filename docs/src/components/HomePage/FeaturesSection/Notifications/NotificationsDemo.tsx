import React from 'react';
import { Paper } from '@mantine/core';
import { Prism } from '@mantine/prism';
import * as NotificationDemos from '@demos/notifications';
import Demo from '../../../Demo/Demo';

const code = `import { Button } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';

function Demo() {
  const notifications = useNotifications();
  const showNotification = () => notifications.showNotification({
    title: 'Default notification',
    message: 'Hey there, your code is awesome! 🤥',
  });

  return (
    <Button onClick={showNotification}>
      Show notification
    </Button>
  );
}`;

export function NotificationsDemo() {
  return (
    <Paper shadow="md" padding={30} radius="md">
      <Demo data={NotificationDemos.root} demoProps={{ inline: true }} />
      <Prism noCopy language="tsx">
        {code}
      </Prism>
    </Paper>
  );
}
