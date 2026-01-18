import { MonthView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { regularEvents } from './_data';

const code = `
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} weekdayFormat="ddd" />;
}
`;

function Demo() {
  return <MonthView date={new Date()} events={regularEvents} weekdayFormat="ddd" />;
}

export const weekdayFormat: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
