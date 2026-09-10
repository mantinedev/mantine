import dayjs from 'dayjs';
import { WeekPicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import dayjs from 'dayjs';
import { WeekPicker } from '@mantine/dates';

function Demo() {
  return (
    <WeekPicker
      getWeekControlProps={(weekStart) => ({
        'aria-label': \`Select week starting on \${dayjs(weekStart).format('D MMMM')}\`,
        disabled: dayjs(weekStart).day(5).isBefore(dayjs(), 'day'),
      })}
    />
  );
}
`;

function Demo() {
  return (
    <WeekPicker
      getWeekControlProps={(weekStart) => ({
        'aria-label': `Select week starting on ${dayjs(weekStart).format('D MMMM')}`,
        disabled: dayjs(weekStart).day(5).isBefore(dayjs(), 'day'),
      })}
    />
  );
}

export const weekControlProps: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
