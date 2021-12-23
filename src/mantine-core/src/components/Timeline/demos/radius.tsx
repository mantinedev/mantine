import React from 'react';
import { Timeline } from '..';

const code = `
<Timeline radius="md">
  <Timeline.Item title="Parent radius" />
  <Timeline.Item title="xs" radius="xs" />
  <Timeline.Item title="sm" radius="sm" />
  <Timeline.Item title="md" radius="md" />
  <Timeline.Item title="lg" radius="lg" />
  <Timeline.Item title="xl" radius="xl" />
</Timeline>
`;

function Demo() {
  return (
    <Timeline radius="md">
      <Timeline.Item title="Parent radius" />
      <Timeline.Item title="xs" radius="xs" />
      <Timeline.Item title="sm" radius="sm" />
      <Timeline.Item title="md" radius="md" />
      <Timeline.Item title="lg" radius="lg" />
      <Timeline.Item title="xl" radius="xl" />
    </Timeline>
  );
}

export const radius: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
