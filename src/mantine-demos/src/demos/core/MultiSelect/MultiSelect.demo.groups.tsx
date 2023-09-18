import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { MultiSelect } from '@mantine/core';

const code = `
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Express', 'Django'] },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Express', 'Django'] },
      ]}
    />
  );
}

export const groups: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
