import React from 'react';
import { Title } from '@mantine/core';
import { Prism } from '@mantine/prism';
import * as NotificationDemos from '@demos/notifications';
import Demo from '../../../Demo/Demo';
import { LinkTitle } from './LinkTitle';

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
    <>
      <LinkTitle title="Notification system features" link="/others/notifications/" />
      <Demo data={NotificationDemos.root} />
      <Title order={4} style={{ marginBottom: 10 }}>
        Clean and simple API
      </Title>
      <Prism noCopy language="tsx">
        {code}
      </Prism>
    </>
  );
}
