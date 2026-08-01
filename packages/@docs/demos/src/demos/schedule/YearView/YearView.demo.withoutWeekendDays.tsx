import { YearView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { regularEvents } from './_data';

const code = `
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} withWeekendDays={false} />;
}
`;

function Demo() {
  return <YearView date={new Date()} events={regularEvents} withWeekendDays={false} />;
}

export const withoutWeekendDays: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code,
};
