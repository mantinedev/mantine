import React from 'react';
import { Group, Badge } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { useIdle } from '@mantine/hooks';

const eventsCode = `
import { Badge } from '@mantine/core';
import { useIdle } from '@mantine/hooks';

function Demo() {
  const idle = useIdle(2000, { events: ['click', 'touchstart'] });
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function EventsDemo() {
  const idle = useIdle(2000, { events: ['click', 'touchstart'] });

  return (
    <Group position="center">
      <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>
    </Group>
  );
}

export const useIdleEvents: MantineDemo = {
  type: 'demo',
  code: eventsCode,
  component: EventsDemo,
};
