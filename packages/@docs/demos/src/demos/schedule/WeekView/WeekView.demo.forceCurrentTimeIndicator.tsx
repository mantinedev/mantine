import { WeekView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { regularEvents } from './_data';

const code = `
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date="2030-06-10"
      events={events}
      withCurrentTimeIndicator
      forceCurrentTimeIndicator
    />
  );
}
`;

function Demo() {
  return (
    <WeekView
      date="2030-06-10"
      events={regularEvents}
      withCurrentTimeIndicator
      forceCurrentTimeIndicator
    />
  );
}

export const forceCurrentTimeIndicator: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code,
};
