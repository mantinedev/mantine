import dayjs from 'dayjs';
import { YearPickerInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import dayjs from 'dayjs';
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <YearPickerInput
      label="With presets"
      placeholder="Select year"
      presets={[
        { value: dayjs().startOf('year').format('YYYY-MM-DD'), label: 'This year' },
        { value: dayjs().add(1, 'year').startOf('year').format('YYYY-MM-DD'), label: 'Next year' },
        { value: dayjs().subtract(1, 'year').startOf('year').format('YYYY-MM-DD'), label: 'Last year' },
        { value: dayjs().add(5, 'year').startOf('year').format('YYYY-MM-DD'), label: 'In 5 years' },
        { value: dayjs().subtract(5, 'year').startOf('year').format('YYYY-MM-DD'), label: '5 years ago' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <YearPickerInput
      label="With presets"
      placeholder="Select year"
      presets={[
        { value: dayjs().startOf('year').format('YYYY-MM-DD'), label: 'This year' },
        {
          value: dayjs().add(1, 'year').startOf('year').format('YYYY-MM-DD'),
          label: 'Next year',
        },
        {
          value: dayjs().subtract(1, 'year').startOf('year').format('YYYY-MM-DD'),
          label: 'Last year',
        },
        {
          value: dayjs().add(5, 'year').startOf('year').format('YYYY-MM-DD'),
          label: 'In 5 years',
        },
        {
          value: dayjs().subtract(5, 'year').startOf('year').format('YYYY-MM-DD'),
          label: '5 years ago',
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
