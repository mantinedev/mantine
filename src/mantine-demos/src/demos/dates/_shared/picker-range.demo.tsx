import React, { useState } from 'react';
import { MantineDemo } from '@mantine/ds';
import { Group } from '@mantine/core';

const getCode = (name: string) => `
import { useState } from 'react';
import { Group } from '@mantine/core';
import { ${name} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <Group position="center">
      <${name} type="range" value={value} onChange={setValue} />
    </Group>
  );
}
`;

function getDemo(Component: React.FC<any>) {
  return () => {
    const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
    return (
      <Group position="center">
        <Component type="range" value={value} onChange={setValue} />
      </Group>
    );
  };
}

export function getPickerRangeDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'demo',
    code: getCode(Component.displayName.replace('@mantine/dates/', '')),
    component: getDemo(Component),
  };
}
