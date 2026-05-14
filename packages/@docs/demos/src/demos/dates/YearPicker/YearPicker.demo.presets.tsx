import dayjs from 'dayjs';
import { YearPicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import dayjs from 'dayjs';
import { YearPicker } from '@mantine/dates';

function Demo() {
  return (
    <YearPicker
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
    <YearPicker
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
  component: Demo,
  code,
};
