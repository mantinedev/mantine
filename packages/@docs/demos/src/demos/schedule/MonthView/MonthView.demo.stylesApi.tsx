import { MonthView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { MonthViewStylesApi } from '@docs/styles-api';
import { regularEvents } from './_data';

const code = `
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView{{props}} date={new Date()} events={events} />;
}
`;

function Demo(props: any) {
  return <MonthView date={new Date()} events={regularEvents} {...props} />;
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: MonthViewStylesApi,
  component: Demo,
  code,
};
