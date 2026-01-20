import { DayView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { allDayEvents as allDayEventsData } from './_data';

const code = `
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`;

function Demo() {
  return (
    <DayView date={new Date()} events={allDayEventsData} startTime="08:00:00" endTime="18:00:00" />
  );
}

export const allDayEvents: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
