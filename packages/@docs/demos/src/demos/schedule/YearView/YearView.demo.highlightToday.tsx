import { YearView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { regularEvents } from './_data';

const code = `
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} highlightToday={false} />;
}
`;

function Demo() {
  return <YearView date={new Date()} events={regularEvents} highlightToday={false} />;
}

export const highlightToday: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
