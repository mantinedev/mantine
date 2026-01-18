import { WeekView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { businessEvents } from './_data';

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
      highlightBusinessHours
      businessHours={['09:00:00', '17:00:00']}
    />
  );
}
`;

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={businessEvents}
      startTime="08:00:00"
      endTime="18:00:00"
      highlightBusinessHours
      businessHours={['09:00:00', '17:00:00']}
    />
  );
}

export const businessHours: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
