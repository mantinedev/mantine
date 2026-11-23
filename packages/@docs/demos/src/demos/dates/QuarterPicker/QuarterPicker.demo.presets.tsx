import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import { QuarterPicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

dayjs.extend(quarterOfYear);

const code = `
import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import { QuarterPicker } from '@mantine/dates';

dayjs.extend(quarterOfYear);

function Demo() {
  return (
    <QuarterPicker
      presets={[
        { value: dayjs().startOf('quarter').format('YYYY-MM-DD'), label: 'This quarter' },
        { value: dayjs().add(1, 'quarter').startOf('quarter').format('YYYY-MM-DD'), label: 'Next quarter' },
        { value: dayjs().subtract(1, 'quarter').startOf('quarter').format('YYYY-MM-DD'), label: 'Last quarter' },
        { value: dayjs().add(1, 'year').startOf('year').format('YYYY-MM-DD'), label: 'Q1 next year' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <QuarterPicker
      presets={[
        { value: dayjs().startOf('quarter').format('YYYY-MM-DD'), label: 'This quarter' },
        {
          value: dayjs().add(1, 'quarter').startOf('quarter').format('YYYY-MM-DD'),
          label: 'Next quarter',
        },
        {
          value: dayjs().subtract(1, 'quarter').startOf('quarter').format('YYYY-MM-DD'),
          label: 'Last quarter',
        },
        {
          value: dayjs().add(1, 'year').startOf('year').format('YYYY-MM-DD'),
          label: 'Q1 next year',
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
