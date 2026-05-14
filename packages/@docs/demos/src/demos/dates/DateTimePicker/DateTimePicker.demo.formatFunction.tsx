import dayjs from 'dayjs';
import { DateTimePicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import dayjs from 'dayjs';
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      valueFormat={(date) => dayjs(date).format('dddd, MMMM D [at] h:mm A')}
      defaultValue="2024-04-11 14:45:00"
      label="Pick date and time"
      placeholder="Pick date and time"
    />
  );
}
`;

function Demo() {
  return (
    <DateTimePicker
      valueFormat={(date) => dayjs(date).format('dddd, MMMM D [at] h:mm A')}
      defaultValue="2024-04-11 14:45:00"
      label="Pick date and time"
      placeholder="Pick date and time"
    />
  );
}

export const formatFunction: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
