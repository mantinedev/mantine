import React, { useState } from 'react';
import { Group, MediaQuery, Text } from '@mantine/core';
import { RangeCalendar } from '@mantine/dates';

const code = `
<RangeCalendar amountOfMonths={2} />
`;

function Demo() {
  const [value, setValue] = useState<[Date, Date]>([new Date(2021, 11, 1), new Date(2022, 0, 15)]);

  return (
    <>
      <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
        <Group position="center">
          <RangeCalendar
            amountOfMonths={2}
            value={value}
            onChange={setValue}
            initialMonth={new Date(2021, 11, 1)}
          />
        </Group>
      </MediaQuery>
      <MediaQuery largerThan="md" styles={{ display: 'none' }}>
        <Text align="center">Demo is not available, increase viewport size to see it</Text>
      </MediaQuery>
    </>
  );
}

export const multipleMonths: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
