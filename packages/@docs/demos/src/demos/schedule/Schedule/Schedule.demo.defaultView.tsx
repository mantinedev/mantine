import { Schedule } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { events } from './_data';

const code = `
import { Schedule } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <Schedule events={events} defaultView="month" />;
}
`;

function Demo() {
  return <Schedule events={events} defaultView="month" />;
}

export const defaultView: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
