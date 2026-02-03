import dayjs from 'dayjs';
import { Box } from '@mantine/core';
import { MobileMonthView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { regularEvents } from './_data';

const code = `
import dayjs from 'dayjs';
import { Box } from '@mantine/core';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <Box style={{ width: 375, height: 500 }}>
      <MobileMonthView
        date={dayjs().format('YYYY-MM-DD')}
        selectedDate={dayjs().format('YYYY-MM-DD')}
        events={events}
        mode="static"
      />
    </Box>
  );
}
`;

function Demo() {
  return (
    <Box style={{ width: 375, height: 500 }}>
      <MobileMonthView
        date={dayjs().format('YYYY-MM-DD')}
        selectedDate={dayjs().format('YYYY-MM-DD')}
        events={regularEvents}
        mode="static"
      />
    </Box>
  );
}

export const staticMode: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
