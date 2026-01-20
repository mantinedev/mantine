import { DayView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { regularEvents } from './_data';

const code = `
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      startTime="09:00:00"
      endTime="17:00:00"
    />
  );
}
`;

function Demo() {
  return (
    <DayView date={new Date()} events={regularEvents} startTime="09:00:00" endTime="17:00:00" />
  );
}

export const timeRange: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
