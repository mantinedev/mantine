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
      minDate={dayjs().subtract(2, 'week').format('YYYY-MM-DD')}
      maxDate={dayjs().add(2, 'week').format('YYYY-MM-DD')}
    />
  );
}
`;

function Demo() {
  return (
    <WeekPickerInput
      label="Pick week"
      placeholder="Pick week"
      minDate={dayjs().subtract(2, 'week').format('YYYY-MM-DD')}
      maxDate={dayjs().add(2, 'week').format('YYYY-MM-DD')}
    />
  );
}

export const minMax: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
