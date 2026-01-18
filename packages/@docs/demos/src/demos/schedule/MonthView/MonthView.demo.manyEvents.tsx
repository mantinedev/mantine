import { MonthView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { manyEvents } from './_data';

const code = `
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} />;
}
`;

function Demo() {
  return <MonthView date={new Date()} events={manyEvents} />;
}

export const manyEvents: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
