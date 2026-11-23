import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import { QuarterPickerInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

dayjs.extend(quarterOfYear);

const code = `
import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import { QuarterPickerInput } from '@mantine/dates';

dayjs.extend(quarterOfYear);

function Demo() {
  return (
    <QuarterPickerInput
      type="range"
      label="Pick quarters range"
      placeholder="Pick quarters range"
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
  return (
    <QuarterPickerInput
      type="range"
      label="Pick quarters range"
      placeholder="Pick quarters range"
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
  maxWidth: 400,
  component: Demo,
  code,
  defaultExpanded: false,
};
