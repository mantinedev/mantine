import dayjs from 'dayjs';
import { useState } from 'react';
import { Stack, Text } from '@mantine/core';
import { ResourceMonthView, ScheduleResourceData } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, resourceEvents, resources } from './_data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourceMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={resourceEvents}
      renderResourceLabel={(resource: ScheduleResourceData) => (
        <Stack gap={0} align="center">
          <Text fw={600} size="sm">
            {resource.label}
          </Text>
          <Text size="xs" c="dimmed">
            Office
          </Text>
        </Stack>
      )}
    />
  );
}

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { Stack, Text } from '@mantine/core';
import { ResourceMonthView, ScheduleResourceData } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourceMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      renderResourceLabel={(resource: ScheduleResourceData) => (
        <Stack gap={0} align="center">
          <Text fw={600} size="sm">
            {resource.label}
          </Text>
          <Text size="xs" c="dimmed">
            Office
          </Text>
        </Stack>
      )}
    />
  );
}
`;

export const renderResourceLabel: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
