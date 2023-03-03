import React, { useState } from 'react';
import { MantineDemo } from '@mantine/ds';
import { Group, MediaQuery, Text } from '@mantine/core';

const getCode = (name: string) => `
import { useState } from 'react';
import { Group } from '@mantine/core';
import { ${name} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <Group position="center">
      <${name} type="range" numberOfColumns={2} value={value} onChange={setValue} />
    </Group>
  );
}
`;

function getDemo(Component: React.FC<any>) {
  return () => {
    const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
    return (
      <>
        <MediaQuery styles={{ display: 'none' }} smallerThan="sm">
          <Group position="center">
            <Component type="range" numberOfColumns={2} value={value} onChange={setValue} />
          </Group>
        </MediaQuery>
        <MediaQuery styles={{ display: 'none' }} largerThan="sm">
          <Text ta="center">
            Demo is not available on small screens. Make your screen larger to see demo.
          </Text>
        </MediaQuery>
      </>
    );
  };
}

export function getPickerNumberOfColumnsDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'demo',
    code: getCode(Component.displayName.replace('@mantine/dates/', '')),
    component: getDemo(Component),
  };
}
