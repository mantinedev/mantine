import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekPicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { WeekPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return (
    <WeekPicker
      type="range"
      value={value}
      onChange={setValue}
      presets={[
        {
          value: [dayjs().format('YYYY-MM-DD'), dayjs().add(1, 'week').format('YYYY-MM-DD')],
          label: 'Next two weeks',
        },
        {
          value: [dayjs().subtract(3, 'week').format('YYYY-MM-DD'), dayjs().format('YYYY-MM-DD')],
          label: 'Last four weeks',
        },
        {
          value: [dayjs().startOf('month').format('YYYY-MM-DD'), dayjs().endOf('month').format('YYYY-MM-DD')],
          label: 'This month',
        },
      ]}
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return (
    <WeekPicker
      type="range"
      value={value}
      onChange={setValue}
      presets={[
        {
          value: [dayjs().format('YYYY-MM-DD'), dayjs().add(1, 'week').format('YYYY-MM-DD')],
          label: 'Next two weeks',
        },
        {
          value: [dayjs().subtract(3, 'week').format('YYYY-MM-DD'), dayjs().format('YYYY-MM-DD')],
          label: 'Last four weeks',
        },
        {
          value: [
            dayjs().startOf('month').format('YYYY-MM-DD'),
            dayjs().endOf('month').format('YYYY-MM-DD'),
          ],
          label: 'This month',
        },
      ]}
    />
  );
}

export const presetsRange: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
  defaultExpanded: false,
};
