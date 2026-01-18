import { Schedule } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { ScheduleStylesApi } from '@docs/styles-api';
import { events } from './_data';

const code = `
import { Schedule } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <Schedule{{props}} events={events} />;
}
`;

function Demo(props: any) {
  return <Schedule events={events} {...props} />;
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: ScheduleStylesApi,
  component: Demo,
  code,
};
