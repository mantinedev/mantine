import dayjs from 'dayjs';
import { WeekPickerInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import dayjs from 'dayjs';
import { WeekPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <WeekPickerInput
      type="range"
      label="Pick weeks range"
      placeholder="Pick weeks range"
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
  return (
    <WeekPickerInput
      type="range"
      label="Pick weeks range"
      placeholder="Pick weeks range"
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
  maxWidth: 400,
  component: Demo,
  code,
  defaultExpanded: false,
};
