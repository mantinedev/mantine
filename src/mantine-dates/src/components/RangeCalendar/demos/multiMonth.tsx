import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Group, MediaQuery, Text } from '@mantine/core';
import { RangeCalendar } from '../RangeCalendar';

const code = `
<RangeCalendar amountOfMonths={2} />
`;

function Demo() {
  const [value, setValue] = useState<[Date, Date]>([
    dayjs(new Date()).startOf('month').toDate(),
    dayjs(new Date()).startOf('month').add(45, 'days').toDate(),
  ]);

  return (
    <>
      <MediaQuery largerThan="md" styles={{ display: 'none' }}>
        <Group position="center">
          <RangeCalendar amountOfMonths={2} value={value} onChange={setValue} />
        </Group>
      </MediaQuery>
      <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
        <Text align="center">Demo is not available, increase viewport size to see it</Text>
      </MediaQuery>
    </>
  );
}

export const multiMonth: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
