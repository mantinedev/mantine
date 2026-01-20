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
    <DayView
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
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: businessEventsCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
