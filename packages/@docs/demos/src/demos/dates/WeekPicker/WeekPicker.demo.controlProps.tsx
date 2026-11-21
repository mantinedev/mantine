import dayjs from 'dayjs';
import { WeekPicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import dayjs from 'dayjs';
import { WeekPicker } from '@mantine/dates';

function Demo() {
  return (
    <WeekPicker
      getDayProps={(date) => {
        if (dayjs(date).day() === 5) {
          return { style: { color: 'var(--mantine-color-blue-filled)', fontWeight: 700 } };
        }
        return {};
      }}
      getMonthControlProps={(date) => (dayjs(date).month() === 1 ? { disabled: true } : {})}
      getYearControlProps={(date) => (dayjs(date).year() === 2028 ? { disabled: true } : {})}
    />
  );
}
`;

function Demo() {
  return (
    <WeekPicker
      getDayProps={(date) => {
        if (dayjs(date).day() === 5) {
          return { style: { color: 'var(--mantine-color-blue-filled)', fontWeight: 700 } };
        }
        return {};
      }}
      getMonthControlProps={(date) => (dayjs(date).month() === 1 ? { disabled: true } : {})}
      getYearControlProps={(date) => (dayjs(date).year() === 2028 ? { disabled: true } : {})}
    />
  );
}

export const controlProps: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
