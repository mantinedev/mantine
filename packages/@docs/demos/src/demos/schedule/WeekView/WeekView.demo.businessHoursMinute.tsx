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
      highlightBusinessHours
      businessHours={['07:42', '19:01']}
      intervalMinutes={30}
    />
  );
}
`;

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={businessEvents}
      highlightBusinessHours
      businessHours={['07:42', '19:01']}
      intervalMinutes={30}
    />
  );
}

export const businessHoursMinute: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code: code,
};
