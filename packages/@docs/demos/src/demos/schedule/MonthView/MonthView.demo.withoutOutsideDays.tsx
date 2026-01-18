import { MonthView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { regularEvents } from './_data';

const code = `
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} withOutsideDays={false} />;
}
`;

function Demo() {
  return <MonthView date={new Date()} events={regularEvents} withOutsideDays={false} />;
}

export const withoutOutsideDays: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
