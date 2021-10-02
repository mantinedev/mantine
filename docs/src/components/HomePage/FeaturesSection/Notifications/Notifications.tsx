import React from 'react';
import { Section } from '../Section/Section';
import { NotificationsDemo } from './NotificationsDemo';

export function Notifications() {
  return (
    <Section
      title="Notifications system"
      description="Add dark theme to your application with just a few lines of code – Mantine exports global styles both for light and dark theme, all components support dark theme out of the box."
      link="/others/notifications/"
      label="Get started with @mantine/notifications"
    >
      <NotificationsDemo />
    </Section>
  );
}
