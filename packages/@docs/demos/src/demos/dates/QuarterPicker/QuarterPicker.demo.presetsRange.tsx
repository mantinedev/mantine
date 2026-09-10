import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import { useState } from 'react';
import { QuarterPicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

dayjs.extend(quarterOfYear);

const code = `
import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import { useState } from 'react';
import { QuarterPicker } from '@mantine/dates';

dayjs.extend(quarterOfYear);

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return (
    <QuarterPicker
      type="range"
      value={value}
      onChange={setValue}
      presets={[
        {
          value: [dayjs().startOf('year').format('YYYY-MM-DD'), dayjs().startOf('quarter').format('YYYY-MM-DD')],
          label: 'Year to date',
        },
        {
          value: [dayjs().startOf('year').format('YYYY-MM-DD'), dayjs().startOf('year').add(9, 'month').format('YYYY-MM-DD')],
          label: 'This year',
        },
        {
          value: [dayjs().subtract(1, 'year').startOf('year').format('YYYY-MM-DD'), dayjs().subtract(1, 'year').startOf('year').add(9, 'month').format('YYYY-MM-DD')],
          label: 'Last year',
        },
        {
          value: [dayjs().startOf('quarter').format('YYYY-MM-DD'), dayjs().add(1, 'quarter').startOf('quarter').format('YYYY-MM-DD')],
          label: 'Next two quarters',
        },
      ]}
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return (
    <QuarterPicker
      type="range"
      value={value}
      onChange={setValue}
      presets={[
        {
          value: [
            dayjs().startOf('year').format('YYYY-MM-DD'),
            dayjs().startOf('quarter').format('YYYY-MM-DD'),
          ],
          label: 'Year to date',
        },
        {
          value: [
            dayjs().startOf('year').format('YYYY-MM-DD'),
            dayjs().startOf('year').add(9, 'month').format('YYYY-MM-DD'),
          ],
          label: 'This year',
        },
        {
          value: [
            dayjs().subtract(1, 'year').startOf('year').format('YYYY-MM-DD'),
            dayjs().subtract(1, 'year').startOf('year').add(9, 'month').format('YYYY-MM-DD'),
          ],
          label: 'Last year',
        },
        {
          value: [
            dayjs().startOf('quarter').format('YYYY-MM-DD'),
            dayjs().add(1, 'quarter').startOf('quarter').format('YYYY-MM-DD'),
          ],
          label: 'Next two quarters',
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
