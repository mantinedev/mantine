import { DayView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { DayViewStylesApi } from '@docs/styles-api';
import { regularEvents } from './_data';

const code = `
import { DayView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <DayView{{props}}
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
    <DayView
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
  data: DayViewStylesApi,
  component: Demo,
  code,
};
