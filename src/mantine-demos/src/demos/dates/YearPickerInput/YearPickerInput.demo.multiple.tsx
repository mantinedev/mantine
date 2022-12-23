import React, { useState } from 'react';
import { MantineDemo } from '@mantine/ds';
import { YearPickerInput } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date[]>([]);
  return (
    <YearPickerInput
      type="multiple"
      placeholder="Pick multiple years"
      label="Pick multiple years"
      value={value}
      onChange={setValue}
      mx="auto"
      maw={400}
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date[]>([]);
  return (
    <YearPickerInput
      type="multiple"
      placeholder="Pick multiple years"
      label="Pick multiple years"
      value={value}
      onChange={setValue}
      mx="auto"
      maw={400}
    />
  );
}

export const multiple: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
