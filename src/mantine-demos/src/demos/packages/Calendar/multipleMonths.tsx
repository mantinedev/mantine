import React, { useState } from 'react';
import { Group, MediaQuery, Text } from '@mantine/core';
import { Calendar } from '@mantine/dates';

const code = `
<Calendar amountOfMonths={2} />
`;

function Demo() {
  const [value, setValue] = useState(null);
  return (
    <>
      <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
        <Group position="center">
          <Calendar amountOfMonths={2} value={value} onChange={setValue} />
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
