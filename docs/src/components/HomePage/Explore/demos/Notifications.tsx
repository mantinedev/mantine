import React from 'react';
import { Link } from 'gatsby';
import { ArrowRightIcon } from '@modulz/radix-icons';
import { Title, Anchor, Group } from '@mantine/core';
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
    <div>
      <Group position="apart" spacing={0}>
        <Title order={3}>Notification system features</Title>
        <Anchor component={Link} to="/others/notifications/">
          Get started <ArrowRightIcon style={{ width: 12, height: 12 }} />
        </Anchor>
      </Group>
      <Demo data={NotificationDemos.root} />
      <Title order={3} style={{ marginBottom: 12 }}>
        Clean and simple API
      </Title>
      <Prism noCopy language="tsx">
        {code}
      </Prism>
    </div>
  );
}
