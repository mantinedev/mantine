import { getTimeRange, TimeGrid } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { getTimeRange, TimeGrid } from '@mantine/dates';

function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '09:00', endTime: '12:00', interval: '01:00' })}
      defaultValue="11:00"
      allowDeselect
    />
  );
}
`;

function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '09:00', endTime: '14:00', interval: '01:00' })}
      defaultValue="11:00"
      allowDeselect
    />
  );
}

export const allowDeselect: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 360,
};
