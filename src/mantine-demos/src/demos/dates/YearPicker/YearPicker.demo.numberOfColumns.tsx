import React, { useState } from 'react';
import { MantineDemo } from '@mantine/ds';
import { Group, MediaQuery, Text } from '@mantine/core';
import { YearPicker } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { Group } from '@mantine/core';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <Group position="center">
      <YearPicker type="range" numberOfColumns={2} value={value} onChange={setValue} />
    </Group>
  );
}
`;

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <>
      <MediaQuery styles={{ display: 'none' }} smallerThan="sm">
        <Group position="center">
          <YearPicker type="range" numberOfColumns={2} value={value} onChange={setValue} />
        </Group>
      </MediaQuery>
      <MediaQuery styles={{ display: 'none' }} largerThan="sm">
        <Text ta="center">
          Demo is not available on small screens. Make your screen larger to see demo.
        </Text>
      </MediaQuery>
    </>
  );
}

export const numberOfColumns: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
