import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import { DateFormatter, getWeekFormatter, WeekPickerInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

dayjs.extend(isoWeek);

const code = `
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import { DateFormatter, getWeekFormatter, WeekPickerInput } from '@mantine/dates';

dayjs.extend(isoWeek);

const formatter: DateFormatter = (input) => {
  if (input.type === 'default' && typeof input.date === 'string') {
    return \`Week \${dayjs(input.date).isoWeek()}: \${getWeekFormatter(1)(input)}\`;
  }
  return getWeekFormatter(1)(input);
};

function Demo() {
  return (
    <WeekPickerInput
      valueFormat="MMM D"
      valueFormatter={formatter}
      label="Pick week"
      placeholder="Pick week"
    />
  );
}
`;

const formatter: DateFormatter = (input) => {
  if (input.type === 'default' && typeof input.date === 'string') {
    return `Week ${dayjs(input.date).isoWeek()}: ${getWeekFormatter(1)(input)}`;
  }
  return getWeekFormatter(1)(input);
};

function Demo() {
  return (
    <WeekPickerInput
      valueFormat="MMM D"
      valueFormatter={formatter}
      label="Pick week"
      placeholder="Pick week"
    />
  );
}

export const weekNumberFormatter: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
