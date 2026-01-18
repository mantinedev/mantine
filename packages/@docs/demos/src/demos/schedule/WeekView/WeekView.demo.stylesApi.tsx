import { WeekView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { WeekViewStylesApi } from '@docs/styles-api';
import { regularEvents } from './_data';

const code = `
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView{{props}}
      date={new Date()}
      events={events}
      startTime="08:00:00"
      endTime="18:00:00"
    />
  );
}
`;

function Demo(props: any) {
  return (
    <WeekView
      date={new Date()}
      events={regularEvents}
      startTime="08:00:00"
      endTime="18:00:00"
      {...props}
    />
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: WeekViewStylesApi,
  component: Demo,
  code,
};
