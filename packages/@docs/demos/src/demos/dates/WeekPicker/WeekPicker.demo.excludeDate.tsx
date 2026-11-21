import dayjs from 'dayjs';
import { WeekPicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import dayjs from 'dayjs';
import { WeekPicker } from '@mantine/dates';

function Demo() {
  return <WeekPicker excludeDate={(date) => dayjs(date).day() === 0 || dayjs(date).day() === 6} />;
}
`;

function Demo() {
  return <WeekPicker excludeDate={(date) => dayjs(date).day() === 0 || dayjs(date).day() === 6} />;
}

export const excludeDate: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
