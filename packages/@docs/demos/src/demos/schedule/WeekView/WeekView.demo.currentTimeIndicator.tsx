import { WeekView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { regularEvents } from './_data';

const code = `
import { WeekView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={events}
      withCurrentTimeIndicator
      withCurrentTimeBubble
    />
  );
}
`;

function Demo() {
  return (
    <WeekView
      date={new Date()}
      events={regularEvents}
      withCurrentTimeIndicator
      withCurrentTimeBubble
    />
  );
}

export const currentTimeIndicator: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
