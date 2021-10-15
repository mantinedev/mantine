import React from 'react';
import { Section } from '../Section/Section';
import { NotificationsDemo } from './NotificationsDemo';

export function Notifications() {
  return (
    <Section
      title="Notifications system"
      description="A fully featured notifications system integrates seamlessly with your Mantine theme."
      link="/others/notifications/"
      label="Get started with @mantine/notifications"
    >
      <NotificationsDemo />
    </Section>
  );
}
