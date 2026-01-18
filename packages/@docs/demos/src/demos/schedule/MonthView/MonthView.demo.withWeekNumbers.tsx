import { MonthView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { regularEvents } from './_data';

const code = `
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} withWeekNumbers />;
}
`;

function Demo() {
  return <MonthView date={new Date()} events={regularEvents} withWeekNumbers />;
}

export const withWeekNumbers: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
