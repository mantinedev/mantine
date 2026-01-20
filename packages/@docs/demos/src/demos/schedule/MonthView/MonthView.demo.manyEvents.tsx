import { MonthView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { manyEvents as manyEventsData } from './_data';

const code = `
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} />;
}
`;

function Demo() {
  return <MonthView date={new Date()} events={manyEventsData} />;
}

export const manyEvents: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
