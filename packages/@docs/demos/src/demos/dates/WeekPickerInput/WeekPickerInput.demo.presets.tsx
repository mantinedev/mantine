import dayjs from 'dayjs';
import { WeekPickerInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import dayjs from 'dayjs';
import { WeekPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <WeekPickerInput
      label="Pick week"
      placeholder="Pick week"
      presets={[
        { value: dayjs().format('YYYY-MM-DD'), label: 'This week' },
        { value: dayjs().add(1, 'week').format('YYYY-MM-DD'), label: 'Next week' },
        { value: dayjs().subtract(1, 'week').format('YYYY-MM-DD'), label: 'Last week' },
        { value: dayjs().add(4, 'week').format('YYYY-MM-DD'), label: 'In a month' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <WeekPickerInput
      label="Pick week"
      placeholder="Pick week"
      presets={[
        { value: dayjs().format('YYYY-MM-DD'), label: 'This week' },
        { value: dayjs().add(1, 'week').format('YYYY-MM-DD'), label: 'Next week' },
        { value: dayjs().subtract(1, 'week').format('YYYY-MM-DD'), label: 'Last week' },
        { value: dayjs().add(4, 'week').format('YYYY-MM-DD'), label: 'In a month' },
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
