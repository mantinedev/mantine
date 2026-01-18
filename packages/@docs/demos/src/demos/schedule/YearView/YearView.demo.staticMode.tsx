import { YearView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { regularEvents } from './_data';

const code = `
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} mode="static" />;
}
`;

function Demo() {
  return <YearView date={new Date()} events={regularEvents} mode="static" />;
}

export const staticMode: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
