import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekPicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <WeekPicker
      value={value}
      onChange={setValue}
      minDate={dayjs().subtract(2, 'week').format('YYYY-MM-DD')}
      maxDate={dayjs().add(2, 'week').format('YYYY-MM-DD')}
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <WeekPicker
      value={value}
      onChange={setValue}
      minDate={dayjs().subtract(2, 'week').format('YYYY-MM-DD')}
      maxDate={dayjs().add(2, 'week').format('YYYY-MM-DD')}
    />
  );
}

export const minMax: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
