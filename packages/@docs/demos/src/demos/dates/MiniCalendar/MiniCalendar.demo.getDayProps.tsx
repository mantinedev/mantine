import dayjs from 'dayjs';
import { MiniCalendar } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import dayjs from 'dayjs';
import { MiniCalendar } from '@mantine/dates';

function Demo() {
  return (
    <MiniCalendar
      numberOfDays={6}
      getDayProps={(date) => ({
        style: {
          color: [0, 6].includes(dayjs(date).day()) ? 'var(--mantine-color-red-8)' : undefined,
        },
      })}
    />
  );
}
`;

function Demo() {
  return (
    <MiniCalendar
      numberOfDays={6}
      getDayProps={(date) => ({
        style: {
          color: [0, 6].includes(dayjs(date).day()) ? 'var(--mantine-color-red-8)' : undefined,
        },
      })}
    />
  );
}

export const getDayProps: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
