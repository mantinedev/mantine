import { WeekView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { overlappingEvents } from './_data';

const code = `
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
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
    <WeekView
      date={new Date()}
      events={overlappingEvents}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}

export const overlappingEvents: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
