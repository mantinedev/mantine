import dayjs from 'dayjs';
import { QuarterPicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import dayjs from 'dayjs';
import { QuarterPicker } from '@mantine/dates';

function Demo() {
  return (
    <QuarterPicker
      getYearControlProps={(date) => {
        if (dayjs(date).year() === new Date().getFullYear()) {
          return { style: { color: 'var(--mantine-color-blue-filled)', fontWeight: 700 } };
        }
        if (dayjs(date).year() === new Date().getFullYear() + 1) {
          return { disabled: true };
        }
        return {};
      }}
      getQuarterControlProps={(date) => {
        if (dayjs(date).month() === 3) {
          return { style: { color: 'var(--mantine-color-blue-filled)', fontWeight: 700 } };
        }
        if (dayjs(date).month() === 9) {
          return { disabled: true };
        }
        return {};
      }}
    />
  );
}
`;

function Demo() {
  return (
    <QuarterPicker
      getYearControlProps={(date) => {
        if (dayjs(date).year() === new Date().getFullYear()) {
          return { style: { color: 'var(--mantine-color-blue-filled)', fontWeight: 700 } };
        }
        if (dayjs(date).year() === new Date().getFullYear() + 1) {
          return { disabled: true };
        }
        return {};
      }}
      getQuarterControlProps={(date) => {
        if (dayjs(date).month() === 3) {
          return { style: { color: 'var(--mantine-color-blue-filled)', fontWeight: 700 } };
        }
        if (dayjs(date).month() === 9) {
          return { disabled: true };
        }
        return {};
      }}
    />
  );
}

export const controlProps: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
