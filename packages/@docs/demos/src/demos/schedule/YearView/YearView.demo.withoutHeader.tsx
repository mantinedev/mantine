import { YearView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { regularEvents } from './_data';

const code = `
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} withHeader={false} />;
}
`;

function Demo() {
  return <YearView date={new Date()} events={regularEvents} withHeader={false} />;
}

export const withoutHeader: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
