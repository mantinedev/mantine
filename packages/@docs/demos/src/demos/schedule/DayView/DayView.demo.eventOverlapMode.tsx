import { useState } from 'react';
import { SegmentedControl, Stack } from '@mantine/core';
import { DayView, ScheduleEventOverlapMode } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { denseOverlappingEvents } from './_data';

const code = `
import { useState } from 'react';
import { SegmentedControl, Stack } from '@mantine/core';
import { DayView, ScheduleEventOverlapMode } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [mode, setMode] = useState<ScheduleEventOverlapMode>('cascade');

  return (
    <Stack>
      <SegmentedControl
        value={mode}
        onChange={(value) => setMode(value as ScheduleEventOverlapMode)}
        data={[
          { value: 'columns', label: 'columns' },
          { value: 'cascade', label: 'cascade' },
        ]}
      />

      <DayView
        date={new Date()}
        events={events}
        startTime="08:00:00"
        endTime="14:00:00"
        eventOverlapMode={mode}
      />
    </Stack>
  );
}
`;

function Demo() {
  const [mode, setMode] = useState<ScheduleEventOverlapMode>('cascade');

  return (
    <Stack>
      <SegmentedControl
        value={mode}
        onChange={(value) => setMode(value as ScheduleEventOverlapMode)}
        data={[
          { value: 'columns', label: 'columns' },
          { value: 'cascade', label: 'cascade' },
        ]}
      />

      <DayView
        date={new Date()}
        events={denseOverlappingEvents}
        startTime="08:00:00"
        endTime="14:00:00"
        eventOverlapMode={mode}
      />
    </Stack>
  );
}

export const eventOverlapMode: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code,
};
