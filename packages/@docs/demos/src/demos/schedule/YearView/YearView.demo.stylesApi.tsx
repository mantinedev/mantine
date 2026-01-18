import { YearView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { YearViewStylesApi } from '@docs/styles-api';
import { regularEvents } from './_data';

const code = `
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView{{props}} date={new Date()} events={events} />;
}
`;

function Demo(props: any) {
  return <YearView date={new Date()} events={regularEvents} {...props} />;
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: YearViewStylesApi,
  component: Demo,
  code,
};
