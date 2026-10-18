import { DayView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { businessEvents, businessEventsCode } from './_data';

const code = `
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={events}
      highlightBusinessHours
      businessHours={['07:42', '19:01']}
    />
  );
}
`;

function Demo() {
  return (
    <DayView
      date={new Date()}
      events={businessEvents}
      highlightBusinessHours
      businessHours={['07:42', '19:01']}
    />
  );
}

export const businessHoursMinute: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: businessEventsCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
