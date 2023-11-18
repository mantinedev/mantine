import React, { useState } from 'react';
import { MantineDemo } from '@mantine/ds';
import { YearPicker } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker yearsListFormat="YY" value={value} onChange={setValue} />;
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return <YearPicker yearsListFormat="YY" value={value} onChange={setValue} />;
}

export const yearsListFormat: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
