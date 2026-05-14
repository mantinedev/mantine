import dayjs from 'dayjs';
import { MonthPickerInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import dayjs from 'dayjs';
import { MonthPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <MonthPickerInput
      label="With presets"
      placeholder="Select month"
      presets={[
        { value: dayjs().startOf('month').format('YYYY-MM-DD'), label: 'This month' },
        { value: dayjs().add(1, 'month').startOf('month').format('YYYY-MM-DD'), label: 'Next month' },
        { value: dayjs().subtract(1, 'month').startOf('month').format('YYYY-MM-DD'), label: 'Last month' },
        { value: dayjs().add(6, 'month').startOf('month').format('YYYY-MM-DD'), label: 'In 6 months' },
        { value: dayjs().add(1, 'year').startOf('month').format('YYYY-MM-DD'), label: 'Next year' },
        { value: dayjs().subtract(1, 'year').startOf('month').format('YYYY-MM-DD'), label: 'Last year' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <MonthPickerInput
      label="With presets"
      placeholder="Select month"
      presets={[
        { value: dayjs().startOf('month').format('YYYY-MM-DD'), label: 'This month' },
        {
          value: dayjs().add(1, 'month').startOf('month').format('YYYY-MM-DD'),
          label: 'Next month',
        },
        {
          value: dayjs().subtract(1, 'month').startOf('month').format('YYYY-MM-DD'),
          label: 'Last month',
        },
        {
          value: dayjs().add(6, 'month').startOf('month').format('YYYY-MM-DD'),
          label: 'In 6 months',
        },
        {
          value: dayjs().add(1, 'year').startOf('month').format('YYYY-MM-DD'),
          label: 'Next year',
        },
        {
          value: dayjs().subtract(1, 'year').startOf('month').format('YYYY-MM-DD'),
          label: 'Last year',
        },
      ]}
    />
  );
}

export const presets: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
