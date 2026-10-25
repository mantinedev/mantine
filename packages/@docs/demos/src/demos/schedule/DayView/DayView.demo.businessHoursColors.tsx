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
      vars={() => ({
        dayView: {
          '--day-view-business-hours-bg': 'var(--mantine-color-yellow-light)',
          '--day-view-non-business-hours-bg': 'var(--mantine-color-blue-light)',
        },
      })}
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
      vars={() => ({
        dayView: {
          '--day-view-business-hours-bg': 'var(--mantine-color-yellow-light)',
          '--day-view-non-business-hours-bg': 'var(--mantine-color-blue-light)',
        },
      })}
    />
  );
}

export const businessHoursColors: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: businessEventsCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
